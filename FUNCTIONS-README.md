# aiAnalyze Cloud Function (optional, advanced)

Only needed if you choose **Cloud Function** in Settings → Integrations → AI provider.
Requires the Firebase **Blaze** plan and the Firebase CLI.

    firebase functions:secrets:set XAI_API_KEY         # paste the key at the prompt (NOT in the website)
    firebase functions:secrets:set GEMINI_API_KEY   # also run this for GEMINI_API_KEY and OPENAI_API_KEY (any value), because all three secrets are declared
    npm install
    firebase deploy --only functions

Default is xAI Grok. Set `AI_PROVIDER=openai` or `gemini` (.env) to switch. Your admin account must have the `role: "admin"` custom claim.
In the website, Function name must be `aiAnalyze`. Never paste an API key into Function name or Label.
