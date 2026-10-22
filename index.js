// Optional, more secure AI backend: the API key stays on the server as a Firebase secret.
// Deploy:  firebase functions:secrets:set GEMINI_API_KEY   (or OPENAI_API_KEY)
//          firebase deploy --only functions
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");
const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
const XAI_API_KEY = defineSecret("XAI_API_KEY");

const SYSTEM = `You are a senior Google Ads analyst writing for a PPC consultant. Reply with ONE JSON object only with keys:
executiveSummary (string), improved [{text,basis}], deteriorated [{text,basis}], potentialCauses [{text}], investigate [{text,basis}],
recommendations [{title,supportingData,reason,expectedBenefit,priority High|Medium|Low,confidence High|Medium|Low,needsMoreData,dataNeeded,reviewDate YYYY-MM-DD}],
risks [string], clientExplanation (plain, friendly), dataSufficiency {sufficient,notes}. Follow the rules array in the input strictly.`;

exports.aiAnalyze = onCall({ secrets: [GEMINI_API_KEY, OPENAI_API_KEY, XAI_API_KEY], timeoutSeconds: 120, region: "us-central1" }, async (req) => {
  if (!req.auth || req.auth.token.role !== "admin") throw new HttpsError("permission-denied", "Admins only.");
  const input = req.data && req.data.input;
  if (!input) throw new HttpsError("invalid-argument", "Missing input.");
  const user = "Analyse this account data and return the JSON object.\n\n" + JSON.stringify(input);
  const prov = process.env.AI_PROVIDER || "xai";
  const useOpenAI = prov === "openai" || prov === "xai";
  let text, model;
  if (!useOpenAI) {
    model = process.env.AI_MODEL || "gemini-2.5-flash";
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": GEMINI_API_KEY.value() },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: SYSTEM }] }, contents: [{ role: "user", parts: [{ text: user }] }], generationConfig: { responseMimeType: "application/json", temperature: 0.2 } })
    });
    const d = await r.json();
    if (!r.ok) throw new HttpsError("internal", d.error?.message || "Gemini error");
    text = (d.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("");
  } else {
    model = process.env.AI_MODEL || (prov === "xai" ? "grok-4" : "gpt-4o-mini");
    const r = await fetch(prov === "xai" ? "https://api.x.ai/v1/chat/completions" : "https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${(prov === "xai" ? XAI_API_KEY : OPENAI_API_KEY).value()}` },
      body: JSON.stringify({ model, temperature: 0.2, response_format: { type: "json_object" }, messages: [{ role: "system", content: SYSTEM }, { role: "user", content: user }] })
    });
    const d = await r.json();
    if (!r.ok) throw new HttpsError("internal", d.error?.message || "OpenAI error");
    text = d.choices?.[0]?.message?.content || "";
  }
  let output;
  try { output = JSON.parse(text); } catch { throw new HttpsError("internal", "AI did not return JSON."); }
  return { output, provider: prov === "xai" ? "xAI Grok" : useOpenAI ? "OpenAI" : "Gemini", model };
});
