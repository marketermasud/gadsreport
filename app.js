(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };

  // js/icons.js
  function icon(name2, cls = "") {
    return `<svg class="${cls}" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name2] || P.info}</svg>`;
  }
  var P;
  var init_icons = __esm({
    "js/icons.js"() {
      P = {
        dashboard: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
        clients: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        audit: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
        chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
        log: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>',
        ai: '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
        report: '<path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M14 2v6h6"/><path d="M8 18v-3M12 18v-6M16 18v-4"/>',
        portal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6.5" cy="6.5" r=".6"/><circle cx="9" cy="6.5" r=".6"/>',
        settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
        firebase: '<path d="M4 18L7 3l4 7"/><path d="M4 18l8 4 8-4-2-12-4 4"/><path d="M4 18l7-8 3 2"/>',
        plus: '<path d="M12 5v14M5 12h14"/>',
        upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>',
        download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
        edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
        trash: '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
        archive: '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
        x: '<path d="M18 6L6 18M6 6l12 12"/>',
        menu: '<path d="M3 12h18M3 6h18M3 18h18"/>',
        chevronLeft: '<path d="M15 18l-6-6 6-6"/>',
        search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
        lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
        link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
        eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
        printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
        info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
        alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
        check: '<path d="M20 6L9 17l-5-5"/>',
        logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
        refresh: '<path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
        calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
        file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
        history: '<path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/>'
      };
    }
  });

  // js/utils.js
  function esc(value) {
    if (value === null || value === void 0) return "";
    return String(value).replace(/[&<>"']/g, (c) => ESC[c]);
  }
  function uid(prefix = "id") {
    const bytes = new Uint8Array(10);
    crypto.getRandomValues(bytes);
    const s = Array.from(bytes, (b) => (b % 36).toString(36)).join("");
    return `${prefix}_${s}`;
  }
  function randomToken(bytes = 32) {
    const a = new Uint8Array(bytes);
    crypto.getRandomValues(a);
    return Array.from(a, (b) => b.toString(16).padStart(2, "0")).join("");
  }
  async function sha256Hex(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
  }
  function qs(name2) {
    return new URLSearchParams(location.search).get(name2);
  }
  function setQs(params, replace = true) {
    const url = new URL(location.href);
    Object.entries(params).forEach(([k, v]) => {
      if (v === null || v === void 0 || v === "") url.searchParams.delete(k);
      else url.searchParams.set(k, v);
    });
    (replace ? history.replaceState : history.pushState).call(history, null, "", url);
  }
  function debounce(fn, ms = 250) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }
  function initials(name2 = "") {
    const parts = String(name2).trim().split(/\s+/).filter((p) => /^[\p{L}\p{N}]/u.test(p));
    return (parts[0]?.[0] || "?").toUpperCase() + (parts[1]?.[0] || "").toUpperCase();
  }
  function downloadBlob(content, filename, type = "text/plain") {
    const blob = content instanceof Blob ? content : new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4e3);
  }
  var ESC, $, $$, nowIso, clone, isNum;
  var init_utils = __esm({
    "js/utils.js"() {
      ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      $ = (sel, root4 = document) => root4.querySelector(sel);
      $$ = (sel, root4 = document) => Array.from(root4.querySelectorAll(sel));
      nowIso = () => (/* @__PURE__ */ new Date()).toISOString();
      clone = (o) => o === void 0 ? void 0 : JSON.parse(JSON.stringify(o));
      isNum = (v) => typeof v === "number" && Number.isFinite(v);
    }
  });

  // js/local-adapter.js
  function empty() {
    const db = { version: 1, settings: null };
    COLLS.forEach((c) => db[c] = c === "portalProfiles" ? {} : []);
    return db;
  }
  function load() {
    if (cache) return cache;
    try {
      cache = JSON.parse(localStorage.getItem(KEY) || "null") || empty();
    } catch {
      cache = empty();
    }
    COLLS.forEach((c) => {
      if (!cache[c]) cache[c] = c === "portalProfiles" ? {} : [];
    });
    return cache;
  }
  function persist() {
    try {
      localStorage.setItem(KEY, JSON.stringify(cache));
    } catch (e) {
      cache = null;
      if (e && (e.name === "QuotaExceededError" || e.code === 22)) {
        throw new Error("Browser storage is full \u2014 the change was NOT saved. Export or delete old data, or connect Firebase.");
      }
      throw new Error(`The change was NOT saved: ${e.message}`);
    }
  }
  function upsert(arr, rec) {
    const i = arr.findIndex((r) => r.id === rec.id);
    if (i >= 0) arr[i] = rec;
    else arr.push(rec);
  }
  var KEY, COLLS, cache, tick, localAdapter;
  var init_local_adapter = __esm({
    "js/local-adapter.js"() {
      init_utils();
      KEY = "mppc.db.v1";
      COLLS = ["clients", "portalProfiles", "baselines", "dailyMetrics", "optimizationLogs", "aiAnalyses", "reports", "reportSnapshots", "importHistory", "auditLogs", "users", "shareTokens"];
      cache = null;
      tick = () => new Promise((r) => setTimeout(r, 0));
      localAdapter = {
        name: "local",
        hasData() {
          return load().clients.length > 0;
        },
        isSeeded() {
          return !!load().seededDemo;
        },
        exportAll() {
          return clone(load());
        },
        importAll(data) {
          cache = { ...empty(), ...clone(data) };
          persist();
        },
        wipe() {
          localStorage.removeItem(KEY);
          cache = null;
        },
        markSeeded() {
          load().seededDemo = true;
          persist();
        },
        async ping() {
          await tick();
          return true;
        },
        // ---------- clients ----------
        async listClients() {
          await tick();
          return clone(load().clients);
        },
        async getClient(id) {
          await tick();
          return clone(load().clients.find((c) => c.id === id) || null);
        },
        async putClient(client) {
          await tick();
          upsert(load().clients, clone(client));
          persist();
          return client;
        },
        async getPortalProfile(clientId) {
          await tick();
          return clone(load().portalProfiles[clientId] || null);
        },
        async putPortalProfile(clientId, profile) {
          await tick();
          load().portalProfiles[clientId] = clone(profile);
          persist();
        },
        // ---------- client-scoped ----------
        async list(coll, clientId, opts = {}) {
          await tick();
          let rows = load()[coll].filter((r) => r.clientId === clientId);
          if (opts.from) rows = rows.filter((r) => r.date >= opts.from);
          if (opts.to) rows = rows.filter((r) => r.date <= opts.to);
          if (opts.publishedOnly) rows = rows.filter((r) => r.published === true);
          return clone(rows);
        },
        async listAcross(coll, opts = {}) {
          await tick();
          let rows = load()[coll];
          if (opts.from) rows = rows.filter((r) => r.date >= opts.from);
          if (opts.to) rows = rows.filter((r) => r.date <= opts.to);
          return clone(rows);
        },
        async get(coll, clientId, id) {
          await tick();
          return clone(load()[coll].find((r) => r.id === id && r.clientId === clientId) || null);
        },
        async put(coll, clientId, rec) {
          await tick();
          upsert(load()[coll], clone({ ...rec, clientId }));
          persist();
          return rec;
        },
        async putMany(coll, clientId, recs) {
          await tick();
          const arr = load()[coll];
          const index = new Map(arr.map((r, i) => [r.id, i]));
          recs.forEach((r) => {
            const rec = clone({ ...r, clientId });
            if (index.has(rec.id)) arr[index.get(rec.id)] = rec;
            else {
              index.set(rec.id, arr.length);
              arr.push(rec);
            }
          });
          persist();
          return recs.length;
        },
        async remove(coll, clientId, id) {
          await tick();
          const db = load();
          db[coll] = db[coll].filter((r) => !(r.id === id && r.clientId === clientId));
          persist();
        },
        // ---------- settings / users / audit ----------
        async getSettings() {
          await tick();
          return clone(load().settings);
        },
        async putSettings(s) {
          await tick();
          load().settings = clone(s);
          persist();
        },
        async listUsers() {
          await tick();
          return clone(load().users);
        },
        async putUser(u) {
          await tick();
          upsert(load().users, clone(u));
          persist();
          return u;
        },
        async addAuditLog(entry) {
          const db = load();
          db.auditLogs.push(entry);
          if (db.auditLogs.length > 1e3) db.auditLogs = db.auditLogs.slice(-1e3);
          try {
            persist();
          } catch (e) {
            console.warn("Audit log not saved", e);
          }
        },
        async listAuditLogs(limit = 50) {
          await tick();
          return clone(load().auditLogs.slice().sort((a, b) => a.at < b.at ? 1 : -1).slice(0, limit));
        },
        // ---------- simulated share tokens (demo of the server-side design) ----------
        async listShareTokens(clientId) {
          await tick();
          return clone(load().shareTokens.filter((t) => t.clientId === clientId));
        },
        async putShareToken(t) {
          await tick();
          upsert(load().shareTokens, clone(t));
          persist();
        },
        async findShareToken(hash) {
          await tick();
          return clone(load().shareTokens.find((t) => t.id === hash) || null);
        }
      };
    }
  });

  // js/firebase/firebase-config.js
  function validateConfig(cfg) {
    const missing = REQUIRED_KEYS.filter((k) => isPlaceholder(cfg?.[k]));
    const errors = missing.map((k) => `"${k}" is missing or still a placeholder.`);
    if (cfg?.authDomain && !isPlaceholder(cfg.authDomain) && !/\./.test(cfg.authDomain)) errors.push('"authDomain" should look like your-project.firebaseapp.com');
    if (cfg?.apiKey && !isPlaceholder(cfg.apiKey) && cfg.apiKey.length < 20) errors.push('"apiKey" looks too short.');
    return { valid: errors.length === 0, errors, missing };
  }
  function loadFirebaseConfig() {
    if (validateConfig(FIREBASE_CONFIG).valid) return { config: { ...FIREBASE_CONFIG }, source: "file" };
    try {
      const stored = JSON.parse(localStorage.getItem(LS_KEY) || "null");
      if (stored && validateConfig(stored).valid) return { config: stored, source: "browser" };
    } catch {
    }
    return { config: null, source: null };
  }
  function saveBrowserConfig(cfg) {
    const clean2 = {};
    REQUIRED_KEYS.forEach((k) => clean2[k] = String(cfg[k] || "").trim());
    localStorage.setItem(LS_KEY, JSON.stringify(clean2));
    return clean2;
  }
  function clearBrowserConfig() {
    localStorage.removeItem(LS_KEY);
  }
  function getBrowserConfigDraft() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || "null");
    } catch {
      return null;
    }
  }
  var FIREBASE_CONFIG, FUNCTIONS_REGION, USE_STORAGE, FIREBASE_SDK_VERSION, REQUIRED_KEYS, LS_KEY, isPlaceholder;
  var init_firebase_config = __esm({
    "js/firebase/firebase-config.js"() {
      FIREBASE_CONFIG = typeof window !== "undefined" && window.MASUD_FIREBASE_CONFIG || {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
      };
      FUNCTIONS_REGION = "us-central1";
      USE_STORAGE = false;
      FIREBASE_SDK_VERSION = "10.12.2";
      REQUIRED_KEYS = ["apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId", "appId"];
      LS_KEY = "mppc.firebaseConfig";
      isPlaceholder = (v) => !v || /^YOUR_/.test(String(v)) || /YOUR_PROJECT_ID/.test(String(v));
    }
  });

  // js/firebase/firebase-init.js
  var firebase_init_exports = {};
  __export(firebase_init_exports, {
    callFunction: () => callFunction,
    initFirebase: () => initFirebase
  });
  function initFirebase() {
    if (initPromise) return initPromise;
    initPromise = (async () => {
      const { config } = loadFirebaseConfig();
      if (!config) throw new Error("Firebase is not configured. Open Firebase Setup to add your project configuration.");
      let appMod, authMod, fsMod, fnMod, stMod;
      try {
        [appMod, authMod, fsMod, fnMod] = await Promise.all([
          import(`${CDN}/firebase-app.js`),
          import(`${CDN}/firebase-auth.js`),
          import(`${CDN}/firebase-firestore.js`),
          import(`${CDN}/firebase-functions.js`)
        ]);
        if (USE_STORAGE) stMod = await import(`${CDN}/firebase-storage.js`);
      } catch (e) {
        throw new Error(`Could not download the Firebase SDK from ${CDN}. Check your internet connection or content blockers. (${e.message})`);
      }
      try {
        const app = appMod.getApps().length ? appMod.getApp() : appMod.initializeApp(config);
        const auth = authMod.getAuth(app);
        await authMod.setPersistence(auth, authMod.browserLocalPersistence);
        const db = fsMod.getFirestore(app);
        const functions = fnMod.getFunctions(app, FUNCTIONS_REGION);
        const storage = stMod ? stMod.getStorage(app) : null;
        return { app, auth, db, functions, storage, sdk: { app: appMod, auth: authMod, fs: fsMod, fn: fnMod, st: stMod } };
      } catch (e) {
        throw new Error(`Firebase initialization failed: ${e.message}`);
      }
    })();
    initPromise.catch(() => {
      initPromise = null;
    });
    return initPromise;
  }
  async function callFunction(name2, data) {
    const fb2 = await initFirebase();
    const fn = fb2.sdk.fn.httpsCallable(fb2.functions, name2);
    const res = await fn(data);
    return res.data;
  }
  var CDN, initPromise;
  var init_firebase_init = __esm({
    "js/firebase/firebase-init.js"() {
      init_firebase_config();
      CDN = `https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}`;
      initPromise = null;
    }
  });

  // js/firebase/firestore-service.js
  var firestore_service_exports = {};
  __export(firestore_service_exports, {
    firestoreAdapter: () => firestoreAdapter
  });
  function readable(e, action) {
    const code = e?.code || "";
    if (code === "permission-denied") return new Error(`Permission denied while trying to ${action}. Your account is not authorised for this data (security rules).`);
    if (code === "unavailable") return new Error(`Firestore is unreachable while trying to ${action}. Check your connection and try again.`);
    if (code === "failed-precondition" && /index/i.test(e.message)) return new Error(`Firestore needs an index to ${action}. Deploy firestore.indexes.json (firebase deploy --only firestore:indexes). ${e.message}`);
    return new Error(`Could not ${action}: ${e?.message || e}`);
  }
  function clean(obj) {
    return JSON.parse(JSON.stringify(obj, (k, v) => v === void 0 ? null : v));
  }
  async function ctx() {
    const fb2 = await initFirebase();
    const user = fb2.auth.currentUser;
    if (!user) throw new Error("Please sign in before accessing your workspace.");
    return { db: fb2.db, F: fb2.sdk.fs, uid: user.uid };
  }
  // Every signed-in account gets a completely separate workspace. The app's
  // features remain the same; only the data root changes by Firebase UID.
  function workspaceRef(F, db, uid, ...parts) {
    if (!uid) throw new Error("A signed-in account is required.");
    return F.doc(db, "workspaces", uid, "meta", "root");
  }
  function workspaceCollection(F, db, uid, ...parts) {
    if (!uid) throw new Error("A signed-in account is required.");
    return F.collection(db, "workspaces", uid, ...parts);
  }
  function subRef(F, db, uid, coll, clientId) {
    if (!SUB.has(coll)) throw new Error(`Unknown collection "${coll}"`);
    if (!clientId) throw new Error(`clientId is required for ${coll}`);
    return workspaceCollection(F, db, uid, "clients", clientId, coll);
  }
  var SUB, BATCH_LIMIT, firestoreAdapter;
  var init_firestore_service = __esm({
    "js/firebase/firestore-service.js"() {
      init_firebase_init();
      SUB = /* @__PURE__ */ new Set(["baselines", "dailyMetrics", "optimizationLogs", "aiAnalyses", "reports", "reportSnapshots", "importHistory"]);
      BATCH_LIMIT = 450;
      firestoreAdapter = {
        name: "firebase",
        async ping() {
          const { db, F, uid } = await ctx();
          try {
            await F.getDoc(F.doc(db, "settings", "app"));
            return true;
          } catch (e) {
            throw readable(e, "read the settings document");
          }
        },
        // ---------- clients ----------
        async listClients() {
          const { db, F, uid } = await ctx();
          try {
            const snap = await F.getDocs(workspaceCollection(F, db, uid, "clients"));
            return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          } catch (e) {
            throw readable(e, "load clients");
          }
        },
        async getClient(id) {
          const { db, F, uid } = await ctx();
          try {
            const d = await F.getDoc(F.doc(db, "workspaces", uid, "clients", id));
            return d.exists() ? { id: d.id, ...d.data() } : null;
          } catch (e) {
            throw readable(e, "load the client");
          }
        },
        async putClient(client) {
          const { db, F, uid } = await ctx();
          try {
            await F.setDoc(F.doc(db, "workspaces", uid, "clients", client.id), clean(client));
            return client;
          } catch (e) {
            throw readable(e, "save the client");
          }
        },
        async getPortalProfile(clientId) {
          const { db, F, uid } = await ctx();
          try {
            const d = await F.getDoc(F.doc(db, "workspaces", uid, "clients", clientId, "portal", "profile"));
            return d.exists() ? d.data() : null;
          } catch (e) {
            throw readable(e, "load the portal profile");
          }
        },
        async putPortalProfile(clientId, profile) {
          const { db, F, uid } = await ctx();
          try {
            await F.setDoc(F.doc(db, "workspaces", uid, "clients", clientId, "portal", "profile"), clean(profile));
          } catch (e) {
            throw readable(e, "save portal settings");
          }
        },
        // ---------- client-scoped records ----------
        async list(coll, clientId, opts = {}) {
          const { db, F, uid } = await ctx();
          try {
            const cons = [];
            if (opts.from) cons.push(F.where("date", ">=", opts.from));
            if (opts.to) cons.push(F.where("date", "<=", opts.to));
            if (opts.publishedOnly) cons.push(F.where("published", "==", true));
            const snap = await F.getDocs(F.query(subRef(F, db, uid, coll, clientId), ...cons));
            return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          } catch (e) {
            throw readable(e, `load ${coll}`);
          }
        },
        async listAcross(coll, opts = {}) {
          const { db, F, uid } = await ctx();
          try {
            const cons = [];
            if (opts.from) cons.push(F.where("date", ">=", opts.from));
            if (opts.to) cons.push(F.where("date", "<=", opts.to));
            const clients = await F.getDocs(workspaceCollection(F, db, uid, "clients"));
            const parts = await Promise.all(clients.docs.map(async (c) => {
              const snap = await F.getDocs(F.query(workspaceCollection(F, db, uid, "clients", c.id, coll), ...cons));
              return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
            }));
            return parts.flat();
          } catch (e) {
            throw readable(e, `load ${coll} across clients`);
          }
        },
        async get(coll, clientId, id) {
          const { db, F, uid } = await ctx();
          try {
            const d = await F.getDoc(F.doc(subRef(F, db, uid, coll, clientId), id));
            return d.exists() ? { id: d.id, ...d.data() } : null;
          } catch (e) {
            throw readable(e, `load a ${coll} record`);
          }
        },
        async put(coll, clientId, rec) {
          const { db, F, uid } = await ctx();
          try {
            await F.setDoc(F.doc(subRef(F, db, uid, coll, clientId), rec.id), clean({ ...rec, clientId }));
            return rec;
          } catch (e) {
            throw readable(e, `save a ${coll} record`);
          }
        },
        async putMany(coll, clientId, recs) {
          const { db, F, uid } = await ctx();
          try {
            for (let i = 0; i < recs.length; i += BATCH_LIMIT) {
              const batch = F.writeBatch(db);
              recs.slice(i, i + BATCH_LIMIT).forEach((r) => batch.set(F.doc(subRef(F, db, uid, coll, clientId), r.id), clean({ ...r, clientId })));
              await batch.commit();
            }
            return recs.length;
          } catch (e) {
            throw readable(e, `save ${coll} records`);
          }
        },
        async remove(coll, clientId, id) {
          const { db, F, uid } = await ctx();
          try {
            await F.deleteDoc(F.doc(subRef(F, db, uid, coll, clientId), id));
          } catch (e) {
            throw readable(e, `delete a ${coll} record`);
          }
        },
        // ---------- settings / users / audit ----------
        async getSettings() {
          const { db, F, uid } = await ctx();
          try {
            const d = await F.getDoc(F.doc(db, "settings", "app"));
            return d.exists() ? d.data() : null;
          } catch (e) {
            throw readable(e, "load settings");
          }
        },
        async putSettings(s) {
          const { db, F, uid } = await ctx();
          try {
            await F.setDoc(F.doc(db, "settings", "app"), clean(s));
          } catch (e) {
            throw readable(e, "save settings");
          }
        },
        async listUsers() {
          const { db, F, uid } = await ctx();
          try {
            const s = await F.getDocs(workspaceCollection(F, db, uid, "users"));
            return s.docs.map((d) => ({ id: d.id, ...d.data() }));
          } catch (e) {
            throw readable(e, "load users");
          }
        },
        async putUser() {
          throw new Error("In Firebase mode, client logins are created by the setUserRole Cloud Function (see SETUP-GUIDE.md \xA76).");
        },
        async addAuditLog(entry) {
          const { db, F, uid } = await ctx();
          try {
            await F.setDoc(F.doc(db, "workspaces", uid, "auditLogs", entry.id), clean(entry));
          } catch (e) {
            console.warn("Audit log write failed", e);
          }
        },
        async listAuditLogs(limit = 50) {
          const { db, F, uid } = await ctx();
          try {
            const s = await F.getDocs(F.query(workspaceCollection(F, db, uid, "auditLogs"), F.orderBy("at", "desc"), F.limit(limit)));
            return s.docs.map((d) => ({ id: d.id, ...d.data() }));
          } catch (e) {
            throw readable(e, "load the audit log");
          }
        },
        // Share tokens are server-side only in Firebase mode (Cloud Functions).
        async listShareTokens() {
          return [];
        }
      };
    }
  });

  // js/state.js
  var state_exports = {};
  __export(state_exports, {
    DEFAULT_SECTIONS: () => DEFAULT_SECTIONS,
    DEFAULT_SETTINGS: () => DEFAULT_SETTINGS,
    SECTION_LABELS: () => SECTION_LABELS,
    adapter: () => adapter,
    getMode: () => getMode,
    getStatus: () => getStatus,
    localAdapter: () => localAdapter,
    mergeDeep: () => mergeDeep,
    onStatus: () => onStatus,
    portalProfileFrom: () => portalProfileFrom,
    setMode: () => setMode,
    setSessionForStore: () => setSessionForStore,
    store: () => store
  });
  function getMode() {
    const stored = localStorage.getItem(MODE_KEY);
    if (stored === "local" || stored === "firebase") return stored;
    return loadFirebaseConfig().config ? "firebase" : "local";
  }
  function setMode(mode) {
    localStorage.setItem(MODE_KEY, mode === "firebase" ? "firebase" : "local");
  }
  function setStatus(s) {
    status = s;
    statusListeners.forEach((fn) => fn(status));
  }
  function onStatus(fn) {
    statusListeners.add(fn);
    fn(status);
    return () => statusListeners.delete(fn);
  }
  async function resolveAdapter() {
    if (getMode() === "local") {
      setStatus({ state: "local", label: "Local Demo Mode", message: "Data is stored in this browser only." });
      return localAdapter;
    }
    const { config } = loadFirebaseConfig();
    if (!config) {
      setStatus({ state: "not-configured", label: "Firebase Not Configured", message: "Firebase mode is selected but no valid configuration was found." });
      throw new Error("Firebase mode is selected but Firebase is not configured. Open Firebase Setup, or switch back to Local Demo Mode.");
    }
    try {
      const { firestoreAdapter: firestoreAdapter2 } = await Promise.resolve().then(() => (init_firestore_service(), firestore_service_exports));
      const { initFirebase: initFirebase2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
      await initFirebase2();
      setStatus({ state: "connected", label: "Firebase Connected", message: `Project: ${config.projectId}` });
      return firestoreAdapter2;
    } catch (e) {
      setStatus({ state: "error", label: "Connection Error", message: e.message });
      throw e;
    }
  }
  function adapter() {
    if (!adapterPromise) {
      adapterPromise = resolveAdapter();
      adapterPromise.catch(() => {
        adapterPromise = null;
      });
    }
    return adapterPromise;
  }
  function portalProfileFrom(client) {
    const p = client.portal || {};
    return {
      clientId: client.id,
      clientName: client.clientName || "",
      businessName: client.businessName || "",
      website: client.website || "",
      industry: client.industry || "",
      country: client.country || "",
      timezone: client.timezone || "UTC",
      currency: client.currency || "USD",
      locations: client.locations || "",
      logo: client.logo || "",
      accessEnabled: !!p.accessEnabled && client.status !== "archived",
      allowPdf: p.allowPdf !== false,
      visibleSections: { ...DEFAULT_SECTIONS, ...p.visibleSections || {} },
      updatedAt: nowIso()
    };
  }
  function mergeDeep(target, src) {
    if (!src || typeof src !== "object") return target;
    for (const [k, v] of Object.entries(src)) {
      if (v && typeof v === "object" && !Array.isArray(v) && target[k] && typeof target[k] === "object" && !Array.isArray(target[k])) {
        target[k] = mergeDeep(target[k], v);
      } else if (v !== void 0) {
        target[k] = v;
      }
    }
    return target;
  }
  var MODE_KEY, DEFAULT_SECTIONS, SECTION_LABELS, DEFAULT_SETTINGS, adapterPromise, status, statusListeners, getStatus, currentSession, setSessionForStore, store;
  var init_state = __esm({
    "js/state.js"() {
      init_local_adapter();
      init_firebase_config();
      init_utils();
      MODE_KEY = "mppc.dataMode";
      DEFAULT_SECTIONS = {
        businessDetails: true,
        executiveSummary: true,
        kpis: true,
        charts: true,
        baselineComparison: true,
        previousComparison: true,
        trends: true,
        optimizations: true,
        keyFindings: true,
        challenges: true,
        actionPlan: true,
        aiInsights: false,
        dataSource: true
      };
      SECTION_LABELS = {
        businessDetails: "Client & business details",
        executiveSummary: "Executive summary",
        kpis: "KPI cards",
        charts: "Performance charts",
        baselineComparison: "Baseline comparison",
        previousComparison: "Previous-period comparison",
        trends: "Spend & conversion trends table",
        optimizations: "Optimization work completed",
        keyFindings: "Key findings",
        challenges: "Challenges & limitations",
        actionPlan: "Next-period action plan",
        aiInsights: "Approved AI insights",
        dataSource: "Data source & timestamp"
      };
      DEFAULT_SETTINGS = {
        appName: "Masud PPC \u2014 Google Ads Intelligence & Reporting",
        logo: "",
        theme: "light",
        defaultRange: "last30",
        defaultReportPeriod: "monthly",
        dateFormat: "D MMM YYYY",
        currencyDisplay: "symbol",
        report: {
          brandName: "Masud PPC",
          headerText: "Google Ads Performance Report",
          footerText: "Prepared by Masud PPC. Figures are taken from the Google Ads account and the client's own lead records.",
          defaultSections: { ...DEFAULT_SECTIONS },
          defaultComparison: "previous",
          pdfIncludeCharts: true,
          pdfFileNamePattern: "{client}-{type}-{end}"
        },
        scoring: {
          weights: { qualified: 35, cost: 25, cvr: 15, traffic: 15, tracking: 10 },
          minClicks: 100,
          minConversions: 5,
          minDays: 5,
          dailyMinClicks: 40,
          dailyMinConversions: 3,
          lagDays: 3,
          trackingReliableThreshold: 80,
          unreliableTrackingCap: 60,
          labels: [
            { min: 85, label: "Strong" },
            { min: 70, label: "Good" },
            { min: 50, label: "Needs Improvement" },
            { min: 0, label: "Poor" }
          ]
        },
        ai: { provider: "none", functionName: "aiAnalyze", providerLabel: "Gemini or OpenAI via Cloud Function" },
        googleAds: { status: "not-configured" }
      };
      adapterPromise = null;
      status = { state: "pending", label: "Connecting\u2026", message: "" };
      statusListeners = /* @__PURE__ */ new Set();
      getStatus = () => status;
      currentSession = null;
      setSessionForStore = (s) => {
        currentSession = s;
      };
      store = {
        async ready() {
          return adapter();
        },
        // clients
        async listClients({ includeArchived = true } = {}) {
          const a = await adapter();
          const rows = await a.listClients();
          rows.sort((x, y) => (x.businessName || "").localeCompare(y.businessName || ""));
          return includeArchived ? rows : rows.filter((c) => c.status !== "archived");
        },
        async getClient(id) {
          return (await adapter()).getClient(id);
        },
        async saveClient(client, { action = "client.save" } = {}) {
          const a = await adapter();
          const isNew = !client.id;
          const rec = clone(client);
          if (isNew) {
            rec.id = uid("cl");
            rec.createdAt = nowIso();
            rec.status = rec.status || "active";
          }
          rec.updatedAt = nowIso();
          (rec.campaigns || []).forEach((c) => {
            if (!c.id) c.id = uid("cmp");
          });
          await a.putClient(rec);
          await a.putPortalProfile(rec.id, portalProfileFrom(rec));
          await this.audit(isNew ? "client.create" : action, { clientId: rec.id, name: rec.businessName });
          return rec;
        },
        async getPortalProfile(clientId) {
          return (await adapter()).getPortalProfile(clientId);
        },
        // generic client-scoped records
        async list(coll, clientId, opts) {
          return (await adapter()).list(coll, clientId, opts);
        },
        async listAcross(coll, opts) {
          return (await adapter()).listAcross(coll, opts);
        },
        async get(coll, clientId, id) {
          return (await adapter()).get(coll, clientId, id);
        },
        async put(coll, clientId, rec, auditAction) {
          const a = await adapter();
          const out = { ...rec, id: rec.id || uid(coll.slice(0, 3)), clientId, updatedAt: nowIso() };
          if (!rec.createdAt) out.createdAt = out.updatedAt;
          await a.put(coll, clientId, out);
          if (auditAction) await this.audit(auditAction, { clientId, id: out.id });
          return out;
        },
        async putMany(coll, clientId, recs) {
          return (await adapter()).putMany(coll, clientId, recs);
        },
        async remove(coll, clientId, id, auditAction) {
          const a = await adapter();
          await a.remove(coll, clientId, id);
          if (auditAction) await this.audit(auditAction, { clientId, id });
        },
        // settings
        async getSettings() {
          const a = await adapter();
          const s = await a.getSettings() || {};
          return mergeDeep(clone(DEFAULT_SETTINGS), s);
        },
        async saveSettings(s) {
          const a = await adapter();
          await a.putSettings(s);
          await this.audit("settings.save", {});
          return s;
        },
        // users
        async listUsers() {
          return (await adapter()).listUsers();
        },
        async saveUser(u) {
          return (await adapter()).putUser(u);
        },
        // audit
        async audit(action, details = {}) {
          try {
            const a = await adapter();
            await a.addAuditLog({ id: uid("log"), at: nowIso(), action, actor: currentSession?.email || "unknown", details });
          } catch (e) {
            console.warn("audit failed", e);
          }
        },
        async listAudit(limit) {
          return (await adapter()).listAuditLogs(limit);
        }
      };
    }
  });

  // js/firebase/auth-service.js
  var auth_service_exports = {};
  __export(auth_service_exports, {
    firebaseAuth: () => firebaseAuth
  });
  function friendlyAuthError(e) {
    const code = e?.code || "";
    const map = {
      "auth/invalid-credential": "Incorrect email or password.",
      "auth/wrong-password": "Incorrect email or password.",
      "auth/user-not-found": "Incorrect email or password.",
      "auth/too-many-requests": "Too many attempts. Please wait and try again.",
      "auth/network-request-failed": "Network error \u2014 check your connection.",
      "auth/user-disabled": "This account has been disabled.",
      "auth/operation-not-allowed": "Email/password sign-in is not enabled in Firebase Authentication."
    };
    return new Error(map[code] || e?.message || "Sign-in failed.");
  }
  async function sessionFromUser(user, forceRefresh = false) {
    if (!user) return null;
    const token = await user.getIdTokenResult(forceRefresh);
    // All authenticated accounts use the same full-feature app UI. Their data
    // is isolated by UID in Firestore Rules, not by an admin/client UI role.
    const role = "admin";
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName || user.email,
      role,
      clientId: null,
      provider: "firebase"
    };
  }
  var firebaseAuth;
  var init_auth_service = __esm({
    "js/firebase/auth-service.js"() {
      init_firebase_init();
      firebaseAuth = {
        async login(email, password) {
          const fb2 = await initFirebase();
          try {
            const cred = await fb2.sdk.auth.signInWithEmailAndPassword(fb2.auth, email, password);
            const session = await sessionFromUser(cred.user, true);
            return session;
          } catch (e) {
            if (e instanceof Error && !e.code) throw e;
            throw friendlyAuthError(e);
          }
        },
        async logout() {
          const fb2 = await initFirebase();
          await fb2.sdk.auth.signOut(fb2.auth);
        },
        /** Resolves with the current session (or null) once Firebase has restored auth state. */
        async currentSession() {
          const fb2 = await initFirebase();
          await fb2.auth.authStateReady?.();
          return sessionFromUser(fb2.auth.currentUser);
        },
        async sendPasswordReset(email) {
          const fb2 = await initFirebase();
          await fb2.sdk.auth.sendPasswordResetEmail(fb2.auth, email);
        },
        async onChange(cb) {
          const fb2 = await initFirebase();
          return fb2.sdk.auth.onAuthStateChanged(fb2.auth, async (u) => cb(await sessionFromUser(u)));
        }
      };
    }
  });

  // js/auth.js
  async function fb() {
    const { firebaseAuth: firebaseAuth2 } = await Promise.resolve().then(() => (init_auth_service(), auth_service_exports));
    return firebaseAuth2;
  }
  async function getSession() {
    let s = null;
    if (getMode() === "firebase") {
      try {
        s = await (await fb()).currentSession();
      } catch {
        s = null;
      }
    } else {
      try {
        s = JSON.parse(localStorage.getItem(LS_SESSION) || "null");
      } catch {
        s = null;
      }
      if (s && s.provider !== "local") s = null;
    }
    setSessionForStore(s);
    return s;
  }
  async function login(email, password) {
    email = String(email || "").trim().toLowerCase();
    if (!email || !password) throw new Error("Enter your email and password.");
    if (getMode() === "firebase") {
      const s2 = await (await fb()).login(email, password);
      setSessionForStore(s2);
      await store.audit("auth.login", { role: s2.role });
      return s2;
    }
    const users = await store.listUsers();
    const u = users.find((x) => x.email.toLowerCase() === email);
    const hash = await sha256Hex(password);
    if (!u || u.passwordHash !== hash) throw new Error("Incorrect email or password.");
    if (u.disabled) throw new Error("This account has been disabled.");
    const s = { uid: u.id, email: u.email, name: u.name, role: u.role, clientId: u.clientId || null, provider: "local", at: nowIso() };
    localStorage.setItem(LS_SESSION, JSON.stringify(s));
    setSessionForStore(s);
    await store.audit("auth.login", { role: s.role, mode: "local" });
    return s;
  }
  async function logout() {
    if (getMode() === "firebase") {
      try {
        await (await fb()).logout();
      } catch {
      }
    }
    localStorage.removeItem(LS_SESSION);
    setSessionForStore(null);
  }
  function clearLocalSession() {
    localStorage.removeItem(LS_SESSION);
  }
  async function requireRole(role) {
    const s = await getSession();
    const here = location.pathname.split("/").pop() + location.search;
    if (!s) {
      location.replace(`login.html?next=${encodeURIComponent(here)}`);
      return null;
    }
    if (role === "admin" && s.role !== "admin") {
      location.replace("client-portal.html");
      return null;
    }
    return s;
  }
  var LS_SESSION;
  var init_auth = __esm({
    "js/auth.js"() {
      init_state();
      init_utils();
      LS_SESSION = "mppc.session";
    }
  });

  // js/calculations.js
  function ratio(n, d) {
    if (!isNum(n) || !isNum(d) || d === 0) return null;
    const r = n / d;
    return Number.isFinite(r) ? r : null;
  }
  function aggregate(rows = []) {
    const t = { rows: rows.length, impressions: 0, clicks: 0, spend: 0, conversions: 0, convValue: null, qualifiedLeads: null, bookedJobs: null, revenue: null };
    const days = /* @__PURE__ */ new Set();
    const trackingDays = /* @__PURE__ */ new Map();
    for (const r of rows) {
      days.add(r.date);
      for (const f2 of BASE_FIELDS) {
        const v = r[f2];
        if (!isNum(v)) continue;
        if (OPTIONAL_FIELDS.has(f2)) t[f2] = (t[f2] ?? 0) + v;
        else t[f2] += v;
      }
      const prev = trackingDays.get(r.date);
      const st2 = r.trackingStatus || "unknown";
      const rank = { ok: 0, unknown: 1, partial: 2, broken: 3 };
      if (prev === void 0 || (rank[st2] ?? 1) > (rank[prev] ?? 1)) trackingDays.set(r.date, st2);
    }
    t.days = days.size;
    t.trackingOkDays = [...trackingDays.values()].filter((s) => s === "ok").length;
    t.trackingIssueDays = [...trackingDays.values()].filter((s) => s === "partial" || s === "broken").length;
    return derive(t);
  }
  function derive(t) {
    return {
      ...t,
      ctr: calc.ctr(t.clicks, t.impressions),
      cpc: calc.cpc(t.spend, t.clicks),
      cvr: calc.cvr(t.conversions, t.clicks),
      cpa: calc.cpa(t.spend, t.conversions),
      roas: t.convValue === null ? null : calc.roas(t.convValue, t.spend),
      qualifiedRate: t.qualifiedLeads === null || ratio(t.qualifiedLeads, t.conversions) === null ? null : ratio(t.qualifiedLeads, t.conversions) * 100,
      costPerQualified: t.qualifiedLeads === null ? null : ratio(t.spend, t.qualifiedLeads)
    };
  }
  function perDay(t) {
    if (!t || !t.days) return null;
    const out = { ...t };
    ["impressions", "clicks", "spend", "conversions", "convValue", "qualifiedLeads", "bookedJobs", "revenue"].forEach((f2) => {
      out[f2] = isNum(t[f2]) ? t[f2] / t.days : null;
    });
    return out;
  }
  function change(cur, prev) {
    if (!isNum(cur) || !isNum(prev)) return { abs: null, pct: null };
    const abs = cur - prev;
    const pct = prev === 0 ? null : abs / Math.abs(prev) * 100;
    return { abs, pct: Number.isFinite(pct) ? pct : null };
  }
  function changeTone(metric, ch) {
    const dir = METRICS[metric]?.better || "neutral";
    if (!ch || ch.abs === null || ch.abs === 0 || dir === "neutral") return "neutral";
    return ch.abs > 0 === (dir === "up") ? "pos" : "neg";
  }
  function todayInTz(tz = "UTC") {
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(/* @__PURE__ */ new Date());
    } catch {
      return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    }
  }
  function addDays(d, n) {
    const dt = toUTC(d);
    dt.setUTCDate(dt.getUTCDate() + n);
    return fromUTC(dt);
  }
  function diffDays(a, b) {
    return Math.round((toUTC(b) - toUTC(a)) / 864e5);
  }
  function eachDay(from, to) {
    const out = [];
    if (!from || !to || from > to) return out;
    for (let d = from; d <= to; d = addDays(d, 1)) out.push(d);
    return out;
  }
  function isValidDate(s) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s || "")) return false;
    const dt = toUTC(s);
    return !Number.isNaN(dt.getTime()) && fromUTC(dt) === s;
  }
  function monthStart(d) {
    return `${d.slice(0, 7)}-01`;
  }
  function monthEnd(d) {
    const dt = toUTC(monthStart(d));
    dt.setUTCMonth(dt.getUTCMonth() + 1);
    dt.setUTCDate(0);
    return fromUTC(dt);
  }
  function resolveRange(key, tz = "UTC", custom = {}) {
    const today = todayInTz(tz);
    const yest = addDays(today, -1);
    let from, to;
    switch (key) {
      case "today":
        from = to = today;
        break;
      case "yesterday":
        from = to = yest;
        break;
      case "last7":
        from = addDays(yest, -6);
        to = yest;
        break;
      case "last90":
        from = addDays(yest, -89);
        to = yest;
        break;
      case "thisMonth":
        from = monthStart(today);
        to = today;
        break;
      case "prevMonth": {
        const p = addDays(monthStart(today), -1);
        from = monthStart(p);
        to = p;
        break;
      }
      case "custom":
        from = isValidDate(custom.from) ? custom.from : addDays(yest, -29);
        to = isValidDate(custom.to) ? custom.to : yest;
        if (from > to) [from, to] = [to, from];
        break;
      case "last30":
      default:
        from = addDays(yest, -29);
        to = yest;
        key = key === "last30" ? key : "last30";
    }
    const label = (RANGE_OPTIONS.find(([k]) => k === key) || [])[1] || "Custom";
    return { key, from, to, label, days: diffDays(from, to) + 1 };
  }
  function previousPeriod({ from, to }) {
    const len = diffDays(from, to) + 1;
    return { from: addDays(from, -len), to: addDays(from, -1), days: len };
  }
  function dailySeries(rows, from, to) {
    const byDay = /* @__PURE__ */ new Map();
    rows.forEach((r) => {
      if (r.date < from || r.date > to) return;
      if (!byDay.has(r.date)) byDay.set(r.date, []);
      byDay.get(r.date).push(r);
    });
    return eachDay(from, to).map((d) => {
      const list = byDay.get(d);
      if (!list) return { date: d, missing: true, ...derive({ impressions: 0, clicks: 0, spend: 0, conversions: 0, convValue: null, qualifiedLeads: null, days: 0 }) };
      return { date: d, missing: false, ...aggregate(list) };
    });
  }
  function bucketSeries(rows, from, to, size = "week") {
    const buckets = /* @__PURE__ */ new Map();
    rows.filter((r) => r.date >= from && r.date <= to).forEach((r) => {
      let key;
      if (size === "month") key = monthStart(r.date);
      else {
        const dow = (toUTC(r.date).getUTCDay() + 6) % 7;
        key = addDays(r.date, -dow);
      }
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(r);
    });
    return [...buckets.entries()].sort(([a], [b]) => a < b ? -1 : 1).map(([k, list]) => ({
      start: k,
      end: size === "month" ? monthEnd(k) : addDays(k, 6),
      ...aggregate(list)
    }));
  }
  function baselineTotals(baseline) {
    if (!baseline) return null;
    const rows = baseline.rows || [];
    const t = { impressions: 0, clicks: 0, spend: 0, conversions: 0, convValue: null, qualifiedLeads: null };
    rows.forEach((r) => {
      ["impressions", "clicks", "spend", "conversions"].forEach((f2) => {
        if (isNum(r[f2])) t[f2] += r[f2];
      });
      if (isNum(r.convValue)) t.convValue = (t.convValue ?? 0) + r.convValue;
    });
    if (isNum(baseline.qualifiedLeads)) t.qualifiedLeads = baseline.qualifiedLeads;
    const days = baseline.periodStart && baseline.periodEnd ? diffDays(baseline.periodStart, baseline.periodEnd) + 1 : null;
    t.days = days && days > 0 ? days : null;
    return derive(t);
  }
  function sumByCurrency(items) {
    const m = /* @__PURE__ */ new Map();
    items.forEach(({ currency, value }) => {
      if (!isNum(value)) return;
      m.set(currency, (m.get(currency) || 0) + value);
    });
    return [...m.entries()].map(([currency, value]) => ({ currency, value }));
  }
  function setFormatPrefs(p = {}) {
    fmtPrefs = { ...fmtPrefs, ...p };
  }
  function fmtMoney(v, currency = "USD", { decimals } = {}) {
    if (!isNum(v)) return NA;
    const d = decimals ?? (Math.abs(v) >= 1e3 ? 0 : 2);
    try {
      return new Intl.NumberFormat("en-US", { style: "currency", currency, currencyDisplay: fmtPrefs.currencyDisplay === "code" ? "code" : "narrowSymbol", minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
    } catch {
      return `${currency} ${v.toFixed(d)}`;
    }
  }
  function fmtInt(v) {
    return isNum(v) ? Math.round(v).toLocaleString("en-US") : NA;
  }
  function fmtDec(v, d = 1) {
    return isNum(v) ? v.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: d }) : NA;
  }
  function fmtPct(v, d = 2) {
    return isNum(v) ? `${v.toFixed(d)}%` : NA;
  }
  function fmtX(v) {
    return isNum(v) ? `${v.toFixed(2)}\xD7` : NA;
  }
  function fmtMetric(key, v, currency) {
    const f2 = METRICS[key]?.fmt || "dec1";
    if (f2 === "money") return fmtMoney(v, currency);
    if (f2 === "int") return fmtInt(v);
    if (f2 === "pct") return fmtPct(v);
    if (f2 === "x") return fmtX(v);
    return fmtDec(v, 1);
  }
  function fmtChange(key, ch, currency) {
    if (!ch || ch.abs === null) return "n/a";
    const f2 = METRICS[key]?.fmt;
    const sign = ch.abs > 0 ? "+" : ch.abs < 0 ? "\u2212" : "\xB1";
    const absVal = Math.abs(ch.abs);
    let absStr;
    if (f2 === "money") absStr = fmtMoney(absVal, currency);
    else if (f2 === "pct") absStr = `${absVal.toFixed(2)} pts`;
    else if (f2 === "x") absStr = `${absVal.toFixed(2)}\xD7`;
    else if (f2 === "int") absStr = fmtInt(absVal);
    else absStr = fmtDec(absVal, 1);
    const pct = ch.pct === null ? "% n/a" : `${ch.pct > 0 ? "+" : ch.pct < 0 ? "\u2212" : ""}${Math.abs(ch.pct).toFixed(1)}%`;
    return `${pct} (${sign}${absStr})`;
  }
  function fmtDate(d, format = fmtPrefs.dateFormat) {
    if (!d) return NA;
    const s = String(d).slice(0, 10);
    if (!isValidDate(s)) return String(d);
    const [y, m, day] = s.split("-");
    switch (format) {
      case "YYYY-MM-DD":
        return s;
      case "DD/MM/YYYY":
        return `${day}/${m}/${y}`;
      case "MM/DD/YYYY":
        return `${m}/${day}/${y}`;
      default:
        return `${Number(day)} ${MONTHS[Number(m) - 1]} ${y}`;
    }
  }
  function fmtDateTime(iso, tz) {
    if (!iso) return NA;
    try {
      return new Intl.DateTimeFormat("en-GB", { timeZone: tz, day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(iso)) + (tz ? "" : "");
    } catch {
      return iso;
    }
  }
  function fmtRange(from, to) {
    return from === to ? fmtDate(from) : `${fmtDate(from)} \u2013 ${fmtDate(to)}`;
  }
  var calc, BASE_FIELDS, OPTIONAL_FIELDS, METRICS, toUTC, fromUTC, RANGE_OPTIONS, fmtPrefs, NA, MONTHS, CURRENCIES;
  var init_calculations = __esm({
    "js/calculations.js"() {
      init_utils();
      calc = {
        ctr: (clicks, impressions) => {
          const r = ratio(clicks, impressions);
          return r === null ? null : r * 100;
        },
        cpc: (spend, clicks) => ratio(spend, clicks),
        cvr: (conversions, clicks) => {
          const r = ratio(conversions, clicks);
          return r === null ? null : r * 100;
        },
        cpa: (spend, conversions) => ratio(spend, conversions),
        roas: (value, spend) => ratio(value, spend)
      };
      BASE_FIELDS = ["impressions", "clicks", "spend", "conversions", "convValue", "qualifiedLeads", "bookedJobs", "revenue"];
      OPTIONAL_FIELDS = /* @__PURE__ */ new Set(["convValue", "qualifiedLeads", "bookedJobs", "revenue"]);
      METRICS = {
        impressions: { label: "Impressions", fmt: "int", better: "up" },
        clicks: { label: "Clicks", fmt: "int", better: "up" },
        spend: { label: "Spend", fmt: "money", better: "neutral" },
        conversions: { label: "Conversions", fmt: "dec1", better: "up" },
        ctr: { label: "CTR", fmt: "pct", better: "up" },
        cpc: { label: "Avg. CPC", fmt: "money", better: "neutral" },
        cvr: { label: "Conv. rate", fmt: "pct", better: "up" },
        cpa: { label: "Cost / conv.", fmt: "money", better: "down" },
        convValue: { label: "Conv. value", fmt: "money", better: "up" },
        roas: { label: "ROAS", fmt: "x", better: "up" },
        qualifiedLeads: { label: "Qualified leads", fmt: "dec1", better: "up" },
        costPerQualified: { label: "Cost / qualified lead", fmt: "money", better: "down" },
        bookedJobs: { label: "Booked jobs", fmt: "dec1", better: "up" },
        revenue: { label: "Revenue", fmt: "money", better: "up" }
      };
      toUTC = (d) => /* @__PURE__ */ new Date(`${d}T00:00:00Z`);
      fromUTC = (dt) => dt.toISOString().slice(0, 10);
      RANGE_OPTIONS = [
        ["today", "Today"],
        ["yesterday", "Yesterday"],
        ["last7", "Last 7 days"],
        ["last30", "Last 30 days"],
        ["last90", "Last 90 days"],
        ["thisMonth", "This month"],
        ["prevMonth", "Previous month"],
        ["custom", "Custom range"]
      ];
      fmtPrefs = { dateFormat: "D MMM YYYY", currencyDisplay: "symbol" };
      NA = "\u2014";
      MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      CURRENCIES = ["USD", "GBP", "EUR", "CAD", "AUD", "NZD", "AED", "SAR", "INR", "BDT", "PKR", "SGD", "ZAR"];
    }
  });

  // css/reports.css
  var reports_default;
  var init_reports = __esm({
    "css/reports.css"() {
      reports_default = "/* ==========================================================================\n   Client-facing report document (preview, portal, print, HTML export)\n   Uses fixed light colours so reports look identical in dark mode & print.\n   ========================================================================== */\n.report-stage { background: var(--surface-3); padding: 24px; border-radius: var(--radius); overflow-x: auto; }\n.report-doc {\n  --r-text: #142033; --r-text-2: #4a5568; --r-text-3: #7a8699;\n  --r-border: #e3e8ef; --r-soft: #f5f7fa; --r-accent: #1a73e8; --r-accent-soft: #e8f0fe;\n  width: 100%; max-width: 210mm; margin: 0 auto;\n  background: #fff; color: var(--r-text);\n  font-family: var(--font); font-size: 10.5pt; line-height: 1.5;\n  padding: 16mm 15mm;\n  box-shadow: var(--shadow);\n  border-radius: 4px;\n}\n.report-doc h1 { font-size: 20pt; margin: 0 0 4px; color: var(--r-text); }\n.report-doc h2 { font-size: 13pt; margin: 22px 0 10px; padding-bottom: 6px; border-bottom: 2px solid var(--r-accent); color: var(--r-text); break-after: avoid; }\n.report-doc h3 { font-size: 11pt; margin: 14px 0 6px; color: var(--r-text); }\n.report-doc p { margin: 0 0 8px; }\n.report-doc .r-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--r-border); margin-bottom: 14px; }\n.report-doc .r-brand { display: flex; align-items: center; gap: 10px; }\n.report-doc .r-brand img { width: 36px; height: 36px; }\n.report-doc .r-brand strong { display: block; font-size: 11pt; }\n.report-doc .r-brand span { font-size: 8.5pt; color: var(--r-text-3); }\n.report-doc .r-meta { text-align: right; font-size: 9pt; color: var(--r-text-2); }\n.report-doc .r-subtitle { color: var(--r-text-2); font-size: 10.5pt; margin-bottom: 4px; }\n.report-doc .r-kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 10px 0; }\n.report-doc .r-kpi { border: 1px solid var(--r-border); border-radius: 6px; padding: 9px 11px; break-inside: avoid; }\n.report-doc .r-kpi .l { font-size: 8.5pt; color: var(--r-text-2); }\n.report-doc .r-kpi .v { font-size: 15pt; font-weight: 600; font-variant-numeric: tabular-nums; }\n.report-doc .r-kpi .d { font-size: 8.5pt; color: var(--r-text-3); }\n.report-doc .r-kpi .d.pos { color: #188038; } .report-doc .r-kpi .d.neg { color: #c5221f; }\n.report-doc table { width: 100%; border-collapse: collapse; font-size: 9pt; margin: 6px 0 10px; }\n.report-doc th, .report-doc td { border-bottom: 1px solid var(--r-border); padding: 6px 7px; text-align: left; vertical-align: top; word-break: break-word; }\n.report-doc th { background: var(--r-soft); font-weight: 600; color: var(--r-text-2); font-size: 8.5pt; }\n.report-doc td.num, .report-doc th.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }\n.report-doc tr { break-inside: avoid; }\n.report-doc .r-chart { border: 1px solid var(--r-border); border-radius: 6px; padding: 10px; margin: 8px 0 12px; break-inside: avoid; }\n.report-doc .r-chart .t { font-size: 9pt; font-weight: 600; margin-bottom: 4px; }\n.report-doc .r-chart svg { width: 100%; height: auto; display: block; }\n.report-doc .r-callout { background: var(--r-accent-soft); border-radius: 6px; padding: 10px 12px; margin: 8px 0; break-inside: avoid; }\n.report-doc ul { margin: 4px 0 10px; padding-left: 18px; }\n.report-doc li { margin-bottom: 4px; break-inside: avoid; }\n.report-doc .r-foot { margin-top: 24px; padding-top: 10px; border-top: 1px solid var(--r-border); font-size: 8.5pt; color: var(--r-text-3); }\n.report-doc .r-pill { display: inline-block; font-size: 8pt; font-weight: 600; padding: 1px 7px; border-radius: 999px; background: var(--r-soft); color: var(--r-text-2); }\n.report-doc .r-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n.report-doc .r-note { font-size: 8.5pt; color: var(--r-text-3); }\n\n@media (max-width: 860px) {\n  .report-stage { padding: 8px; }\n  .report-doc { padding: 18px 14px; font-size: 13px; }\n  .report-doc .r-kpis { grid-template-columns: repeat(2, 1fr); }\n  .report-doc .r-grid-2 { grid-template-columns: 1fr; }\n  .report-doc .r-head { flex-direction: column; }\n  .report-doc .r-meta { text-align: left; }\n}\n\n.section-toggles { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 6px 14px; }\n.editor-layout { display: grid; grid-template-columns: minmax(320px, 420px) minmax(0, 1fr); gap: 16px; align-items: start; }\n.editor-layout .editor-panel { position: sticky; top: calc(var(--topbar-h) + 16px); max-height: calc(100vh - var(--topbar-h) - 32px); overflow-y: auto; }\n@media (max-width: 1100px) { .editor-layout { grid-template-columns: 1fr; } .editor-layout .editor-panel { position: static; max-height: none; } }\n";
    }
  });

  // assets/logo.svg
  var logo_default;
  var init_logo = __esm({
    "assets/logo.svg"() {
      logo_default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Masud PPC logo">\n  <!-- Placeholder logo \u2014 replace assets/logo.svg with your own mark -->\n  <rect width="64" height="64" rx="14" fill="#1a73e8"/>\n  <rect x="14" y="34" width="8" height="16" rx="3" fill="#ffffff" opacity="0.7"/>\n  <rect x="28" y="24" width="8" height="26" rx="3" fill="#ffffff" opacity="0.85"/>\n  <rect x="42" y="14" width="8" height="36" rx="3" fill="#ffffff"/>\n  <circle cx="46" cy="14" r="5" fill="#fbbc04"/>\n</svg>\n';
    }
  });

  // js/scoring.js
  function validateWeights(weights) {
    const total = Object.values(weights).reduce((s, v) => s + (Number(v) || 0), 0);
    const negative = Object.values(weights).some((v) => Number(v) < 0);
    return { valid: Math.abs(total - 100) < 1e-3 && !negative, total };
  }
  function labelFor(score, labels) {
    if (!isNum(score)) return "Not Rated";
    const sorted = [...labels].sort((a, b) => b.min - a.min);
    return (sorted.find((l) => score >= l.min) || sorted[sorted.length - 1]).label;
  }
  function toneFor(label) {
    return { Strong: "success", Good: "accent", "Needs Improvement": "warning", Poor: "danger" }[label] || "";
  }
  function minimumsFor(days, cfg) {
    if (days <= 1) return { clicks: cfg.dailyMinClicks, conversions: cfg.dailyMinConversions, days: 1 };
    const scale = Math.min(1, days / 30);
    return {
      clicks: Math.max(cfg.dailyMinClicks, Math.round(cfg.minClicks * scale)),
      conversions: Math.max(cfg.dailyMinConversions, Math.round(cfg.minConversions * scale * 10) / 10),
      days: Math.min(cfg.minDays, days)
    };
  }
  function scoreWindow({ rows, prevRows = [], client, baseline, range, cfg, today }) {
    const days = diffDays(range.from, range.to) + 1;
    const t = aggregate(rows);
    const prev = aggregate(prevRows);
    const base = baselineTotals(baseline);
    const cur = client?.currency || "USD";
    const flags = [];
    const mins = minimumsFor(days, cfg);
    const dataSummary = { days, daysWithData: t.days, clicks: t.clicks, conversions: t.conversions, qualifiedLeads: t.qualifiedLeads, trackingOkDays: t.trackingOkDays, minimums: mins };
    if (today && range.to > addDays(today, -(cfg.lagDays + 1))) {
      flags.push({ type: "warning", text: `Possible conversion lag: the window ends within ${cfg.lagDays} days of today, so late-reported conversions may still arrive.` });
    }
    const reasons = [];
    if (t.clicks < mins.clicks) reasons.push(`${fmtInt(t.clicks)} clicks (minimum ${mins.clicks})`);
    if (t.conversions < mins.conversions) reasons.push(`${fmtDec(t.conversions)} conversions (minimum ${mins.conversions})`);
    if (t.days < mins.days) reasons.push(`${t.days} days with data (minimum ${mins.days})`);
    if (reasons.length) {
      return {
        status: "not-rated",
        score: null,
        label: "Not Rated",
        factors: [],
        flags,
        totals: t,
        dataSummary,
        explanation: [`Not rated \u2014 insufficient data: ${reasons.join("; ")}. A score on this little data would be misleading.`]
      };
    }
    const w = cfg.weights;
    const factors = [];
    const add = (key, available, score2, detail) => factors.push({ key, label: FACTOR_LABELS[key], weight: Number(w[key]) || 0, available, score: available ? Math.round(clamp(score2)) : null, detail });
    const target = isNum(client?.targetMonthlyConversions) && client.targetMonthlyConversions > 0 ? client.targetMonthlyConversions * days / 30.4 : null;
    if (isNum(t.qualifiedLeads)) {
      if (target) add("qualified", true, t.qualifiedLeads / target * 100, `${fmtDec(t.qualifiedLeads)} qualified leads vs a pro-rated target of ${fmtDec(target)} for ${days} days.`);
      else add("qualified", true, t.qualifiedRate ?? 0, `No lead target set \u2014 scored on qualified share of conversions (${fmtPct(t.qualifiedRate, 1)}).`);
    } else if (target) {
      add("qualified", true, t.conversions / target * 100 * 0.85, `Qualified leads are not tracked; used conversions (${fmtDec(t.conversions)}) vs pro-rated target ${fmtDec(target)} as a proxy, with a 15% evidence discount.`);
      flags.push({ type: "info", text: "Qualified leads are not tracked for this client \u2014 lead quality cannot be verified." });
    } else {
      add("qualified", false, null, "No qualified-lead data and no lead target.");
    }
    if (isNum(t.cpa) && isNum(client?.targetCpa) && client.targetCpa > 0) {
      const r = t.cpa / client.targetCpa;
      add("cost", true, r <= 1 ? 100 : 100 - (r - 1) * 100, `CPA ${fmtMoney(t.cpa, cur)} vs target ${fmtMoney(client.targetCpa, cur)} (100 at or below target; 0 at 2\xD7 target).`);
    } else if (isNum(t.cpa) && isNum(base?.cpa)) {
      const r = t.cpa / base.cpa;
      add("cost", true, r <= 0.7 ? 100 : 100 - (r - 0.7) / 0.8 * 100, `No target CPA \u2014 compared with baseline CPA ${fmtMoney(base.cpa, cur)} (current ${fmtMoney(t.cpa, cur)}).`);
    } else {
      add("cost", false, null, "CPA unavailable (no conversions or no target/baseline).");
    }
    if (isNum(t.cvr)) {
      const ref = isNum(client?.targetCvr) && client.targetCvr > 0 ? client.targetCvr : base?.cvr;
      const level = isNum(ref) ? Math.min(t.cvr / ref, 1) * 100 : 50;
      const ch = change(t.cvr, prev.cvr);
      const trend = ch.pct === null ? 50 : clamp(50 + ch.pct);
      add("cvr", true, level * 0.7 + trend * 0.3, `Conv. rate ${fmtPct(t.cvr)} vs ${isNum(client?.targetCvr) ? "target" : "baseline"} ${fmtPct(ref)} (70%); trend vs previous period ${ch.pct === null ? "n/a (scored neutral)" : `${ch.pct > 0 ? "+" : ""}${ch.pct.toFixed(1)}%`} (30%).`);
    } else {
      add("cvr", false, null, "No clicks, so conversion rate is unavailable.");
    }
    const ctrRef = isNum(base?.ctr) ? base.ctr : prev.ctr;
    const parts = [];
    let trafficScore = null;
    if (isNum(t.ctr) && isNum(ctrRef)) {
      const s1 = Math.min(t.ctr / ctrRef, 1.25) / 1.25 * 100;
      parts.push({ s: s1, d: `CTR ${fmtPct(t.ctr)} vs ${isNum(base?.ctr) ? "baseline" : "previous period"} ${fmtPct(ctrRef)}` });
    }
    if (isNum(t.qualifiedRate)) parts.push({ s: t.qualifiedRate, d: `qualified share of conversions ${fmtPct(t.qualifiedRate, 1)}` });
    if (parts.length) {
      trafficScore = parts.reduce((s, p) => s + p.s, 0) / parts.length;
      add("traffic", true, trafficScore, parts.map((p) => p.d).join("; ") + ".");
    } else {
      add("traffic", false, null, "No CTR reference (baseline or previous period) available.");
    }
    const trackingPct = t.days ? t.trackingOkDays / t.days * 100 : 0;
    const completeness = Math.min(1, t.days / days) * 100;
    add("tracking", true, trackingPct * (completeness / 100), `${t.trackingOkDays} of ${t.days} days with healthy tracking (${fmtPct(trackingPct, 0)}); data present for ${t.days} of ${days} days.`);
    const avail = factors.filter((f2) => f2.available);
    const availWeight = avail.reduce((s, f2) => s + f2.weight, 0);
    let score = availWeight ? avail.reduce((s, f2) => s + f2.score * f2.weight, 0) / availWeight : null;
    factors.forEach((f2) => {
      f2.effectiveWeight = f2.available && availWeight ? f2.weight / availWeight * 100 : 0;
    });
    const explanation = [
      `Weighted average of ${avail.length} available factors.`,
      ...avail.length < factors.length ? [`Excluded (no data): ${factors.filter((f2) => !f2.available).map((f2) => f2.label).join(", ")} \u2014 their weight was redistributed proportionally.`] : [],
      "CPC changes are not scored on their own \u2014 cheaper clicks only help if they produce qualified leads at a better cost."
    ];
    if (trackingPct < cfg.trackingReliableThreshold) {
      flags.push({ type: "danger", text: `Conversion tracking was unreliable on ${t.days - t.trackingOkDays} of ${t.days} days. Results may be understated or overstated.` });
      if (score > cfg.unreliableTrackingCap) {
        explanation.push(`Score capped at ${cfg.unreliableTrackingCap} because tracking reliability (${fmtPct(trackingPct, 0)}) is below ${cfg.trackingReliableThreshold}%.`);
        score = cfg.unreliableTrackingCap;
      }
    }
    score = isNum(score) ? Math.round(score) : null;
    return { status: "rated", score, label: labelFor(score, cfg.labels), factors, flags, totals: t, dataSummary, explanation };
  }
  function scoreHistory({ rows, client, baseline, cfg, from, to, size = "week", today }) {
    const buckets = bucketSeries(rows, from, to, size);
    return buckets.map((b) => {
      const len = diffDays(b.start, b.end) + 1;
      const winRows = rows.filter((r) => r.date >= b.start && r.date <= b.end);
      const prevRows = rows.filter((r) => r.date >= addDays(b.start, -len) && r.date < b.start);
      const res = scoreWindow({ rows: winRows, prevRows, client, baseline, range: { from: b.start, to: b.end }, cfg, today });
      return { start: b.start, end: b.end, score: res.score, label: res.label, status: res.status };
    });
  }
  var FACTOR_LABELS, clamp;
  var init_scoring = __esm({
    "js/scoring.js"() {
      init_calculations();
      init_utils();
      FACTOR_LABELS = {
        qualified: "Qualified lead generation",
        cost: "Cost efficiency vs target CPA",
        cvr: "Conversion rate & trend",
        traffic: "Traffic & search relevance",
        tracking: "Tracking reliability & data completeness"
      };
      clamp = (v, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, v));
    }
  });

  // js/components/charts.js
  function loadChartJs(timeoutMs = 5e3) {
    if (window.Chart) return Promise.resolve(window.Chart);
    if (chartJsPromise) return chartJsPromise;
    chartJsPromise = new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = CHART_JS_URL;
      s.async = true;
      const t = setTimeout(() => resolve(null), timeoutMs);
      s.onload = () => {
        clearTimeout(t);
        resolve(window.Chart || null);
      };
      s.onerror = () => {
        clearTimeout(t);
        resolve(null);
      };
      document.head.appendChild(s);
    });
    return chartJsPromise;
  }
  async function renderChart(box, cfg) {
    if (!box) return;
    const prev = instances.get(box);
    if (prev) {
      prev.destroy();
      instances.delete(box);
    }
    const Chart = await loadChartJs();
    const colors = palette();
    if (!Chart) {
      box.innerHTML = svgChart({ ...cfg, colors, theme: "app" });
      box.dataset.renderer = "svg";
      return;
    }
    box.dataset.renderer = "chartjs";
    box.innerHTML = "<canvas></canvas>";
    const text2 = cssVar("--text-2", "#475569");
    const border = cssVar("--border", "#e3e8ef");
    const hasRight = cfg.series.some((s) => s.axis === "right");
    const chart = new Chart(box.querySelector("canvas"), {
      type: cfg.type || "line",
      data: {
        labels: cfg.labels,
        datasets: cfg.series.map((s, i) => ({
          label: s.name,
          data: s.values,
          type: s.type || cfg.type || "line",
          borderColor: colors[i % colors.length],
          backgroundColor: (s.type || cfg.type) === "bar" ? colors[i % colors.length] + "cc" : colors[i % colors.length] + "22",
          yAxisID: s.axis === "right" ? "y1" : "y",
          tension: 0.3,
          pointRadius: cfg.labels.length > 45 ? 0 : 2,
          borderWidth: 2,
          spanGaps: false,
          fill: false
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { labels: { color: text2, boxWidth: 10, font: { size: 11 } } },
          tooltip: {
            callbacks: {
              label: (ctx2) => {
                const s = cfg.series[ctx2.datasetIndex];
                const f2 = s.axis === "right" ? cfg.fmtRight : cfg.fmtLeft;
                return `${s.name}: ${ctx2.raw === null ? "n/a" : f2 ? f2(ctx2.raw) : ctx2.raw}`;
              }
            }
          }
        },
        scales: {
          x: { ticks: { color: text2, maxRotation: 0, autoSkip: true, maxTicksLimit: 8, font: { size: 11 } }, grid: { display: false } },
          y: { beginAtZero: true, ticks: { color: text2, font: { size: 11 }, callback: (v) => cfg.fmtLeft ? cfg.fmtLeft(v, true) : v }, grid: { color: border } },
          ...hasRight ? { y1: { position: "right", beginAtZero: true, ticks: { color: text2, font: { size: 11 }, callback: (v) => cfg.fmtRight ? cfg.fmtRight(v, true) : v }, grid: { display: false } } } : {}
        }
      }
    });
    instances.set(box, chart);
  }
  function niceMax(v) {
    if (!v || v <= 0) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    const n = v / p;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p;
  }
  function svgChart({ labels, series, type = "line", fmtLeft, fmtRight, colors, width = 720, height = 260, theme = "report", title = "" }) {
    const C = colors || ["#1a73e8", "#12a37f", "#e8710a", "#9334e6"];
    const textCol = theme === "report" ? "#4a5568" : "currentColor";
    const gridCol = theme === "report" ? "#e3e8ef" : "rgba(127,127,127,0.25)";
    const padL = 58, padR = series.some((s) => s.axis === "right") ? 58 : 16, padT = 30, padB = 30;
    const w = width - padL - padR, h = height - padT - padB;
    const n = Math.max(labels.length, 1);
    const vals = (axis) => series.filter((s) => (s.axis || "left") === axis).flatMap((s) => s.values).filter((v) => typeof v === "number" && Number.isFinite(v));
    const maxL = niceMax(Math.max(0, ...vals("left")));
    const maxR = niceMax(Math.max(0, ...vals("right")));
    const x = (i) => padL + (n === 1 ? w / 2 : i * w / (n - 1));
    const xb = (i) => padL + (i + 0.5) * w / n;
    const y = (v, axis) => padT + h - v / (axis === "right" ? maxR : maxL) * h;
    const f2 = (fn, v) => esc(fn ? fn(v, true) : String(Math.round(v * 100) / 100));
    let out = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title || series.map((s) => s.name).join(", "))}" font-family="Inter, Arial, sans-serif" font-size="11">`;
    for (let i = 0; i <= 4; i++) {
      const gy = padT + h * i / 4;
      out += `<line x1="${padL}" x2="${padL + w}" y1="${gy}" y2="${gy}" stroke="${gridCol}" stroke-width="1"/>`;
      out += `<text x="${padL - 6}" y="${gy + 4}" text-anchor="end" fill="${textCol}">${f2(fmtLeft, maxL * (1 - i / 4))}</text>`;
      if (padR > 20) out += `<text x="${padL + w + 6}" y="${gy + 4}" fill="${textCol}">${f2(fmtRight, maxR * (1 - i / 4))}</text>`;
    }
    const step = Math.max(1, Math.ceil(n / 8));
    labels.forEach((l, i) => {
      if (i % step !== 0 && !(i === n - 1 && (n - 1) % step >= step / 2)) return;
      const lx2 = series.some((s) => (s.type || type) === "bar") ? xb(i) : x(i);
      out += `<text x="${lx2}" y="${height - 10}" text-anchor="middle" fill="${textCol}">${esc(l)}</text>`;
    });
    const barSeries = series.filter((s) => (s.type || type) === "bar");
    const bw = w / n * 0.7 / Math.max(barSeries.length, 1);
    barSeries.forEach((s, bi) => {
      const color = C[series.indexOf(s) % C.length];
      s.values.forEach((v, i) => {
        if (typeof v !== "number" || !Number.isFinite(v)) return;
        const axis = s.axis || "left";
        const top = y(v, axis);
        const bx = xb(i) - bw * barSeries.length / 2 + bi * bw;
        out += `<rect x="${bx.toFixed(1)}" y="${top.toFixed(1)}" width="${Math.max(bw - 1, 1).toFixed(1)}" height="${(padT + h - top).toFixed(1)}" fill="${color}" opacity="0.85" rx="1.5"/>`;
      });
    });
    series.filter((s) => (s.type || type) !== "bar").forEach((s) => {
      const color = C[series.indexOf(s) % C.length];
      const axis = s.axis || "left";
      let d = "", pen = false;
      s.values.forEach((v, i) => {
        if (typeof v !== "number" || !Number.isFinite(v)) {
          pen = false;
          return;
        }
        const px = barSeries.length ? xb(i) : x(i);
        d += `${pen ? "L" : "M"}${px.toFixed(1)},${y(v, axis).toFixed(1)} `;
        pen = true;
      });
      if (d) out += `<path d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    });
    let lx = padL;
    series.forEach((s, i) => {
      out += `<rect x="${lx}" y="8" width="10" height="10" rx="2" fill="${C[i % C.length]}"/><text x="${lx + 14}" y="17" fill="${textCol}">${esc(s.name)}${s.axis === "right" ? " (right axis)" : ""}</text>`;
      lx += 26 + (s.name.length + (s.axis === "right" ? 13 : 0)) * 6.2;
    });
    return out + "</svg>";
  }
  var CHART_JS_URL, chartJsPromise, instances, cssVar, palette;
  var init_charts = __esm({
    "js/components/charts.js"() {
      init_utils();
      CHART_JS_URL = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js";
      chartJsPromise = null;
      instances = /* @__PURE__ */ new WeakMap();
      cssVar = (name2, fallback) => getComputedStyle(document.documentElement).getPropertyValue(name2).trim() || fallback;
      palette = () => [cssVar("--chart-1", "#1a73e8"), cssVar("--chart-2", "#12a37f"), cssVar("--chart-3", "#e8710a"), cssVar("--chart-4", "#9334e6")];
    }
  });

  // js/reports.js
  var reports_exports = {};
  __export(reports_exports, {
    COMPARISONS: () => COMPARISONS,
    REPORT_TYPES: () => REPORT_TYPES,
    SECTION_LABELS: () => SECTION_LABELS,
    buildReportData: () => buildReportData,
    createDemoReport: () => createDemoReport,
    defaultPeriod: () => defaultPeriod,
    draftNarrative: () => draftNarrative,
    newReport: () => newReport,
    publishReport: () => publishReport,
    renderReportHTML: () => renderReportHTML,
    reportFileName: () => reportFileName,
    standaloneHtml: () => standaloneHtml,
    unpublishReport: () => unpublishReport
  });
  function defaultPeriod(type, tz, baseline) {
    const today = todayInTz(tz);
    if (type === "initial-audit" && baseline) return { from: baseline.periodStart, to: baseline.periodEnd };
    if (type === "weekly") {
      const r3 = resolveRange("last7", tz);
      return { from: r3.from, to: r3.to };
    }
    if (type === "monthly") {
      const r3 = resolveRange("prevMonth", tz);
      return { from: r3.from, to: r3.to };
    }
    const r = resolveRange("last30", tz);
    return { from: r.from, to: r.to, today };
  }
  function newReport(client, type, settings, baseline) {
    const p = defaultPeriod(type, client.timezone, baseline);
    const sections = { ...DEFAULT_SECTIONS, ...settings.report.defaultSections || {}, ...TYPE_SECTIONS[type] || {} };
    return {
      id: uid("rpt"),
      clientId: client.id,
      type,
      title: `${REPORT_TYPES[type]} \u2014 ${client.businessName}`,
      periodStart: p.from,
      periodEnd: p.to,
      comparison: type === "initial-audit" ? "none" : settings.report.defaultComparison || "previous",
      campaignIds: [],
      sections,
      executiveSummary: "",
      keyFindings: "",
      challenges: "",
      actionPlan: "",
      recommendations: "",
      branding: { brandName: settings.report.brandName, headerText: settings.report.headerText, footerText: settings.report.footerText, showClientLogo: true },
      allowPdf: true,
      status: "draft",
      versions: 0,
      createdAt: nowIso()
    };
  }
  async function buildReportData(report, client, settings) {
    const from = report.periodStart, to = report.periodEnd;
    const days = diffDays(from, to) + 1;
    const prevP = previousPeriod({ from, to });
    const [allRows, baselines, logs, analyses] = await Promise.all([
      store.list("dailyMetrics", client.id, { from: prevP.from, to }),
      store.list("baselines", client.id),
      store.list("optimizationLogs", client.id),
      store.list("aiAnalyses", client.id)
    ]);
    const filterCmp = (r) => !report.campaignIds?.length || report.campaignIds.includes(r.campaignId);
    const rows = allRows.filter((r) => r.date >= from && r.date <= to && filterCmp(r));
    const prevRows = allRows.filter((r) => r.date >= prevP.from && r.date <= prevP.to && filterCmp(r));
    const baseline = baselines.find((b) => b.isOriginal) || null;
    const cur = aggregate(rows);
    const prev = aggregate(prevRows);
    const base = baselineTotals(baseline);
    const cmp = report.comparison;
    const useBase = (cmp === "baseline" || cmp === "both") && base;
    const usePrev = (cmp === "previous" || cmp === "both") && prevRows.length > 0;
    const curPD = perDay(cur), basePD = base ? perDay(base) : null;
    const volume = /* @__PURE__ */ new Set(["spend", "clicks", "conversions", "qualifiedLeads", "impressions", "bookedJobs", "convValue"]);
    const isAuditOnly = report.type === "initial-audit";
    const kpis = (isAuditOnly ? ["spend", "clicks", "conversions", "cpa", "cvr", "ctr", "cpc", "roas"] : KPI_KEYS).map((k) => {
      const value = isAuditOnly ? base?.[k] ?? null : cur[k];
      if (value === null || value === void 0) return null;
      const out = { key: k, label: METRICS[k].label, value };
      if (usePrev && !isAuditOnly) {
        out.prev = prev[k];
        out.chPrev = change(cur[k], prev[k]);
      }
      if (useBase && !isAuditOnly) {
        if (volume.has(k)) {
          out.basePerDay = basePD?.[k] ?? null;
          out.chBase = change(curPD[k], basePD?.[k]);
          out.baseIsPerDay = true;
        } else {
          out.base = base[k];
          out.chBase = change(cur[k], base[k]);
        }
      }
      return out;
    }).filter(Boolean).slice(0, isAuditOnly ? 8 : 9);
    let series;
    if (days <= 62) {
      const d = dailySeries(rows, from, to);
      series = { granularity: "day", labels: d.map((x) => fmtDate(x.date, "D MMM YYYY").replace(/ \d{4}$/, "")), spend: d.map((x) => x.missing ? null : x.spend), conversions: d.map((x) => x.missing ? null : x.conversions), cpa: d.map((x) => x.cpa) };
    } else {
      const w = bucketSeries(rows, from, to, "week");
      series = { granularity: "week", labels: w.map((x) => fmtDate(x.start).replace(/ \d{4}$/, "")), spend: w.map((x) => x.spend), conversions: w.map((x) => x.conversions), cpa: w.map((x) => x.cpa) };
    }
    const trendRows = bucketSeries(rows, from, to, days > 62 ? "month" : "week").map((b) => ({
      period: fmtRange(b.start < from ? from : b.start, b.end > to ? to : b.end),
      spend: b.spend,
      clicks: b.clicks,
      conversions: b.conversions,
      cpa: b.cpa,
      cvr: b.cvr
    }));
    const campaignRows = (client.campaigns || []).filter((c) => !report.campaignIds?.length || report.campaignIds.includes(c.id)).map((c) => ({ name: c.name, type: c.type, ...aggregate(rows.filter((r) => r.campaignId === c.id)) })).filter((c) => c.rows > 0);
    const optimizations = logs.filter((l) => l.publishable && (l.date || "").slice(0, 10) >= (isAuditOnly ? "0000" : addDays(from, -7)) && (l.date || "") <= to).sort((a, b) => a.date < b.date ? -1 : 1).map((l) => ({ date: l.date, category: l.category, summary: l.clientSummary || `${l.category}: ${l.field} changed${l.newValue ? ` to ${l.newValue}` : ""}.`, status: l.status, outcome: l.publishOutcome ? l.actualOutcome : "" }));
    const approvedAi = analyses.filter((a) => a.approved && a.clientVersion).sort((a, b) => a.approvedAt < b.approvedAt ? 1 : -1)[0];
    const scoreRes = isAuditOnly ? null : scoreWindow({ rows, prevRows, client, baseline, range: { from, to }, cfg: settings.scoring, today: todayInTz(client.timezone) });
    const trackingIssueDays = cur.trackingIssueDays;
    const autoLimitations = [];
    if (trackingIssueDays > 0) autoLimitations.push(`Conversion tracking was flagged as partial or broken on ${trackingIssueDays} day(s) in this period.`);
    if (cur.days < days && !isAuditOnly) autoLimitations.push(`Data is available for ${cur.days} of ${days} days in this period.`);
    if (cur.qualifiedLeads === null && !isAuditOnly) autoLimitations.push("Qualified leads are not tracked, so lead quality is not measured in this report.");
    if (scoreRes?.flags?.some((f2) => /lag/.test(f2.text))) autoLimitations.push("Recent days may still receive late-reported conversions (conversion lag).");
    return {
      schema: 1,
      meta: {
        reportId: report.id,
        type: report.type,
        typeLabel: REPORT_TYPES[report.type],
        title: report.title,
        periodStart: from,
        periodEnd: to,
        days,
        comparison: cmp,
        comparisonLabel: COMPARISONS[cmp],
        previousPeriod: usePrev ? prevP : null,
        baselinePeriod: base ? { from: baseline.periodStart, to: baseline.periodEnd } : null,
        generatedAt: nowIso(),
        branding: clone(report.branding || {}),
        campaignsIncluded: campaignRows.map((c) => c.name),
        dateFormat: settings.dateFormat
      },
      client: {
        businessName: client.businessName,
        website: client.website,
        industry: client.industry,
        locations: client.locations,
        currency: client.currency,
        timezone: client.timezone,
        logo: report.branding?.showClientLogo === false ? "" : client.logo || ""
      },
      sections: { ...DEFAULT_SECTIONS, ...report.sections || {} },
      kpis,
      totals: { current: cur, previous: usePrev ? prev : null, baseline: base },
      series,
      trendRows,
      campaignRows: campaignRows.map((c) => ({ name: c.name, type: c.type, spend: c.spend, clicks: c.clicks, conversions: c.conversions, cpa: c.cpa, cvr: c.cvr, ctr: c.ctr })),
      baselineAudit: isAuditOnly && baseline ? {
        auditDate: baseline.auditDate,
        rows: baseline.rows,
        issues: baseline.issues,
        recommendations: baseline.recommendations,
        searchTerms: baseline.searchTerms,
        locationTargeting: baseline.locationTargeting,
        trackingStatus: baseline.trackingStatus,
        landingPage: baseline.landingPage,
        leadQuality: baseline.leadQuality
      } : null,
      optimizations,
      score: scoreRes ? { score: scoreRes.score, label: scoreRes.label, status: scoreRes.status } : null,
      ai: approvedAi ? { text: approvedAi.clientVersion, approvedAt: approvedAi.approvedAt, source: approvedAi.source } : null,
      text: {
        executiveSummary: report.executiveSummary || "",
        keyFindings: report.keyFindings || "",
        challenges: [report.challenges, ...autoLimitations.map((l) => `- ${l}`)].filter(Boolean).join("\n"),
        actionPlan: report.actionPlan || "",
        recommendations: report.recommendations || ""
      },
      dataSource: `Google Ads account data (${rows.some((r) => r.source === "csv") ? "CSV import" : rows.some((r) => r.source === "manual") ? "manual entry" : rows.some((r) => r.source === "demo") ? "fictional demo data" : "manual / CSV"}), and the client's lead records where provided. Dates are in the account time zone (${client.timezone}). Amounts in ${client.currency}.`
    };
  }
  function draftNarrative(data) {
    const c = data.client.currency;
    const t = data.totals.current;
    const p = data.totals.previous;
    const k = (key) => data.kpis.find((x) => x.key === key);
    const pct = (ch) => ch?.pct === null || ch?.pct === void 0 ? null : `${ch.pct > 0 ? "up" : "down"} ${Math.abs(ch.pct).toFixed(0)}%`;
    const lines = [];
    if (data.meta.type === "initial-audit") {
      const b = data.totals.baseline;
      return {
        executiveSummary: b ? `Before management began, the account spent ${fmtMoney(b.spend, c)} over ${b.days} days and recorded ${fmtDec(b.conversions)} conversions at ${fmtMoney(b.cpa, c)} per conversion. This report records that starting point so future progress can be measured fairly.` : "No baseline audit has been recorded yet.",
        keyFindings: data.baselineAudit?.issues ? data.baselineAudit.issues.split(/;\s*|\n/).filter(Boolean).map((x) => `- ${x.trim()}`).join("\n") : "",
        actionPlan: data.baselineAudit?.recommendations ? data.baselineAudit.recommendations.split(/,\s*|\n/).filter(Boolean).map((x) => `- ${x.trim()}`).join("\n") : ""
      };
    }
    lines.push(`Between ${fmtRange(data.meta.periodStart, data.meta.periodEnd)} the campaigns spent ${fmtMoney(t.spend, c)} and generated ${fmtDec(t.conversions)} conversions${isNum(t.cpa) ? ` at an average of ${fmtMoney(t.cpa, c)} per conversion` : ""}.`);
    if (isNum(t.qualifiedLeads)) lines.push(`${fmtDec(t.qualifiedLeads)} of these were qualified leads based on the agreed criteria.`);
    if (p && k("conversions")?.chPrev) {
      const cv = pct(k("conversions").chPrev), cp = pct(k("cpa")?.chPrev);
      if (cv) lines.push(`Compared with the previous ${data.meta.days} days, conversions were ${cv}${cp ? ` and cost per conversion was ${cp}` : ""}.`);
    }
    if (data.score?.status === "rated") lines.push(`Overall performance score for the period: ${data.score.score}/100 (${data.score.label}).`);
    const findings = [];
    data.kpis.forEach((x) => {
      const ch = x.chBase || x.chPrev;
      if (!ch || ch.pct === null || Math.abs(ch.pct) < 10) return;
      const tone = changeTone(x.key, ch);
      if (tone === "neutral") return;
      findings.push(`- ${x.label} ${tone === "pos" ? "improved" : "worsened"}: ${fmtChange(x.key, ch, c)} vs ${x.chBase ? "the original baseline" + (x.baseIsPerDay ? " (daily average)" : "") : "the previous period"}.`);
    });
    return {
      executiveSummary: lines.join(" "),
      keyFindings: findings.slice(0, 6).join("\n"),
      actionPlan: ""
    };
  }
  async function publishReport(report, client, settings, session) {
    const data = await buildReportData(report, client, settings);
    const version = (report.versions || 0) + 1;
    const snapshot = {
      id: `${report.id}_v${version}`,
      reportId: report.id,
      clientId: client.id,
      version,
      published: true,
      publishedAt: nowIso(),
      publishedBy: session?.email || "admin",
      title: report.title,
      type: report.type,
      periodStart: report.periodStart,
      periodEnd: report.periodEnd,
      allowPdf: report.allowPdf !== false,
      data
    };
    const existing = await store.list("reportSnapshots", client.id);
    for (const s of existing.filter((x) => x.reportId === report.id && x.published)) {
      await store.put("reportSnapshots", client.id, { ...s, published: false, supersededBy: snapshot.id, supersededAt: nowIso() });
    }
    await store.put("reportSnapshots", client.id, snapshot);
    const updated = await store.put("reports", client.id, { ...report, status: "published", savedAfterPublish: false, versions: version, publishedSnapshotId: snapshot.id, publishedAt: snapshot.publishedAt }, "report.publish");
    return { report: updated, snapshot };
  }
  async function unpublishReport(report, clientId) {
    if (report.publishedSnapshotId) {
      const s = await store.get("reportSnapshots", clientId, report.publishedSnapshotId);
      if (s) await store.put("reportSnapshots", clientId, { ...s, published: false, unpublishedAt: nowIso() });
    }
    return store.put("reports", clientId, { ...report, status: "unpublished", publishedSnapshotId: null }, "report.unpublish");
  }
  function textBlock(t) {
    if (!t || !String(t).trim()) return "";
    const lines = String(t).split(/\n/);
    let out = "", list = [];
    const flush = () => {
      if (list.length) {
        out += `<ul>${list.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>`;
        list = [];
      }
    };
    lines.forEach((l) => {
      const m = l.match(/^\s*[-•*]\s+(.*)/);
      if (m) list.push(m[1]);
      else {
        flush();
        if (l.trim()) out += `<p>${esc(l.trim())}</p>`;
      }
    });
    flush();
    return out;
  }
  function kpiCard(k, cur) {
    const delta = (ch, label) => {
      if (!ch) return "";
      const tone = changeTone(k.key, ch);
      return `<div class="d ${tone}">${esc(fmtChange(k.key, ch, cur))} vs ${esc(label)}</div>`;
    };
    return `<div class="r-kpi"><div class="l">${esc(k.label)}</div><div class="v">${esc(fmtMetric(k.key, k.value, cur))}</div>
    ${delta(k.chPrev, "prev. period")}${delta(k.chBase, k.baseIsPerDay ? "baseline (per day)" : "baseline")}</div>`;
  }
  function renderReportHTML(data, { forPrint = false } = {}) {
    const S = data.sections;
    const cur = data.client.currency;
    const m = data.meta;
    const b = m.branding || {};
    const audit = m.type === "initial-audit";
    let h = `<article class="report-doc" data-report-id="${esc(m.reportId)}">`;
    h += `<header class="r-head">
    <div class="r-brand"><img src="${esc(data.client.logo || "logo.svg")}" alt=""><div><strong>${esc(b.brandName || "Masud PPC")}</strong><span>${esc(b.headerText || "Google Ads Performance Report")}</span></div></div>
    <div class="r-meta"><div><strong>${esc(data.client.businessName)}</strong></div><div>${esc(fmtRange(m.periodStart, m.periodEnd))}</div><div>${esc(m.typeLabel)}</div></div>
  </header>`;
    h += `<h1>${esc(m.title)}</h1><div class="r-subtitle">Reporting period: ${esc(fmtRange(m.periodStart, m.periodEnd))} (${m.days} days)${m.comparison !== "none" ? ` \xB7 Compared with: ${esc(m.comparisonLabel)}` : ""}</div>`;
    if (data.score?.status === "rated") h += `<p><span class="r-pill">Performance score: ${data.score.score}/100 \u2014 ${esc(data.score.label)}</span> <span class="r-note">Internal Masud PPC score (not Google's Optimization Score).</span></p>`;
    if (S.businessDetails) {
      h += `<h2>Business details</h2><table><tbody>
      <tr><th style="width:30%">Business</th><td>${esc(data.client.businessName)}</td></tr>
      ${data.client.website ? `<tr><th>Website</th><td>${esc(data.client.website)}</td></tr>` : ""}
      ${data.client.industry ? `<tr><th>Industry</th><td>${esc(data.client.industry)}</td></tr>` : ""}
      ${data.client.locations ? `<tr><th>Service area</th><td>${esc(data.client.locations)}</td></tr>` : ""}
      <tr><th>Campaigns included</th><td>${esc(m.campaignsIncluded.join(", ") || "All campaigns")}</td></tr>
      <tr><th>Currency / time zone</th><td>${esc(cur)} \xB7 ${esc(data.client.timezone)}</td></tr></tbody></table>`;
    }
    if (S.executiveSummary && data.text.executiveSummary) h += `<h2>Executive summary</h2><div class="r-callout">${textBlock(data.text.executiveSummary)}</div>`;
    if (S.kpis && data.kpis.length) {
      h += `<h2>${audit ? "Baseline key figures" : "Key performance indicators"}</h2><div class="r-kpis">${data.kpis.map((k) => kpiCard(k, cur)).join("")}</div>`;
      h += `<p class="r-note">"\u2014" means the metric cannot be calculated (e.g. no conversions). "% n/a" means the comparison value was zero or unavailable.</p>`;
    }
    if (S.charts && !audit && data.series.labels.length) {
      const unit = data.series.granularity === "day" ? "Daily" : "Weekly";
      h += `<h2>Performance charts</h2>
      <div class="r-chart"><div class="t">${unit} spend and conversions</div>${svgChart({ labels: data.series.labels, series: [{ name: `Spend (${cur})`, values: data.series.spend, type: "bar" }, { name: "Conversions", values: data.series.conversions, axis: "right", type: "line" }], fmtLeft: (v) => fmtMoney(v, cur, { decimals: 0 }), fmtRight: (v) => fmtDec(v, 1) })}</div>
      <div class="r-chart"><div class="t">${unit} cost per conversion</div>${svgChart({ labels: data.series.labels, series: [{ name: `Cost / conv. (${cur})`, values: data.series.cpa }], fmtLeft: (v) => fmtMoney(v, cur, { decimals: 0 }), height: 200 })}<div class="r-note">Gaps mean no conversions (cost per conversion undefined) or no data for that ${data.series.granularity}.</div></div>`;
    }
    const compRow = (key, a, bb) => `<tr><td>${esc(METRICS[key].label)}</td><td class="num">${esc(fmtMetric(key, a, cur))}</td><td class="num">${esc(fmtMetric(key, bb, cur))}</td><td class="num">${esc(fmtChange(key, change(a, bb), cur))}</td></tr>`;
    if (S.baselineComparison && !audit && data.totals.baseline) {
      const t = data.totals.current, bs = data.totals.baseline;
      const tp = perDay(t), bp = perDay(bs);
      h += `<h2>Baseline comparison</h2><p class="r-note">Original baseline: ${esc(fmtRange(m.baselinePeriod.from, m.baselinePeriod.to))}. Volume metrics are compared as daily averages because the periods differ in length.</p>
      <table><thead><tr><th>Metric</th><th class="num">This period</th><th class="num">Baseline</th><th class="num">Change</th></tr></thead><tbody>
      ${["spend", "clicks", "conversions"].map((k) => compRow(k, tp?.[k], bp?.[k]).replace(`<td>${esc(METRICS[k].label)}</td>`, `<td>${esc(METRICS[k].label)} / day</td>`)).join("")}
      ${["ctr", "cpc", "cvr", "cpa"].map((k) => compRow(k, t[k], bs[k])).join("")}
      ${isNum(bs.roas) ? compRow("roas", t.roas, bs.roas) : ""}
      </tbody></table>`;
    }
    if (S.previousComparison && !audit && data.totals.previous) {
      const t = data.totals.current, p = data.totals.previous;
      h += `<h2>Previous-period comparison</h2><p class="r-note">Previous period: ${esc(fmtRange(m.previousPeriod.from, m.previousPeriod.to))}.</p>
      <table><thead><tr><th>Metric</th><th class="num">This period</th><th class="num">Previous</th><th class="num">Change</th></tr></thead><tbody>
      ${["spend", "impressions", "clicks", "conversions", "ctr", "cpc", "cvr", "cpa"].map((k) => compRow(k, t[k], p[k])).join("")}
      ${isNum(t.qualifiedLeads) ? compRow("qualifiedLeads", t.qualifiedLeads, p.qualifiedLeads) : ""}
      </tbody></table>`;
    }
    if (S.trends && !audit && data.trendRows.length) {
      h += `<h2>Spend & conversion trends</h2><table><thead><tr><th>Period</th><th class="num">Spend</th><th class="num">Clicks</th><th class="num">Conv.</th><th class="num">Cost / conv.</th><th class="num">Conv. rate</th></tr></thead><tbody>
      ${data.trendRows.map((r) => `<tr><td>${esc(r.period)}</td><td class="num">${esc(fmtMoney(r.spend, cur))}</td><td class="num">${esc(fmtInt(r.clicks))}</td><td class="num">${esc(fmtDec(r.conversions))}</td><td class="num">${esc(fmtMoney(r.cpa, cur))}</td><td class="num">${esc(fmtPct(r.cvr))}</td></tr>`).join("")}</tbody></table>`;
      if (data.campaignRows.length > 1) {
        h += `<h3>By campaign</h3><table><thead><tr><th>Campaign</th><th class="num">Spend</th><th class="num">Clicks</th><th class="num">Conv.</th><th class="num">Cost / conv.</th><th class="num">CTR</th></tr></thead><tbody>
      ${data.campaignRows.map((r) => `<tr><td>${esc(r.name)}</td><td class="num">${esc(fmtMoney(r.spend, cur))}</td><td class="num">${esc(fmtInt(r.clicks))}</td><td class="num">${esc(fmtDec(r.conversions))}</td><td class="num">${esc(fmtMoney(r.cpa, cur))}</td><td class="num">${esc(fmtPct(r.ctr))}</td></tr>`).join("")}</tbody></table>`;
      }
    }
    if (audit && data.baselineAudit) {
      const a = data.baselineAudit;
      h += `<h2>Campaign condition at audit (${esc(fmtDate(a.auditDate))})</h2><table><thead><tr><th>Campaign</th><th>Bidding</th><th class="num">Spend</th><th class="num">Clicks</th><th class="num">Conv.</th><th class="num">Cost / conv.</th></tr></thead><tbody>
      ${(a.rows || []).map((r) => `<tr><td>${esc(r.campaign)}</td><td>${esc(r.bidding || "\u2014")}</td><td class="num">${esc(fmtMoney(r.spend, cur))}</td><td class="num">${esc(fmtInt(r.clicks))}</td><td class="num">${esc(fmtDec(r.conversions))}</td><td class="num">${esc(fmtMoney(r.conversions ? r.spend / r.conversions : null, cur))}</td></tr>`).join("")}</tbody></table>
      <div class="r-grid-2">
        ${a.searchTerms ? `<div><h3>Search terms</h3>${textBlock(a.searchTerms)}</div>` : ""}
        ${a.locationTargeting ? `<div><h3>Location targeting</h3>${textBlock(a.locationTargeting)}</div>` : ""}
        ${a.landingPage ? `<div><h3>Landing page</h3>${textBlock(a.landingPage)}</div>` : ""}
        ${a.leadQuality ? `<div><h3>Lead quality</h3>${textBlock(a.leadQuality)}</div>` : ""}
      </div>
      <p><strong>Conversion tracking at audit:</strong> ${esc(a.trackingStatus || "unknown")}</p>`;
    }
    if (S.optimizations && data.optimizations.length) {
      h += `<h2>Optimization work completed</h2><table><thead><tr><th style="width:16%">Date</th><th style="width:20%">Area</th><th>What changed</th><th style="width:14%">Status</th></tr></thead><tbody>
      ${data.optimizations.map((o) => `<tr><td>${esc(fmtDate(o.date))}</td><td>${esc(o.category)}</td><td>${esc(o.summary)}${o.outcome ? `<div class="r-note">Result: ${esc(o.outcome)}</div>` : ""}</td><td>${esc(o.status)}</td></tr>`).join("")}</tbody></table>
      <p class="r-note">Changes listed here happened before or during the period. Performance changes can have several causes; a change is not assumed to be the cause unless stated.</p>`;
    }
    if (S.keyFindings && data.text.keyFindings) h += `<h2>Key findings</h2>${textBlock(data.text.keyFindings)}`;
    if (S.aiInsights && data.ai) h += `<h2>Insights & analysis</h2>${textBlock(data.ai.text)}<p class="r-note">Reviewed and approved by your account manager on ${esc(fmtDate(data.ai.approvedAt))}.</p>`;
    if (S.challenges && data.text.challenges) h += `<h2>Challenges & limitations</h2>${textBlock(data.text.challenges)}`;
    if (S.actionPlan && (data.text.actionPlan || data.text.recommendations)) h += `<h2>Next-period action plan</h2>${textBlock(data.text.actionPlan)}${data.text.recommendations ? `<h3>Recommendations</h3>${textBlock(data.text.recommendations)}` : ""}`;
    h += `<footer class="r-foot">${S.dataSource ? `<div><strong>Data source:</strong> ${esc(data.dataSource)}</div>` : ""}
    <div>Generated ${esc(fmtDateTime(m.generatedAt, data.client.timezone))} (${esc(data.client.timezone)}). ${esc(b.footerText || "")}</div></footer>`;
    return h + "</article>";
  }
  async function standaloneHtml(data) {
    let css = "";
    css = reports_default;
    const body = renderReportHTML(data).replace(/src="logo\.svg"/g, `src="${await logoDataUrl()}"`);
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(data.meta.title)}</title>
<style>:root{--font:Inter,Arial,sans-serif;--shadow:none}body{margin:0;background:#f5f7fa;font-family:Inter,Arial,sans-serif}@page{size:A4;margin:16mm 14mm}@media print{body{background:#fff}.report-doc{box-shadow:none;padding:0}}
${css}</style></head><body><div style="padding:24px 8px">${body}</div></body></html>`;
  }
  async function logoDataUrl() {
    try {
      const svg = logo_default;
      return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
    } catch {
      return "";
    }
  }
  function reportFileName(data, pattern = "{client}-{type}-{end}") {
    const slug = (s) => String(s || "").toLowerCase().replace(/\(demo\)/g, "demo").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return pattern.replace("{client}", slug(data.client.businessName)).replace("{type}", slug(data.meta.type)).replace("{end}", data.meta.periodEnd).replace("{start}", data.meta.periodStart);
  }
  async function createDemoReport(clientId, today) {
    const client = await store.getClient(clientId);
    const settings = await store.getSettings();
    const r = newReport(client, "monthly", settings, null);
    const prev = addDays(monthStart(today), -1);
    r.periodStart = monthStart(prev);
    r.periodEnd = prev;
    r.id = "rpt_demo_monthly";
    r.title = `Monthly Performance Report \u2014 ${client.businessName}`;
    r.comparison = "both";
    r.sections.aiInsights = false;
    r.isDemo = true;
    const data = await buildReportData(r, client, settings);
    const d = draftNarrative(data);
    r.executiveSummary = `[Fictional demo report] ${d.executiveSummary}`;
    r.keyFindings = d.keyFindings;
    r.actionPlan = "- Expand the negative keyword list using the latest search terms report.\n- Launch the dedicated landing page and compare conversion rate over 4 weeks.\n- Review bidding once 30+ conversions are recorded after the tracking change.";
    await store.put("reports", clientId, r);
    await publishReport(r, client, settings, { email: "admin@demo.local" });
  }
  var REPORT_TYPES, TYPE_SECTIONS, COMPARISONS, KPI_KEYS;
  var init_reports2 = __esm({
    "js/reports.js"() {
      init_reports();
      init_logo();
      init_state();
      init_calculations();
      init_scoring();
      init_charts();
      init_utils();
      REPORT_TYPES = {
        "initial-audit": "Initial Audit Report",
        weekly: "Weekly Performance Report",
        monthly: "Monthly Performance Report",
        custom: "Custom Date-Range Report",
        optimization: "Optimization Activity Report",
        ai: "AI Analysis Report",
        executive: "Executive Summary Report"
      };
      TYPE_SECTIONS = {
        "initial-audit": { kpis: true, charts: false, baselineComparison: true, previousComparison: false, trends: false, optimizations: false, aiInsights: false },
        executive: { charts: true, trends: false, baselineComparison: true, previousComparison: true, optimizations: false, challenges: false },
        optimization: { optimizations: true, trends: false },
        ai: { aiInsights: true }
      };
      COMPARISONS = { previous: "Previous period", baseline: "Original baseline", both: "Previous period & baseline", none: "No comparison" };
      KPI_KEYS = ["spend", "clicks", "conversions", "cpa", "cvr", "ctr", "cpc", "qualifiedLeads", "costPerQualified", "roas", "impressions", "bookedJobs"];
    }
  });

  // js/demo-data.js
  var demo_data_exports = {};
  __export(demo_data_exports, {
    DEMO_ACCOUNTS: () => DEMO_ACCOUNTS,
    DEMO_PASSWORD: () => DEMO_PASSWORD,
    demoAge: () => demoAge,
    seedDemoData: () => seedDemoData
  });
  function mulberry32(seed) {
    return function() {
      let t = seed += 1831565813;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function genMetrics(c, today) {
    const rand = mulberry32(c.seed);
    const start = addDays(today, -DAYS);
    const mgmt = addDays(start, MGMT_OFFSET);
    const rows = [];
    const p = c.profile;
    const share = c.campaigns.length === 3 ? [0.5, 0.3, 0.2] : [0.6, 0.4];
    for (let i = 0; i < DAYS; i++) {
      const date = addDays(start, i);
      const progress = Math.max(0, Math.min(1, (i - MGMT_OFFSET) / 45));
      const dow = (/* @__PURE__ */ new Date(`${date}T00:00:00Z`)).getUTCDay();
      const weekend = dow === 0 || dow === 6 ? 0.72 : 1;
      c.campaigns.forEach((cmp, ci) => {
        const noise = () => 0.85 + rand() * 0.3;
        const impressions = Math.round(p.impr * share[ci] * weekend * noise());
        const ctr = (p.ctrPre + (p.ctrPost - p.ctrPre) * progress) * noise() / 100;
        const clicks = Math.max(0, Math.round(impressions * ctr));
        const cpc = (p.cpcPre + (p.cpcPost - p.cpcPre) * progress) * noise();
        const spend = round2(clicks * cpc);
        const cvr = (p.cvrPre + (p.cvrPost - p.cvrPre) * progress) * noise() / 100;
        const conversions = Math.round(clicks * cvr * 10) / 10;
        const qualRate = p.qualPre + (p.qualPost - p.qualPre) * progress;
        const qualifiedLeads = Math.round(conversions * qualRate * noise());
        const booked = Math.round(qualifiedLeads * 0.45 * noise());
        let trackingStatus = "ok";
        if (c.id === "cl_demo_harbor" && i > DAYS - 12) trackingStatus = "partial";
        if (c.id === "cl_demo_brightside" && (i === 20 || i === 21)) trackingStatus = "broken";
        rows.push({
          id: `${c.id}__${cmp.id}__${date}`,
          clientId: c.id,
          campaignId: cmp.id,
          date,
          impressions,
          clicks,
          spend,
          conversions: trackingStatus === "broken" ? 0 : conversions,
          convValue: p.value ? round2(conversions * p.value * noise()) : null,
          qualifiedLeads: c.id === "cl_demo_harbor" ? null : qualifiedLeads,
          bookedJobs: c.id === "cl_demo_brightside" ? booked : null,
          revenue: null,
          trackingStatus,
          source: "demo",
          importedAt: nowIso(),
          isDemo: true
        });
      });
    }
    return { rows, start, mgmt };
  }
  function baselineFrom(c, rows, start, mgmt) {
    const from = addDays(mgmt, -30);
    const to = addDays(mgmt, -1);
    const inRange = rows.filter((r) => r.date >= from && r.date <= to);
    const campaignRows = c.campaigns.map((cmp) => {
      const list = inRange.filter((r) => r.campaignId === cmp.id);
      const s = (f2) => round2(list.reduce((a, r) => a + (r[f2] || 0), 0));
      return {
        campaign: cmp.name,
        adGroup: "All ad groups",
        status: "Enabled",
        type: cmp.type,
        bidding: cmp.type === "Performance Max" ? "Maximize conversions" : "Manual CPC",
        dailyBudget: round2(c.dailyBudget * (cmp.type === "Performance Max" ? 0.2 : 0.4)),
        impressions: s("impressions"),
        clicks: s("clicks"),
        spend: s("spend"),
        conversions: s("conversions"),
        convValue: c.profile.value ? s("convValue") : null,
        searchIS: cmp.type === "Search" ? 38 + c.seed % 10 : null
      };
    });
    const qual = inRange.reduce((a, r) => a + (r.qualifiedLeads || 0), 0);
    return {
      id: `bl_${c.id}_original`,
      clientId: c.id,
      isOriginal: true,
      locked: true,
      auditDate: mgmt,
      periodStart: from,
      periodEnd: to,
      rows: campaignRows,
      qualifiedLeads: c.id === "cl_demo_harbor" ? null : qual,
      searchTerms: "DEMO: ~30% of spend on irrelevant terms (e.g. 'plumbing jobs', 'DIY').",
      negativeKeywords: "Only 6 negatives; no shared negative list.",
      locationTargeting: "'Presence or interest' \u2014 clicks from outside the service area.",
      adStrength: "2 of 3 RSAs rated 'Poor'; no sitelinks or call assets.",
      trackingStatus: c.id === "cl_demo_harbor" ? "partial" : "ok",
      trackingNotes: "Form submits tracked via GA4 import; calls tracked via call assets only.",
      landingPage: "Generic home page; slow on mobile (LCP ~4.5s).",
      leadQuality: "Client reports many price-shoppers and out-of-area calls.",
      issues: "Broad match without negatives; location setting too wide; weak ads; no call tracking from website.",
      recommendations: "Add negatives, switch to 'Presence', rebuild RSAs, add call tracking, dedicated landing page.",
      notes: "Baseline captured before management started (fictional).",
      isDemo: true,
      createdAt: nowIso()
    };
  }
  function optimizationLogs(c, mgmt) {
    const base = [
      ["Negative keywords", "Negative keyword list", "6 negatives", "142 negatives in shared list", "Search terms showed spend on job-seeker and DIY queries.", "Search terms report: ~30% of baseline spend irrelevant.", "Lower wasted spend; higher conversion rate.", "High", 0, "Successful", "Irrelevant spend share dropped in search terms report.", true],
      ["Geographic targeting", "Location option", "Presence or interest", "Presence: people in or regularly in targeted locations", "Out-of-area calls reported by the client.", "Location report: 18% of clicks outside service area.", "Fewer out-of-area leads.", "High", 1, "Successful", "Out-of-area clicks fell below 3%.", true],
      ["Ad copy", "Responsive search ads", "2 'Poor' RSAs", "3 new RSAs with service + area headlines", "Low CTR and weak ad strength.", "Ad strength 'Poor'; CTR below account average.", "Higher CTR and relevance.", "Medium", 3, "Monitoring", "", true],
      ["Conversion tracking", "Website call tracking", "Not tracked", "Google forwarding number on site", "Calls from website were not counted.", "Client reported calls not visible in Google Ads.", "More complete conversion data.", "High", 5, "Completed", "Calls now recorded; note: conversion counts are not directly comparable before/after this change.", true],
      ["Bidding strategy", "Bidding", "Manual CPC", "Maximize conversions (tCPA later)", "Enough conversion volume after tracking fix.", "30+ conversions in 30 days after tracking fix.", "Lower CPA at similar volume.", "Medium", 21, "Monitoring", "", false],
      ["Landing page changes", "Landing page", "Home page", "Dedicated service landing page", "Generic page with slow mobile load.", "Mobile LCP ~4.5s; bounce rate high.", "Higher conversion rate.", "Medium", 30, "In progress", "", false],
      ["Budget", "Daily budget", "", "", "Planned budget review once CPA stabilises.", "", "Scale proven campaigns.", "Low", 70, "Planned", "", false]
    ];
    return base.slice(0, c.id === "cl_demo_brightside" ? 7 : c.id === "cl_demo_northgate" ? 4 : 3).map((b, i) => {
      const date = addDays(mgmt, b[8]);
      return {
        id: `opt_${c.id}_${i}`,
        clientId: c.id,
        campaignId: c.campaigns[i % c.campaigns.length].id,
        dateTime: `${date}T10:${String(10 + i).padStart(2, "0")}:00`,
        date,
        category: b[0],
        field: b[1],
        previousValue: b[2],
        newValue: b[3],
        reason: b[4],
        evidence: b[5],
        expectedOutcome: b[6],
        priority: b[7],
        reviewDate: addDays(date, 14),
        status: b[9],
        actualOutcome: b[10],
        publishable: b[11],
        clientSummary: b[11] ? `${b[0]}: ${b[4].replace(/\.$/, "")} \u2014 changed to ${b[3]}.` : "",
        history: [],
        isDemo: true,
        createdAt: nowIso()
      };
    });
  }
  async function seedDemoData() {
    const today = todayInTz("UTC");
    for (const c of CLIENTS) {
      const { rows, start, mgmt } = genMetrics(c, today);
      const { profile, seed, ...clientFields } = c;
      const client = {
        ...clientFields,
        status: "active",
        campaignStart: addDays(start, -200),
        managementStart: mgmt,
        logo: "",
        isDemo: true,
        createdAt: nowIso()
      };
      await store.saveClient(client, { action: "demo.seed" });
      await store.putMany("dailyMetrics", c.id, rows);
      await store.put("baselines", c.id, baselineFrom(c, rows, start, mgmt));
      await store.putMany("optimizationLogs", c.id, optimizationLogs(c, mgmt));
      await store.put("importHistory", c.id, {
        id: `imp_${c.id}_demo`,
        at: nowIso(),
        source: "Demo generator",
        fileName: "(generated)",
        type: "dailyMetrics",
        imported: rows.length,
        updated: 0,
        skipped: 0,
        failed: 0,
        isDemo: true
      });
    }
    const pw = await sha256Hex(DEMO_PASSWORD);
    await store.saveUser({ id: "u_demo_admin", email: "admin@demo.local", name: "Masud (Admin, demo)", role: "admin", clientIds: [], passwordHash: pw, isDemo: true });
    await store.saveUser({ id: "u_demo_brightside", email: "brightside@demo.local", name: "Brightside (client, demo)", role: "client", clientId: "cl_demo_brightside", passwordHash: pw, isDemo: true });
    await store.saveUser({ id: "u_demo_northgate", email: "northgate@demo.local", name: "Northgate (client, demo)", role: "client", clientId: "cl_demo_northgate", passwordHash: pw, isDemo: true });
    await store.saveUser({ id: "u_demo_harbor", email: "harbor@demo.local", name: "Harbor Lane (client, demo)", role: "client", clientId: "cl_demo_harbor", passwordHash: pw, isDemo: true });
    const { createDemoReport: createDemoReport2 } = await Promise.resolve().then(() => (init_reports2(), reports_exports));
    await createDemoReport2("cl_demo_brightside", today);
    localAdapter.markSeeded();
  }
  var round2, DEMO_PASSWORD, CLIENTS, DAYS, MGMT_OFFSET, DEMO_ACCOUNTS, demoAge;
  var init_demo_data = __esm({
    "js/demo-data.js"() {
      init_state();
      init_calculations();
      init_utils();
      round2 = (v) => Math.round(v * 100) / 100;
      DEMO_PASSWORD = "demo1234";
      CLIENTS = [
        {
          id: "cl_demo_brightside",
          clientName: "Alex Carter (fictional)",
          businessName: "Brightside Plumbing Co. (Demo)",
          website: "https://example.com/brightside",
          email: "owner@brightside.example",
          industry: "Home services \u2014 plumbing",
          country: "United States",
          timezone: "America/New_York",
          currency: "USD",
          locations: "Albany, Troy, Schenectady (fictional service area)",
          customerId: "123-456-7890",
          campaigns: [
            { id: "cmp_bs_emerg", name: "Search \u2013 Emergency Plumbing", type: "Search" },
            { id: "cmp_bs_heater", name: "Search \u2013 Water Heaters", type: "Search" },
            { id: "cmp_bs_pmax", name: "PMax \u2013 Plumbing Services", type: "Performance Max" }
          ],
          dailyBudget: 160,
          monthlyBudget: 4800,
          targetCpa: 55,
          targetCvr: 9,
          targetMonthlyConversions: 90,
          leadCriteria: "Phone call > 60s or form with a valid service address inside the service area.",
          portal: { accessEnabled: true, allowPdf: true },
          internalNotes: "DEMO: Owner prefers phone updates on Fridays. Watch PMax for brand cannibalisation.",
          profile: { impr: 2600, ctrPre: 3.6, ctrPost: 5.4, cpcPre: 6.4, cpcPost: 5.2, cvrPre: 5.5, cvrPost: 10.5, qualPre: 0.55, qualPost: 0.78, value: 420 },
          seed: 11
        },
        {
          id: "cl_demo_northgate",
          clientName: "Dr. Priya Shah (fictional)",
          businessName: "Northgate Dental Studio (Demo)",
          website: "https://example.com/northgate",
          email: "frontdesk@northgate.example",
          industry: "Healthcare \u2014 dental clinic",
          country: "United States",
          timezone: "America/Chicago",
          currency: "USD",
          locations: "Northgate district (fictional)",
          customerId: "234-567-8901",
          campaigns: [
            { id: "cmp_ng_implants", name: "Search \u2013 Dental Implants", type: "Search" },
            { id: "cmp_ng_invis", name: "Search \u2013 Invisalign", type: "Search" }
          ],
          dailyBudget: 70,
          monthlyBudget: 2100,
          targetCpa: 85,
          targetCvr: 6,
          targetMonthlyConversions: 28,
          leadCriteria: "Booked consultation request with phone number.",
          portal: { accessEnabled: true, allowPdf: true },
          internalNotes: "DEMO: Implant leads are high value; clinic tracks booked consults in a spreadsheet.",
          profile: { impr: 900, ctrPre: 4.2, ctrPost: 4.9, cpcPre: 7.8, cpcPost: 7.1, cvrPre: 4, cvrPost: 5.6, qualPre: 0.6, qualPost: 0.7, value: 0 },
          seed: 23
        },
        {
          id: "cl_demo_harbor",
          clientName: "Sam Ellis (fictional)",
          businessName: "Harbor Lane Roofing Ltd (Demo)",
          website: "https://example.com/harborlane",
          email: "office@harborlane.example",
          industry: "Home services \u2014 roofing",
          country: "United Kingdom",
          timezone: "Europe/London",
          currency: "GBP",
          locations: "Bristol & Bath (fictional)",
          customerId: "345-678-9012",
          campaigns: [
            { id: "cmp_hl_repair", name: "Search \u2013 Roof Repair", type: "Search" },
            { id: "cmp_hl_new", name: "Search \u2013 New Roofs", type: "Search" }
          ],
          dailyBudget: 90,
          monthlyBudget: 2700,
          targetCpa: 40,
          targetCvr: 8,
          targetMonthlyConversions: 60,
          leadCriteria: "Quote request with postcode in service area.",
          portal: { accessEnabled: false, allowPdf: false },
          internalNotes: "DEMO: Call tracking number changed recently \u2014 conversion tracking flagged as partial.",
          profile: { impr: 1500, ctrPre: 4, ctrPost: 4.6, cpcPre: 3.1, cpcPost: 2.9, cvrPre: 6, cvrPost: 7.2, qualPre: 0.5, qualPost: 0.6, value: 0 },
          seed: 37
        }
      ];
      DAYS = 150;
      MGMT_OFFSET = 60;
      DEMO_ACCOUNTS = [
        { email: "admin@demo.local", label: "Administrator", note: "Full access" },
        { email: "brightside@demo.local", label: "Client: Brightside Plumbing", note: "Has a published report" },
        { email: "northgate@demo.local", label: "Client: Northgate Dental", note: "Portal on, nothing published yet" },
        { email: "harbor@demo.local", label: "Client: Harbor Lane Roofing", note: "Portal access disabled" }
      ];
      demoAge = (today) => diffDays(addDays(today, -DAYS), today);
    }
  });

  // js/app.js
  function applyTheme(theme) {
    const t = theme === "system" ? matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : theme;
    document.documentElement.dataset.theme = t === "dark" ? "dark" : "light";
  }
  async function ensureLocalSeed() {
    if (getMode() !== "local") return;
    if (localAdapter.exportAll().users.length > 0) return;
    const { seedDemoData: seedDemoData2 } = await Promise.resolve().then(() => (init_demo_data(), demo_data_exports));
    await seedDemoData2();
  }
  function modeIndicatorHtml(st2) {
    const cls = st2.state === "local" ? "local" : st2.state === "connected" ? "connected" : st2.state === "pending" ? "" : "error";
    return `<a class="mode-indicator ${cls}" href="firebase-setup.html" title="${esc(st2.message || st2.label)}" data-testid="mode-indicator"><span class="dot"></span>${esc(st2.label)}</a>`;
  }
  async function initAdminPage({ page, title }) {
    const root4 = document.getElementById("app");
    root4.innerHTML = `<div class="loading"><div class="spinner"></div>Loading\u2026</div>`;
    try {
      await ensureLocalSeed();
      await store.ready();
    } catch (e) {
      renderFatal(root4, e);
      return null;
    }
    const session = await requireRole("admin");
    if (!session) return null;
    let settings;
    try {
      settings = await store.getSettings();
    } catch (e) {
      renderFatal(root4, e);
      return null;
    }
    applyTheme(settings.theme);
    localStorage.setItem("mppc.theme", settings.theme);
    setFormatPrefs({ dateFormat: settings.dateFormat, currencyDisplay: settings.currencyDisplay });
    const collapsed = localStorage.getItem("mppc.sidebar") === "collapsed";
    const clientParam = qs("client");
    const navHtml = NAV.map((n) => {
      if (n.section) return `<div class="nav-section">${esc(n.section)}</div>`;
      const href = n.clientScoped && clientParam ? `${n.href}?client=${encodeURIComponent(clientParam)}` : n.href;
      return `<a href="${href}" class="${n.id === page ? "active" : ""}" title="${esc(n.label)}" ${n.id === page ? 'aria-current="page"' : ""}>${icon(n.icon)}<span class="nav-label">${esc(n.label)}</span></a>`;
    }).join("");
    root4.innerHTML = `
  <div class="app ${collapsed ? "sidebar-collapsed" : ""}" id="shell">
    <aside class="sidebar" aria-label="Main navigation">
      <div class="sidebar-brand">
        <img src="${esc(settings.logo || "logo.svg")}" alt="">
        <div class="brand-text"><strong>Masud PPC</strong><span>Google Ads Intelligence &amp; Reporting</span></div>
      </div>
      <nav class="nav">${navHtml}</nav>
      <div class="sidebar-footer">
        <button class="sidebar-collapse-btn" id="collapseBtn" type="button" aria-label="Collapse sidebar">${icon("chevronLeft")}<span class="nav-label">Collapse</span></button>
      </div>
    </aside>
    <div class="scrim" id="scrim"></div>
    <div class="main">
      <header class="topbar">
        <button class="btn btn-ghost btn-icon menu-btn" id="menuBtn" type="button" aria-label="Open navigation">${icon("menu")}</button>
        <h1 class="page-title">${esc(title)}</h1>
        <div class="spacer"></div>
        <span id="modeSlot">${modeIndicatorHtml(getStatus())}</span>
        <button class="user-chip" id="userBtn" type="button" title="Sign out">
          <span class="avatar">${esc(initials(session.name))}</span>
          <span class="user-name small">${esc(session.name)}</span>
          ${icon("logout")}
        </button>
      </header>
      ${getMode() === "local" ? `<div class="demo-ribbon no-print">${icon("info")}<span><strong>Local Demo Mode</strong> \u2014 data is saved in this browser only. Records marked \u201C(Demo)\u201D are fictional. <a href="firebase-setup.html">Connect Firebase</a> for secure multi-user storage.</span></div>` : ""}
      <main class="content" id="content" tabindex="-1"></main>
    </div>
  </div>
  <div class="toast-stack" id="toasts" role="status" aria-live="polite"></div>`;
    onStatus((st2) => {
      const slot = $("#modeSlot");
      if (slot) slot.innerHTML = modeIndicatorHtml(st2);
    });
    const shell2 = $("#shell");
    $("#collapseBtn").addEventListener("click", () => {
      shell2.classList.toggle("sidebar-collapsed");
      localStorage.setItem("mppc.sidebar", shell2.classList.contains("sidebar-collapsed") ? "collapsed" : "open");
    });
    $("#menuBtn").addEventListener("click", () => shell2.classList.add("nav-open"));
    $("#scrim").addEventListener("click", () => shell2.classList.remove("nav-open"));
    $("#userBtn").addEventListener("click", async () => {
      if (await confirmDialog({ title: "Sign out?", message: "You will be returned to the sign-in page.", confirmText: "Sign out" })) {
        await logout();
        location.href = "login.html";
      }
    });
    return { session, settings, content: $("#content") };
  }
  function renderFatal(root4, e) {
    const mode = getMode();
    root4.innerHTML = `
    <div class="standalone"><div class="standalone-header"><img src="logo.svg" alt=""><strong>Masud PPC</strong></div>
    <div class="content" style="max-width:720px">
      <div class="alert alert-danger" role="alert">${icon("alert")}<div>
        <p><strong>${mode === "firebase" ? "Connection Error \u2014 data could not be loaded" : "The application could not start"}</strong></p>
        <p>${esc(e?.message || e)}</p>
        <p class="small">Nothing was saved or changed. ${mode === "firebase" ? "The app does not fall back to local storage automatically, to avoid splitting your data between two places." : ""}</p>
      </div></div>
      <div class="flex gap-1 wrap">
        <a class="btn btn-primary" href="firebase-setup.html">Open Firebase Setup</a>
        <button class="btn" onclick="location.reload()">Retry</button>
      </div>
    </div></div>`;
  }
  function toast(message, type = "info", ms = 4200) {
    let stack = $("#toasts");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      stack.id = "toasts";
      stack.setAttribute("role", "status");
      stack.setAttribute("aria-live", "polite");
      document.body.appendChild(stack);
    }
    const el = document.createElement("div");
    el.className = `toast ${type}`;
    el.innerHTML = `<span>${esc(message)}</span><button aria-label="Dismiss">\xD7</button>`;
    el.querySelector("button").onclick = () => el.remove();
    stack.appendChild(el);
    if (ms) setTimeout(() => el.remove(), type === "error" ? ms * 2 : ms);
  }
  function openModal({ title, body, footer = "", size = "", onClose }) {
    const back = document.createElement("div");
    back.className = "modal-backdrop";
    back.innerHTML = `
    <div class="modal ${size}" role="dialog" aria-modal="true" aria-labelledby="mTitle">
      <div class="modal-header"><h2 id="mTitle">${esc(title)}</h2>
        <button class="btn btn-ghost btn-icon btn-sm" data-close aria-label="Close">${icon("x")}</button></div>
      <div class="modal-body">${body}</div>
      ${footer ? `<div class="modal-footer">${footer}</div>` : ""}
    </div>`;
    const prevFocus = document.activeElement;
    document.body.appendChild(back);
    document.body.style.overflow = "hidden";
    const close = () => {
      back.remove();
      if (!$(".modal-backdrop")) document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      prevFocus?.focus?.();
      onClose?.();
    };
    const onKey = (e) => {
      if (e.key === "Escape" && back === $$(".modal-backdrop").pop()) close();
    };
    document.addEventListener("keydown", onKey);
    back.addEventListener("mousedown", (e) => {
      if (e.target === back) close();
    });
    $$("[data-close]", back).forEach((b) => b.addEventListener("click", close));
    setTimeout(() => (back.querySelector("input, select, textarea, button:not([data-close])") || back.querySelector(".modal"))?.focus?.(), 30);
    return { el: back, close };
  }
  function confirmDialog({ title = "Are you sure?", message = "", confirmText = "Confirm", danger = false, details = "" }) {
    return new Promise((resolve) => {
      let done = false;
      const m = openModal({
        title,
        body: `<p>${esc(message)}</p>${details}`,
        footer: `<button class="btn" data-close>Cancel</button><button class="btn ${danger ? "btn-danger solid" : "btn-primary"}" data-ok>${esc(confirmText)}</button>`,
        onClose: () => {
          if (!done) resolve(false);
        }
      });
      m.el.querySelector("[data-ok]").addEventListener("click", () => {
        done = true;
        m.close();
        resolve(true);
      });
    });
  }
  async function withLoading(btn, fn, { errorPrefix = "" } = {}) {
    btn?.classList.add("is-loading");
    try {
      return await fn();
    } catch (e) {
      console.error(e);
      toast(`${errorPrefix}${e.message || e}`, "error");
      return void 0;
    } finally {
      btn?.classList.remove("is-loading");
    }
  }
  function emptyState({ title, text = "", action = "", iconName = "file" }) {
    return `<div class="empty">${icon(iconName)}<h3>${esc(title)}</h3><p>${esc(text)}</p>${action}</div>`;
  }
  function workspaceHeader(client, activeTab) {
    const logo = client.logo ? `<img src="${esc(client.logo)}" alt="">` : esc(initials(client.businessName));
    return `
  <div class="workspace-head">
    <div class="client-logo lg">${logo}</div>
    <div class="grow">
      <h1>${esc(client.businessName)} ${client.status === "archived" ? '<span class="badge badge-warning">Archived</span>' : ""} ${client.isDemo ? '<span class="badge plain">Demo data</span>' : ""}</h1>
      <div class="meta"><span>${esc(client.industry || "\u2014")}</span><span>${esc(client.currency)} \xB7 ${esc(client.timezone)}</span><span>Customer ID ${esc(client.customerId || "\u2014")}</span><a href="clients.html">\u2190 All clients</a></div>
    </div>
  </div>
  <nav class="tabs" aria-label="Client workspace">
    ${WORKSPACE_TABS.map(([k, label, href]) => `<a href="${href(encodeURIComponent(client.id))}" class="${k === activeTab ? "active" : ""}">${esc(label)}</a>`).join("")}
  </nav>`;
  }
  async function resolveClientOrPicker(content, { pageTitle, intro, href }) {
    const id = qs("client");
    const clients = await store.listClients();
    if (id) {
      const c = clients.find((x) => x.id === id);
      if (c) return c;
      content.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>Client not found. It may have been removed or you may not have access.</div></div>`;
      return null;
    }
    const active = clients.filter((c) => c.status !== "archived");
    content.innerHTML = `
    <div class="page-header"><div><h1>${esc(pageTitle)}</h1><p>${esc(intro)}</p></div></div>
    ${active.length ? `<div class="client-grid">${active.map((c) => `
      <a class="card client-card" href="${href}?client=${encodeURIComponent(c.id)}">
        <div class="head"><div class="client-logo">${c.logo ? `<img src="${esc(c.logo)}" alt="">` : esc(initials(c.businessName))}</div>
        <div><div class="name">${esc(c.businessName)}</div><div class="small subtle">${esc(c.industry || "")}</div></div></div>
      </a>`).join("")}</div>` : emptyState({ title: "No clients yet", text: "Create a client first.", action: `<a class="btn btn-primary" href="clients.html?new=1">${icon("plus")}Add client</a>`, iconName: "clients" })}`;
    return null;
  }
  function campaignName(client, campaignId) {
    return client?.campaigns?.find((c) => c.id === campaignId)?.name || campaignId || "\u2014";
  }
  function saveStatusEl() {
    const el = document.createElement("span");
    el.className = "save-status";
    el.setAttribute("aria-live", "polite");
    return {
      el,
      saving() {
        el.className = "save-status saving";
        el.textContent = "Saving\u2026";
      },
      saved(msg = "All changes saved") {
        el.className = "save-status saved";
        el.textContent = `\u2713 ${msg}`;
      },
      error(msg = "Not saved") {
        el.className = "save-status error";
        el.textContent = `\u26A0 ${msg}`;
      },
      dirty() {
        el.className = "save-status";
        el.textContent = "Unsaved changes";
      }
    };
  }
  var NAV, loadingHtml, WORKSPACE_TABS;
  var init_app = __esm({
    "js/app.js"() {
      init_icons();
      init_utils();
      init_state();
      init_auth();
      init_calculations();
      NAV = [
        { section: "Overview" },
        { id: "dashboard", href: "dashboard.html", label: "Dashboard", icon: "dashboard" },
        { id: "clients", href: "clients.html", label: "Clients", icon: "clients" },
        { section: "Client work" },
        { id: "baseline", href: "baseline-audit.html", label: "Baseline Audit", icon: "audit", clientScoped: true },
        { id: "performance", href: "daily-performance.html", label: "Daily Performance", icon: "chart", clientScoped: true },
        { id: "optimization", href: "optimization-log.html", label: "Optimization Log", icon: "log", clientScoped: true },
        { id: "ai", href: "ai-analysis.html", label: "AI Analysis", icon: "ai", clientScoped: true },
        { id: "reports", href: "reports.html", label: "Reports", icon: "report", clientScoped: true },
        { section: "System" },
        { id: "settings", href: "settings.html", label: "Settings", icon: "settings" },
        { id: "firebase", href: "firebase-setup.html", label: "Firebase Setup", icon: "firebase" }
      ];
      applyTheme(localStorage.getItem("mppc.theme") || "light");
      loadingHtml = (t = "Loading\u2026") => `<div class="loading"><div class="spinner"></div>${esc(t)}</div>`;
      WORKSPACE_TABS = [
        ["overview", "Overview", (id) => `client-details.html?id=${id}`],
        ["audit", "Initial Audit", (id) => `baseline-audit.html?client=${id}`],
        ["performance", "Performance", (id) => `daily-performance.html?client=${id}`],
        ["optimization", "Optimization Log", (id) => `optimization-log.html?client=${id}`],
        ["ai", "AI Analysis", (id) => `ai-analysis.html?client=${id}`],
        ["reports", "Reports", (id) => `reports.html?client=${id}`],
        ["settings", "Client Settings", (id) => `client-details.html?id=${id}&tab=settings`]
      ];
    }
  });

  // js/ai-analysis.js
  function buildAnalysisInput({ client, range, rows, baseline, logs, settings, today }) {
    const prevP = previousPeriod(range);
    const cur = rows.filter((r) => r.date >= range.from && r.date <= range.to);
    const prev = rows.filter((r) => r.date >= prevP.from && r.date <= prevP.to);
    const t = aggregate(cur), p = aggregate(prev), b = baselineTotals(baseline);
    const score = scoreWindow({ rows: cur, prevRows: prev, client, baseline, range, cfg: settings.scoring, today });
    const ch = (k, a, bb) => {
      const c = change(a?.[k], bb?.[k]);
      return { abs: r2(c.abs), pct: r2(c.pct) };
    };
    const tPD = perDay(t), bPD = b ? perDay(b) : null;
    const byCampaign = (client.campaigns || []).map((c) => {
      const ct = aggregate(cur.filter((r) => r.campaignId === c.id));
      const cp = aggregate(prev.filter((r) => r.campaignId === c.id));
      return { name: c.name, type: c.type, measured: pick(ct), calculated: derived(ct), previousMeasured: pick(cp), previousCalculated: derived(cp) };
    }).filter((c) => c.measured.clicks || c.previousMeasured.clicks);
    const windowLogs = logs.filter((l) => (l.date || "") >= addDays(range.from, -30) && (l.date || "") <= range.to).map((l) => ({ date: l.date, campaign: client.campaigns?.find((c) => c.id === l.campaignId)?.name || "Account-wide", category: l.category, field: l.field, previousValue: l.previousValue, newValue: l.newValue, reason: l.reason, expectedOutcome: l.expectedOutcome, actualOutcome: l.actualOutcome, status: l.status }));
    return {
      schema: 1,
      client: { businessName: client.businessName, industry: client.industry, currency: client.currency, timezone: client.timezone, locations: client.locations, leadCriteria: client.leadCriteria },
      targets: { targetCpa: client.targetCpa ?? null, targetCvr: client.targetCvr ?? null, targetMonthlyConversions: client.targetMonthlyConversions ?? null, dailyBudget: client.dailyBudget ?? null, monthlyBudget: client.monthlyBudget ?? null },
      period: { from: range.from, to: range.to, days: range.days },
      previousPeriod: { from: prevP.from, to: prevP.to },
      baselinePeriod: baseline ? { from: baseline.periodStart, to: baseline.periodEnd, trackingStatus: baseline.trackingStatus, issues: baseline.issues || "" } : null,
      measured: { current: pick(t), previous: pick(p), baseline: b ? pick(b) : null },
      calculated: {
        current: derived(t),
        previous: derived(p),
        baseline: b ? derived(b) : null,
        changeVsPrevious: Object.fromEntries(["spend", "clicks", "conversions", "qualifiedLeads"].map((k) => [k, ch(k, t, p)]).concat(["ctr", "cpc", "cvr", "cpa", "roas"].map((k) => [k, ch(k, t, p)]))),
        changeVsBaseline: b ? Object.fromEntries(["spend", "clicks", "conversions"].map((k) => [`${k}PerDay`, ch(k, tPD, bPD)]).concat(["ctr", "cpc", "cvr", "cpa"].map((k) => [k, ch(k, t, b)]))) : null,
        score: { status: score.status, score: score.score, label: score.label, factors: score.factors.map((f2) => ({ factor: f2.label, score: f2.score, available: f2.available })) }
      },
      tracking: { daysWithData: t.days, healthyDays: t.trackingOkDays, issueDays: t.trackingIssueDays, qualifiedLeadsTracked: t.qualifiedLeads !== null, bookedJobsTracked: t.bookedJobs !== null },
      campaigns: byCampaign,
      optimizationHistory: windowLogs,
      dataWarnings: score.flags.map((f2) => f2.text).concat(score.status === "not-rated" ? score.explanation : []),
      rules: [
        "Use only the numbers provided. Never invent conversions, changes, causes or results.",
        "Label every statement as MEASURED (raw data), CALCULATED (derived metric) or HYPOTHESIS (possible explanation).",
        "Do not claim an optimization caused a result; at most say the timing is consistent with it and list other changes in the window.",
        "If data is insufficient (few conversions, tracking issues, short period), say so explicitly and request the specific data needed.",
        "Lower CPC alone is not an improvement unless qualified leads or CPA improved."
      ]
    };
  }
  var AI_KEY_LS = "mppc.aiKey";
  var AI_DEFAULT_MODELS = { gemini: "gemini-2.5-flash", openai: "gpt-4o-mini", xai: "grok-4" };
  var aiSvc = (c) => c && (c.service === "openai" || c.service === "xai") ? c.service : "gemini";
  var AI_SVC_NAME = { gemini: "Gemini", openai: "OpenAI", xai: "xAI Grok" };
  function looksLikeSecret(v) {
    return /^(sk-|sk_|AIza|gsk_|xai-)/i.test(String(v || "").trim()) || String(v || "").trim().length > 80;
  }
  function getAiLocalConfig() {
    try {
      return JSON.parse(localStorage.getItem(AI_KEY_LS) || "{}");
    } catch (e) {
      return {};
    }
  }
  function aiSystemPrompt() {
    return [
      "You are a senior Google Ads analyst writing for a PPC consultant. You receive a JSON object with the client's measured and calculated performance data.",
      "Reply with ONE JSON object only (no markdown, no code fences) with exactly these keys:",
      '{"executiveSummary": string,',
      ' "improved": [{"text": string, "basis": "MEASURED"|"CALCULATED"}],',
      ' "deteriorated": [{"text": string, "basis": "MEASURED"|"CALCULATED"}],',
      ' "potentialCauses": [{"text": string}],',
      ' "investigate": [{"text": string, "basis": "MEASURED"|"CALCULATED"|"HYPOTHESIS"}],',
      ' "recommendations": [{"title": string, "supportingData": string, "reason": string, "expectedBenefit": string, "priority": "High"|"Medium"|"Low", "confidence": "High"|"Medium"|"Low", "needsMoreData": boolean, "dataNeeded": string, "reviewDate": "YYYY-MM-DD"}],',
      ' "risks": [string],',
      ' "clientExplanation": string (plain, friendly, non-technical, for the client),',
      ' "dataSufficiency": {"sufficient": boolean, "notes": string}}',
      "Follow the rules array inside the input strictly."
    ].join("\n");
  }
  function parseAiJson(text) {
    let t = String(text || "").trim().replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
    try {
      return JSON.parse(t);
    } catch (e) {
      const a = t.indexOf("{"), b = t.lastIndexOf("}");
      if (a >= 0 && b > a) return JSON.parse(t.slice(a, b + 1));
      throw new Error("The AI answered, but not in JSON format. Try again.");
    }
  }
  async function aiFetchJson(url, init, label) {
    let res;
    try {
      res = await fetch(url, init);
    } catch (e) {
      throw new AiUnavailableError(`Could not reach ${label}. Check your internet connection / ad-blocker. (${e.message})`);
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const msg = data?.error?.message || data?.message || res.statusText;
      if (res.status === 401 || res.status === 403 || res.status === 400 && /api key|API_KEY/i.test(msg)) throw new AiUnavailableError(`${label} rejected the API key (${res.status}): ${msg}`);
      if (res.status === 429) throw new AiUnavailableError(`${label}: quota / rate limit reached (429). ${msg}`);
      throw new AiUnavailableError(`${label} error ${res.status}: ${msg}`);
    }
    return data;
  }
  async function runDirectAi(input) {
    const cfg = getAiLocalConfig();
    if (!cfg.apiKey) throw new AiUnavailableError("No API key saved in this browser. Open Settings → Integrations → AI provider, choose a service, paste the key into the API key box and Save.");
    const service = aiSvc(cfg);
    const model = (cfg.model || AI_DEFAULT_MODELS[service]).trim();
    const system = aiSystemPrompt();
    const user = "Analyse this account data and return the JSON object.\n\n" + JSON.stringify(input);
    let text;
    if (service === "gemini") {
      const data = await aiFetchJson(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": cfg.apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: [{ role: "user", parts: [{ text: user }] }],
          generationConfig: { responseMimeType: "application/json", temperature: 0.2 }
        })
      }, "Gemini");
      text = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("");
      if (!text) throw new AiUnavailableError(`Gemini returned no text (${data.promptFeedback?.blockReason || data.candidates?.[0]?.finishReason || "empty response"}).`);
    } else {
      const data = await aiFetchJson(service === "xai" ? "https://api.x.ai/v1/chat/completions" : "https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${cfg.apiKey}` },
        body: JSON.stringify({ model, temperature: 0.2, response_format: { type: "json_object" }, messages: [{ role: "system", content: system }, { role: "user", content: user }] })
      }, AI_SVC_NAME[service]);
      text = data.choices?.[0]?.message?.content || "";
      if (!text) throw new AiUnavailableError(`${AI_SVC_NAME[service]} returned an empty response.`);
    }
    const output = parseAiJson(text);
    if (!output?.executiveSummary) throw new Error("The AI response was empty or not in the expected format.");
    return { output: normalizeOutput(output), provider: `${AI_SVC_NAME[service]} (direct)`, model };
  }
  async function runAiAnalysis(input, settings) {
    const prov = settings.ai?.provider;
    if (prov === "direct") return runDirectAi(input);
    if (prov !== "cloud-function") throw new AiUnavailableError("No AI provider is configured. Open Settings → Integrations → AI provider, choose “Direct API key”, paste your xAI / Gemini / OpenAI key and Save.");
    if (getMode() !== "firebase") throw new AiUnavailableError("The Cloud Function provider only works in Firebase mode. Use “Direct API key” in Settings → Integrations, or switch to Firebase mode.");
    const fname = String(settings.ai.functionName || "aiAnalyze").trim();
    if (looksLikeSecret(fname) || !/^[A-Za-z][A-Za-z0-9_-]{0,62}$/.test(fname)) throw new AiUnavailableError("The “Function name” in Settings is not a valid function name (it looks like an API key was pasted there). Set it to aiAnalyze, or use “Direct API key” and paste the key into the API key box.");
    const { callFunction: callFunction2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
    try {
      const res = await callFunction2(fname, { input });
      if (!res?.output?.executiveSummary) throw new Error("The AI response was empty or not in the expected format.");
      return { output: normalizeOutput(res.output), provider: res.provider || "unknown", model: res.model || "" };
    } catch (e) {
      if (/not-found|unavailable|internal|failed-precondition/i.test(e.code || "") || /not found/i.test(e.message)) throw new AiUnavailableError(`AI provider unavailable: ${e.message}. (Is the Cloud Function "${fname}" deployed? See FUNCTIONS-README.md.)`);
      throw e;
    }
  }
  function normalizeOutput(o) {
    const arr = (x) => Array.isArray(x) ? x : [];
    return {
      executiveSummary: String(o.executiveSummary || ""),
      improved: arr(o.improved).map((x) => ({ text: String(x.text || x), basis: x.basis || "CALCULATED" })),
      deteriorated: arr(o.deteriorated).map((x) => ({ text: String(x.text || x), basis: x.basis || "CALCULATED" })),
      potentialCauses: arr(o.potentialCauses).map((x) => ({ text: String(x.text || x), basis: "HYPOTHESIS" })),
      investigate: arr(o.investigate).map((x) => ({ text: String(x.text || x), basis: x.basis || "HYPOTHESIS" })),
      recommendations: arr(o.recommendations).map((x) => ({
        title: String(x.title || ""),
        supportingData: String(x.supportingData || ""),
        reason: String(x.reason || ""),
        expectedBenefit: String(x.expectedBenefit || ""),
        priority: ["High", "Medium", "Low"].includes(x.priority) ? x.priority : "Medium",
        confidence: ["High", "Medium", "Low"].includes(x.confidence) ? x.confidence : "Low",
        needsMoreData: !!x.needsMoreData,
        dataNeeded: String(x.dataNeeded || ""),
        reviewDate: String(x.reviewDate || "")
      })),
      risks: arr(o.risks).map((x) => String(x.text || x)),
      clientExplanation: String(o.clientExplanation || ""),
      dataSufficiency: { sufficient: !!o.dataSufficiency?.sufficient, notes: String(o.dataSufficiency?.notes || "") }
    };
  }
  function ruleBasedDraft(input) {
    const c = input.client.currency;
    const m = input.measured, k = input.calculated;
    const cvp = k.changeVsPrevious;
    const pctTxt = (x) => x?.pct === null || x?.pct === void 0 ? "n/a" : `${x.pct > 0 ? "+" : ""}${x.pct.toFixed(1)}%`;
    const improved = [], deteriorated = [], causes = [], investigate = [], recs = [], risks = [];
    const reviewDate = addDays(input.period.to, 14);
    const sufficient = k.score.status === "rated" && m.current.conversions >= 10;
    const judge = (key, label, better, fmt) => {
      const ch = cvp[key];
      if (!ch || ch.pct === null || Math.abs(ch.pct) < 5) return;
      const good = better === "up" ? ch.pct > 0 : ch.pct < 0;
      const cur = key in k.current ? k.current[key] : m.current[key];
      const prv = key in k.previous ? k.previous[key] : m.previous[key];
      (good ? improved : deteriorated).push({ text: `${label}: ${fmt(prv)} \u2192 ${fmt(cur)} (${pctTxt(ch)} vs previous period).`, basis: ["conversions", "qualifiedLeads", "clicks"].includes(key) ? "MEASURED" : "CALCULATED" });
    };
    judge("conversions", "Conversions", "up", (v) => fmtDec(v));
    judge("qualifiedLeads", "Qualified leads", "up", (v) => fmtDec(v));
    judge("cpa", "Cost per conversion", "down", (v) => fmtMoney(v, c));
    judge("cvr", "Conversion rate", "up", (v) => fmtPct(v));
    judge("ctr", "Click-through rate", "up", (v) => fmtPct(v));
    if (cvp.cpc?.pct !== null && cvp.cpc?.pct < -5 && !(cvp.cpa?.pct < 0)) deteriorated.push({ text: `CPC fell ${pctTxt(cvp.cpc)} but cost per conversion did not improve \u2014 cheaper clicks are not producing cheaper leads.`, basis: "CALCULATED" });
    if (input.targets.targetCpa && isNum(k.current.cpa)) {
      const over = k.current.cpa > input.targets.targetCpa;
      (over ? deteriorated : improved).push({ text: `Cost per conversion ${fmtMoney(k.current.cpa, c)} is ${over ? "above" : "at or below"} the ${fmtMoney(input.targets.targetCpa, c)} target.`, basis: "CALCULATED" });
      if (over) recs.push({ title: "Reduce cost per conversion toward target", supportingData: `CPA ${fmtMoney(k.current.cpa, c)} vs target ${fmtMoney(input.targets.targetCpa, c)}; ${fmtDec(m.current.conversions)} conversions in ${input.period.days} days.`, reason: "CPA above target means each lead costs more than the agreed goal.", expectedBenefit: "Lower CPA at similar lead volume.", priority: "High", confidence: sufficient ? "Medium" : "Low", needsMoreData: !sufficient, dataNeeded: sufficient ? "" : "At least 10 conversions in the period.", reviewDate });
    }
    if (input.tracking.issueDays > 0) {
      investigate.push({ text: `Conversion tracking was flagged partial/broken on ${input.tracking.issueDays} day(s). Results on those days may be under-counted.`, basis: "MEASURED" });
      recs.push({ title: "Verify conversion tracking", supportingData: `${input.tracking.issueDays} day(s) with tracking issues out of ${input.tracking.daysWithData}.`, reason: "All other conclusions depend on accurate conversion data.", expectedBenefit: "Reliable reporting and better automated bidding.", priority: "High", confidence: "High", needsMoreData: false, dataNeeded: "", reviewDate: addDays(input.period.to, 7) });
    }
    if (!input.tracking.qualifiedLeadsTracked) {
      investigate.push({ text: "Qualified leads are not recorded, so lead quality cannot be measured.", basis: "MEASURED" });
      recs.push({ title: "Start recording qualified leads", supportingData: "No qualified-lead data in this period.", reason: "Conversions alone do not show whether leads became customers.", expectedBenefit: "Ability to optimise for lead quality, not just volume.", priority: "Medium", confidence: "High", needsMoreData: true, dataNeeded: "Weekly count of qualified leads from the client's CRM or call log.", reviewDate });
    }
    const recentLogs = input.optimizationHistory.filter((l) => l.date >= input.period.from);
    if (recentLogs.length && (improved.length || deteriorated.length)) {
      causes.push({ text: `The period included ${recentLogs.length} logged change(s) (${[...new Set(recentLogs.map((l) => l.category))].join(", ")}). The timing is consistent with these changes contributing, but this is not proven \u2014 seasonality, competition and tracking changes may also explain the difference.`, basis: "HYPOTHESIS" });
    }
    if (input.optimizationHistory.some((l) => l.category === "Conversion tracking")) risks.push("A conversion-tracking change in the window means conversion counts before and after are not directly comparable.");
    const worst = [...input.campaigns].filter((x) => isNum(x.calculated.cpa)).sort((a, b) => b.calculated.cpa - a.calculated.cpa)[0];
    if (worst && input.campaigns.length > 1 && isNum(k.current.cpa) && worst.calculated.cpa > k.current.cpa * 1.25) {
      investigate.push({ text: `"${worst.name}" has the highest CPA (${fmtMoney(worst.calculated.cpa, c)} vs account ${fmtMoney(k.current.cpa, c)}).`, basis: "CALCULATED" });
      recs.push({ title: `Review search terms and targeting in "${worst.name}"`, supportingData: `CPA ${fmtMoney(worst.calculated.cpa, c)}, ${fmtDec(worst.measured.conversions)} conversions, spend ${fmtMoney(worst.measured.spend, c)}.`, reason: "Highest-cost campaign has the most room to reduce wasted spend.", expectedBenefit: "Lower blended CPA.", priority: "Medium", confidence: worst.measured.conversions >= 10 ? "Medium" : "Low", needsMoreData: worst.measured.conversions < 10, dataNeeded: worst.measured.conversions < 10 ? "More conversions in this campaign before drawing conclusions." : "", reviewDate });
    }
    if (!sufficient) risks.push("Limited data in this period \u2014 figures can swing by chance. Treat conclusions as provisional.");
    input.dataWarnings.forEach((w) => risks.push(w));
    const summary = `${fmtRange(input.period.from, input.period.to)}: ${fmtMoney(m.current.spend, c)} spend, ${fmtDec(m.current.conversions)} conversions${isNum(k.current.cpa) ? ` at ${fmtMoney(k.current.cpa, c)} each` : ""} (conversions ${pctTxt(cvp.conversions)}, CPA ${pctTxt(cvp.cpa)} vs the previous period).${isNum(m.current.qualifiedLeads) ? ` ${fmtDec(m.current.qualifiedLeads)} qualified leads.` : ""} ${sufficient ? "" : "Data volume is limited, so conclusions are provisional."}`;
    const clientExplanation = `In ${fmtRange(input.period.from, input.period.to)} your ads cost ${fmtMoney(m.current.spend, c)} and brought in ${fmtDec(m.current.conversions)} enquiries${isNum(m.current.qualifiedLeads) ? `, of which ${fmtDec(m.current.qualifiedLeads)} were good-quality leads` : ""}. ${improved.length ? `Main improvements: ${improved.slice(0, 2).map((x) => x.text.split(":")[0].toLowerCase()).join(" and ")}.` : ""} ${recs.length ? `Next we will focus on: ${recs.slice(0, 2).map((r) => r.title.toLowerCase()).join("; ")}.` : ""}`.replace(/\s+/g, " ").trim();
    return {
      executiveSummary: summary.trim(),
      improved,
      deteriorated,
      potentialCauses: causes,
      investigate,
      recommendations: recs,
      risks,
      clientExplanation,
      dataSufficiency: { sufficient, notes: sufficient ? "Minimum data thresholds met." : `Only ${fmtDec(m.current.conversions)} conversions in ${input.period.days} days.` }
    };
  }
  var AiUnavailableError, r2, pick, derived;
  var init_ai_analysis = __esm({
    "js/ai-analysis.js"() {
      init_state();
      init_calculations();
      init_scoring();
      init_utils();
      AiUnavailableError = class extends Error {
      };
      r2 = (v) => isNum(v) ? Math.round(v * 100) / 100 : null;
      pick = (t) => ({ impressions: r2(t.impressions), clicks: r2(t.clicks), spend: r2(t.spend), conversions: r2(t.conversions), convValue: r2(t.convValue), qualifiedLeads: r2(t.qualifiedLeads), bookedJobs: r2(t.bookedJobs), days: t.days });
      derived = (t) => ({ ctr: r2(t.ctr), cpc: r2(t.cpc), cvr: r2(t.cvr), cpa: r2(t.cpa), roas: r2(t.roas), costPerQualified: r2(t.costPerQualified), qualifiedRate: r2(t.qualifiedRate) });
    }
  });

  // js/pages/ai-analysis.js
  var ai_analysis_exports = {};
  async function main({ content, settings, session }) {
    const client = await resolveClientOrPicker(content, { pageTitle: "AI Analysis", intro: "Choose a client to analyse performance and draft recommendations.", href: "ai-analysis.html" });
    if (!client) return;
    const cc = client.currency;
    const providerReady = settings.ai?.provider === "direct" && !!getAiLocalConfig().apiKey || settings.ai?.provider === "cloud-function" && getMode() === "firebase";
    content.innerHTML = workspaceHeader(client, "ai") + `
    <div class="page-header"><div><h1 style="font-size:18px">AI analysis & recommendations</h1><p>Drafts are internal until you approve a client version. Nothing is changed in Google Ads.</p></div></div>
    <div class="alert ${providerReady ? "alert-info" : "alert-warning"}">${icon(providerReady ? "info" : "alert")}<div>
      ${providerReady ? (settings.ai.provider === "direct" ? `AI provider: <strong>${AI_SVC_NAME[aiSvc(getAiLocalConfig())]}</strong> (direct, key saved in this browser) \u00B7 model <code>${esc(getAiLocalConfig().model || AI_DEFAULT_MODELS[aiSvc(getAiLocalConfig())])}</code>.` : `AI provider: <strong>${esc(settings.ai.providerLabel)}</strong> via Cloud Function <code>${esc(settings.ai.functionName)}</code>. API keys stay on the server.`) : `<strong>AI provider not available.</strong> Open Settings \u2192 Integrations \u2192 AI provider, choose \u201CDirect API key\u201D, paste your xAI / Gemini / OpenAI key and Save. You can still generate a <strong>rule-based draft</strong> (deterministic rules, not AI) and edit it.`}
    </div></div>
    <div class="card mb-2"><div class="filters">
      <div class="field"><label for="aRange">Analysis period</label><select class="select" id="aRange">${RANGE_OPTIONS.filter(([k]) => k !== "today").map(([k, l]) => `<option value="${k}">${l}</option>`).join("")}</select></div>
      <div class="field c-only"><label for="aFrom">From</label><input class="input" type="date" id="aFrom"></div>
      <div class="field c-only"><label for="aTo">To</label><input class="input" type="date" id="aTo"></div>
      <button class="btn btn-primary" id="runAi">${icon("ai")}Run AI analysis</button>
      <button class="btn" id="runRules">Rule-based draft</button>
    </div><p class="small subtle mb-0 mt-1" id="aNote"></p></div>
    <div id="current"></div>
    <div class="card"><div class="card-header"><h2>Saved analyses</h2></div><div id="saved">${loadingHtml()}</div></div>`;
    $("#aRange").value = qs("range") || "last30";
    const toggle = () => $$(".c-only").forEach((e) => e.classList.toggle("hidden", $("#aRange").value !== "custom"));
    toggle();
    $("#aRange").addEventListener("change", () => {
      toggle();
      setQs({ range: $("#aRange").value });
    });
    const getRange = () => resolveRange($("#aRange").value, client.timezone, { from: $("#aFrom").value, to: $("#aTo").value });
    async function buildInput() {
      const range = getRange();
      const prevP = previousPeriod(range);
      const [rows, baselines, logs] = await Promise.all([store.list("dailyMetrics", client.id, { from: prevP.from, to: range.to }), store.list("baselines", client.id), store.list("optimizationLogs", client.id)]);
      $("#aNote").textContent = `${fmtRange(range.from, range.to)} vs ${fmtRange(prevP.from, prevP.to)}.`;
      return { range, input: buildAnalysisInput({ client, range, rows, baseline: baselines.find((b) => b.isOriginal), logs, settings, today: todayInTz(client.timezone) }) };
    }
    $("#runAi").addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
      const { range, input } = await buildInput();
      try {
        const res = await runAiAnalysis(input, settings);
        editor({ id: uid("ai"), range: { from: range.from, to: range.to }, input, output: res.output, source: "ai", provider: res.provider, model: res.model, createdAt: nowIso(), approved: false, clientVersion: res.output.clientExplanation });
      } catch (err) {
        if (err instanceof AiUnavailableError) {
          $("#current").innerHTML = `<div class="alert alert-warning">${icon("alert")}<div><p><strong>The AI provider is unavailable.</strong> ${esc(err.message)}</p><p>No analysis was generated. <button class="btn btn-sm" id="fallback">Generate a rule-based draft instead</button></p></div></div>`;
          $("#fallback").addEventListener("click", () => $("#runRules").click());
        } else throw err;
      }
    }));
    $("#runRules").addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
      const { range, input } = await buildInput();
      const output = ruleBasedDraft(input);
      editor({ id: uid("ai"), range: { from: range.from, to: range.to }, input, output, source: "rule-based", provider: "Deterministic rules (not AI)", createdAt: nowIso(), approved: false, clientVersion: output.clientExplanation });
    }));
    function editor(rec) {
      const o = rec.output;
      const listEditor = (key, title, hint) => `<div class="card mb-2"><div class="card-header"><h3>${title}</h3><span class="hint">${hint}</span></div>
      ${(o[key] || []).length ? `<ul class="list">${o[key].map((x, i) => `<li><div class="grow"><div class="mb-1">${tag(x.basis)}</div><textarea class="textarea" data-list="${key}" data-i="${i}" rows="2">${esc(x.text)}</textarea></div></li>`).join("")}</ul>` : `<p class="muted small">None identified.</p>`}</div>`;
      const m = rec.input.measured.current, k = rec.input.calculated.current;
      $("#current").innerHTML = `
      <div class="card mb-2" style="border-color:var(--accent)">
        <div class="card-header"><div><h2>${rec.source === "ai" ? "AI analysis draft" : "Rule-based draft (not AI)"} \u2014 ${esc(fmtRange(rec.range.from, rec.range.to))}</h2>
          <div class="small subtle">${esc(rec.provider || "")}${rec.model ? ` \xB7 ${esc(rec.model)}` : ""} \xB7 ${esc(fmtDateTime(rec.createdAt))} ${rec.approved ? '<span class="badge badge-success">Client version approved</span>' : '<span class="badge">Internal draft</span>'}</div></div>
          <div class="flex gap-1 wrap"><button class="btn" id="saveDraft">Save draft</button>${rec.approved ? `<button class="btn btn-danger" id="unapprove">Withdraw approval</button>` : `<button class="btn btn-primary" id="approve">${icon("check")}Approve client version</button>`}</div></div>
        <div class="alert ${o.dataSufficiency.sufficient ? "alert-success" : "alert-warning"}">${icon(o.dataSufficiency.sufficient ? "check" : "alert")}<div><strong>Data sufficiency:</strong> ${esc(o.dataSufficiency.sufficient ? "Sufficient" : "More data needed")}. ${esc(o.dataSufficiency.notes)}</div></div>
        <details class="mb-2"><summary class="small"><strong>Facts the analysis is based on</strong> (read-only, from stored data)</summary>
          <div class="grid grid-2 mt-1"><div><p class="small">${tag("MEASURED")} Spend ${esc(fmtMoney(m.spend, cc))} \xB7 Clicks ${esc(fmtDec(m.clicks))} \xB7 Conversions ${esc(fmtDec(m.conversions))} \xB7 Qualified ${esc(fmtDec(m.qualifiedLeads))} \xB7 ${m.days} days with data</p>
          <p class="small">${tag("CALCULATED")} CTR ${esc(fmtPct(k.ctr))} \xB7 CPC ${esc(fmtMoney(k.cpc, cc))} \xB7 Conv. rate ${esc(fmtPct(k.cvr))} \xB7 CPA ${esc(fmtMoney(k.cpa, cc))} \xB7 Score ${esc(rec.input.calculated.score.score ?? "Not rated")}</p></div>
          <div><p class="small"><strong>Optimizations in window:</strong> ${rec.input.optimizationHistory.length}. <strong>Tracking issue days:</strong> ${rec.input.tracking.issueDays}.</p><pre style="max-height:180px">${esc(JSON.stringify(rec.input.calculated.changeVsPrevious, null, 1))}</pre></div></div>
        </details>
        <div class="field mb-2"><label>1. Executive summary (internal)</label><textarea class="textarea" id="execSum" rows="3">${esc(o.executiveSummary)}</textarea></div>
      </div>
      <div class="grid grid-2">${listEditor("improved", "2. What improved", "Measured / calculated")}${listEditor("deteriorated", "3. What deteriorated", "Measured / calculated")}</div>
      <div class="grid grid-2">${listEditor("potentialCauses", "4. Potential causes", "Hypotheses \u2014 not proven")}${listEditor("investigate", "5. Issues requiring investigation", "")}</div>
      <div class="card mb-2"><div class="card-header"><h3>6\u20138. Recommended actions, priorities & review dates</h3><span class="hint">Edit before approving</span></div>
        ${o.recommendations.length ? o.recommendations.map((r, i) => `<div class="rec-card" data-rec="${i}">
          <div class="rec-head"><input class="input" data-r="title" value="${esc(r.title)}" style="flex:1;min-width:220px;font-weight:600">
          <select class="select" data-r="priority" style="width:auto">${["High", "Medium", "Low"].map((p) => `<option ${p === r.priority ? "selected" : ""}>${p}</option>`).join("")}</select>
          <span class="small subtle">Confidence</span><select class="select" data-r="confidence" style="width:auto">${["High", "Medium", "Low"].map((p) => `<option ${p === r.confidence ? "selected" : ""}>${p}</option>`).join("")}</select>
          <input class="input" type="date" data-r="reviewDate" value="${esc(r.reviewDate)}" style="width:auto" aria-label="Review date"></div>
          <div class="form-grid"><div class="field"><label>Supporting data ${tag("CALCULATED")}</label><textarea class="textarea" data-r="supportingData" rows="2">${esc(r.supportingData)}</textarea></div>
          <div class="field"><label>Reason</label><textarea class="textarea" data-r="reason" rows="2">${esc(r.reason)}</textarea></div>
          <div class="field"><label>Expected benefit ${tag("HYPOTHESIS")}</label><textarea class="textarea" data-r="expectedBenefit" rows="2">${esc(r.expectedBenefit)}</textarea></div>
          <div class="field"><label class="check"><input type="checkbox" data-r="needsMoreData" ${r.needsMoreData ? "checked" : ""}> Additional data needed</label><textarea class="textarea" data-r="dataNeeded" rows="2" placeholder="What data?">${esc(r.dataNeeded)}</textarea></div></div></div>`).join("") : `<p class="muted small">No recommendations.</p>`}
      </div>
      <div class="card mb-2"><div class="card-header"><h3>9. Risks & limitations</h3></div><textarea class="textarea" id="risks" rows="4">${esc(o.risks.join("\n"))}</textarea></div>
      <div class="card mb-2" style="border-color:var(--success)"><div class="card-header"><h3>10. Client-friendly explanation</h3><span class="hint">Only this text can appear in the client portal/reports, and only after approval</span></div>
        <textarea class="textarea" id="clientVersion" rows="6">${esc(rec.clientVersion || o.clientExplanation)}</textarea>
        <p class="small subtle mb-0">Use "- " at the start of a line for bullet points. Avoid presenting hypotheses as facts.</p></div>`;
      const collect = () => {
        const out = clone(rec.output);
        out.executiveSummary = $("#execSum").value.trim();
        $$("[data-list]").forEach((t) => out[t.dataset.list][Number(t.dataset.i)].text = t.value.trim());
        $$("[data-rec]").forEach((card) => {
          const r = out.recommendations[Number(card.dataset.rec)];
          $$("[data-r]", card).forEach((el) => r[el.dataset.r] = el.type === "checkbox" ? el.checked : el.value.trim());
        });
        out.risks = $("#risks").value.split("\n").map((s) => s.trim()).filter(Boolean);
        return { ...rec, output: out, clientVersion: $("#clientVersion").value.trim(), editedBy: session.email };
      };
      $("#saveDraft").addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
        rec = await store.put("aiAnalyses", client.id, collect(), "ai.save");
        toast("Analysis saved (internal).", "success");
        loadSaved();
        editor(rec);
      }));
      $("#approve")?.addEventListener("click", async (e) => {
        const next = collect();
        if (!next.clientVersion) return toast("Write the client-friendly explanation first.", "warning");
        if (!await confirmDialog({ title: "Approve client version?", message: "The client-friendly explanation can then be included in reports (when the AI insights section is enabled). The internal analysis is never shown to the client. Published reports only change when you republish.", confirmText: "Approve" })) return;
        await withLoading(e.target, async () => {
          rec = await store.put("aiAnalyses", client.id, { ...next, approved: true, approvedAt: nowIso(), approvedBy: session.email }, "ai.approve");
          toast("Client version approved.", "success");
          loadSaved();
          editor(rec);
        });
      });
      $("#unapprove")?.addEventListener("click", async (e) => {
        await withLoading(e.target, async () => {
          rec = await store.put("aiAnalyses", client.id, { ...collect(), approved: false, approvedAt: null }, "ai.unapprove");
          toast("Approval withdrawn. Already-published reports keep their snapshot until unpublished.", "info");
          loadSaved();
          editor(rec);
        });
      });
      $("#current").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    async function loadSaved() {
      const list = (await store.list("aiAnalyses", client.id)).sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
      $("#saved").innerHTML = list.length ? `<div class="table-wrap"><table class="table"><thead><tr><th>Created</th><th>Period</th><th>Source</th><th>Status</th><th></th></tr></thead><tbody>
      ${list.map((a) => `<tr><td>${esc(fmtDateTime(a.createdAt))}</td><td>${esc(fmtRange(a.range.from, a.range.to))}</td><td>${a.source === "ai" ? `<span class="badge badge-accent">AI \xB7 ${esc(a.provider)}</span>` : '<span class="badge">Rule-based</span>'}</td><td>${a.approved ? '<span class="badge badge-success">Approved for client</span>' : '<span class="badge plain">Internal</span>'}</td>
      <td class="text-right"><button class="btn btn-sm" data-open="${esc(a.id)}">Open</button> <button class="btn btn-sm btn-danger" data-del="${esc(a.id)}">${icon("trash")}</button></td></tr>`).join("")}</tbody></table></div>` : emptyState({ title: "No saved analyses", text: "Run an analysis above and save it.", iconName: "ai" });
      $$("[data-open]").forEach((b) => b.addEventListener("click", () => editor(list.find((a) => a.id === b.dataset.open))));
      $$("[data-del]").forEach((b) => b.addEventListener("click", async () => {
        if (!await confirmDialog({ title: "Delete analysis?", message: "Published reports that included its approved text keep their snapshot.", confirmText: "Delete", danger: true })) return;
        await store.remove("aiAnalyses", client.id, b.dataset.del, "ai.delete");
        loadSaved();
      }));
    }
    loadSaved();
  }
  var BASIS, tag;
  var init_ai_analysis2 = __esm({
    "js/pages/ai-analysis.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_ai_analysis();
      BASIS = { MEASURED: ["tag-fact", "Measured"], CALCULATED: ["tag-calc", "Calculated"], HYPOTHESIS: ["tag-hyp", "Hypothesis"] };
      tag = (b) => {
        const [c, l] = BASIS[b] || BASIS.HYPOTHESIS;
        return `<span class="${c}">${l}</span>`;
      };
      (async () => {
        const ctx2 = await initAdminPage({ page: "ai", title: "AI Analysis" });
        if (ctx2) main(ctx2);
      })();
    }
  });

  // js/baseline.js
  function rowDerived(r) {
    return {
      ctr: calc.ctr(r.clicks, r.impressions),
      cpc: calc.cpc(r.spend, r.clicks),
      cvr: calc.cvr(r.conversions, r.clicks),
      cpa: calc.cpa(r.spend, r.conversions),
      roas: isNum(r.convValue) ? calc.roas(r.convValue, r.spend) : null
    };
  }
  function validateBaseline(b) {
    const e = [];
    if (!isValidDate(b.auditDate)) e.push("Audit date is required.");
    if (!isValidDate(b.periodStart) || !isValidDate(b.periodEnd)) e.push("Reporting period start and end are required.");
    else if (b.periodStart > b.periodEnd) e.push("Reporting period start must be before its end.");
    if (!b.rows?.length) e.push("Add at least one campaign row.");
    (b.rows || []).forEach((r, i) => {
      if (!r.campaign) e.push(`Row ${i + 1}: campaign name is required.`);
      ["impressions", "clicks", "spend", "conversions"].forEach((k) => {
        if (!isNum(r[k]) || r[k] < 0) e.push(`Row ${i + 1}: ${k} must be zero or more.`);
      });
      if (isNum(r.clicks) && isNum(r.impressions) && r.clicks > r.impressions) e.push(`Row ${i + 1}: clicks exceed impressions.`);
      if (isNum(r.searchIS) && (r.searchIS < 0 || r.searchIS > 100)) e.push(`Row ${i + 1}: impression share must be 0\u2013100.`);
    });
    return e;
  }
  var TRACKING_OPTIONS, QUALITATIVE_FIELDS, ROW_FIELDS;
  var init_baseline = __esm({
    "js/baseline.js"() {
      init_calculations();
      init_utils();
      TRACKING_OPTIONS = { ok: "Working correctly", partial: "Partially working", broken: "Not working", unknown: "Not verified" };
      QUALITATIVE_FIELDS = [
        ["searchTerms", "Search terms & keyword observations"],
        ["negativeKeywords", "Negative keyword status"],
        ["locationTargeting", "Location targeting"],
        ["adStrength", "Ad strength & quality indicators"],
        ["trackingNotes", "Conversion tracking notes"],
        ["landingPage", "Landing page condition"],
        ["leadQuality", "Lead quality observations"],
        ["issues", "Main issues identified"],
        ["recommendations", "Recommended actions"],
        ["notes", "Supporting notes / screenshot links"]
      ];
      ROW_FIELDS = [
        { key: "campaign", label: "Campaign", type: "text", required: true, aliases: ["campaign", "campaign name"] },
        { key: "adGroup", label: "Ad group", type: "text", aliases: ["ad group", "adgroup"] },
        { key: "status", label: "Status", type: "text", aliases: ["campaign status", "status"] },
        { key: "type", label: "Campaign type", type: "text", aliases: ["campaign type", "type", "advertising channel"] },
        { key: "bidding", label: "Bidding strategy", type: "text", aliases: ["bid strategy type", "bidding strategy", "bid strategy"] },
        { key: "dailyBudget", label: "Daily budget", type: "number", aliases: ["budget", "daily budget"] },
        { key: "impressions", label: "Impressions", type: "number", required: true, aliases: ["impr.", "impr"] },
        { key: "clicks", label: "Clicks", type: "number", required: true },
        { key: "spend", label: "Spend", type: "number", required: true, aliases: ["cost"] },
        { key: "conversions", label: "Conversions", type: "number", required: true, aliases: ["conv."] },
        { key: "convValue", label: "Conversion value", type: "number", aliases: ["conv. value", "conversion value"] },
        { key: "searchIS", label: "Search impr. share (%)", type: "number", aliases: ["search impr. share", "search impression share", "search is"] }
      ];
    }
  });

  // js/csv-import.js
  function detectDelimiter(text) {
    const first = text.split(/\r?\n/).slice(0, 10).join("\n");
    const counts = [",", ";", "	"].map((d) => [d, (first.match(new RegExp(d === "	" ? "	" : `\\${d}`, "g")) || []).length]);
    return counts.sort((a, b) => b[1] - a[1])[0][0];
  }
  function parseCSV(text, delimiter) {
    text = text.replace(/^﻿/, "");
    const d = delimiter || detectDelimiter(text);
    const rows = [];
    let row = [], field = "", q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) {
        if (c === '"') {
          if (text[i + 1] === '"') {
            field += '"';
            i++;
          } else q = false;
        } else field += c;
      } else if (c === '"') q = true;
      else if (c === d) {
        row.push(field);
        field = "";
      } else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else field += c;
    }
    if (field !== "" || row.length) {
      row.push(field);
      rows.push(row);
    }
    return rows.filter((r) => r.some((x) => x.trim() !== ""));
  }
  function parseDate(v, format = "auto") {
    if (v === null || v === void 0) return null;
    let s = String(v).trim().replace(/^[A-Za-z]+,\s*/, "");
    if (!s) return null;
    let m;
    if (m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/)) return valid(m[1], m[2], m[3]);
    if (m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{2,4})$/)) {
      const y = m[3].length === 2 ? `20${m[3]}` : m[3];
      if (format === "DMY") return valid(y, m[2], m[1]);
      if (format === "MDY") return valid(y, m[1], m[2]);
      if (Number(m[1]) > 12) return valid(y, m[2], m[1]);
      if (Number(m[2]) > 12) return valid(y, m[1], m[2]);
      return format === "auto" ? { ambiguous: true } : null;
    }
    if (m = s.match(/^([A-Za-z]{3,9})\.?\s+(\d{1,2}),?\s+(\d{4})$/)) return valid(m[3], MONTHS2[m[1].slice(0, 4).toLowerCase()] || MONTHS2[m[1].slice(0, 3).toLowerCase()], m[2]);
    if (m = s.match(/^(\d{1,2})\s+([A-Za-z]{3,9})\.?,?\s+(\d{4})$/)) return valid(m[3], MONTHS2[m[2].slice(0, 4).toLowerCase()] || MONTHS2[m[2].slice(0, 3).toLowerCase()], m[1]);
    return null;
    function valid(y, mo, d) {
      if (!mo) return null;
      const out = `${y}-${pad(mo)}-${pad(d)}`;
      return isValidDate(out) ? out : null;
    }
  }
  function parseNumber(v, numberFormat = "en") {
    if (v === null || v === void 0) return { value: null };
    let s = String(v).trim();
    if (s === "" || s === "--" || s === "-" || /^n\/?a$/i.test(s) || s === " --") return { value: null };
    s = s.replace(/[\s ]/g, "").replace(/[^\d.,\-()%<>]/g, "");
    if (/^<|>/.test(s)) s = s.replace(/[<>]/g, "");
    const neg = /^\(.*\)$/.test(s) || s.startsWith("-");
    s = s.replace(/[()%-]/g, "");
    if (numberFormat === "eu") s = s.replace(/\./g, "").replace(",", ".");
    else s = s.replace(/,/g, "");
    if (!/^\d*\.?\d+$|^\d+\.?$/.test(s)) return { value: null, error: `"${v}" is not a number` };
    const n = Number(s) * (neg ? -1 : 1);
    return Number.isFinite(n) ? { value: n } : { value: null, error: `"${v}" is not a number` };
  }
  function guessHeaderRow(rows, schema) {
    const all = schema.flatMap((f2) => [f2.key, f2.label, ...f2.aliases || []].map(norm));
    let best = 0, bestScore = -1;
    rows.slice(0, 15).forEach((r, i) => {
      const score = r.filter((c) => all.includes(norm(c))).length;
      if (score > bestScore) {
        best = i;
        bestScore = score;
      }
    });
    return best;
  }
  function autoMap(headers, schema) {
    const map = {};
    schema.forEach((f2) => {
      const cands = [f2.key, f2.label, ...f2.aliases || []].map(norm);
      const idx = headers.findIndex((h) => cands.includes(norm(h)));
      map[f2.key] = idx;
    });
    return map;
  }
  function openCsvWizard(o) {
    const st2 = { step: 1, fileName: "", raw: [], headerRow: 0, headers: [], dataRows: [], map: {}, dateFormat: "auto", numberFormat: "en", conflict: "skip", dupMode: o.allowSum ? "sum" : "first", defaultCampaign: "", createCampaigns: false, validated: null, result: null };
    const m = openModal({ title: o.title, size: "xwide", body: `<div id="wiz"></div>`, footer: `<div class="grow small subtle" id="wizHint"></div><button class="btn" data-close id="wizCancel">Cancel</button><button class="btn" id="wizBack">Back</button><button class="btn btn-primary" id="wizNext">Next</button>` });
    const root4 = $("#wiz", m.el);
    const steps = ["Upload", "Map columns", "Validate", "Confirm", "Summary"];
    function stepper() {
      return `<div class="stepper">${steps.map((s, i) => `<span class="${i + 1 === st2.step ? "active" : i + 1 < st2.step ? "done" : ""}">${i + 1}. ${s}</span>`).join("")}</div>`;
    }
    function render() {
      $("#wizBack", m.el).classList.toggle("hidden", st2.step === 1 || st2.step === 5);
      $("#wizCancel", m.el).textContent = st2.step === 5 ? "Close" : "Cancel";
      const next = $("#wizNext", m.el);
      next.classList.toggle("hidden", st2.step === 5);
      next.textContent = st2.step === 4 ? "Import now" : "Next";
      next.disabled = st2.step === 1 && !st2.raw.length;
      ({ 1: renderUpload, 2: renderMap, 3: renderValidate, 4: renderConfirm, 5: renderSummary })[st2.step]();
    }
    function renderUpload() {
      root4.innerHTML = `${stepper()}
      <label class="dropzone" id="drop" for="csvFile">${icon("upload")}<div><strong>Choose a CSV file</strong> or drop it here</div>
      <div class="small subtle">Google Ads report exports work (Reports \u2192 Download \u2192 CSV). UTF-8, comma, semicolon or tab separated.</div>
      ${st2.fileName ? `<div class="mt-1"><span class="badge badge-accent">${esc(st2.fileName)} \xB7 ${st2.raw.length} rows</span></div>` : ""}</label>
      <input type="file" id="csvFile" accept=".csv,text/csv,.tsv,text/tab-separated-values" class="sr-only">
      <details class="mt-2"><summary class="small">Expected columns</summary><div class="table-wrap mt-1"><table class="table"><thead><tr><th>Field</th><th>Required</th><th>Recognised headers</th></tr></thead><tbody>
      ${o.schema.map((f2) => `<tr><td>${esc(f2.label)}</td><td>${f2.required ? "Yes" : "No"}</td><td class="small">${esc([f2.label, ...f2.aliases || []].join(", "))}</td></tr>`).join("")}</tbody></table></div></details>`;
      const input = $("#csvFile", root4), drop = $("#drop", root4);
      const load2 = (file) => {
        if (!file) return;
        if (file.size > 10 * 1024 * 1024) return toast("File is larger than 10 MB.", "error");
        const r = new FileReader();
        r.onload = () => {
          try {
            const rows = parseCSV(String(r.result));
            if (rows.length < 2) throw new Error("The file has no data rows.");
            st2.raw = rows;
            st2.fileName = file.name;
            st2.headerRow = guessHeaderRow(rows, o.schema);
            applyHeader();
            render();
          } catch (e) {
            toast(`Could not read CSV: ${e.message}`, "error");
          }
        };
        r.onerror = () => toast("Could not read the file.", "error");
        r.readAsText(file);
      };
      input.addEventListener("change", () => load2(input.files[0]));
      drop.addEventListener("dragover", (e) => {
        e.preventDefault();
        drop.classList.add("drag");
      });
      drop.addEventListener("dragleave", () => drop.classList.remove("drag"));
      drop.addEventListener("drop", (e) => {
        e.preventDefault();
        drop.classList.remove("drag");
        load2(e.dataTransfer.files[0]);
      });
    }
    function applyHeader() {
      st2.headers = st2.raw[st2.headerRow].map((h, i) => h.trim() || `Column ${i + 1}`);
      st2.dataRows = st2.raw.slice(st2.headerRow + 1).map((r, i) => ({ line: st2.headerRow + i + 2, cells: r })).filter((r) => !isTotalRow(r.cells));
      st2.map = autoMap(st2.headers, o.schema);
    }
    function renderMap() {
      const opts = (sel) => `<option value="-1">\u2014 not in file \u2014</option>` + st2.headers.map((h, i) => `<option value="${i}" ${i === sel ? "selected" : ""}>${esc(h)}</option>`).join("");
      const campaignField = o.schema.find((f2) => f2.type === "campaign");
      root4.innerHTML = `${stepper()}
      <div class="form-grid cols-4 mb-2">
        <div class="field"><label>Header row</label><select class="select" id="hdrRow">${st2.raw.slice(0, 15).map((r, i) => `<option value="${i}" ${i === st2.headerRow ? "selected" : ""}>Row ${i + 1}: ${esc(r.slice(0, 3).join(" | ").slice(0, 40))}</option>`).join("")}</select></div>
        <div class="field"><label>Date format</label><select class="select" id="dateFmt"><option value="auto">Auto-detect</option><option value="YMD">YYYY-MM-DD</option><option value="MDY">MM/DD/YYYY (US)</option><option value="DMY">DD/MM/YYYY</option></select></div>
        <div class="field"><label>Number format</label><select class="select" id="numFmt"><option value="en">1,234.56</option><option value="eu">1.234,56</option></select></div>
        ${o.allowSum ? `<div class="field"><label>Rows with the same campaign + date</label><select class="select" id="dupMode"><option value="sum">Sum them (ad-group / device exports)</option><option value="first">Treat as duplicates (keep first)</option></select></div>` : ""}
      </div>
      <div class="table-wrap mb-2"><table class="table"><thead><tr><th>Platform field</th><th>CSV column</th><th>Sample values</th></tr></thead><tbody>
      ${o.schema.map((f2) => `<tr><td>${esc(f2.label)}${f2.required ? ' <span class="req" style="color:var(--danger)">*</span>' : ""}</td><td><select class="select" data-map="${f2.key}" style="min-width:200px">${opts(st2.map[f2.key])}</select></td>
        <td class="small subtle">${st2.map[f2.key] >= 0 ? esc(st2.dataRows.slice(0, 3).map((r) => r.cells[st2.map[f2.key]]).join(" \xB7 ")) : ""}</td></tr>`).join("")}
      </tbody></table></div>
      ${campaignField ? `<div class="form-grid">
        <div class="field"><label>If the file has no campaign column, assign rows to</label><select class="select" id="defCmp"><option value="">\u2014 choose \u2014</option>${(o.client.campaigns || []).map((c) => `<option value="${esc(c.id)}" ${c.id === st2.defaultCampaign ? "selected" : ""}>${esc(c.name)}</option>`).join("")}</select></div>
        <label class="check"><input type="checkbox" id="createCmp" ${st2.createCampaigns ? "checked" : ""}> Add campaigns that are not yet on the client record</label></div>` : ""}
      <h3 class="mt-2">Preview (first 5 data rows)</h3>
      <div class="table-wrap"><table class="table"><thead><tr>${st2.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
      ${st2.dataRows.slice(0, 5).map((r) => `<tr>${st2.headers.map((_, i) => `<td class="small">${esc(r.cells[i] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
      $("#dateFmt", root4).value = st2.dateFormat;
      $("#numFmt", root4).value = st2.numberFormat;
      if ($("#dupMode", root4)) $("#dupMode", root4).value = st2.dupMode;
      $("#hdrRow", root4).addEventListener("change", (e) => {
        st2.headerRow = Number(e.target.value);
        applyHeader();
        renderMap();
      });
      $$("[data-map]", root4).forEach((s) => s.addEventListener("change", () => {
        st2.map[s.dataset.map] = Number(s.value);
      }));
      $("#dateFmt", root4).addEventListener("change", (e) => st2.dateFormat = e.target.value);
      $("#numFmt", root4).addEventListener("change", (e) => st2.numberFormat = e.target.value);
      $("#dupMode", root4)?.addEventListener("change", (e) => st2.dupMode = e.target.value);
      $("#defCmp", root4)?.addEventListener("change", (e) => st2.defaultCampaign = e.target.value);
      $("#createCmp", root4)?.addEventListener("change", (e) => st2.createCampaigns = e.target.checked);
    }
    function validate() {
      const missing = o.schema.filter((f2) => f2.required && st2.map[f2.key] < 0 && !(f2.type === "campaign" && st2.defaultCampaign));
      if (missing.length) throw new Error(`Map the required field(s): ${missing.map((f2) => f2.label).join(", ")}`);
      const campaignsByName = new Map((o.client.campaigns || []).map((c) => [c.name.trim().toLowerCase(), c]));
      const campaignsById = new Map((o.client.campaigns || []).map((c) => [c.id, c]));
      const newCampaigns = /* @__PURE__ */ new Map();
      const valid = [], invalid = [];
      let ambiguousDates = 0;
      for (const r of st2.dataRows) {
        const errors = [];
        const values = {};
        for (const f2 of o.schema) {
          const idx = st2.map[f2.key];
          const rawV = idx >= 0 ? r.cells[idx] : void 0;
          if (f2.type === "date") {
            const d = parseDate(rawV, st2.dateFormat);
            if (d && d.ambiguous) {
              ambiguousDates++;
              errors.push(`${f2.label}: "${rawV}" is ambiguous \u2014 choose a date format`);
            } else if (!d && (f2.required || (rawV ?? "").trim())) errors.push(`${f2.label}: "${rawV ?? ""}" is not a valid date`);
            values[f2.key] = d && !d.ambiguous ? d : null;
          } else if (f2.type === "number") {
            const n = parseNumber(rawV, st2.numberFormat);
            if (n.error) errors.push(`${f2.label}: ${n.error}`);
            else if (n.value !== null && n.value < 0 && !f2.allowNegative) errors.push(`${f2.label}: negative value`);
            else if (n.value === null && f2.required) errors.push(`${f2.label}: required`);
            values[f2.key] = n.value;
          } else if (f2.type === "campaign") {
            const name2 = (rawV ?? "").trim();
            let c = name2 ? campaignsByName.get(name2.toLowerCase()) || campaignsById.get(name2) : campaignsById.get(st2.defaultCampaign);
            if (!c && name2 && st2.createCampaigns) {
              c = newCampaigns.get(name2.toLowerCase()) || { id: `cmp_${name2.toLowerCase().replace(/[^a-z0-9]+/g, "_").slice(0, 30)}_${Math.random().toString(36).slice(2, 6)}`, name: name2, type: "Search", createdByImport: true };
              newCampaigns.set(name2.toLowerCase(), c);
            }
            if (!c) errors.push(name2 ? `Campaign "${name2}" is not on this client (tick "Add campaigns" to create it)` : "Campaign is required");
            values[f2.key] = c?.id || null;
          } else if (f2.type === "enum") {
            const v = (rawV ?? "").trim().toLowerCase();
            values[f2.key] = v ? f2.options.find((x) => x.toLowerCase() === v || (f2.optionAliases?.[x] || []).includes(v)) || null : null;
            if (v && !values[f2.key]) errors.push(`${f2.label}: "${rawV}" \u2014 expected one of ${f2.options.join(", ")}`);
          } else {
            values[f2.key] = (rawV ?? "").trim();
            if (f2.required && !values[f2.key]) errors.push(`${f2.label}: required`);
          }
        }
        if (errors.length) {
          invalid.push({ line: r.line, errors, cells: r.cells });
          continue;
        }
        const built = o.buildRecord(values, { client: o.client });
        if (built.errors?.length) {
          invalid.push({ line: r.line, errors: built.errors, cells: r.cells });
          continue;
        }
        valid.push({ line: r.line, record: built.record, warnings: built.warnings || [] });
      }
      const byId = /* @__PURE__ */ new Map();
      const dupLines = [];
      for (const v of valid) {
        const id = o.identity(v.record);
        v.record.id = id;
        if (byId.has(id)) {
          const first = byId.get(id);
          if (st2.dupMode === "sum" && o.sumRecords) {
            first.record = o.sumRecords(first.record, v.record);
            first.merged = (first.merged || 1) + 1;
          } else dupLines.push({ line: v.line, duplicateOf: first.line });
        } else byId.set(id, v);
      }
      const unique = [...byId.values()];
      const has = (id) => o.existing instanceof Map ? o.existing.has(id) : o.existing.has(id);
      const conflicts = unique.filter((v) => has(v.record.id));
      const fresh = unique.filter((v) => !has(v.record.id));
      st2.validated = { valid: unique, invalid, dupLines, conflicts, fresh, newCampaigns: [...newCampaigns.values()], ambiguousDates };
    }
    function renderValidate() {
      const v = st2.validated;
      const ex = (id) => o.existing instanceof Map ? o.existing.get(id) : null;
      root4.innerHTML = `${stepper()}
      <div class="grid grid-4 mb-2">
        <div class="card kpi"><div class="kpi-label">Valid new records</div><div class="kpi-value pos">${v.fresh.length}</div></div>
        <div class="card kpi"><div class="kpi-label">Conflicts with existing data</div><div class="kpi-value ${v.conflicts.length ? "" : "neutral"}">${v.conflicts.length}</div></div>
        <div class="card kpi"><div class="kpi-label">Invalid rows</div><div class="kpi-value ${v.invalid.length ? "neg" : "neutral"}">${v.invalid.length}</div></div>
        <div class="card kpi"><div class="kpi-label">Duplicate rows in file</div><div class="kpi-value neutral">${v.dupLines.length}</div><div class="kpi-sub">${st2.dupMode === "sum" && o.allowSum ? `${v.valid.filter((x) => x.merged).length} records summed from multiple rows` : "Later copies ignored"}</div></div>
      </div>
      ${v.ambiguousDates ? `<div class="alert alert-warning">${icon("alert")}<div>${v.ambiguousDates} date(s) could be either day/month or month/day. Go back and choose a date format.</div></div>` : ""}
      ${v.newCampaigns.length ? `<div class="alert alert-info">${icon("info")}<div>${v.newCampaigns.length} new campaign(s) will be added to the client: ${esc(v.newCampaigns.map((c) => c.name).join(", "))}</div></div>` : ""}
      ${v.conflicts.length ? `<div class="card mb-2"><div class="card-header"><h3>${v.conflicts.length} record(s) already exist</h3>
        <div class="flex gap-2"><label class="check"><input type="radio" name="conf" value="skip" ${st2.conflict === "skip" ? "checked" : ""}> Skip \u2014 keep existing data</label><label class="check"><input type="radio" name="conf" value="update" ${st2.conflict === "update" ? "checked" : ""}> Update with values from this file</label></div></div>
        <div class="table-wrap" style="max-height:220px"><table class="table"><thead><tr><th>Line</th>${o.previewCols.map((c) => `<th>${esc(c.label)}</th>`).join("")}<th>Existing \u2192 new</th></tr></thead><tbody>
        ${v.conflicts.slice(0, 50).map((c) => `<tr><td>${c.line}</td>${o.previewCols.map((pc) => `<td class="small">${esc(pc.fmt(c.record))}</td>`).join("")}<td class="small">${esc(o.diff ? o.diff(ex(c.record.id), c.record) : "")}</td></tr>`).join("")}
        </tbody></table></div></div>` : ""}
      ${v.invalid.length ? `<div class="card mb-2"><div class="card-header"><h3>Invalid rows (will not be imported)</h3><button class="btn btn-sm" id="errCsv">${icon("download")}Download error report</button></div>
        <div class="table-wrap" style="max-height:240px"><table class="table"><thead><tr><th>Line</th><th>Problems</th></tr></thead><tbody>
        ${v.invalid.slice(0, 100).map((r) => `<tr class="row-error"><td>${r.line}</td><td class="small">${esc(r.errors.join("; "))}</td></tr>`).join("")}</tbody></table></div></div>` : ""}
      ${v.fresh.length ? `<h3>Preview of new records</h3><div class="table-wrap" style="max-height:240px"><table class="table"><thead><tr><th>Line</th>${o.previewCols.map((c) => `<th>${esc(c.label)}</th>`).join("")}</tr></thead><tbody>
        ${v.fresh.slice(0, 50).map((r) => `<tr class="${r.warnings.length ? "row-warn" : ""}" title="${esc(r.warnings.join("; "))}"><td>${r.line}</td>${o.previewCols.map((c) => `<td class="small">${esc(c.fmt(r.record))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : ""}`;
      $$('input[name="conf"]', root4).forEach((r) => r.addEventListener("change", () => st2.conflict = r.value));
      $("#errCsv", root4)?.addEventListener("click", downloadErrors);
    }
    function counts() {
      const v = st2.validated;
      return { create: v.fresh.length, update: st2.conflict === "update" ? v.conflicts.length : 0, skip: st2.conflict === "skip" ? v.conflicts.length : 0, invalid: v.invalid.length, dups: v.dupLines.length };
    }
    function renderConfirm() {
      const c = counts();
      root4.innerHTML = `${stepper()}
      <div class="alert alert-info">${icon("info")}<div><p><strong>Ready to import into ${esc(o.client.businessName)}</strong></p>
      <ul class="mb-0"><li>${c.create} new record(s) will be created</li><li>${c.update} existing record(s) will be updated${c.update ? " (previous values are kept in the import history)" : ""}</li><li>${c.skip} existing record(s) will be skipped</li><li>${c.invalid} invalid and ${c.dups} duplicate row(s) will be ignored</li></ul></div></div>
      ${c.create + c.update === 0 ? `<div class="alert alert-warning">${icon("alert")}<div>Nothing will be written. Go back to change your choices, or cancel.</div></div>` : ""}
      <p class="small subtle">Source file: ${esc(st2.fileName)}. This import will be recorded in the import history.</p>`;
      $("#wizNext", m.el).disabled = c.create + c.update === 0;
    }
    async function commit() {
      const v = st2.validated;
      const toWrite = [...v.fresh, ...st2.conflict === "update" ? v.conflicts : []].map((x) => x.record);
      const prevValues = st2.conflict === "update" && o.existing instanceof Map ? v.conflicts.map((x) => o.existing.get(x.record.id)).filter(Boolean) : [];
      st2.result = await o.commit(toWrite, {
        fileName: st2.fileName,
        newCampaigns: v.newCampaigns,
        counts: { imported: v.fresh.length, updated: st2.conflict === "update" ? v.conflicts.length : 0, skipped: (st2.conflict === "skip" ? v.conflicts.length : 0) + v.dupLines.length, failed: v.invalid.length },
        previousValues: prevValues
      });
    }
    function renderSummary() {
      const r = st2.result;
      root4.innerHTML = `${stepper()}
      <div class="alert alert-success">${icon("check")}<div><p><strong>Import complete</strong></p>
      <p>${r.imported} imported \xB7 ${r.updated} updated \xB7 ${r.skipped} skipped \xB7 ${r.failed} failed</p></div></div>
      ${r.failed ? `<button class="btn" id="errCsv2">${icon("download")}Download error report</button>` : ""}`;
      $("#errCsv2", root4)?.addEventListener("click", downloadErrors);
    }
    function downloadErrors() {
      const v = st2.validated;
      const q = (s) => `"${String(s ?? "").replace(/"/g, '""')}"`;
      const lines = [["line", "errors", ...st2.headers].map(q).join(",")];
      v.invalid.forEach((r) => lines.push([r.line, r.errors.join("; "), ...r.cells].map(q).join(",")));
      v.dupLines.forEach((d) => lines.push([d.line, `Duplicate of line ${d.duplicateOf}`].map(q).join(",")));
      downloadBlob(lines.join("\n"), `import-errors-${st2.fileName.replace(/\.\w+$/, "")}.csv`, "text/csv");
    }
    $("#wizBack", m.el).addEventListener("click", () => {
      st2.step = Math.max(1, st2.step - 1);
      render();
    });
    $("#wizNext", m.el).addEventListener("click", async (e) => {
      const btn = e.currentTarget;
      try {
        if (st2.step === 2) validate();
        if (st2.step === 4) {
          btn.classList.add("is-loading");
          await commit();
          btn.classList.remove("is-loading");
        }
        st2.step++;
        render();
      } catch (err) {
        btn.classList.remove("is-loading");
        toast(err.message, "error");
      }
    });
    render();
    return m;
  }
  var MONTHS2, pad, norm, isTotalRow;
  var init_csv_import = __esm({
    "js/csv-import.js"() {
      init_app();
      init_utils();
      init_icons();
      init_calculations();
      MONTHS2 = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12 };
      pad = (n) => String(n).padStart(2, "0");
      norm = (h) => String(h || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      isTotalRow = (r) => r.some((c) => /^total/i.test(String(c).trim()));
    }
  });

  // js/firebase/storage-service.js
  async function st() {
    if (!USE_STORAGE) throw new Error("Firebase Storage is disabled (USE_STORAGE = false in firebase-config.js).");
    const fb2 = await initFirebase();
    if (!fb2.storage) throw new Error("Firebase Storage did not initialise.");
    return { storage: fb2.storage, S: fb2.sdk.st };
  }
  function fileToDataUrl(file, maxBytes = 200 * 1024) {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith("image/")) return reject(new Error("Please choose an image file."));
      if (file.size > maxBytes) return reject(new Error(`Logo must be smaller than ${Math.round(maxBytes / 1024)} KB in Local Demo Mode.`));
      const r = new FileReader();
      r.onload = () => resolve(r.result);
      r.onerror = () => reject(new Error("Could not read the file."));
      r.readAsDataURL(file);
    });
  }
  var MAX_LOGO_BYTES, MAX_REPORT_BYTES, storageService;
  var init_storage_service = __esm({
    "js/firebase/storage-service.js"() {
      init_firebase_init();
      init_firebase_config();
      MAX_LOGO_BYTES = 512 * 1024;
      MAX_REPORT_BYTES = 15 * 1024 * 1024;
      storageService = {
        enabled: USE_STORAGE,
        async uploadClientLogo(clientId, file) {
          if (!/^image\/(png|jpeg|svg\+xml|webp)$/.test(file.type)) throw new Error("Logo must be PNG, JPG, SVG or WebP.");
          if (file.size > MAX_LOGO_BYTES) throw new Error("Logo must be smaller than 512 KB.");
          const { storage, S } = await st();
          const ref = S.ref(storage, `clients/${clientId}/logo/${Date.now()}-${file.name.replace(/[^\w.-]/g, "_")}`);
          await S.uploadBytes(ref, file, { contentType: file.type });
          return S.getDownloadURL(ref);
        },
        async uploadReportPdf(clientId, reportId, blob) {
          if (blob.size > MAX_REPORT_BYTES) throw new Error("PDF exceeds 15 MB.");
          const { storage, S } = await st();
          const ref = S.ref(storage, `clients/${clientId}/reports/${reportId}.pdf`);
          await S.uploadBytes(ref, blob, { contentType: "application/pdf" });
          return S.getDownloadURL(ref);
        },
        async getFileUrl(path) {
          const { storage, S } = await st();
          return S.getDownloadURL(S.ref(storage, path));
        }
      };
    }
  });

  // js/clients.js
  function emptyClient() {
    return {
      clientName: "",
      businessName: "",
      website: "",
      email: "",
      industry: "",
      country: "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
      currency: "USD",
      locations: "",
      customerId: "",
      campaigns: [{ id: uid("cmp"), name: "", type: "Search" }],
      dailyBudget: null,
      monthlyBudget: null,
      targetCpa: null,
      targetCvr: null,
      targetMonthlyConversions: null,
      leadCriteria: "",
      campaignStart: "",
      managementStart: "",
      logo: "",
      internalNotes: "",
      portal: { accessEnabled: false, allowPdf: true },
      status: "active"
    };
  }
  function validateClient(c) {
    const e = {};
    if (!c.businessName?.trim()) e.businessName = "Business name is required.";
    if (!c.clientName?.trim()) e.clientName = "Client contact name is required.";
    if (c.website && !/^https?:\/\/[^\s.]+\.[^\s]+$/i.test(c.website)) e.website = "Use a full URL, e.g. https://example.com";
    if (c.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) e.email = "Enter a valid email address.";
    if (c.customerId && !/^\d{3}-?\d{3}-?\d{4}$/.test(c.customerId)) e.customerId = "Google Ads Customer ID has 10 digits, e.g. 123-456-7890.";
    if (!CURRENCIES.includes(c.currency)) e.currency = "Choose a currency.";
    if (!TIMEZONES.includes(c.timezone)) e.timezone = "Choose a valid time zone.";
    ["dailyBudget", "monthlyBudget", "targetCpa", "targetCvr", "targetMonthlyConversions"].forEach((k) => {
      if (c[k] !== null && c[k] !== void 0 && (!(c[k] >= 0) || !Number.isFinite(c[k]))) e[k] = "Must be zero or a positive number.";
    });
    if (c.targetCvr > 100) e.targetCvr = "Conversion rate cannot exceed 100%.";
    if (c.campaignStart && c.managementStart && c.managementStart < c.campaignStart) e.managementStart = "Management start is before the campaign start date.";
    const names = (c.campaigns || []).map((x) => x.name.trim().toLowerCase()).filter(Boolean);
    if (!names.length) e.campaigns = "Add at least one campaign.";
    else if (new Set(names).size !== names.length) e.campaigns = "Campaign names must be unique.";
    return e;
  }
  function campaignRow(c) {
    return `<div class="campaign-row" data-id="${esc(c.id)}">
    <input class="input" placeholder="Campaign name (as in Google Ads)" value="${esc(c.name)}" data-k="name" aria-label="Campaign name">
    <select class="select" data-k="type" aria-label="Campaign type">${CAMPAIGN_TYPES.map((t) => `<option ${t === c.type ? "selected" : ""}>${t}</option>`).join("")}</select>
    <button type="button" class="btn btn-ghost btn-icon" data-remove aria-label="Remove campaign">${icon("trash")}</button></div>`;
  }
  function clientFormHtml(c) {
    return `
  <form id="clientForm" novalidate>
    <fieldset><legend>Business</legend><div class="form-grid">
      ${f("businessName", "Business name", c.businessName, { req: true })}
      ${f("clientName", "Client contact name", c.clientName, { req: true })}
      ${f("website", "Website URL", c.website, { type: "url", attrs: 'placeholder="https://"' })}
      ${f("email", "Business email", c.email, { type: "email" })}
      ${f("industry", "Industry / niche", c.industry)}
      ${f("country", "Country", c.country)}
      <div class="field"><label for="cf_timezone">Time zone <span class="req">*</span></label><select class="select" id="cf_timezone" name="timezone">${TIMEZONES.map((t) => `<option ${t === c.timezone ? "selected" : ""}>${esc(t)}</option>`).join("")}</select><span class="help">Use the Google Ads account time zone.</span><span class="error-text" data-err="timezone"></span></div>
      <div class="field"><label for="cf_currency">Currency <span class="req">*</span></label><select class="select" id="cf_currency" name="currency">${CURRENCIES.map((x) => `<option ${x === c.currency ? "selected" : ""}>${x}</option>`).join("")}</select><span class="help">Account currency. Totals are never mixed across currencies.</span></div>
      <div class="field full"><label for="cf_locations">Business locations & service areas</label><textarea class="textarea" id="cf_locations" name="locations" rows="2">${esc(c.locations)}</textarea></div>
      <div class="field"><label for="cf_logoFile">Client logo</label><input class="input" type="file" id="cf_logoFile" accept="image/png,image/jpeg,image/svg+xml,image/webp"><span class="help">${c.logo ? "A logo is set. Choose a file to replace it." : "Optional. PNG/JPG/SVG under 200 KB."}</span><span class="error-text" data-err="logo"></span></div>
      ${c.logo ? `<div class="field"><label>Current logo</label><div class="flex items-center gap-1"><div class="client-logo"><img src="${esc(c.logo)}" alt=""></div><label class="check"><input type="checkbox" name="removeLogo"> Remove</label></div></div>` : ""}
    </div></fieldset>

    <fieldset><legend>Google Ads account</legend><div class="form-grid">
      ${f("customerId", "Google Ads Customer ID", c.customerId, { attrs: 'placeholder="123-456-7890"' })}
      ${f("campaignStart", "Campaign start date", c.campaignStart, { type: "date" })}
      ${f("managementStart", "Management start date", c.managementStart, { type: "date" })}
      <div class="field full"><span class="label">Campaigns <span class="req">*</span></span>
        <div class="campaign-rows" id="campaignRows">${(c.campaigns || []).map(campaignRow).join("")}</div>
        <div><button type="button" class="btn btn-sm" id="addCampaign">${icon("plus")}Add campaign</button></div>
        <span class="error-text" data-err="campaigns"></span>
      </div>
    </div></fieldset>

    <fieldset><legend>Budget & targets</legend><div class="form-grid cols-3">
      ${f("dailyBudget", `Daily budget`, c.dailyBudget, { type: "number", attrs: 'min="0" step="0.01"' })}
      ${f("monthlyBudget", "Monthly budget", c.monthlyBudget, { type: "number", attrs: 'min="0" step="0.01"' })}
      ${f("targetCpa", "Target cost per lead (CPA)", c.targetCpa, { type: "number", attrs: 'min="0" step="0.01"' })}
      ${f("targetCvr", "Target conversion rate (%)", c.targetCvr, { type: "number", attrs: 'min="0" max="100" step="0.1"' })}
      ${f("targetMonthlyConversions", "Target monthly conversions / leads", c.targetMonthlyConversions, { type: "number", attrs: 'min="0" step="1"' })}
      <div class="field full"><label for="cf_leadCriteria">Lead qualification criteria</label><textarea class="textarea" id="cf_leadCriteria" name="leadCriteria" rows="2" placeholder="e.g. call over 60s, inside service area">${esc(c.leadCriteria)}</textarea></div>
    </div></fieldset>

    <fieldset><legend>Internal (never shown to the client)</legend><div class="form-grid">
      <div class="field full"><label for="cf_internalNotes">Internal notes</label><textarea class="textarea" id="cf_internalNotes" name="internalNotes" rows="3">${esc(c.internalNotes)}</textarea><span class="help">Stored in the admin-only client record. Excluded from portal profiles and report snapshots.</span></div>
      <label class="check"><input type="checkbox" name="portalAccess" ${c.portal?.accessEnabled ? "checked" : ""}> Client portal access enabled</label>
    </div></fieldset>
  </form>`;
  }
  function bindClientForm(root4) {
    const rows = $("#campaignRows", root4);
    $("#addCampaign", root4).addEventListener("click", () => {
      rows.insertAdjacentHTML("beforeend", campaignRow({ id: uid("cmp"), name: "", type: "Search" }));
      rows.lastElementChild.querySelector("input").focus();
    });
    rows.addEventListener("click", (e) => {
      const b = e.target.closest("[data-remove]");
      if (!b) return;
      if (rows.children.length === 1) return;
      b.closest(".campaign-row").remove();
    });
  }
  function readClientForm(root4, existing) {
    const form = $("#clientForm", root4);
    const v = (n) => form.elements[n]?.value?.trim() ?? "";
    const num = (n) => v(n) === "" ? null : Number(v(n));
    const campaigns = $$(".campaign-row", root4).map((r) => {
      const prev = existing?.campaigns?.find((c) => c.id === r.dataset.id);
      return { ...prev || {}, id: r.dataset.id, name: r.querySelector('[data-k="name"]').value.trim(), type: r.querySelector('[data-k="type"]').value };
    }).filter((c) => c.name);
    return {
      ...existing || {},
      businessName: v("businessName"),
      clientName: v("clientName"),
      website: v("website"),
      email: v("email"),
      industry: v("industry"),
      country: v("country"),
      timezone: v("timezone"),
      currency: v("currency"),
      locations: v("locations"),
      customerId: v("customerId"),
      campaignStart: v("campaignStart"),
      managementStart: v("managementStart"),
      campaigns,
      dailyBudget: num("dailyBudget"),
      monthlyBudget: num("monthlyBudget"),
      targetCpa: num("targetCpa"),
      targetCvr: num("targetCvr"),
      targetMonthlyConversions: num("targetMonthlyConversions"),
      leadCriteria: v("leadCriteria"),
      internalNotes: v("internalNotes"),
      portal: { ...existing?.portal || { allowPdf: true }, accessEnabled: form.elements.portalAccess.checked },
      _removeLogo: !!form.elements.removeLogo?.checked
    };
  }
  function showErrors(root4, errors) {
    $$("[data-err]", root4).forEach((el) => el.textContent = "");
    $$(".invalid", root4).forEach((el) => el.classList.remove("invalid"));
    Object.entries(errors).forEach(([k, msg]) => {
      const el = $(`[data-err="${k}"]`, root4);
      if (el) el.textContent = msg;
      $(`[name="${k}"]`, root4)?.classList.add("invalid");
    });
    const first = Object.keys(errors)[0];
    if (first) ($(`[name="${first}"]`, root4) || $(`[data-err="${first}"]`, root4))?.scrollIntoView?.({ block: "center" });
  }
  async function saveClientFromForm(root4, existing) {
    const c = readClientForm(root4, existing);
    const errors = validateClient(c);
    const file = $("#cf_logoFile", root4)?.files?.[0];
    if (file) {
      try {
        if (getMode() === "firebase" && storageService.enabled) {
          if (!c.id) c.id = void 0;
          c._pendingLogo = file;
        } else {
          c.logo = await fileToDataUrl(file);
        }
      } catch (e) {
        errors.logo = e.message;
      }
    }
    if (Object.keys(errors).length) {
      showErrors(root4, errors);
      throw new Error("Please fix the highlighted fields.");
    }
    if (c._removeLogo) c.logo = "";
    delete c._removeLogo;
    const pending = c._pendingLogo;
    delete c._pendingLogo;
    let saved = await store.saveClient(c, { action: existing ? "client.update" : "client.create" });
    if (pending) {
      saved.logo = await storageService.uploadClientLogo(saved.id, pending);
      saved = await store.saveClient(saved, { action: "client.logo" });
    }
    return saved;
  }
  var CAMPAIGN_TYPES, TIMEZONES, f;
  var init_clients = __esm({
    "js/clients.js"() {
      init_utils();
      init_icons();
      init_calculations();
      init_state();
      init_storage_service();
      CAMPAIGN_TYPES = ["Search", "Performance Max", "Display", "Video", "Demand Gen", "Shopping", "Local Services", "Other"];
      TIMEZONES = (() => {
        try {
          return Intl.supportedValuesOf("timeZone");
        } catch {
          return ["UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "Europe/London", "Asia/Dhaka", "Australia/Sydney"];
        }
      })();
      f = (name2, label, value, { type = "text", req = false, help = "", attrs = "", full = false } = {}) => `
  <div class="field ${full ? "full" : ""}"><label for="cf_${name2}">${esc(label)}${req ? ' <span class="req">*</span>' : ""}</label>
  <input class="input" id="cf_${name2}" name="${name2}" type="${type}" value="${esc(value ?? "")}" ${req ? "required" : ""} ${attrs}>
  ${help ? `<span class="help">${esc(help)}</span>` : ""}<span class="error-text" data-err="${name2}"></span></div>`;
    }
  });

  // js/pages/baseline-audit.js
  var baseline_audit_exports = {};
  async function main2({ content, session }) {
    const client = await resolveClientOrPicker(content, { pageTitle: "Initial Audit & Baseline", intro: "Choose a client to record the campaign condition before optimization began.", href: "baseline-audit.html" });
    if (!client) return;
    const cc = client.currency;
    content.innerHTML = workspaceHeader(client, "audit") + `<div id="blBody">${loadingHtml()}</div>`;
    async function render() {
      const body = $("#blBody");
      const audits = (await store.list("baselines", client.id)).sort((a, b) => a.auditDate < b.auditDate ? 1 : -1);
      const original = audits.find((a) => a.isOriginal);
      const others = audits.filter((a) => !a.isOriginal);
      body.innerHTML = `
      <div class="page-header">
        <div><h1 style="font-size:18px">Initial audit & baseline</h1><p>The original baseline is the fixed reference for all "before vs after" comparisons.</p></div>
        <div class="page-actions"><button class="btn btn-primary" id="newAudit">${icon("plus")}${original ? "Record a new dated audit" : "Record original baseline"}</button></div>
      </div>
      ${original ? auditCard(original, true) : `<div class="card mb-2">${emptyState({ title: "No baseline yet", text: "Record how the account performed before you started managing it. Enter campaign rows manually or import a Google Ads campaign report CSV.", iconName: "audit" })}</div>`}
      ${others.length ? `<h2 class="mt-3">Later audits</h2>${others.map((a) => auditCard(a, false)).join("")}` : ""}`;
      $("#newAudit").addEventListener("click", () => auditForm(null, !original));
      $$("[data-edit-audit]", body).forEach((b) => b.addEventListener("click", () => auditForm(audits.find((a) => a.id === b.dataset.editAudit), false)));
      $$("[data-copy-audit]", body).forEach((b) => b.addEventListener("click", () => {
        const src = audits.find((a) => a.id === b.dataset.copyAudit);
        const copy = clone(src);
        delete copy.id;
        copy.isOriginal = false;
        copy.locked = false;
        copy.auditDate = todayInTz(client.timezone);
        copy.notes = `Copied from audit of ${fmtDate(src.auditDate)}. ${copy.notes || ""}`;
        auditForm(copy, false, true);
      }));
      $$("[data-del-audit]", body).forEach((b) => b.addEventListener("click", async () => {
        if (!await confirmDialog({ title: "Delete this audit?", message: "This later audit will be permanently deleted. The original baseline is not affected.", confirmText: "Delete", danger: true })) return;
        await withLoading(b, async () => {
          await store.remove("baselines", client.id, b.dataset.delAudit, "baseline.delete");
          toast("Audit deleted.", "success");
          render();
        });
      }));
      $$("[data-promote]", body).forEach((b) => b.addEventListener("click", async () => {
        const a = audits.find((x) => x.id === b.dataset.promote);
        if (!await confirmDialog({ title: "Make this the comparison baseline?", message: `All future comparisons and new reports will use the audit of ${fmtDate(a.auditDate)} as the baseline. The current original is kept (marked as previous original). Published reports are not changed.`, confirmText: "Continue", danger: true })) return;
        if (!await confirmDialog({ title: "Please confirm again", message: "This changes how progress is measured for this client. Are you sure?", confirmText: "Yes, change baseline", danger: true })) return;
        await withLoading(b, async () => {
          if (original) await store.put("baselines", client.id, { ...original, isOriginal: false, formerOriginal: true, replacedAt: nowIso(), replacedBy: a.id });
          await store.put("baselines", client.id, { ...a, isOriginal: true, locked: true, promotedAt: nowIso(), promotedBy: session.email }, "baseline.promote");
          toast("Baseline reference changed.", "success");
          render();
        });
      }));
    }
    function auditCard(a, isOrig) {
      const t = baselineTotals(a);
      const rows = a.rows || [];
      return `<div class="card mb-2" data-audit="${esc(a.id)}">
      <div class="card-header">
        <div><h2>${isOrig ? "Original baseline" : "Audit"} \u2014 ${esc(fmtDate(a.auditDate))} ${isOrig ? `<span class="badge badge-accent">${icon("lock")}Locked reference</span>` : a.formerOriginal ? '<span class="badge">Previous original</span>' : ""}</h2>
        <div class="small subtle">Reporting period ${esc(fmtRange(a.periodStart, a.periodEnd))} (${t.days ?? "?"} days) \xB7 Tracking: ${esc(TRACKING_OPTIONS[a.trackingStatus] || "\u2014")}</div></div>
        <div class="flex gap-1 wrap">
          <button class="btn btn-sm" data-copy-audit="${esc(a.id)}">${icon("copy")}Start new audit from this</button>
          ${isOrig ? "" : `<button class="btn btn-sm" data-edit-audit="${esc(a.id)}">${icon("edit")}Edit</button><button class="btn btn-sm" data-promote="${esc(a.id)}">Use as baseline</button><button class="btn btn-sm btn-danger" data-del-audit="${esc(a.id)}">${icon("trash")}</button>`}
        </div>
      </div>
      ${isOrig ? `<p class="small muted">${icon("lock")} Locked so later data can never overwrite the starting point. To record changes, add a new dated audit.</p>` : ""}
      <div class="grid grid-kpi mb-2">
        ${[["Spend", fmtMoney(t.spend, cc)], ["Clicks", fmtInt(t.clicks)], ["Conversions", fmtDec(t.conversions)], ["CTR", fmtPct(t.ctr)], ["Avg. CPC", fmtMoney(t.cpc, cc)], ["Conv. rate", fmtPct(t.cvr)], ["Cost / conv.", fmtMoney(t.cpa, cc)], ["ROAS", fmtX(t.roas)], ["Qualified leads", fmtDec(a.qualifiedLeads)]].map(([l, v]) => `<div class="card kpi"><div class="kpi-label">${l}</div><div class="kpi-value ${v === "\u2014" ? "na" : ""}" style="font-size:19px">${esc(v)}</div></div>`).join("")}
      </div>
      <div class="table-wrap mb-2"><table class="table"><thead><tr><th>Campaign</th><th>Ad group</th><th>Status</th><th>Type</th><th>Bidding</th><th class="num">Budget/day</th><th class="num">Impr.</th><th class="num">Clicks</th><th class="num">CTR</th><th class="num">CPC</th><th class="num">Spend</th><th class="num">Conv.</th><th class="num">Conv. rate</th><th class="num">CPA</th><th class="num">ROAS</th><th class="num">Search IS</th></tr></thead><tbody>
      ${rows.map((r) => {
        const d = rowDerived(r);
        return `<tr><td>${esc(r.campaign)}</td><td>${esc(r.adGroup || "\u2014")}</td><td>${esc(r.status || "\u2014")}</td><td>${esc(r.type || "\u2014")}</td><td>${esc(r.bidding || "\u2014")}</td><td class="num">${esc(fmtMoney(r.dailyBudget, cc))}</td><td class="num">${esc(fmtInt(r.impressions))}</td><td class="num">${esc(fmtInt(r.clicks))}</td><td class="num">${esc(fmtPct(d.ctr))}</td><td class="num">${esc(fmtMoney(d.cpc, cc))}</td><td class="num">${esc(fmtMoney(r.spend, cc))}</td><td class="num">${esc(fmtDec(r.conversions))}</td><td class="num">${esc(fmtPct(d.cvr))}</td><td class="num">${esc(fmtMoney(d.cpa, cc))}</td><td class="num">${esc(fmtX(d.roas))}</td><td class="num">${isNum(r.searchIS) ? esc(r.searchIS + "%") : "\u2014"}</td></tr>`;
      }).join("")}
      </tbody></table></div>
      <div class="grid grid-2">${QUALITATIVE_FIELDS.filter(([k]) => a[k]).map(([k, l]) => `<div><h4>${esc(l)}</h4><p class="small" style="white-space:pre-wrap">${esc(a[k])}</p></div>`).join("")}</div>
      <p class="small subtle mb-0">Recorded ${esc(fmtDate((a.createdAt || "").slice(0, 10)))}${a.updatedAt && a.updatedAt !== a.createdAt ? ` \xB7 updated ${esc(fmtDate(a.updatedAt.slice(0, 10)))}` : ""}.</p>
    </div>`;
    }
    function auditForm(existing, isOriginal, isCopy = false) {
      const today = todayInTz(client.timezone);
      const a = existing ? clone(existing) : {
        auditDate: today,
        periodStart: addDays(today, -30),
        periodEnd: addDays(today, -1),
        trackingStatus: "unknown",
        qualifiedLeads: null,
        rows: (client.campaigns || []).map((c) => ({ campaign: c.name, type: c.type, status: "Enabled", adGroup: "", bidding: "", dailyBudget: null, impressions: null, clicks: null, spend: null, conversions: null, convValue: null, searchIS: null }))
      };
      const rowHtml = (r) => `<tr>${ROW_FIELDS.map((f2) => f2.key === "type" ? `<td><select class="select" data-k="type" style="min-width:130px">${["", ...CAMPAIGN_TYPES].map((t) => `<option ${t === r.type ? "selected" : ""}>${t}</option>`).join("")}</select></td>` : `<td><input class="input" data-k="${f2.key}" ${f2.type === "number" ? 'type="number" min="0" step="any"' : ""} value="${esc(r[f2.key] ?? "")}" style="min-width:${f2.type === "number" ? 90 : 140}px" aria-label="${esc(f2.label)}"></td>`).join("")}
      <td class="calc small subtle nowrap"></td><td><button type="button" class="btn btn-ghost btn-icon btn-sm" data-rm aria-label="Remove row">${icon("trash")}</button></td></tr>`;
      const m = openModal({
        title: existing && !isCopy ? "Edit audit" : isOriginal ? "Record original baseline" : "Record new dated audit",
        size: "xwide",
        body: `
        ${isOriginal ? `<div class="alert alert-info">${icon("info")}<div>This will become the <strong>original baseline</strong> and will be locked after saving.</div></div>` : ""}
        <form id="auditForm" novalidate>
        <div class="form-grid cols-4 mb-2">
          <div class="field"><label>Audit date *</label><input class="input" type="date" name="auditDate" value="${esc(a.auditDate)}"></div>
          <div class="field"><label>Period start *</label><input class="input" type="date" name="periodStart" value="${esc(a.periodStart)}"></div>
          <div class="field"><label>Period end *</label><input class="input" type="date" name="periodEnd" value="${esc(a.periodEnd)}"></div>
          <div class="field"><label>Conversion tracking</label><select class="select" name="trackingStatus">${Object.entries(TRACKING_OPTIONS).map(([k, v]) => `<option value="${k}" ${k === a.trackingStatus ? "selected" : ""}>${v}</option>`).join("")}</select></div>
          <div class="field"><label>Qualified leads in period</label><input class="input" type="number" min="0" name="qualifiedLeads" value="${esc(a.qualifiedLeads ?? "")}"><span class="help">Leave blank if unknown.</span></div>
        </div>
        <div class="flex justify-between items-center mb-1"><h3 class="mb-0">Campaign & ad group rows</h3><div class="flex gap-1"><button type="button" class="btn btn-sm" id="csvRows">${icon("upload")}Import rows from CSV</button><button type="button" class="btn btn-sm" id="addRow">${icon("plus")}Add row</button></div></div>
        <div class="table-wrap mb-2"><table class="table" id="rowTable"><thead><tr>${ROW_FIELDS.map((f2) => `<th>${esc(f2.label)}${f2.required ? " *" : ""}</th>`).join("")}<th>Calculated</th><th></th></tr></thead><tbody>${(a.rows || []).map(rowHtml).join("")}</tbody></table></div>
        <div class="form-grid">${QUALITATIVE_FIELDS.map(([k, l]) => `<div class="field"><label>${esc(l)}</label><textarea class="textarea" name="${k}" rows="3">${esc(a[k] || "")}</textarea></div>`).join("")}</div>
        <div id="auditErr" class="alert alert-danger hidden mt-2"></div></form>`,
        footer: `<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="saveAudit">${isOriginal ? "Save & lock baseline" : "Save audit"}</button>`
      });
      const tbody = $("#rowTable tbody", m.el);
      const readRows = () => $$("tr", tbody).map((tr) => {
        const r = {};
        ROW_FIELDS.forEach((f2) => {
          const v = $(`[data-k="${f2.key}"]`, tr).value.trim();
          r[f2.key] = f2.type === "number" ? v === "" ? null : Number(v) : v;
        });
        return r;
      }).filter((r) => r.campaign || isNum(r.clicks));
      const recalc = () => $$("tr", tbody).forEach((tr) => {
        const r = {};
        ["impressions", "clicks", "spend", "conversions", "convValue"].forEach((k) => {
          const v = $(`[data-k="${k}"]`, tr).value;
          r[k] = v === "" ? null : Number(v);
        });
        const d = rowDerived(r);
        $(".calc", tr).textContent = `CTR ${fmtPct(d.ctr)} \xB7 CPA ${fmtMoney(d.cpa, cc)}`;
      });
      tbody.addEventListener("input", recalc);
      recalc();
      tbody.addEventListener("click", (e) => {
        if (e.target.closest("[data-rm]")) {
          e.target.closest("tr").remove();
        }
      });
      $("#addRow", m.el).addEventListener("click", () => {
        tbody.insertAdjacentHTML("beforeend", rowHtml({}));
        recalc();
      });
      $("#csvRows", m.el).addEventListener("click", () => {
        openCsvWizard({
          title: "Import baseline campaign rows",
          schema: ROW_FIELDS,
          client,
          existing: /* @__PURE__ */ new Set(),
          buildRecord: (v) => ({ record: v, errors: [] }),
          identity: () => uid("row"),
          previewCols: [{ label: "Campaign", fmt: (r) => r.campaign }, { label: "Ad group", fmt: (r) => r.adGroup }, { label: "Clicks", fmt: (r) => fmtInt(r.clicks) }, { label: "Spend", fmt: (r) => fmtMoney(r.spend, cc) }, { label: "Conv.", fmt: (r) => fmtDec(r.conversions) }],
          commit: async (records, meta) => {
            if ($$("tr", tbody).length && records.length) tbody.innerHTML = "";
            records.forEach((r) => tbody.insertAdjacentHTML("beforeend", rowHtml(r)));
            recalc();
            return { imported: records.length, updated: 0, skipped: meta.counts.skipped, failed: meta.counts.failed };
          }
        });
      });
      $("#saveAudit", m.el).addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
        const fm = $("#auditForm", m.el);
        const rec = { ...isCopy ? {} : existing || {}, ...a };
        ["auditDate", "periodStart", "periodEnd", "trackingStatus", ...QUALITATIVE_FIELDS.map(([k]) => k)].forEach((k) => rec[k] = fm.elements[k].value.trim());
        rec.qualifiedLeads = fm.elements.qualifiedLeads.value === "" ? null : Number(fm.elements.qualifiedLeads.value);
        rec.rows = readRows();
        const errs = validateBaseline(rec);
        const box = $("#auditErr", m.el);
        if (errs.length) {
          box.innerHTML = `<div>${errs.slice(0, 12).map(esc).join("<br>")}</div>`;
          box.classList.remove("hidden");
          return;
        }
        const current = await store.list("baselines", client.id);
        const hasOriginal = current.some((x) => x.isOriginal);
        if (existing?.locked && !isCopy) throw new Error("The original baseline is locked and cannot be edited.");
        if (isCopy) delete rec.id;
        rec.isOriginal = !hasOriginal && (isOriginal || !existing);
        rec.locked = rec.isOriginal;
        rec.recordedBy = session.email;
        await store.put("baselines", client.id, rec, rec.isOriginal ? "baseline.original.create" : existing && !isCopy ? "baseline.update" : "baseline.create");
        toast(rec.isOriginal ? "Original baseline saved and locked." : "Audit saved.", "success");
        m.close();
        render();
      }));
    }
    render().catch((e) => $("#blBody").innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>${esc(e.message)}</div></div>`);
  }
  var init_baseline_audit = __esm({
    "js/pages/baseline-audit.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_baseline();
      init_csv_import();
      init_clients();
      (async () => {
        const ctx2 = await initAdminPage({ page: "baseline", title: "Baseline Audit" });
        if (ctx2) main2(ctx2);
      })();
    }
  });

  // js/components/score-card.js
  function scoreCardHtml(score) {
    const col = { success: "var(--success)", accent: "var(--accent)", warning: "var(--warning)", danger: "var(--danger)" }[toneFor(score.label)] || "var(--text-3)";
    return `
    <div class="card-header"><h2>Performance score</h2><span class="hint">Internal score \xB7 not Google's Optimization Score</span></div>
    <div class="flex gap-2 items-center wrap">
      <div class="score-ring" style="--val:${score.score ?? 0};--col:${col}"><div><strong>${score.score ?? "\u2014"}</strong><span>${esc(score.label)}</span></div></div>
      <div class="grow" style="min-width:220px">
        ${score.factors.map((f2) => `<div class="mb-1"><div class="flex justify-between small"><span>${esc(f2.label)} <span class="subtle">(${f2.available ? `${f2.effectiveWeight.toFixed(0)}%` : "excluded"})</span></span><strong>${f2.available ? f2.score : "n/a"}</strong></div><div class="bar"><i style="width:${f2.score ?? 0}%"></i></div><div class="small subtle">${esc(f2.detail)}</div></div>`).join("")}
      </div>
    </div>
    ${score.flags.map((f2) => `<div class="alert alert-${f2.type === "danger" ? "danger" : f2.type === "warning" ? "warning" : "info"} mt-1 mb-0">${icon("alert")}<div>${esc(f2.text)}</div></div>`).join("")}
    <ul class="small muted mt-1">${score.explanation.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
    <p class="small subtle mb-0">Data: ${score.dataSummary.daysWithData}/${score.dataSummary.days} days \xB7 ${fmtDec(score.dataSummary.clicks)} clicks \xB7 ${fmtDec(score.dataSummary.conversions)} conversions (minimum ${score.dataSummary.minimums.clicks} clicks / ${score.dataSummary.minimums.conversions} conv.).</p>`;
  }
  var init_score_card = __esm({
    "js/components/score-card.js"() {
      init_utils();
      init_icons();
      init_scoring();
      init_calculations();
    }
  });

  // js/client-portal.js
  function portalBaseUrl() {
    return new URL("client-portal.html", location.href).href.split("?")[0];
  }
  async function createShareLink(clientId, { expiresDays = 30, label = "" } = {}) {
    if (getMode() === "firebase") {
      const { callFunction: callFunction2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
      const res = await callFunction2("createShareLink", { clientId, expiresDays, label });
      return { url: `${portalBaseUrl()}?token=${res.token}`, record: res.record };
    }
    const token = randomToken(32);
    const hash = await sha256Hex(token);
    const record = { id: hash, clientId, label, createdAt: nowIso(), expiresAt: new Date(Date.now() + expiresDays * DAY).toISOString(), revoked: false, lastUsedAt: null, simulated: true };
    await localAdapter.putShareToken(record);
    await store.audit("share.create", { clientId, expiresDays });
    return { url: `${portalBaseUrl()}?token=${token}`, record };
  }
  async function listShareLinks(clientId) {
    if (getMode() === "firebase") {
      const { callFunction: callFunction2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
      return (await callFunction2("listShareLinks", { clientId })).links || [];
    }
    return localAdapter.listShareTokens(clientId);
  }
  async function revokeShareLink(clientId, id) {
    if (getMode() === "firebase") {
      const { callFunction: callFunction2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
      return callFunction2("revokeShareLink", { clientId, id });
    }
    const t = (await localAdapter.listShareTokens(clientId)).find((x) => x.id === id);
    if (!t) throw new Error("Link not found.");
    await localAdapter.putShareToken({ ...t, revoked: true, revokedAt: nowIso() });
    await store.audit("share.revoke", { clientId });
  }
  async function resolvePortal({ token, requestedClient } = {}) {
    if (token) return resolveToken(token);
    const s = await getSession();
    if (!s) return { ok: false, reason: "login" };
    let clientId;
    if (s.role === "client") {
      clientId = s.clientId;
      if (requestedClient && requestedClient !== clientId) return { ok: false, reason: "forbidden", session: s };
    } else if (s.role === "admin") {
      clientId = requestedClient;
      if (!clientId) return { ok: false, reason: "pick", session: s };
    } else return { ok: false, reason: "forbidden", session: s };
    const profile = await store.getPortalProfile(clientId);
    if (!profile) return { ok: false, reason: "missing", session: s };
    if (!profile.accessEnabled && s.role !== "admin") return { ok: false, reason: "disabled", session: s };
    const snapshots = (await store.list("reportSnapshots", clientId, { publishedOnly: true })).filter((x) => x.published === true);
    return { ok: true, via: s.role === "admin" ? "admin-preview" : "account", clientId, profile, snapshots, session: s };
  }
  async function resolveToken(token) {
    if (!/^[a-f0-9]{64}$/.test(token)) return { ok: false, reason: "invalid-token" };
    if (getMode() === "firebase") {
      try {
        const { callFunction: callFunction2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
        const res = await callFunction2("getSharedPortal", { token });
        return { ok: true, via: "token", clientId: res.profile.clientId, profile: res.profile, snapshots: res.snapshots };
      } catch (e) {
        return { ok: false, reason: /expired/i.test(e.message) ? "expired-token" : "invalid-token", message: e.message };
      }
    }
    const hash = await sha256Hex(token);
    const rec = await localAdapter.findShareToken(hash);
    if (!rec || rec.revoked) return { ok: false, reason: "invalid-token" };
    if (rec.expiresAt < nowIso()) return { ok: false, reason: "expired-token" };
    const profile = await store.getPortalProfile(rec.clientId);
    if (!profile || !profile.accessEnabled) return { ok: false, reason: "disabled" };
    await localAdapter.putShareToken({ ...rec, lastUsedAt: nowIso() });
    const snapshots = (await store.list("reportSnapshots", rec.clientId, { publishedOnly: true })).filter((x) => x.published === true);
    return { ok: true, via: "token", clientId: rec.clientId, profile, snapshots };
  }
  async function createLocalClientLogin(clientId, { email, name: name2, password }) {
    if (getMode() !== "local") throw new Error("In Firebase mode, create client logins with the setUserRole Cloud Function (SETUP-GUIDE.md \xA76).");
    email = String(email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Enter a valid email.");
    if (!password || password.length < 8) throw new Error("Password must be at least 8 characters.");
    const users = await store.listUsers();
    if (users.some((u) => u.email.toLowerCase() === email)) throw new Error("A login with this email already exists.");
    await store.saveUser({ id: uid("u"), email, name: name2 || email, role: "client", clientId, passwordHash: await sha256Hex(password), createdAt: nowIso() });
    await store.audit("user.create", { clientId, email });
  }
  async function setLocalLoginDisabled(userId, disabled) {
    const u = (await store.listUsers()).find((x) => x.id === userId);
    if (!u) throw new Error("User not found.");
    if (u.role === "admin") throw new Error("Administrator accounts cannot be disabled here.");
    await store.saveUser({ ...u, disabled });
    await store.audit(disabled ? "user.disable" : "user.enable", { userId });
  }
  var DAY;
  var init_client_portal = __esm({
    "js/client-portal.js"() {
      init_state();
      init_utils();
      init_auth();
      DAY = 864e5;
    }
  });

  // js/pages/client-details.js
  var client_details_exports = {};
  async function main3({ content, settings }) {
    const id = qs("id");
    let client = id ? await store.getClient(id) : null;
    if (!client) {
      content.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>Client not found. <a href="clients.html">Back to clients</a></div></div>`;
      return;
    }
    const tab = ["overview", "settings"].includes(qs("tab")) ? qs("tab") : "overview";
    document.title = `${client.businessName} \xB7 Masud PPC`;
    content.innerHTML = workspaceHeader(client, tab) + `<div id="tabBody">${loadingHtml()}</div>`;
    const body = $("#tabBody");
    try {
      if (tab === "overview") await overview(body, client, settings);
      if (tab === "portal") await portal(body, client);
      if (tab === "settings") await clientSettings(body, client);
    } catch (e) {
      console.error(e);
      body.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>${esc(e.message)}</div></div>`;
    }
  }
  async function overview(body, client, settings) {
    const range = resolveRange("last30", client.timezone);
    const prevP = previousPeriod(range);
    const [rows, baselines, logs, reports] = await Promise.all([
      store.list("dailyMetrics", client.id, { from: prevP.from, to: range.to }),
      store.list("baselines", client.id),
      store.list("optimizationLogs", client.id),
      store.list("reports", client.id)
    ]);
    const cur = rows.filter((r) => r.date >= range.from);
    const prev = rows.filter((r) => r.date < range.from);
    const t = aggregate(cur), p = aggregate(prev);
    const baseline = baselines.find((b) => b.isOriginal);
    const bt = baselineTotals(baseline);
    const score = scoreWindow({ rows: cur, prevRows: prev, client, baseline, range, cfg: settings.scoring, today: todayInTz(client.timezone) });
    const cc = client.currency;
    const kpi2 = (k) => {
      const ch = change(t[k], p[k]);
      return `<div class="card kpi"><div class="kpi-label">${esc(fmtMetricLabel(k))}</div><div class="kpi-value ${t[k] === null ? "na" : ""}">${esc(fmtMetric(k, t[k], cc))}</div><div class="kpi-delta ${changeTone(k, ch)}">${esc(fmtChange(k, ch, cc))} vs prev. 30d</div>${bt && ["ctr", "cvr", "cpa", "cpc"].includes(k) ? `<div class="kpi-sub">Baseline: ${esc(fmtMetric(k, bt[k], cc))}</div>` : ""}</div>`;
    };
    body.innerHTML = `
    <p class="small subtle">${esc(fmtRange(range.from, range.to))} (last 30 days, ${esc(client.timezone)}) vs ${esc(fmtRange(prevP.from, prevP.to))}.</p>
    <div class="grid grid-kpi mb-2">${["spend", "clicks", "conversions", "cpa", "cvr", "ctr", ...t.qualifiedLeads !== null ? ["qualifiedLeads"] : []].map(kpi2).join("")}</div>
    <div class="grid grid-2 mb-2">
      <div class="card"><div class="card-header"><h2>Daily spend & conversions</h2></div><div class="chart-box" id="ovChart"></div></div>
      <div class="card" id="scoreCard">${scoreCardHtml(score)}</div>
    </div>
    <div class="grid grid-3">
      <div class="card"><div class="card-header"><h2>Original baseline</h2><a class="small" href="baseline-audit.html?client=${esc(client.id)}">Open</a></div>
        ${baseline ? `<dl class="dl"><dt>Audit date</dt><dd>${esc(fmtDate(baseline.auditDate))}</dd><dt>Period</dt><dd>${esc(fmtRange(baseline.periodStart, baseline.periodEnd))}</dd><dt>Spend</dt><dd>${esc(fmtMoney(bt.spend, cc))}</dd><dt>Conversions</dt><dd>${esc(fmtDec(bt.conversions))}</dd><dt>Cost / conv.</dt><dd>${esc(fmtMoney(bt.cpa, cc))}</dd><dt>Tracking</dt><dd>${esc(baseline.trackingStatus || "\u2014")}</dd></dl>` : `<p class="muted">No baseline recorded yet.</p><a class="btn btn-sm" href="baseline-audit.html?client=${esc(client.id)}">Record baseline</a>`}</div>
      <div class="card"><div class="card-header"><h2>Recent optimizations</h2><a class="small" href="optimization-log.html?client=${esc(client.id)}">Log</a></div>
        ${logs.length ? `<ul class="list">${logs.sort((a, b) => a.date < b.date ? 1 : -1).slice(0, 5).map((l) => `<li><div><div class="title small">${esc(l.category)}: ${esc(l.field)}</div><div class="meta">${esc(fmtDate(l.date))} \xB7 ${esc(campaignName(client, l.campaignId))}</div></div><span class="badge">${esc(l.status)}</span></li>`).join("")}</ul>` : `<p class="muted">No entries yet.</p>`}</div>
      <div class="card"><div class="card-header"><h2>Client details</h2><a class="small" href="client-details.html?id=${esc(client.id)}&tab=settings">Edit</a></div>
        <dl class="dl"><dt>Contact</dt><dd>${esc(client.clientName)}</dd><dt>Email</dt><dd>${esc(client.email || "\u2014")}</dd><dt>Website</dt><dd>${client.website ? `<a href="${esc(client.website)}" target="_blank" rel="noopener">${esc(client.website)}</a>` : "\u2014"}</dd>
        <dt>Budget</dt><dd>${esc(fmtMoney(client.dailyBudget, cc))}/day \xB7 ${esc(fmtMoney(client.monthlyBudget, cc))}/mo</dd><dt>Targets</dt><dd>CPA ${esc(fmtMoney(client.targetCpa, cc))} \xB7 CVR ${esc(client.targetCvr ?? "\u2014")}% \xB7 ${esc(client.targetMonthlyConversions ?? "\u2014")} leads/mo</dd>
        <dt>Campaigns</dt><dd>${(client.campaigns || []).map((c) => `${esc(c.name)} <span class="subtle">(${esc(c.type)})</span>`).join("<br>")}</dd>
        <dt>Reports</dt><dd>${reports.length} (${reports.filter((r) => r.status === "published").length} published)</dd>
        <dt>Portal</dt><dd>${client.portal?.accessEnabled ? '<span class="badge badge-success">Enabled</span>' : '<span class="badge">Disabled</span>'}</dd>
        ${client.internalNotes ? `<dt>Internal notes</dt><dd>${esc(client.internalNotes)} <span class="badge plain">admin only</span></dd>` : ""}</dl></div>
    </div>`;
    const s = dailySeries(cur, range.from, range.to);
    renderChart($("#ovChart"), { labels: s.map((d) => fmtDate(d.date).replace(/ \d{4}$/, "")), series: [{ name: `Spend (${cc})`, values: s.map((d) => d.missing ? null : d.spend), type: "bar" }, { name: "Conversions", values: s.map((d) => d.missing ? null : d.conversions), axis: "right" }], fmtLeft: (v) => fmtMoney(v, cc, { decimals: 0 }), fmtRight: (v) => fmtDec(v) });
  }
  async function portal(body, client) {
    const local = getMode() === "local";
    const p = client.portal || {};
    const vis = { ...DEFAULT_SECTIONS, ...p.visibleSections || {} };
    const [users, links, snaps] = await Promise.all([
      local ? store.listUsers() : Promise.resolve([]),
      listShareLinks(client.id).catch((e) => {
        toast(`Share links unavailable: ${e.message}`, "warning");
        return [];
      }),
      store.list("reportSnapshots", client.id)
    ]);
    const clientUsers = users.filter((u) => u.role === "client" && u.clientId === client.id);
    const published = snaps.filter((s) => s.published);
    body.innerHTML = `
    <div class="grid grid-2">
      <div class="card">
        <div class="card-header"><h2>Portal access</h2>${p.accessEnabled && client.status !== "archived" ? '<span class="badge badge-success">Enabled</span>' : '<span class="badge badge-danger">Disabled</span>'}</div>
        <form id="portalForm">
          <label class="check mb-1"><input type="checkbox" name="accessEnabled" ${p.accessEnabled ? "checked" : ""} ${client.status === "archived" ? "disabled" : ""}> Allow this client to open their portal</label><br>
          <label class="check mb-2"><input type="checkbox" name="allowPdf" ${p.allowPdf !== false ? "checked" : ""}> Allow PDF downloads of published reports</label>
          <h3>Sections visible in the portal</h3>
          <div class="section-toggles mb-2">${Object.entries(SECTION_LABELS).map(([k, l]) => `<label class="check small"><input type="checkbox" name="sec_${k}" ${vis[k] ? "checked" : ""}> ${esc(l)}</label>`).join("")}</div>
          <p class="small subtle">The portal only ever shows <strong>published report snapshots</strong> and the business overview. Internal notes, drafts, unpublished AI analysis and non-publishable optimization entries are never included.</p>
          <div class="flex gap-1 wrap"><button class="btn btn-primary" type="submit" id="savePortal">Save portal settings</button>
          <a class="btn" href="client-portal.html?client=${esc(client.id)}" target="_blank" rel="noopener">${icon("eye")}Preview as admin</a>
          <button class="btn btn-danger" type="button" id="revokeAll">${icon("lock")}Revoke all access</button></div>
        </form>
        <hr><p class="small mb-0">${published.length} published report(s) visible to the client. <a href="reports.html?client=${esc(client.id)}">Manage reports</a></p>
      </div>
      <div>
        <div class="card mb-2">
          <div class="card-header"><h2>Client logins</h2></div>
          ${local ? `
            ${clientUsers.length ? `<div class="table-wrap mb-2"><table class="table"><thead><tr><th>Email</th><th>Status</th><th></th></tr></thead><tbody>${clientUsers.map((u) => `<tr><td>${esc(u.email)}</td><td>${u.disabled ? '<span class="badge badge-danger">Disabled</span>' : '<span class="badge badge-success">Active</span>'}</td><td class="text-right"><button class="btn btn-sm" data-toggle-user="${esc(u.id)}" data-disabled="${u.disabled ? 1 : 0}">${u.disabled ? "Enable" : "Disable"}</button></td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">No client logins yet.</p>`}
            <form id="userForm" class="form-grid">
              <div class="field"><label for="uEmail">Email</label><input class="input" id="uEmail" type="email" required></div>
              <div class="field"><label for="uPw">Temporary password</label><input class="input" id="uPw" type="text" minlength="8" required></div>
              <div class="full"><button class="btn" type="submit">${icon("plus")}Create client login</button> <span class="small subtle">Local Demo Mode only \u2014 not secure.</span></div>
            </form>` : `<p class="small">Client accounts get the <code>role: "client"</code> and <code>clientId: "${esc(client.id)}"</code> custom claims via the <code>setUserRole</code> Cloud Function. Users can never assign these themselves.</p>
            <form id="fbUserForm" class="flex gap-1 wrap items-end">
              <div class="field grow"><label for="fbEmail">Client email</label><input class="input" id="fbEmail" type="email" required></div>
              <button class="btn" type="submit" data-act="grant">${icon("plus")}Grant access</button>
              <button class="btn btn-danger" type="button" id="fbRevokeUser">Remove access</button>
            </form><div id="fbUserOut" class="mt-1"></div>`}
        </div>
        <div class="card">
          <div class="card-header"><h2>Shareable links</h2><span class="hint">Read-only \xB7 revocable \xB7 expiring</span></div>
          <p class="small muted">Each link contains a random 256-bit token. Only its SHA-256 hash is stored. ${local ? "<strong>Local Demo Mode simulates</strong> the server-side validation that Cloud Functions perform in Firebase mode." : "Tokens are created and checked by Cloud Functions."}</p>
          <form id="linkForm" class="flex gap-1 wrap items-end mb-2">
            <div class="field"><label for="lLabel">Label</label><input class="input" id="lLabel" placeholder="e.g. Owner's link"></div>
            <div class="field"><label for="lDays">Expires after</label><select class="select" id="lDays"><option value="7">7 days</option><option value="30" selected>30 days</option><option value="90">90 days</option></select></div>
            <button class="btn" type="submit">${icon("link")}Create link</button>
          </form>
          <div id="newLink"></div>
          ${links.length ? `<div class="table-wrap"><table class="table"><thead><tr><th>Label</th><th>Created</th><th>Expires</th><th>Status</th><th></th></tr></thead><tbody>
            ${links.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map((l) => {
      const expired = l.expiresAt < (/* @__PURE__ */ new Date()).toISOString();
      return `<tr><td>${esc(l.label || "\u2014")}</td><td>${esc(fmtDate(l.createdAt.slice(0, 10)))}</td><td>${esc(fmtDate(l.expiresAt.slice(0, 10)))}</td><td>${l.revoked ? '<span class="badge badge-danger">Revoked</span>' : expired ? '<span class="badge badge-warning">Expired</span>' : '<span class="badge badge-success">Active</span>'}</td>
              <td class="text-right">${!l.revoked ? `<button class="btn btn-sm btn-danger" data-revoke="${esc(l.id)}">Revoke</button>` : ""}</td></tr>`;
    }).join("")}</tbody></table></div>` : `<p class="muted small">No share links yet.</p>`}
        </div>
      </div>
    </div>`;
    const reload = () => portal(body, client);
    $("#portalForm").addEventListener("submit", (e) => {
      e.preventDefault();
      withLoading($("#savePortal"), async () => {
        const form = e.target;
        const visibleSections = {};
        Object.keys(SECTION_LABELS).forEach((k) => visibleSections[k] = form.elements[`sec_${k}`].checked);
        client = await store.saveClient({ ...client, portal: { ...p, accessEnabled: form.elements.accessEnabled.checked, allowPdf: form.elements.allowPdf.checked, visibleSections } }, { action: "portal.settings" });
        toast("Portal settings saved.", "success");
        reload();
      });
    });
    $("#revokeAll").addEventListener("click", async () => {
      if (!await confirmDialog({ title: "Revoke all portal access?", message: "Portal access will be disabled and every active share link revoked. Published reports are kept and can be re-shared later.", confirmText: "Revoke access", danger: true })) return;
      await withLoading($("#revokeAll"), async () => {
        client = await store.saveClient({ ...client, portal: { ...p, accessEnabled: false } }, { action: "portal.revokeAll" });
        for (const l of links.filter((x) => !x.revoked)) await revokeShareLink(client.id, l.id);
        toast("All portal access revoked.", "success");
        reload();
      });
    });
    $("#userForm")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      await withLoading(e.submitter, async () => {
        await createLocalClientLogin(client.id, { email: $("#uEmail").value, password: $("#uPw").value, name: client.businessName });
        toast("Client login created.", "success");
        reload();
      });
    });
    const fbUser = async (role, btn) => {
      const email = $("#fbEmail").value.trim();
      if (!email) return toast("Enter an email.", "warning");
      if (role === "none" && !await confirmDialog({ title: "Remove this login's access?", message: `${email} will lose access immediately.`, confirmText: "Remove", danger: true })) return;
      await withLoading(btn, async () => {
        const { callFunction: callFunction2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
        const res = await callFunction2("setUserRole", { email, role, clientId: client.id, disabled: role === "none" });
        $("#fbUserOut").innerHTML = res.resetLink ? `<div class="alert alert-success"><div>Account created. Send this one-time password link to the client privately:<br><input class="input mono mt-1" readonly value="${esc(res.resetLink)}"></div></div>` : `<p class="small pos">Access ${role === "none" ? "removed" : "granted"} for ${esc(email)}.</p>`;
      });
    };
    $("#fbUserForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      fbUser("client", e.submitter);
    });
    $("#fbRevokeUser")?.addEventListener("click", (e) => fbUser("none", e.currentTarget));
    $$("[data-toggle-user]").forEach((b) => b.addEventListener("click", () => withLoading(b, async () => {
      await setLocalLoginDisabled(b.dataset.toggleUser, b.dataset.disabled !== "1");
      reload();
    })));
    $("#linkForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!p.accessEnabled) toast("Note: portal access is currently disabled, so the link will not work until you enable it.", "warning");
      await withLoading(e.submitter, async () => {
        const { url } = await createShareLink(client.id, { expiresDays: Number($("#lDays").value), label: $("#lLabel").value.trim() });
        openModal({
          title: "Share link created",
          body: `<p>Copy this link now \u2014 for security it is <strong>not stored</strong> and cannot be shown again.</p><div class="flex gap-1"><input class="input mono" id="linkOut" readonly value="${esc(url)}"><button class="btn" id="copyLink">${icon("copy")}Copy</button></div>`,
          footer: `<button class="btn btn-primary" data-close>Done</button>`,
          onClose: reload
        });
        $("#copyLink").addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(url);
            toast("Link copied.", "success");
          } catch {
            $("#linkOut").select();
            toast("Press Ctrl/Cmd+C to copy.", "info");
          }
        });
      });
    });
    $$("[data-revoke]").forEach((b) => b.addEventListener("click", async () => {
      if (!await confirmDialog({ title: "Revoke this link?", message: "Anyone using it will immediately lose access.", confirmText: "Revoke", danger: true })) return;
      await withLoading(b, async () => {
        await revokeShareLink(client.id, b.dataset.revoke);
        toast("Link revoked.", "success");
        reload();
      });
    }));
  }
  async function clientSettings(body, client) {
    const archived = client.status === "archived";
    body.innerHTML = `
    <div class="card mb-2">${clientFormHtml(client)}
      <div class="flex gap-1 wrap"><button class="btn btn-primary" id="saveBtn">Save changes</button></div>
    </div>
    <div class="card">
      <div class="card-header"><h2>${archived ? "Restore client" : "Archive client"}</h2></div>
      <p class="muted">${archived ? "Restoring makes the client active again. Portal access stays disabled until you re-enable it." : "Archiving hides the client from active lists and disables portal access. All reports, baselines, metrics and optimization records are kept."}</p>
      <button class="btn ${archived ? "" : "btn-danger"}" id="archiveBtn">${icon("archive")}${archived ? "Restore client" : "Archive client"}</button>
    </div>`;
    bindClientForm(body);
    $("#saveBtn").addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
      await saveClientFromForm(body, client);
      toast("Client saved.", "success");
      location.reload();
    }));
    $("#archiveBtn").addEventListener("click", async () => {
      if (!await confirmDialog({ title: archived ? "Restore this client?" : "Archive this client?", message: archived ? "The client will be active again." : "No data will be deleted. Portal access will be disabled.", confirmText: archived ? "Restore" : "Archive", danger: !archived })) return;
      await withLoading($("#archiveBtn"), async () => {
        await store.saveClient({ ...client, status: archived ? "active" : "archived", portal: { ...client.portal, accessEnabled: archived ? client.portal?.accessEnabled && false : false } }, { action: archived ? "client.restore" : "client.archive" });
        toast(archived ? "Client restored." : "Client archived. Historical records were kept.", "success");
        location.reload();
      });
    });
  }
  var fmtMetricLabel;
  var init_client_details = __esm({
    "js/pages/client-details.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_clients();
      init_calculations();
      init_scoring();
      init_score_card();
      init_charts();
      init_client_portal();
      fmtMetricLabel = (k) => ({ spend: "Spend", clicks: "Clicks", conversions: "Conversions", cpa: "Cost / conversion", cvr: "Conversion rate", ctr: "CTR", qualifiedLeads: "Qualified leads" })[k];
      (async () => {
        const ctx2 = await initAdminPage({ page: "clients", title: "Client Workspace" });
        if (ctx2) main3(ctx2);
      })();
    }
  });

  // js/pdf-export.js
  function loadPdfLib() {
    if (window.PDFLib) return Promise.resolve(window.PDFLib);
    if (libPromise) return libPromise;
    libPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "pdf-lib.min.js";
      s.onload = () => window.PDFLib ? resolve(window.PDFLib) : reject(new Error("PDF library failed to initialise."));
      s.onerror = () => {
        libPromise = null;
        reject(new Error("Could not load the PDF library (pdf-lib.min.js)."));
      };
      document.head.appendChild(s);
    });
    return libPromise;
  }
  function sanitizer(font) {
    const cache2 = /* @__PURE__ */ new Map();
    return (str) => {
      let out = "";
      for (const ch of String(str ?? "")) {
        if (MAP[ch] !== void 0) {
          out += MAP[ch];
          continue;
        }
        if (!cache2.has(ch)) {
          try {
            font.encodeText(ch);
            cache2.set(ch, true);
          } catch {
            cache2.set(ch, false);
          }
        }
        out += cache2.get(ch) ? ch : "?";
      }
      return out;
    };
  }
  async function buildReportPdf(data) {
    const PDFLib = await loadPdfLib();
    const { PDFDocument, StandardFonts, rgb } = PDFLib;
    const doc = await PDFDocument.create();
    doc.setTitle(data.meta.title);
    doc.setAuthor(data.meta.branding?.brandName || "Masud PPC");
    doc.setSubject(`${data.meta.typeLabel} \u2014 ${data.client.businessName}`);
    doc.setCreator("Masud PPC \u2014 Google Ads Intelligence & Reporting");
    doc.setCreationDate(/* @__PURE__ */ new Date());
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const bold = await doc.embedFont(StandardFonts.HelveticaBold);
    const clean2 = sanitizer(font);
    const col = (c) => rgb(c[0], c[1], c[2]);
    const W = A4[0] - M.l - M.r;
    const cur = data.client.currency;
    let page, y;
    const newPage = () => {
      page = doc.addPage(A4);
      y = A4[1] - M.t;
    };
    newPage();
    const ensure = (h) => {
      if (y - h < M.b) newPage();
    };
    const width = (t, size, f2 = font) => f2.widthOfTextAtSize(clean2(t), size);
    function wrap(t, size, maxW, f2 = font) {
      const out = [];
      String(t ?? "").split("\n").forEach((para) => {
        const words = clean2(para).split(/\s+/).filter((w) => w !== "");
        if (!words.length) {
          out.push("");
          return;
        }
        let line = "";
        words.forEach((w) => {
          while (f2.widthOfTextAtSize(w, size) > maxW) {
            let i = w.length;
            while (i > 1 && f2.widthOfTextAtSize(w.slice(0, i), size) > maxW) i--;
            if (line) {
              out.push(line);
              line = "";
            }
            out.push(w.slice(0, i));
            w = w.slice(i);
          }
          const test = line ? `${line} ${w}` : w;
          if (f2.widthOfTextAtSize(test, size) <= maxW) line = test;
          else {
            out.push(line);
            line = w;
          }
        });
        if (line) out.push(line);
      });
      return out;
    }
    function text(t, { size = 9.5, f: f2 = font, color = COLORS.text, x = M.l, maxW = W, lh = 1.4, gap = 4 } = {}) {
      const lines = wrap(t, size, maxW, f2);
      lines.forEach((ln) => {
        ensure(size * lh);
        page.drawText(ln, { x, y: y - size, size, font: f2, color: col(color) });
        y -= size * lh;
      });
      y -= gap;
    }
    function h2(t, follow = 40) {
      ensure(40 + follow);
      y -= 10;
      page.drawText(clean2(t), { x: M.l, y: y - 12, size: 12.5, font: bold, color: col(COLORS.text) });
      y -= 18;
      page.drawRectangle({ x: M.l, y, width: W, height: 1.5, color: col(COLORS.accent) });
      y -= 10;
    }
    function h3(t) {
      ensure(26);
      y -= 4;
      page.drawText(clean2(t), { x: M.l, y: y - 10.5, size: 10.5, font: bold, color: col(COLORS.text) });
      y -= 18;
    }
    function richBlock(t) {
      if (!t) return;
      String(t).split("\n").forEach((line) => {
        const m2 = line.match(/^\s*[-•*]\s+(.*)/);
        if (m2) {
          const lines = wrap(m2[1], 9.5, W - 14);
          lines.forEach((ln, i) => {
            ensure(13.3);
            if (i === 0) page.drawText("-", { x: M.l + 3, y: y - 9.5, size: 9.5, font, color: col(COLORS.text2) });
            page.drawText(ln, { x: M.l + 14, y: y - 9.5, size: 9.5, font, color: col(COLORS.text) });
            y -= 13.3;
          });
          y -= 2;
        } else if (line.trim()) text(line.trim());
      });
    }
    function callout(t) {
      const lines = wrap(t, 9.5, W - 20);
      const h = lines.length * 13.3 + 14;
      if (h < A4[1] - M.t - M.b) ensure(h);
      page.drawRectangle({ x: M.l, y: y - h, width: W, height: h, color: col(COLORS.accentSoft) });
      let yy = y - 7;
      lines.forEach((ln) => {
        page.drawText(ln, { x: M.l + 10, y: yy - 9.5, size: 9.5, font, color: col(COLORS.text) });
        yy -= 13.3;
      });
      y -= h + 8;
    }
    function note(t) {
      text(t, { size: 7.8, color: COLORS.text3, gap: 6 });
    }
    function table(cols, rows) {
      const size = 8.3, pad2 = 4, lh = 10.5;
      const widths = cols.map((c) => c.w * W);
      const drawHeader = () => {
        const hh = 16;
        ensure(hh + lh + pad2 * 2);
        page.drawRectangle({ x: M.l, y: y - hh, width: W, height: hh, color: col(COLORS.soft) });
        let x = M.l;
        cols.forEach((c, i) => {
          const t = clean2(c.label);
          const tx = c.align === "right" ? x + widths[i] - pad2 - bold.widthOfTextAtSize(t, 7.8) : x + pad2;
          page.drawText(t, { x: tx, y: y - 11, size: 7.8, font: bold, color: col(COLORS.text2) });
          x += widths[i];
        });
        y -= hh;
      };
      drawHeader();
      rows.forEach((r) => {
        const cells = r.map((v, i) => wrap(v, size, widths[i] - pad2 * 2));
        const h = Math.max(...cells.map((c) => c.length)) * lh + pad2 * 2;
        if (y - h < M.b) {
          newPage();
          drawHeader();
        }
        let x = M.l;
        cells.forEach((lines, i) => {
          lines.forEach((ln, j) => {
            const tx = cols[i].align === "right" ? x + widths[i] - pad2 - font.widthOfTextAtSize(ln, size) : x + pad2;
            page.drawText(ln, { x: tx, y: y - pad2 - size - j * lh + 1, size, font, color: col(COLORS.text) });
          });
          x += widths[i];
        });
        y -= h;
        page.drawLine({ start: { x: M.l, y }, end: { x: M.l + W, y }, thickness: 0.6, color: col(COLORS.border) });
      });
      y -= 10;
    }
    function kpiGrid(kpis) {
      const cols = 3, gap = 8, bw = (W - gap * (cols - 1)) / cols, bh = 54;
      for (let i = 0; i < kpis.length; i += cols) {
        ensure(bh + gap);
        kpis.slice(i, i + cols).forEach((k, j) => {
          const x = M.l + j * (bw + gap);
          page.drawRectangle({ x, y: y - bh, width: bw, height: bh, borderColor: col(COLORS.border), borderWidth: 0.8 });
          page.drawText(clean2(k.label), { x: x + 8, y: y - 14, size: 8, font, color: col(COLORS.text2) });
          page.drawText(clean2(fmtMetric(k.key, k.value, cur)), { x: x + 8, y: y - 31, size: 14, font: bold, color: col(COLORS.text) });
          let dy = 41;
          [[k.chPrev, "prev."], [k.chBase, k.baseIsPerDay ? "baseline/day" : "baseline"]].forEach(([ch, lab]) => {
            if (!ch) return;
            const tone = changeTone(k.key, ch);
            const t = `${fmtChange(k.key, ch, cur)} vs ${lab}`;
            const s = Math.min(7.2, (bw - 16) / Math.max(width(t, 7.2) / 7.2, 1));
            page.drawText(clean2(t), { x: x + 8, y: y - dy, size: s, font, color: col(tone === "pos" ? COLORS.pos : tone === "neg" ? COLORS.neg : COLORS.text3) });
            dy += 8.5;
          });
        });
        y -= bh + gap;
      }
      y -= 2;
    }
    function chart(title, labels, series, { height = 170, fmtL = (v) => fmtDec(v), fmtR = (v) => fmtDec(v) } = {}) {
      ensure(height + 34);
      page.drawRectangle({ x: M.l, y: y - height - 24, width: W, height: height + 24, borderColor: col(COLORS.border), borderWidth: 0.8 });
      page.drawText(clean2(title), { x: M.l + 8, y: y - 14, size: 9, font: bold, color: col(COLORS.text) });
      let lx = M.l + 8 + width(title, 9, bold) + 16;
      series.forEach((s, i) => {
        const c = [COLORS.accent, COLORS.c2, COLORS.c3][i];
        page.drawRectangle({ x: lx, y: y - 13, width: 7, height: 7, color: col(c) });
        page.drawText(clean2(s.name), { x: lx + 10, y: y - 13, size: 7.5, font, color: col(COLORS.text2) });
        lx += 20 + width(s.name, 7.5);
      });
      const top = y - 26, padL = 44, padR = series.some((s) => s.axis === "right") ? 40 : 10, padB = 18;
      const x0 = M.l + padL, w = W - padL - padR, h = height - padB - 8, y0 = top - h;
      const maxOf = (axis) => {
        const v = series.filter((s) => (s.axis || "left") === axis).flatMap((s) => s.values).filter(isNum);
        return niceMax2(Math.max(0, ...v));
      };
      const mL = maxOf("left"), mR = maxOf("right");
      for (let i = 0; i <= 4; i++) {
        const gy = y0 + h * i / 4;
        page.drawLine({ start: { x: x0, y: gy }, end: { x: x0 + w, y: gy }, thickness: 0.4, color: col(COLORS.border) });
        const tl = clean2(fmtL(mL * i / 4));
        page.drawText(tl, { x: x0 - 4 - font.widthOfTextAtSize(tl, 6.8), y: gy - 2.4, size: 6.8, font, color: col(COLORS.text3) });
        if (padR > 20) page.drawText(clean2(fmtR(mR * i / 4)), { x: x0 + w + 4, y: gy - 2.4, size: 6.8, font, color: col(COLORS.text3) });
      }
      const n = Math.max(labels.length, 1), step = Math.max(1, Math.ceil(n / 8));
      const xb = (i) => x0 + (i + 0.5) * w / n;
      labels.forEach((l, i) => {
        if (i % step === 0) {
          const t = clean2(l);
          page.drawText(t, { x: xb(i) - font.widthOfTextAtSize(t, 6.8) / 2, y: y0 - 11, size: 6.8, font, color: col(COLORS.text3) });
        }
      });
      series.forEach((s, si) => {
        const c = col([COLORS.accent, COLORS.c2, COLORS.c3][si]);
        const max = s.axis === "right" ? mR : mL;
        if (s.type === "bar") {
          const bw = Math.max(1, w / n * 0.7);
          s.values.forEach((v, i) => {
            if (isNum(v) && v > 0) page.drawRectangle({ x: xb(i) - bw / 2, y: y0, width: bw, height: v / max * h, color: c, opacity: 0.85 });
          });
        } else {
          let prev = null;
          s.values.forEach((v, i) => {
            if (!isNum(v)) {
              prev = null;
              return;
            }
            const pt = { x: xb(i), y: y0 + v / max * h };
            if (prev) page.drawLine({ start: prev, end: pt, thickness: 1.6, color: c });
            else if (n < 40) page.drawCircle({ x: pt.x, y: pt.y, size: 1.4, color: c });
            prev = pt;
          });
        }
      });
      y -= height + 34;
    }
    const m = data.meta, S = data.sections, b = m.branding || {};
    const audit = m.type === "initial-audit";
    text(m.title, { size: 18, f: bold, lh: 1.25, gap: 2 });
    text(`Reporting period: ${fmtRange(m.periodStart, m.periodEnd)} (${m.days} days)${m.comparison !== "none" ? ` - compared with: ${m.comparisonLabel}` : ""}`, { size: 10, color: COLORS.text2, gap: 2 });
    text(`${data.client.businessName} - ${m.typeLabel}`, { size: 10, color: COLORS.text2, gap: 6 });
    if (data.score?.status === "rated") note(`Performance score: ${data.score.score}/100 (${data.score.label}). Internal Masud PPC score - not Google's Optimization Score.`);
    if (S.businessDetails) {
      h2("Business details");
      table([{ label: "Item", w: 0.3 }, { label: "Details", w: 0.7 }], [
        ["Business", data.client.businessName],
        ...data.client.website ? [["Website", data.client.website]] : [],
        ...data.client.industry ? [["Industry", data.client.industry]] : [],
        ...data.client.locations ? [["Service area", data.client.locations]] : [],
        ["Campaigns included", m.campaignsIncluded.join(", ") || "All campaigns"],
        ["Currency / time zone", `${cur} - ${data.client.timezone}`]
      ]);
    }
    if (S.executiveSummary && data.text.executiveSummary) {
      h2("Executive summary");
      callout(data.text.executiveSummary.replace(/^\s*[-•*]\s+/gm, "- "));
    }
    if (S.kpis && data.kpis.length) {
      h2(audit ? "Baseline key figures" : "Key performance indicators", 70);
      kpiGrid(data.kpis);
      note('"-" means the metric cannot be calculated (e.g. no conversions). "% n/a" means the comparison value was zero or unavailable.');
    }
    if (S.charts && !audit && data.series.labels.length) {
      h2("Performance charts", 200);
      const unit = data.series.granularity === "day" ? "Daily" : "Weekly";
      chart(`${unit} spend and conversions`, data.series.labels, [{ name: `Spend (${cur})`, values: data.series.spend, type: "bar" }, { name: "Conversions", values: data.series.conversions, axis: "right" }], { fmtL: (v) => fmtMoney(v, cur, { decimals: 0 }), fmtR: (v) => fmtDec(v, 1) });
      chart(`${unit} cost per conversion`, data.series.labels, [{ name: `Cost / conv. (${cur})`, values: data.series.cpa }], { height: 130, fmtL: (v) => fmtMoney(v, cur, { decimals: 0 }) });
      note(`Gaps mean no conversions (cost per conversion undefined) or no data for that ${data.series.granularity}.`);
    }
    const cmpCols = [{ label: "Metric", w: 0.34 }, { label: "This period", w: 0.2, align: "right" }, { label: "", w: 0.2, align: "right" }, { label: "Change", w: 0.26, align: "right" }];
    const row = (k, a, bb, suffix = "") => [METRICS[k].label + suffix, fmtMetric(k, a, cur), fmtMetric(k, bb, cur), fmtChange(k, change(a, bb), cur)];
    if (S.baselineComparison && !audit && data.totals.baseline) {
      h2("Baseline comparison");
      note(`Original baseline: ${fmtRange(m.baselinePeriod.from, m.baselinePeriod.to)}. Volume metrics are compared as daily averages because the periods differ in length.`);
      const t = data.totals.current, bs = data.totals.baseline, tp = perDay(t), bp = perDay(bs);
      table(cmpCols.map((c, i) => i === 2 ? { ...c, label: "Baseline" } : c), [
        ...["spend", "clicks", "conversions"].map((k) => row(k, tp?.[k], bp?.[k], " / day")),
        ...["ctr", "cpc", "cvr", "cpa"].map((k) => row(k, t[k], bs[k])),
        ...isNum(bs.roas) ? [row("roas", t.roas, bs.roas)] : []
      ]);
    }
    if (S.previousComparison && !audit && data.totals.previous) {
      h2("Previous-period comparison");
      note(`Previous period: ${fmtRange(m.previousPeriod.from, m.previousPeriod.to)}.`);
      const t = data.totals.current, p = data.totals.previous;
      table(cmpCols.map((c, i) => i === 2 ? { ...c, label: "Previous" } : c), [
        ...["spend", "impressions", "clicks", "conversions", "ctr", "cpc", "cvr", "cpa"].map((k) => row(k, t[k], p[k])),
        ...isNum(t.qualifiedLeads) ? [row("qualifiedLeads", t.qualifiedLeads, p.qualifiedLeads)] : []
      ]);
    }
    if (S.trends && !audit && data.trendRows.length) {
      h2("Spend & conversion trends");
      table(
        [{ label: "Period", w: 0.3 }, { label: "Spend", w: 0.15, align: "right" }, { label: "Clicks", w: 0.12, align: "right" }, { label: "Conv.", w: 0.12, align: "right" }, { label: "Cost / conv.", w: 0.16, align: "right" }, { label: "Conv. rate", w: 0.15, align: "right" }],
        data.trendRows.map((r) => [r.period, fmtMoney(r.spend, cur), fmtInt(r.clicks), fmtDec(r.conversions), fmtMoney(r.cpa, cur), fmtPct(r.cvr)])
      );
      if (data.campaignRows.length > 1) {
        h3("By campaign");
        table(
          [{ label: "Campaign", w: 0.34 }, { label: "Spend", w: 0.14, align: "right" }, { label: "Clicks", w: 0.12, align: "right" }, { label: "Conv.", w: 0.12, align: "right" }, { label: "Cost / conv.", w: 0.15, align: "right" }, { label: "CTR", w: 0.13, align: "right" }],
          data.campaignRows.map((r) => [r.name, fmtMoney(r.spend, cur), fmtInt(r.clicks), fmtDec(r.conversions), fmtMoney(r.cpa, cur), fmtPct(r.ctr)])
        );
      }
    }
    if (audit && data.baselineAudit) {
      const a = data.baselineAudit;
      h2(`Campaign condition at audit (${fmtDate(a.auditDate)})`);
      table(
        [{ label: "Campaign", w: 0.3 }, { label: "Bidding", w: 0.2 }, { label: "Spend", w: 0.13, align: "right" }, { label: "Clicks", w: 0.11, align: "right" }, { label: "Conv.", w: 0.11, align: "right" }, { label: "Cost / conv.", w: 0.15, align: "right" }],
        (a.rows || []).map((r) => [r.campaign, r.bidding || "-", fmtMoney(r.spend, cur), fmtInt(r.clicks), fmtDec(r.conversions), fmtMoney(r.conversions ? r.spend / r.conversions : null, cur)])
      );
      [["Search terms", a.searchTerms], ["Location targeting", a.locationTargeting], ["Landing page", a.landingPage], ["Lead quality", a.leadQuality]].forEach(([l, v]) => {
        if (v) {
          h3(l);
          richBlock(v);
        }
      });
      text(`Conversion tracking at audit: ${a.trackingStatus || "unknown"}`, { f: bold });
    }
    if (S.optimizations && data.optimizations.length) {
      h2("Optimization work completed");
      table([{ label: "Date", w: 0.15 }, { label: "Area", w: 0.2 }, { label: "What changed", w: 0.5 }, { label: "Status", w: 0.15 }], data.optimizations.map((o) => [fmtDate(o.date), o.category, o.summary + (o.outcome ? `
Result: ${o.outcome}` : ""), o.status]));
      note("Changes listed here happened before or during the period. Performance changes can have several causes; a change is not assumed to be the cause unless stated.");
    }
    if (S.keyFindings && data.text.keyFindings) {
      h2("Key findings");
      richBlock(data.text.keyFindings);
    }
    if (S.aiInsights && data.ai) {
      h2("Insights & analysis");
      richBlock(data.ai.text);
      note(`Reviewed and approved by your account manager on ${fmtDate(data.ai.approvedAt)}.`);
    }
    if (S.challenges && data.text.challenges) {
      h2("Challenges & limitations");
      richBlock(data.text.challenges);
    }
    if (S.actionPlan && (data.text.actionPlan || data.text.recommendations)) {
      h2("Next-period action plan");
      richBlock(data.text.actionPlan);
      if (data.text.recommendations) {
        h3("Recommendations");
        richBlock(data.text.recommendations);
      }
    }
    y -= 6;
    ensure(40);
    page.drawLine({ start: { x: M.l, y }, end: { x: M.l + W, y }, thickness: 0.6, color: col(COLORS.border) });
    y -= 8;
    if (S.dataSource) note(`Data source: ${data.dataSource}`);
    note(`Generated ${fmtDateTime(m.generatedAt, data.client.timezone)} (${data.client.timezone}). ${b.footerText || ""}`);
    const pages = doc.getPages();
    pages.forEach((p, i) => {
      const top = A4[1] - 34;
      p.drawRectangle({ x: M.l, y: top - 2, width: 14, height: 14, color: col(COLORS.accent) });
      p.drawText(clean2(b.brandName || "Masud PPC"), { x: M.l + 20, y: top + 2, size: 9, font: bold, color: col(COLORS.text) });
      p.drawText(clean2(b.headerText || "Google Ads Performance Report"), { x: M.l + 20, y: top - 8, size: 7, font, color: col(COLORS.text3) });
      const right = clean2(`${data.client.businessName}  |  ${fmtRange(m.periodStart, m.periodEnd)}`);
      p.drawText(right, { x: A4[0] - M.r - font.widthOfTextAtSize(right, 7.5), y: top - 2, size: 7.5, font, color: col(COLORS.text2) });
      p.drawLine({ start: { x: M.l, y: top - 14 }, end: { x: A4[0] - M.r, y: top - 14 }, thickness: 0.5, color: col(COLORS.border) });
      p.drawLine({ start: { x: M.l, y: 36 }, end: { x: A4[0] - M.r, y: 36 }, thickness: 0.5, color: col(COLORS.border) });
      p.drawText(clean2("Confidential - prepared for " + data.client.businessName), { x: M.l, y: 24, size: 7, font, color: col(COLORS.text3) });
      const pn = `Page ${i + 1} of ${pages.length}`;
      p.drawText(pn, { x: A4[0] - M.r - font.widthOfTextAtSize(pn, 7.5), y: 24, size: 7.5, font, color: col(COLORS.text2) });
    });
    const bytes = await doc.save();
    return { blob: new Blob([bytes], { type: "application/pdf" }), pageCount: pages.length };
  }
  function niceMax2(v) {
    if (!v || v <= 0) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    const n = v / p;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p;
  }
  async function downloadReportPdf(data, fileName) {
    const { blob, pageCount } = await buildReportPdf(data);
    if (!blob.size) throw new Error("The PDF came out empty.");
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5e3);
    return { pageCount, size: blob.size };
  }
  var libPromise, MAP, A4, M, COLORS;
  var init_pdf_export = __esm({
    "js/pdf-export.js"() {
      init_calculations();
      init_utils();
      libPromise = null;
      MAP = { "\u2212": "-", "\u2192": "->", "\u2190": "<-", "\u2264": "<=", "\u2265": ">=", "\xA0": " ", "\u2009": " ", "\u202F": " ", "\u09F3": "BDT ", "\u20B9": "INR ", "\u20A8": "Rs ", "\xB1": "+/-", "\u2713": "v", "\u26A0": "!" };
      A4 = [595.28, 841.89];
      M = { l: 42, r: 42, t: 64, b: 54 };
      COLORS = { text: [0.08, 0.13, 0.2], text2: [0.29, 0.33, 0.41], text3: [0.48, 0.53, 0.6], border: [0.89, 0.91, 0.94], soft: [0.96, 0.97, 0.98], accent: [0.1, 0.45, 0.91], accentSoft: [0.91, 0.94, 1], pos: [0.09, 0.5, 0.22], neg: [0.77, 0.13, 0.12], c2: [0.07, 0.64, 0.5], c3: [0.91, 0.44, 0.04] };
    }
  });

  // js/pages/client-portal.js
  var client_portal_exports = {};
  async function main4() {
    const token = qs("token");
    try {
      if (!token) await ensureLocalSeed();
      await store.ready();
    } catch (e) {
      renderFatal(root, e);
      return;
    }
    let res;
    try {
      res = await resolvePortal({ token, requestedClient: qs("client") });
    } catch (e) {
      renderFatal(root, e);
      return;
    }
    if (!res.ok) {
      if (res.reason === "login") {
        location.replace(`login.html?next=${encodeURIComponent("client-portal.html")}`);
        return;
      }
      if (res.reason === "pick") {
        location.replace("clients.html");
        return;
      }
      const [title, text] = MESSAGES[res.reason] || ["Unavailable", "This portal cannot be shown."];
      shell(res.session, null, `<div class="card" style="max-width:560px;margin:40px auto;text-align:center;padding:32px" data-testid="portal-denied">${icon("lock")}<h1 style="font-size:20px;margin-top:10px">${esc(title)}</h1><p class="muted">${esc(text)}</p>${res.session ? `<button class="btn" id="signOut2">Sign out</button>` : ""}</div>`);
      $("#signOut2")?.addEventListener("click", doLogout);
      return;
    }
    setFormatPrefs({});
    const { profile } = res;
    const snaps = res.snapshots.slice().sort((a, b) => a.periodEnd < b.periodEnd ? 1 : a.periodEnd > b.periodEnd ? -1 : a.publishedAt < b.publishedAt ? 1 : -1);
    let selected = snaps.find((s) => s.id === qs("report")) || snaps[0];
    const vis = profile.visibleSections || {};
    const body = `
    ${res.via === "admin-preview" ? `<div class="alert alert-info no-print">${icon("eye")}<div><strong>Admin preview.</strong> This is exactly what ${esc(profile.businessName)} sees${profile.accessEnabled ? "" : " \u2014 <strong>but their access is currently disabled</strong>"}. <a href="client-details.html?id=${esc(profile.clientId)}&tab=portal">Portal settings</a></div></div>` : ""}
    ${res.via === "token" && getMode() === "local" ? `<div class="alert alert-warning no-print">${icon("info")}<div>Local Demo Mode: this share link is validated in the browser as a simulation. In Firebase mode it is validated by a Cloud Function.</div></div>` : ""}
    <div class="grid" style="grid-template-columns:minmax(0,1fr) 300px;gap:16px" id="portalGrid">
      <div id="reportArea"></div>
      <aside class="portal-side">
        <div class="card mb-2">
          <div class="flex items-center gap-1 mb-1"><div class="client-logo">${profile.logo ? `<img src="${esc(profile.logo)}" alt="">` : esc(initials(profile.businessName))}</div><div><strong>${esc(profile.businessName)}</strong><div class="small subtle">${esc(profile.industry || "")}</div></div></div>
          <dl class="dl small">${profile.website ? `<dt>Website</dt><dd>${esc(profile.website)}</dd>` : ""}${profile.locations ? `<dt>Service area</dt><dd>${esc(profile.locations)}</dd>` : ""}<dt>Currency</dt><dd>${esc(profile.currency)}</dd><dt>Time zone</dt><dd>${esc(profile.timezone)}</dd></dl>
        </div>
        <div class="card">
          <h2 style="font-size:14px">Report history</h2>
          ${snaps.length ? `<ul class="list" id="history">${snaps.map((s) => `<li><a href="#" data-snap="${esc(s.id)}" class="${s.id === selected?.id ? "title" : ""}"><div class="small">${esc(s.title.replace(/ — .*$/, ""))}</div><div class="meta">${esc(fmtRange(s.periodStart, s.periodEnd))}</div></a></li>`).join("")}</ul>` : `<p class="muted small">No reports have been published yet.</p>`}
        </div>
      </aside>
    </div>`;
    shell(res.session, profile, body);
    if (window.matchMedia("(max-width: 900px)").matches) $("#portalGrid").style.gridTemplateColumns = "1fr";
    function showReport() {
      const area = $("#reportArea");
      if (!selected) {
        area.innerHTML = `<div class="card"><div class="empty">${icon("report")}<h3>No published reports yet</h3><p>Your account manager will publish your first report here.</p></div></div>`;
        return;
      }
      const data = structuredClone(selected.data);
      Object.keys(data.sections).forEach((k) => {
        if (vis[k] === false) data.sections[k] = false;
      });
      const canPdf = profile.allowPdf !== false && selected.allowPdf !== false;
      area.innerHTML = `
      <div class="card mb-2 portal-controls no-print"><div class="flex justify-between items-center wrap gap-1">
        <div class="filters"><div class="field"><label for="periodSel">Reporting period</label><select class="select" id="periodSel">${snaps.map((s) => `<option value="${esc(s.id)}" ${s.id === selected.id ? "selected" : ""}>${esc(fmtRange(s.periodStart, s.periodEnd))} \xB7 ${esc(REPORT_TYPES[s.type] || "")}</option>`).join("")}</select></div></div>
        <div class="flex gap-1">${canPdf ? `<button class="btn btn-primary" id="dlPdf">${icon("download")}Download PDF</button>` : ""}<button class="btn" id="printR">${icon("printer")}Print</button></div>
      </div><p class="small subtle mb-0 mt-1">Published ${esc(fmtDateTime(selected.publishedAt))} \xB7 version ${selected.version}. This is a read-only report.</p></div>
      <div class="report-stage">${renderReportHTML(data)}</div>`;
      $("#periodSel").addEventListener("change", (e) => {
        selected = snaps.find((s) => s.id === e.target.value);
        syncHistory();
        showReport();
      });
      $("#printR").addEventListener("click", () => window.print());
      $("#dlPdf")?.addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
        const r = await downloadReportPdf(data, reportFileName(data));
        toast(`PDF downloaded (${r.pageCount} pages).`, "success");
      }, { errorPrefix: "PDF could not be created: " }));
    }
    function syncHistory() {
      $$("[data-snap]").forEach((a) => a.classList.toggle("title", a.dataset.snap === selected?.id));
    }
    $$("[data-snap]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      selected = snaps.find((s) => s.id === a.dataset.snap);
      syncHistory();
      showReport();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }));
    showReport();
  }
  function shell(session, profile, inner) {
    root.innerHTML = `
    <div class="standalone">
      <header class="standalone-header">
        <img src="logo.svg" alt="">
        <div class="grow"><strong>${esc(profile?.businessName || "Client portal")}</strong><div class="small subtle">Google Ads reports by Masud PPC \xB7 read-only</div></div>
        ${session ? `<span class="small muted user-name">${esc(session.email)}</span>${session.role === "admin" ? `<a class="btn btn-sm" href="dashboard.html">Back to admin</a>` : ""}<button class="btn btn-sm" id="signOut">${icon("logout")}Sign out</button>` : ""}
      </header>
      <main class="content">${inner}</main>
    </div>
    <div class="toast-stack" id="toasts"></div>`;
    $("#signOut")?.addEventListener("click", doLogout);
  }
  async function doLogout() {
    await logout();
    location.href = "login.html";
  }
  var root, MESSAGES;
  var init_client_portal2 = __esm({
    "js/pages/client-portal.js"() {
      init_app();
      init_state();
      init_auth();
      init_client_portal();
      init_utils();
      init_icons();
      init_calculations();
      init_reports2();
      init_pdf_export();
      root = document.getElementById("app");
      applyTheme("light");
      MESSAGES = {
        forbidden: ["Access denied", "You do not have permission to view this client's reports."],
        disabled: ["Portal access is disabled", "Access to this report portal has been turned off. Please contact your account manager."],
        missing: ["Portal not found", "This portal does not exist or has not been set up yet."],
        "invalid-token": ["This link is not valid", "The link may have been revoked or mistyped. Ask your account manager for a new link."],
        "expired-token": ["This link has expired", "Ask your account manager for a new link."]
      };
      main4();
    }
  });

  // js/pages/clients.js
  var clients_exports = {};
  async function main5({ content }) {
    content.innerHTML = `
    <div class="page-header">
      <div><h1>Clients</h1><p>Each client has an independent workspace, records, reports and portal.</p></div>
      <div class="page-actions"><button class="btn btn-primary" id="addBtn">${icon("plus")}Add client</button></div>
    </div>
    <div class="filters mb-2">
      <div class="field" style="min-width:260px"><label for="search">Search</label><input class="input" id="search" placeholder="Business, contact, industry, Customer ID\u2026"></div>
      <div class="field"><label for="statusF">Status</label><select class="select" id="statusF"><option value="active">Active</option><option value="archived">Archived</option><option value="">All</option></select></div>
    </div>
    <div id="list">${loadingHtml()}</div>`;
    const range = resolveRange("last30", "UTC");
    let clients = [], metrics = [];
    async function load2() {
      [clients, metrics] = await Promise.all([store.listClients(), store.listAcross("dailyMetrics", { from: range.from, to: range.to })]);
      render();
    }
    function render() {
      const q = $("#search").value.toLowerCase();
      const st2 = $("#statusF").value;
      const rows = clients.filter((c) => (!st2 || (c.status || "active") === st2) && (!q || [c.businessName, c.clientName, c.industry, c.customerId, c.email].join(" ").toLowerCase().includes(q)));
      $("#list").innerHTML = rows.length ? `<div class="client-grid">${rows.map((c) => {
        const t = aggregate(metrics.filter((r) => r.clientId === c.id));
        return `<a class="card client-card ${c.status === "archived" ? "archived" : ""}" href="client-details.html?id=${encodeURIComponent(c.id)}" data-testid="client-card">
        <div class="head"><div class="client-logo">${c.logo ? `<img src="${esc(c.logo)}" alt="">` : esc(initials(c.businessName))}</div>
          <div class="grow"><div class="name">${esc(c.businessName)}</div><div class="small subtle">${esc(c.industry || "\u2014")} \xB7 ${esc(c.currency)}</div></div>
          ${c.status === "archived" ? '<span class="badge badge-warning">Archived</span>' : c.portal?.accessEnabled ? '<span class="badge badge-success" title="Client portal enabled">Portal</span>' : ""}</div>
        <div class="small muted">${esc((c.campaigns || []).length)} campaign(s) \xB7 Customer ID ${esc(c.customerId || "\u2014")}</div>
        <div class="stats"><div><strong>${esc(fmtMoney(t.spend, c.currency))}</strong>Spend 30d</div><div><strong>${esc(fmtDec(t.conversions))}</strong>Conv. 30d</div><div><strong>${esc(fmtMoney(t.cpa, c.currency))}</strong>Cost / conv.</div></div>
      </a>`;
      }).join("")}</div>` : emptyState({ title: clients.length ? "No clients match" : "No clients yet", text: clients.length ? "Try a different search or status." : "Add your first client to start tracking performance.", iconName: "clients" });
    }
    $("#search").addEventListener("input", debounce(render, 150));
    $("#statusF").addEventListener("change", render);
    const openAdd = () => {
      const m = openModal({
        title: "Add client",
        size: "wide",
        body: clientFormHtml(emptyClient()),
        footer: `<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="saveClient">Create client</button>`
      });
      bindClientForm(m.el);
      $("#saveClient", m.el).addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
        const saved = await saveClientFromForm(m.el, null);
        toast(`${saved.businessName} created.`, "success");
        m.close();
        location.href = `client-details.html?id=${encodeURIComponent(saved.id)}`;
      }));
    };
    $("#addBtn").addEventListener("click", openAdd);
    try {
      await load2();
    } catch (e) {
      $("#list").innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>${esc(e.message)}</div></div>`;
    }
    if (qs("new")) openAdd();
  }
  var init_clients2 = __esm({
    "js/pages/clients.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_clients();
      init_calculations();
      (async () => {
        const ctx2 = await initAdminPage({ page: "clients", title: "Clients" });
        if (ctx2) main5(ctx2);
      })();
    }
  });

  // js/performance.js
  function validateMetric(r) {
    const e = [];
    const w = [];
    if (!isValidDate(r.date)) e.push("Date is invalid");
    if (!r.campaignId) e.push("Campaign is required");
    ["impressions", "clicks", "spend", "conversions"].forEach((k) => {
      if (!isNum(r[k])) e.push(`${k} is required`);
      else if (r[k] < 0) e.push(`${k} cannot be negative`);
    });
    ["convValue", "qualifiedLeads", "bookedJobs", "revenue"].forEach((k) => {
      if (r[k] !== null && r[k] !== void 0 && (!isNum(r[k]) || r[k] < 0)) e.push(`${k} must be a positive number`);
    });
    if (isNum(r.clicks) && isNum(r.impressions) && r.clicks > r.impressions) e.push("Clicks cannot exceed impressions");
    if (isNum(r.qualifiedLeads) && isNum(r.conversions) && r.qualifiedLeads > r.conversions + 1e-3) w.push("Qualified leads exceed conversions (allowed if leads come from other sources)");
    if (isNum(r.conversions) && isNum(r.clicks) && r.conversions > r.clicks * 3) w.push("Conversions are unusually high relative to clicks \u2014 check the conversion actions included");
    if (isNum(r.spend) && r.spend > 0 && r.clicks === 0) w.push("Spend with zero clicks");
    return { errors: e, warnings: w };
  }
  function buildMetricFromCsv(values, { client }) {
    const rec = {
      clientId: client.id,
      campaignId: values.campaignId,
      date: values.date,
      impressions: values.impressions,
      clicks: values.clicks,
      spend: values.spend,
      conversions: values.conversions,
      convValue: values.convValue ?? null,
      qualifiedLeads: values.qualifiedLeads ?? null,
      bookedJobs: values.bookedJobs ?? null,
      revenue: values.revenue ?? null,
      trackingStatus: values.trackingStatus || "unknown",
      source: "csv"
    };
    const v = validateMetric(rec);
    return { record: rec, errors: v.errors, warnings: v.warnings };
  }
  function sumMetricRecords(a, b) {
    const out = { ...a };
    ["impressions", "clicks", "spend", "conversions"].forEach((k) => out[k] = Math.round(((a[k] || 0) + (b[k] || 0)) * 100) / 100);
    ["convValue", "qualifiedLeads", "bookedJobs", "revenue"].forEach((k) => {
      out[k] = a[k] === null && b[k] === null ? null : Math.round(((a[k] || 0) + (b[k] || 0)) * 100) / 100;
    });
    const rank = { ok: 0, unknown: 1, partial: 2, broken: 3 };
    out.trackingStatus = (rank[b.trackingStatus] ?? 1) > (rank[a.trackingStatus] ?? 1) ? b.trackingStatus : a.trackingStatus;
    return out;
  }
  function metricPreviewCols(client) {
    const cName = (id) => client.campaigns?.find((c) => c.id === id)?.name || id;
    return [
      { label: "Date", fmt: (r) => fmtDate(r.date) },
      { label: "Campaign", fmt: (r) => cName(r.campaignId) },
      { label: "Impr.", fmt: (r) => fmtInt(r.impressions) },
      { label: "Clicks", fmt: (r) => fmtInt(r.clicks) },
      { label: "Spend", fmt: (r) => fmtMoney(r.spend, client.currency) },
      { label: "Conv.", fmt: (r) => fmtDec(r.conversions) }
    ];
  }
  function metricDiff(a, b) {
    if (!a) return "";
    const keys = ["impressions", "clicks", "spend", "conversions", "convValue", "qualifiedLeads"];
    const d = keys.filter((k) => (a[k] ?? null) !== (b[k] ?? null)).map((k) => `${k}: ${a[k] ?? "\u2014"} \u2192 ${b[k] ?? "\u2014"}`);
    return d.length ? d.join(", ") : "identical values";
  }
  async function commitMetricImport(client, records, meta) {
    if (meta.newCampaigns?.length) {
      await store.saveClient({ ...client, campaigns: [...client.campaigns || [], ...meta.newCampaigns] }, { action: "client.campaigns.import" });
    }
    const now = nowIso();
    const rows = records.map((r) => ({ ...r, importedAt: now, importFile: meta.fileName }));
    await store.putMany("dailyMetrics", client.id, rows);
    await store.put("importHistory", client.id, {
      id: uid("imp"),
      at: now,
      type: "dailyMetrics",
      source: "CSV import",
      fileName: meta.fileName,
      ...meta.counts,
      // Keep overwritten values so an update can be audited (capped for size).
      replacedValues: (meta.previousValues || []).slice(0, 500).map((p) => ({ id: p.id, impressions: p.impressions, clicks: p.clicks, spend: p.spend, conversions: p.conversions, convValue: p.convValue ?? null, qualifiedLeads: p.qualifiedLeads ?? null, source: p.source }))
    });
    await store.audit("metrics.import", { clientId: client.id, file: meta.fileName, ...meta.counts });
    return meta.counts;
  }
  var TRACKING_STATUSES, TRACKING_LABELS, metricId, CSV_SCHEMA;
  var init_performance = __esm({
    "js/performance.js"() {
      init_state();
      init_calculations();
      init_utils();
      TRACKING_STATUSES = ["ok", "partial", "broken", "unknown"];
      TRACKING_LABELS = { ok: "Healthy", partial: "Partial", broken: "Broken", unknown: "Unknown" };
      metricId = (clientId, campaignId, date) => `${clientId}__${campaignId}__${date}`;
      CSV_SCHEMA = [
        { key: "date", label: "Date", type: "date", required: true, aliases: ["day", "date", "reportdate"] },
        { key: "campaignId", label: "Campaign", type: "campaign", required: true, aliases: ["campaign", "campaign name", "campaignname"] },
        { key: "impressions", label: "Impressions", type: "number", required: true, aliases: ["impr.", "impr", "impressions"] },
        { key: "clicks", label: "Clicks", type: "number", required: true, aliases: ["clicks"] },
        { key: "spend", label: "Spend", type: "number", required: true, aliases: ["cost", "spend", "amount spent", "cost (usd)", "cost (gbp)"] },
        { key: "conversions", label: "Conversions", type: "number", required: true, aliases: ["conversions", "conv.", "all conv."] },
        { key: "convValue", label: "Conversion value", type: "number", aliases: ["conv. value", "conversion value", "conv value", "total conv. value"] },
        { key: "qualifiedLeads", label: "Qualified leads", type: "number", aliases: ["qualified leads", "qualified", "sqls"] },
        { key: "bookedJobs", label: "Booked jobs", type: "number", aliases: ["booked jobs", "jobs booked", "booked"] },
        { key: "revenue", label: "Revenue", type: "number", aliases: ["revenue", "sales"] },
        { key: "trackingStatus", label: "Tracking status", type: "enum", options: TRACKING_STATUSES, optionAliases: { ok: ["healthy", "good", "yes"], partial: ["warning"], broken: ["no", "error", "failed"] }, aliases: ["tracking", "tracking status"] }
      ];
    }
  });

  // js/pages/daily-performance.js
  var daily_performance_exports = {};
  async function main6({ content, settings }) {
    let client = await resolveClientOrPicker(content, { pageTitle: "Daily Performance", intro: "Choose a client to view and enter daily campaign metrics.", href: "daily-performance.html" });
    if (!client) return;
    const cc = client.currency;
    const st2 = {
      range: qs("range") || settings.defaultRange || "last30",
      from: qs("from") || "",
      to: qs("to") || "",
      campaign: qs("campaign") || "",
      cmp: qs("cmp") || "previous",
      bFrom: qs("bFrom") || "",
      bTo: qs("bTo") || "",
      metric: qs("metric") || "spend"
    };
    content.innerHTML = workspaceHeader(client, "performance") + `
    <div class="page-header">
      <div><h1 style="font-size:18px">Daily performance</h1><p>Dates are Google Ads account dates in ${esc(client.timezone)}. Amounts in ${esc(cc)}.</p></div>
      <div class="page-actions">
        <button class="btn" id="exportBtn">${icon("download")}Export CSV</button>
        <button class="btn" id="importBtn">${icon("upload")}Import CSV</button>
        <button class="btn btn-primary" id="addBtn">${icon("plus")}Add daily entry</button>
      </div>
    </div>
    <div class="card mb-2"><form class="filters" id="filters">
      <div class="field"><label for="pRange">Date range</label><select class="select" id="pRange" name="range">${RANGE_OPTIONS.map(([k, l]) => `<option value="${k}">${l}</option>`).join("")}</select></div>
      <div class="field c-only"><label for="pFrom">From</label><input class="input" type="date" id="pFrom" name="from"></div>
      <div class="field c-only"><label for="pTo">To</label><input class="input" type="date" id="pTo" name="to"></div>
      <div class="field"><label for="pCampaign">Campaign</label><select class="select" id="pCampaign" name="campaign"><option value="">All campaigns</option>${(client.campaigns || []).map((c) => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("")}</select></div>
      <div class="field"><label for="pCmp">Compare with</label><select class="select" id="pCmp" name="cmp"><option value="previous">Previous period</option><option value="baseline">Original baseline</option><option value="custom">Another date range\u2026</option></select></div>
      <div class="field b-only"><label for="pBFrom">Compare from</label><input class="input" type="date" id="pBFrom" name="bFrom"></div>
      <div class="field b-only"><label for="pBTo">Compare to</label><input class="input" type="date" id="pBTo" name="bTo"></div>
    </form><p class="small subtle mb-0 mt-1" id="rangeNote"></p></div>
    <div id="perfBody">${loadingHtml()}</div>`;
    const form = $("#filters");
    const F = { range: $("#pRange"), from: $("#pFrom"), to: $("#pTo"), campaign: $("#pCampaign"), cmp: $("#pCmp"), bFrom: $("#pBFrom"), bTo: $("#pBTo") };
    Object.entries(F).forEach(([k, el]) => el.value = st2[k]);
    const toggles = () => {
      $$(".c-only").forEach((e) => e.classList.toggle("hidden", F.range.value !== "custom"));
      $$(".b-only").forEach((e) => e.classList.toggle("hidden", F.cmp.value !== "custom"));
    };
    toggles();
    form.addEventListener("change", () => {
      Object.keys(F).forEach((k) => st2[k] = F[k].value);
      toggles();
      setQs(st2);
      refresh();
    });
    let all = [], baseline = null;
    async function load2() {
      const [rows, baselines] = await Promise.all([store.list("dailyMetrics", client.id), store.list("baselines", client.id)]);
      all = rows;
      baseline = baselines.find((b) => b.isOriginal) || null;
    }
    async function refresh() {
      const body = $("#perfBody");
      try {
        await load2();
        render(body);
      } catch (e) {
        console.error(e);
        body.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>${esc(e.message)}</div></div>`;
      }
    }
    function render(body) {
      const range = resolveRange(st2.range, client.timezone, { from: st2.from, to: st2.to });
      const inCmp = (r) => !st2.campaign || r.campaignId === st2.campaign;
      const cur = all.filter((r) => inCmp(r) && r.date >= range.from && r.date <= range.to);
      const prevP = previousPeriod(range);
      const prevRows = all.filter((r) => inCmp(r) && r.date >= prevP.from && r.date <= prevP.to);
      const t = aggregate(cur);
      let cmpTotals = null, cmpLabel = "", cmpPerDay = false, cmpNote = "";
      if (st2.cmp === "previous") {
        cmpTotals = aggregate(prevRows);
        cmpLabel = `previous period (${fmtRange(prevP.from, prevP.to)})`;
        if (!prevRows.length) cmpNote = "No data in the previous period.";
      } else if (st2.cmp === "baseline") {
        if (baseline) {
          cmpTotals = baselineTotals(baseline);
          cmpPerDay = true;
          cmpLabel = `original baseline (${fmtRange(baseline.periodStart, baseline.periodEnd)})`;
          cmpNote = "Volume metrics (spend, clicks, conversions\u2026) are compared as daily averages because the periods differ in length. Baseline is account-wide; campaign filter does not apply to it.";
        } else cmpNote = "No original baseline recorded yet \u2014 record one on the Initial Audit tab.";
      } else if (st2.cmp === "custom") {
        if (isValidDate(st2.bFrom) && isValidDate(st2.bTo) && st2.bFrom <= st2.bTo) {
          const bRows = all.filter((r) => inCmp(r) && r.date >= st2.bFrom && r.date <= st2.bTo);
          cmpTotals = aggregate(bRows);
          cmpLabel = `${fmtRange(st2.bFrom, st2.bTo)}`;
          const lenA = range.days, lenB = diffDays(st2.bFrom, st2.bTo) + 1;
          if (lenA !== lenB) {
            cmpPerDay = true;
            cmpNote = `Ranges differ in length (${lenA} vs ${lenB} days), so volume metrics are compared as daily averages.`;
          }
        } else cmpNote = "Choose a valid comparison date range.";
      }
      $("#rangeNote").textContent = `${fmtRange(range.from, range.to)} (${range.days} days)${cmpLabel ? ` vs ${cmpLabel}` : ""}.`;
      const volume = /* @__PURE__ */ new Set(["spend", "clicks", "impressions", "conversions", "convValue", "qualifiedLeads", "bookedJobs", "revenue"]);
      const tPD = perDay(t), cPD = cmpTotals && cmpPerDay ? perDay(cmpTotals) : null;
      const keys = ["spend", "impressions", "clicks", "conversions", "ctr", "cpc", "cvr", "cpa", "roas", "qualifiedLeads", "costPerQualified", "bookedJobs"].filter((k) => !(["roas"].includes(k) && t.convValue === null) && !(["qualifiedLeads", "costPerQualified"].includes(k) && t.qualifiedLeads === null) && !(k === "bookedJobs" && t.bookedJobs === null));
      const kpis = keys.map((k) => {
        let ch = null, cmpVal = null;
        if (cmpTotals) {
          if (cmpPerDay && volume.has(k)) {
            ch = change(tPD[k], cPD[k]);
            cmpVal = `${fmtMetric(k, cPD[k], cc)}/day`;
          } else {
            ch = change(t[k], cmpTotals[k]);
            cmpVal = fmtMetric(k, cmpTotals[k], cc);
          }
        }
        return `<div class="card kpi" data-kpi="${k}"><div class="kpi-label">${esc(METRICS[k].label)}</div><div class="kpi-value ${t[k] === null ? "na" : ""}">${esc(fmtMetric(k, t[k], cc))}</div>
        ${cmpTotals ? `<div class="kpi-delta ${changeTone(k, ch)}">${esc(fmtChange(k, ch, cc))}${cmpPerDay && volume.has(k) ? " /day" : ""}</div><div class="kpi-sub">Compared: ${esc(cmpVal)}</div>` : ""}</div>`;
      }).join("");
      const score = scoreWindow({ rows: cur, prevRows, client, baseline, range, cfg: settings.scoring, today: todayInTz(client.timezone) });
      const history2 = scoreHistory({ rows: all.filter(inCmp), client, baseline, cfg: settings.scoring, from: addDays(range.to, -16 * 7 + 1), to: range.to, size: "week", today: todayInTz(client.timezone) });
      const sorted = cur.slice().sort((a, b) => a.date === b.date ? a.campaignId.localeCompare(b.campaignId) : a.date < b.date ? 1 : -1);
      const metricOpts = ["spend", "clicks", "impressions", "conversions", "ctr", "cpc", "cvr", "cpa", "qualifiedLeads"];
      body.innerHTML = `
      ${cmpNote ? `<div class="alert alert-info">${icon("info")}<div>${esc(cmpNote)}</div></div>` : ""}
      <div class="grid grid-kpi mb-2">${kpis}</div>
      ${!cur.length ? `<div class="card mb-2">${emptyState({ title: "No data in this range", text: "Add a daily entry or import a CSV export from Google Ads.", iconName: "chart" })}</div>` : ""}
      <div class="grid grid-2 mb-2">
        <div class="card"><div class="card-header"><h2>Trend</h2><select class="select" id="metricSel" style="width:auto">${metricOpts.map((k) => `<option value="${k}" ${k === st2.metric ? "selected" : ""}>${METRICS[k].label}</option>`).join("")}</select></div><div class="chart-box" id="trendBox"></div><p class="small subtle mb-0">Gaps = no data, or the metric is undefined that day (e.g. CPA with zero conversions).</p></div>
        <div class="card">${scoreCardHtml(score)}</div>
      </div>
      <div class="card mb-2"><div class="card-header"><h2>Weekly score history</h2><span class="hint">Weeks below minimum data are "Not Rated" and shown as gaps</span></div><div class="chart-box sm" id="scoreBox"></div></div>
      <div class="card mb-2">
        <div class="card-header"><h2>Daily records</h2><span class="hint">${sorted.length} row(s)</span></div>
        <div class="table-wrap" style="max-height:520px"><table class="table" id="rowsTable"><thead><tr><th>Date</th><th>Campaign</th><th class="num">Impr.</th><th class="num">Clicks</th><th class="num">Spend</th><th class="num">Conv.</th><th class="num">CTR</th><th class="num">CPC</th><th class="num">Conv. rate</th><th class="num">CPA</th><th class="num">ROAS</th><th class="num">Qual.</th><th>Tracking</th><th>Source</th><th></th></tr></thead><tbody>
        ${sorted.slice(0, 400).map((r) => `<tr><td class="nowrap">${esc(fmtDate(r.date))}</td><td>${esc(campaignName(client, r.campaignId))}</td><td class="num">${esc(fmtInt(r.impressions))}</td><td class="num">${esc(fmtInt(r.clicks))}</td><td class="num">${esc(fmtMoney(r.spend, cc))}</td><td class="num">${esc(fmtDec(r.conversions))}</td>
          <td class="num">${esc(fmtPct(calc.ctr(r.clicks, r.impressions)))}</td><td class="num">${esc(fmtMoney(calc.cpc(r.spend, r.clicks), cc))}</td><td class="num">${esc(fmtPct(calc.cvr(r.conversions, r.clicks)))}</td><td class="num">${esc(fmtMoney(calc.cpa(r.spend, r.conversions), cc))}</td><td class="num">${esc(r.convValue === null || r.convValue === void 0 ? "\u2014" : fmtX(calc.roas(r.convValue, r.spend)))}</td><td class="num">${esc(fmtDec(r.qualifiedLeads))}</td>
          <td><span class="badge ${r.trackingStatus === "ok" ? "badge-success" : r.trackingStatus === "broken" ? "badge-danger" : r.trackingStatus === "partial" ? "badge-warning" : ""}">${esc(TRACKING_LABELS[r.trackingStatus] || "Unknown")}</span></td><td class="small subtle">${esc(r.source || "\u2014")}</td>
          <td class="nowrap"><button class="btn btn-ghost btn-sm btn-icon" data-edit="${esc(r.id)}" aria-label="Edit">${icon("edit")}</button><button class="btn btn-ghost btn-sm btn-icon" data-del="${esc(r.id)}" aria-label="Delete">${icon("trash")}</button></td></tr>`).join("")}
        </tbody>${sorted.length ? `<tfoot><tr><td colspan="2">Total</td><td class="num">${esc(fmtInt(t.impressions))}</td><td class="num">${esc(fmtInt(t.clicks))}</td><td class="num">${esc(fmtMoney(t.spend, cc))}</td><td class="num">${esc(fmtDec(t.conversions))}</td><td class="num">${esc(fmtPct(t.ctr))}</td><td class="num">${esc(fmtMoney(t.cpc, cc))}</td><td class="num">${esc(fmtPct(t.cvr))}</td><td class="num">${esc(fmtMoney(t.cpa, cc))}</td><td class="num">${esc(fmtX(t.roas))}</td><td class="num">${esc(fmtDec(t.qualifiedLeads))}</td><td colspan="3"></td></tr></tfoot>` : ""}</table></div>
        ${sorted.length > 400 ? `<p class="small subtle">Showing the latest 400 rows. Export CSV for all rows.</p>` : ""}
      </div>
      <div class="card"><div class="card-header"><h2>Import history</h2></div><div id="impHist">${loadingHtml()}</div></div>`;
      const drawTrend = () => {
        const s = dailySeries(cur, range.from, range.to);
        const k = st2.metric;
        const f2 = METRICS[k].fmt;
        const fmt = f2 === "money" ? (v) => fmtMoney(v, cc, { decimals: v < 10 ? 2 : 0 }) : f2 === "pct" ? (v) => `${(+v).toFixed(1)}%` : (v) => fmtDec(v);
        renderChart($("#trendBox"), { type: ["spend", "clicks", "impressions", "conversions", "qualifiedLeads"].includes(k) ? "bar" : "line", labels: s.map((d) => fmtDate(d.date).replace(/ \d{4}$/, "")), series: [{ name: METRICS[k].label, values: s.map((d) => d.missing ? null : d[k]) }], fmtLeft: fmt });
      };
      drawTrend();
      $("#metricSel").addEventListener("change", (e) => {
        st2.metric = e.target.value;
        setQs(st2);
        drawTrend();
      });
      renderChart($("#scoreBox"), { type: "line", labels: history2.map((h) => fmtDate(h.start).replace(/ \d{4}$/, "")), series: [{ name: "Weekly score", values: history2.map((h) => h.score) }], fmtLeft: (v) => Math.round(v) });
      $$("[data-edit]", body).forEach((b) => b.addEventListener("click", () => entryModal(all.find((r) => r.id === b.dataset.edit))));
      $$("[data-del]", body).forEach((b) => b.addEventListener("click", async () => {
        const r = all.find((x) => x.id === b.dataset.del);
        if (!await confirmDialog({ title: "Delete this daily record?", message: `${fmtDate(r.date)} \xB7 ${campaignName(client, r.campaignId)}. This cannot be undone. Published reports keep their own snapshot and are not affected.`, confirmText: "Delete", danger: true })) return;
        await withLoading(b, async () => {
          await store.remove("dailyMetrics", client.id, r.id, "metrics.delete");
          toast("Record deleted.", "success");
          refresh();
        });
      }));
      store.list("importHistory", client.id).then((h) => {
        $("#impHist").innerHTML = h.length ? `<div class="table-wrap"><table class="table"><thead><tr><th>When</th><th>File</th><th>Source</th><th class="num">Imported</th><th class="num">Updated</th><th class="num">Skipped</th><th class="num">Failed</th></tr></thead><tbody>${h.sort((a, b) => a.at < b.at ? 1 : -1).map((i) => `<tr><td>${esc(fmtDateTime(i.at))}</td><td>${esc(i.fileName)}</td><td>${esc(i.source)}</td><td class="num">${i.imported ?? 0}</td><td class="num">${i.updated ?? 0}</td><td class="num">${i.skipped ?? 0}</td><td class="num">${i.failed ?? 0}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">No imports yet.</p>`;
      }).catch((e) => $("#impHist").textContent = e.message);
    }
    function entryModal(existing) {
      const r = existing || { date: todayInTz(client.timezone), campaignId: st2.campaign || client.campaigns?.[0]?.id, trackingStatus: "ok" };
      const num = (k, label, req, step = "1") => `<div class="field"><label for="e_${k}">${label}${req ? ' <span class="req">*</span>' : ""}</label><input class="input" type="number" min="0" step="${step}" id="e_${k}" name="${k}" value="${r[k] ?? ""}" ${req ? "required" : ""}></div>`;
      const m = openModal({
        title: existing ? "Edit daily record" : "Add daily entry",
        size: "wide",
        body: `<form id="entryForm" novalidate><div class="form-grid cols-3">
        <div class="field"><label for="e_date">Date <span class="req">*</span></label><input class="input" type="date" id="e_date" name="date" value="${esc(r.date)}" ${existing ? "disabled" : ""}></div>
        <div class="field"><label for="e_campaign">Campaign <span class="req">*</span></label><select class="select" id="e_campaign" name="campaignId" ${existing ? "disabled" : ""}>${(client.campaigns || []).map((c) => `<option value="${esc(c.id)}" ${c.id === r.campaignId ? "selected" : ""}>${esc(c.name)}</option>`).join("")}</select></div>
        <div class="field"><label for="e_tracking">Tracking status</label><select class="select" id="e_tracking" name="trackingStatus">${TRACKING_STATUSES.map((s) => `<option value="${s}" ${s === r.trackingStatus ? "selected" : ""}>${TRACKING_LABELS[s]}</option>`).join("")}</select></div>
        ${num("impressions", "Impressions", true)}${num("clicks", "Clicks", true)}${num("spend", `Spend (${esc(cc)})`, true, "0.01")}
        ${num("conversions", "Conversions", true, "0.01")}${num("convValue", "Conversion value", false, "0.01")}${num("qualifiedLeads", "Qualified leads", false)}
        ${num("bookedJobs", "Booked jobs", false)}${num("revenue", `Revenue (${esc(cc)})`, false, "0.01")}
      </div>
      <div class="card mt-2" style="background:var(--surface-2)"><div class="small"><strong>Calculated:</strong> <span id="calcOut">\u2014</span></div></div>
      <div id="entryErr" class="alert alert-danger hidden mt-2"></div></form>`,
        footer: `<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="saveEntry">${existing ? "Save changes" : "Add entry"}</button>`
      });
      const fm = $("#entryForm", m.el);
      const read = () => {
        const g = (n) => {
          const v = fm.elements[n].value;
          return v === "" ? null : Number(v);
        };
        return { date: fm.elements.date.value, campaignId: fm.elements.campaignId.value, impressions: g("impressions"), clicks: g("clicks"), spend: g("spend"), conversions: g("conversions"), convValue: g("convValue"), qualifiedLeads: g("qualifiedLeads"), bookedJobs: g("bookedJobs"), revenue: g("revenue"), trackingStatus: fm.elements.trackingStatus.value };
      };
      const showCalc = () => {
        const v = read();
        $("#calcOut", m.el).textContent = `CTR ${fmtPct(calc.ctr(v.clicks, v.impressions))} \xB7 CPC ${fmtMoney(calc.cpc(v.spend, v.clicks), cc)} \xB7 Conv. rate ${fmtPct(calc.cvr(v.conversions, v.clicks))} \xB7 CPA ${fmtMoney(calc.cpa(v.spend, v.conversions), cc)} \xB7 ROAS ${v.convValue === null ? "\u2014" : fmtX(calc.roas(v.convValue, v.spend))}`;
      };
      fm.addEventListener("input", showCalc);
      showCalc();
      $("#saveEntry", m.el).addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
        const v = read();
        const { errors, warnings } = validateMetric(v);
        const err = $("#entryErr", m.el);
        if (errors.length) {
          err.innerHTML = `<div>${errors.map(esc).join("<br>")}</div>`;
          err.classList.remove("hidden");
          return;
        }
        const id = metricId(client.id, v.campaignId, v.date);
        const clash = !existing && all.find((x) => x.id === id);
        if (clash && !await confirmDialog({ title: "A record already exists", message: `There is already data for ${campaignName(client, v.campaignId)} on ${fmtDate(v.date)}. Replace it?`, details: `<p class="small mono">${esc(metricDiff(clash, v))}</p>`, confirmText: "Replace existing", danger: true })) return;
        if (warnings.length && !await confirmDialog({ title: "Please double-check", message: warnings.join(" "), confirmText: "Save anyway" })) return;
        const prev = existing || clash;
        await store.put("dailyMetrics", client.id, { ...prev || {}, ...v, id, source: prev?.source === "csv" ? "csv+manual" : "manual", editedAt: nowIso(), previousVersion: prev ? { impressions: prev.impressions, clicks: prev.clicks, spend: prev.spend, conversions: prev.conversions, at: prev.updatedAt || prev.importedAt || null } : null }, existing || clash ? "metrics.update" : "metrics.create");
        toast("Daily record saved.", "success");
        m.close();
        refresh();
      }));
    }
    $("#addBtn").addEventListener("click", () => entryModal(null));
    $("#importBtn").addEventListener("click", async () => {
      const existing = new Map(all.map((r) => [r.id, r]));
      openCsvWizard({
        title: `Import daily metrics \u2014 ${client.businessName}`,
        schema: CSV_SCHEMA,
        client,
        existing,
        allowSum: true,
        buildRecord: buildMetricFromCsv,
        sumRecords: sumMetricRecords,
        identity: (r) => metricId(client.id, r.campaignId, r.date),
        previewCols: metricPreviewCols(client),
        diff: metricDiff,
        commit: async (records, meta) => {
          const res = await commitMetricImport(client, records, meta);
          client = await store.getClient(client.id);
          refresh();
          return res;
        }
      });
    });
    $("#exportBtn").addEventListener("click", () => {
      const q = (s) => `"${String(s ?? "").replace(/"/g, '""')}"`;
      const lines = [["Date", "Campaign", "Impressions", "Clicks", "Cost", "Conversions", "Conv. value", "Qualified leads", "Booked jobs", "Revenue", "Tracking status", "Source"].map(q).join(",")];
      all.slice().sort((a, b) => a.date < b.date ? -1 : 1).forEach((r) => lines.push([r.date, campaignName(client, r.campaignId), r.impressions, r.clicks, r.spend, r.conversions, r.convValue, r.qualifiedLeads, r.bookedJobs, r.revenue, r.trackingStatus, r.source].map(q).join(",")));
      downloadBlob(lines.join("\n"), `${client.businessName.replace(/[^\w]+/g, "-").toLowerCase()}-daily-metrics.csv`, "text/csv");
    });
    refresh();
  }
  var init_daily_performance = __esm({
    "js/pages/daily-performance.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_scoring();
      init_score_card();
      init_charts();
      init_csv_import();
      init_performance();
      (async () => {
        const ctx2 = await initAdminPage({ page: "performance", title: "Daily Performance" });
        if (ctx2) main6(ctx2);
      })();
    }
  });

  // js/pages/dashboard.js
  var dashboard_exports = {};
  async function main7({ content, settings }) {
    const adminTz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const clients = (await store.listClients()).filter((c) => c.status !== "archived");
    const campaignTypes = [...new Set(clients.flatMap((c) => (c.campaigns || []).map((x) => x.type)).filter(Boolean))];
    const f2 = {
      client: qs("client") || "",
      range: qs("range") || settings.defaultRange || "last30",
      from: qs("from") || "",
      to: qs("to") || "",
      campaign: qs("campaign") || "",
      ctype: qs("ctype") || "",
      status: qs("status") || ""
    };
    content.innerHTML = `
    <div class="page-header">
      <div><h1>Performance overview</h1><p>All managed Google Ads clients. Totals respect every filter below.</p></div>
      <div class="page-actions"><a class="btn" href="clients.html?new=1">${icon("plus")}Add client</a><a class="btn btn-primary" href="reports.html">${icon("report")}Reports</a></div>
    </div>
    <div class="card mb-2">
      <form class="filters" id="filters">
        <div class="field"><label for="fClient">Client</label><select class="select" id="fClient" name="client"><option value="">All active clients</option>${clients.map((c) => `<option value="${esc(c.id)}">${esc(c.businessName)}</option>`).join("")}</select></div>
        <div class="field"><label for="fRange">Date range</label><select class="select" id="fRange" name="range">${RANGE_OPTIONS.map(([k, l]) => `<option value="${k}">${l}</option>`).join("")}</select></div>
        <div class="field custom-only"><label for="fFrom">From</label><input class="input" type="date" id="fFrom" name="from"></div>
        <div class="field custom-only"><label for="fTo">To</label><input class="input" type="date" id="fTo" name="to"></div>
        <div class="field"><label for="fCampaign">Campaign</label><select class="select" id="fCampaign" name="campaign"></select></div>
        <div class="field"><label for="fType">Campaign type</label><select class="select" id="fType" name="ctype"><option value="">All types</option>${campaignTypes.map((t) => `<option>${esc(t)}</option>`).join("")}</select></div>
        <div class="field"><label for="fStatus">Performance status</label><select class="select" id="fStatus" name="status"><option value="">Any status</option>${["Strong", "Good", "Needs Improvement", "Poor", "Not Rated"].map((s) => `<option>${s}</option>`).join("")}</select></div>
      </form>
      <p class="small subtle mt-1 mb-0" id="rangeNote"></p>
    </div>
    <div id="dash">${loadingHtml()}</div>`;
    const form = $("#filters");
    const sel = { client: $("#fClient"), range: $("#fRange"), from: $("#fFrom"), to: $("#fTo"), campaign: $("#fCampaign"), ctype: $("#fType"), status: $("#fStatus") };
    sel.client.value = f2.client;
    sel.range.value = f2.range;
    sel.from.value = f2.from;
    sel.to.value = f2.to;
    sel.ctype.value = f2.ctype;
    sel.status.value = f2.status;
    function fillCampaigns() {
      const list = sel.client.value ? clients.find((c) => c.id === sel.client.value)?.campaigns || [] : [];
      sel.campaign.innerHTML = `<option value="">${sel.client.value ? "All campaigns" : "Select a client first"}</option>` + list.map((c) => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("");
      sel.campaign.disabled = !sel.client.value;
      sel.campaign.value = list.some((c) => c.id === f2.campaign) ? f2.campaign : "";
    }
    fillCampaigns();
    const toggleCustom = () => $$(".custom-only").forEach((el) => el.classList.toggle("hidden", sel.range.value !== "custom"));
    toggleCustom();
    form.addEventListener("change", (e) => {
      if (e.target === sel.client) {
        f2.campaign = "";
        fillCampaigns();
      }
      toggleCustom();
      Object.keys(f2).forEach((k) => f2[k] = sel[k].value);
      setQs(f2);
      refresh();
    });
    async function refresh() {
      const dash = $("#dash");
      dash.innerHTML = loadingHtml("Calculating\u2026");
      try {
        await render(dash);
      } catch (e) {
        console.error(e);
        dash.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>Could not load dashboard data: ${esc(e.message)}</div></div>`;
      }
    }
    async function render(dash) {
      const range = resolveRange(f2.range, adminTz, { from: f2.from, to: f2.to });
      const prevP = previousPeriod(range);
      $("#rangeNote").textContent = `${fmtRange(range.from, range.to)} \xB7 compared with ${fmtRange(prevP.from, prevP.to)}. Dates follow each client's Google Ads account date; ranges are resolved in your time zone (${adminTz}).`;
      const [metrics, logs, reports, baselines, snapshots] = await Promise.all([
        store.listAcross("dailyMetrics", { from: prevP.from, to: range.to }),
        store.listAcross("optimizationLogs"),
        store.listAcross("reports"),
        store.listAcross("baselines"),
        store.listAcross("importHistory")
      ]);
      let scope = clients.filter((c) => !f2.client || c.id === f2.client);
      const campaignOk = (c, r) => {
        const cmp = c.campaigns?.find((x) => x.id === r.campaignId);
        if (f2.campaign && r.campaignId !== f2.campaign) return false;
        if (f2.ctype && cmp?.type !== f2.ctype) return false;
        return true;
      };
      const today = todayInTz(adminTz);
      const perClient = scope.map((c) => {
        const rows = metrics.filter((r) => r.clientId === c.id && campaignOk(c, r));
        const cur = rows.filter((r) => r.date >= range.from && r.date <= range.to);
        const prev = rows.filter((r) => r.date >= prevP.from && r.date <= prevP.to);
        const baseline = baselines.find((b) => b.clientId === c.id && b.isOriginal);
        const score = scoreWindow({ rows: cur, prevRows: prev, client: c, baseline, range, cfg: settings.scoring, today: todayInTz(c.timezone) });
        return { c, cur, prev, t: aggregate(cur), p: aggregate(prev), score };
      });
      const filtered = perClient.filter((x) => !f2.status || x.score.label === f2.status);
      scope = filtered.map((x) => x.c);
      const campaignsCount = scope.reduce((s, c) => s + (c.campaigns || []).filter((x) => !f2.ctype || x.type === f2.ctype).filter((x) => !f2.campaign || x.id === f2.campaign).length, 0);
      const spendByCur = sumByCurrency(filtered.map((x) => ({ currency: x.c.currency, value: x.t.spend })));
      const prevSpendByCur = sumByCurrency(filtered.map((x) => ({ currency: x.c.currency, value: x.p.spend })));
      const allCur = aggregate(filtered.flatMap((x) => x.cur));
      const allPrev = aggregate(filtered.flatMap((x) => x.prev));
      const singleCurrency = spendByCur.length <= 1;
      const currency = spendByCur[0]?.currency || filtered[0]?.c.currency || "USD";
      const delta = (key, a, b, cur) => {
        const ch = change(a, b);
        return `<div class="kpi-delta ${changeTone(key, ch)}">${esc(fmtChange(key, ch, cur))} vs prev.</div>`;
      };
      const moneyKpi = (label, key, byCur, prevByCur) => {
        if (!byCur.length) return kpi(label, "\u2014", "", "No data in range");
        if (byCur.length === 1) {
          const p = prevByCur.find((x) => x.currency === byCur[0].currency)?.value ?? null;
          return kpi(label, fmtMoney(byCur[0].value, byCur[0].currency), delta(key, byCur[0].value, p, byCur[0].currency));
        }
        return kpi(label, `<div class="currency-split">${byCur.map((x) => `<div>${esc(fmtMoney(x.value, x.currency))}</div>`).join("")}</div>`, "", "Shown per currency \u2014 not converted or combined", true);
      };
      let cpaKpi;
      if (singleCurrency) cpaKpi = kpi("Avg. cost / conversion", fmtMoney(allCur.cpa, currency), delta("cpa", allCur.cpa, allPrev.cpa, currency), allCur.cpa === null ? "No conversions in range" : "Total spend \xF7 total conversions");
      else cpaKpi = kpi("Avg. cost / conversion", `<div class="currency-split">${[...new Set(filtered.map((x) => x.c.currency))].map((cc) => {
        const a = aggregate(filtered.filter((x) => x.c.currency === cc).flatMap((x) => x.cur));
        return `<div>${esc(fmtMoney(a.cpa, cc))}</div>`;
      }).join("")}</div>`, "", "Per currency", true);
      const attention = [];
      perClient.forEach(({ c, t, score }) => {
        if (f2.client && c.id !== f2.client) return;
        const reasons = [];
        if (score.status === "rated" && (score.label === "Poor" || score.label === "Needs Improvement")) reasons.push(["warning", `Score ${score.score} (${score.label})`]);
        const recent = metrics.filter((r) => r.clientId === c.id && r.date >= addDays(todayInTz(c.timezone), -7));
        const trackingBad = recent.filter((r) => r.trackingStatus === "partial" || r.trackingStatus === "broken").length;
        if (trackingBad) reasons.push(["danger", `Tracking issues on ${new Set(recent.filter((r) => r.trackingStatus !== "ok").map((r) => r.date)).size} recent day(s)`]);
        const lastDate = metrics.filter((r) => r.clientId === c.id).map((r) => r.date).sort().pop();
        if (!lastDate) reasons.push(["warning", "No performance data yet"]);
        else if (lastDate < addDays(todayInTz(c.timezone), -3)) reasons.push(["warning", `No data since ${fmtDate(lastDate)}`]);
        if (c.targetCpa && t.cpa && t.cpa > c.targetCpa * 1.2) reasons.push(["warning", `CPA ${fmtMoney(t.cpa, c.currency)} is >20% above target`]);
        const y = metrics.filter((r) => r.clientId === c.id && r.date === addDays(todayInTz(c.timezone), -1));
        const wk = metrics.filter((r) => r.clientId === c.id && r.date >= addDays(todayInTz(c.timezone), -8) && r.date <= addDays(todayInTz(c.timezone), -2));
        const ySpend = aggregate(y).spend, avg = wk.length ? aggregate(wk).spend / 7 : 0;
        if (avg > 0 && ySpend > avg * 1.5) reasons.push(["warning", `Yesterday's spend ${Math.round((ySpend / avg - 1) * 100)}% above 7-day average`]);
        if (score.status === "not-rated" && lastDate) reasons.push(["", "Not enough data to score this range"]);
        if (reasons.length) attention.push({ c, reasons });
      });
      const scopeIds = new Set(scope.map((c) => c.id));
      const recentLogs = logs.filter((l) => scopeIds.has(l.clientId)).sort((a, b) => (a.dateTime || a.date) < (b.dateTime || b.date) ? 1 : -1).slice(0, 6);
      const recentReports = reports.filter((r) => scopeIds.has(r.clientId)).sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1).slice(0, 6);
      const upcoming = logs.filter((l) => scopeIds.has(l.clientId) && l.reviewDate && l.reviewDate >= addDays(today, -7) && !["Successful", "Unsuccessful", "Reverted"].includes(l.status)).sort((a, b) => a.reviewDate < b.reviewDate ? -1 : 1).slice(0, 6);
      const cName = (id) => clients.find((c) => c.id === id)?.businessName || id;
      dash.innerHTML = `
      ${f2.client || f2.campaign || f2.ctype || f2.status ? "" : ""}
      <div class="grid grid-kpi mb-2" id="kpis">
        ${kpi("Active clients", fmtInt(scope.length), "", `${clients.length} active in total`)}
        ${kpi("Campaigns managed", fmtInt(campaignsCount), "", "Across selected clients")}
        ${moneyKpi("Ad spend", "spend", spendByCur, prevSpendByCur)}
        ${kpi("Conversions", fmtDec(allCur.conversions), delta("conversions", allCur.conversions, allPrev.conversions))}
        ${cpaKpi}
        ${kpi("Avg. conversion rate", fmtPct(allCur.cvr), delta("cvr", allCur.cvr, allPrev.cvr), "Conversions \xF7 clicks")}
      </div>
      <div class="dash-grid mb-2">
        <div class="card">
          <div class="card-header"><h2>Campaign performance trend</h2><span class="hint">${singleCurrency ? `Daily spend (${esc(currency)}) & conversions` : "Mixed currencies \u2014 showing clicks & conversions"}</span></div>
          ${filtered.length ? `<div class="chart-box" id="trendChart"></div>` : emptyState({ title: "No matching clients", text: "Adjust the filters." })}
        </div>
        <div class="card">
          <div class="card-header"><h2>Clients requiring attention</h2><span class="badge ${attention.length ? "badge-warning" : "badge-success"}">${attention.length}</span></div>
          ${attention.length ? `<ul class="list">${attention.map((a) => `<li><div><a class="title" href="client-details.html?id=${esc(a.c.id)}">${esc(a.c.businessName)}</a>
            <div class="flex wrap gap-1 mt-1">${a.reasons.map(([t, r]) => `<span class="badge ${t ? "badge-" + t : ""}">${esc(r)}</span>`).join("")}</div></div></li>`).join("")}</ul>` : `<p class="muted">Nothing needs attention for this selection.</p>`}
        </div>
      </div>
      <div class="card mb-2">
        <div class="card-header"><h2>Client performance</h2><span class="hint">Internal performance score \u2014 not Google's Optimization Score</span></div>
        <div class="table-wrap"><table class="table"><thead><tr><th>Client</th><th class="num">Spend</th><th class="num">Clicks</th><th class="num">Conv.</th><th class="num">Cost / conv.</th><th class="num">Target CPA</th><th class="num">Conv. rate</th><th>Score</th></tr></thead><tbody>
        ${filtered.map(({ c, t, score }) => `<tr class="clickable" data-href="daily-performance.html?client=${esc(c.id)}"><td><a href="client-details.html?id=${esc(c.id)}">${esc(c.businessName)}</a></td>
          <td class="num">${esc(fmtMoney(t.spend, c.currency))}</td><td class="num">${esc(fmtInt(t.clicks))}</td><td class="num">${esc(fmtDec(t.conversions))}</td>
          <td class="num">${esc(fmtMoney(t.cpa, c.currency))}</td><td class="num">${esc(fmtMoney(c.targetCpa, c.currency))}</td><td class="num">${esc(fmtPct(t.cvr))}</td>
          <td><span class="badge ${score.status === "rated" ? "badge-" + toneFor(score.label) : ""}">${score.status === "rated" ? `${score.score} \xB7 ${esc(score.label)}` : "Not Rated"}</span></td></tr>`).join("") || `<tr><td colspan="8" class="muted">No clients match the filters.</td></tr>`}
        </tbody></table></div>
      </div>
      <div class="grid grid-3 mb-2">
        <div class="card"><div class="card-header"><h2>Recent optimizations</h2><a class="small" href="optimization-log.html">View log</a></div>
          ${recentLogs.length ? `<ul class="list">${recentLogs.map((l) => `<li><div><div class="title small">${esc(l.category)}: ${esc(l.field)}</div><div class="meta">${esc(cName(l.clientId))} \xB7 ${esc(fmtDate(l.date))}</div></div><span class="badge">${esc(l.status)}</span></li>`).join("")}</ul>` : `<p class="muted">No optimization entries yet.</p>`}</div>
        <div class="card"><div class="card-header"><h2>Recent reports</h2><a class="small" href="reports.html">All reports</a></div>
          ${recentReports.length ? `<ul class="list">${recentReports.map((r) => `<li><div><a class="title small" href="report-editor.html?client=${esc(r.clientId)}&report=${esc(r.id)}">${esc(r.title)}</a><div class="meta">${esc(fmtRange(r.periodStart, r.periodEnd))}</div></div><span class="badge ${r.status === "published" ? "badge-success" : ""}">${esc(r.status)}</span></li>`).join("")}</ul>` : `<p class="muted">No reports yet.</p>`}</div>
        <div class="card"><div class="card-header"><h2>Upcoming reviews</h2></div>
          ${upcoming.length ? `<ul class="list">${upcoming.map((l) => `<li><div><div class="title small">${esc(l.category)} \u2014 ${esc(cName(l.clientId))}</div><div class="meta">${esc(l.field)}</div></div><span class="badge ${l.reviewDate < today ? "badge-danger" : "badge-accent"}">${l.reviewDate < today ? "Overdue " : ""}${esc(fmtDate(l.reviewDate))}</span></li>`).join("")}</ul>` : `<p class="muted">No reviews scheduled.</p>`}</div>
      </div>
      <div class="card">
        <div class="card-header"><h2>Data synchronization status</h2><span class="hint">Google Ads API: not connected \u2014 data comes from CSV import or manual entry</span></div>
        <div class="table-wrap"><table class="table"><thead><tr><th>Client</th><th>Latest data date</th><th>Last import</th><th>Source</th><th>Status</th></tr></thead><tbody>
        ${scope.map((c) => {
        const last = metrics.filter((r) => r.clientId === c.id).map((r) => r.date).sort().pop();
        const imp = snapshots.filter((i) => i.clientId === c.id).sort((a, b) => a.at < b.at ? 1 : -1)[0];
        const stale = !last || last < addDays(todayInTz(c.timezone), -3);
        return `<tr><td>${esc(c.businessName)}</td><td>${last ? esc(fmtDate(last)) : "\u2014"}</td><td>${imp ? esc(fmtDate(imp.at.slice(0, 10))) + ` \xB7 ${esc(imp.fileName || "")}` : "\u2014"}</td><td>${esc(imp?.source || "\u2014")}</td><td><span class="badge ${stale ? "badge-warning" : "badge-success"}">${stale ? "Needs update" : "Up to date"}</span></td></tr>`;
      }).join("")}
        </tbody></table></div>
        <p class="small subtle mt-1 mb-0">Automatic sync and alerts are not active \u2014 they require the Google Ads API and a scheduled Cloud Function (see SETUP-GUIDE.md).</p>
      </div>`;
      $$("tr[data-href]", dash).forEach((tr) => tr.addEventListener("click", (e) => {
        if (e.target.tagName !== "A") location.href = tr.dataset.href;
      }));
      if (filtered.length) {
        const rows = filtered.flatMap((x) => x.cur);
        const series = dailySeries(rows, range.from, range.to);
        const labels = series.map((d) => fmtDate(d.date, "D MMM YYYY").replace(/ \d{4}$/, ""));
        renderChart($("#trendChart"), singleCurrency ? { labels, series: [{ name: `Spend (${currency})`, values: series.map((d) => d.missing ? null : d.spend), type: "bar" }, { name: "Conversions", values: series.map((d) => d.missing ? null : d.conversions), axis: "right" }], fmtLeft: (v) => fmtMoney(v, currency, { decimals: 0 }), fmtRight: (v) => fmtDec(v) } : { labels, series: [{ name: "Clicks", values: series.map((d) => d.missing ? null : d.clicks), type: "bar" }, { name: "Conversions", values: series.map((d) => d.missing ? null : d.conversions), axis: "right" }], fmtLeft: (v) => fmtInt(v), fmtRight: (v) => fmtDec(v) });
      }
    }
    refresh();
  }
  function kpi(label, value, deltaHtml = "", sub = "", rawValue = false) {
    const isNa = value === "\u2014";
    return `<div class="card kpi"><div class="kpi-label">${esc(label)}</div><div class="kpi-value ${isNa ? "na" : ""}">${rawValue || /^</.test(value) ? value : esc(value)}</div>${deltaHtml}${sub ? `<div class="kpi-sub">${esc(sub)}</div>` : ""}</div>`;
  }
  var init_dashboard = __esm({
    "js/pages/dashboard.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_scoring();
      init_charts();
      (async () => {
        const ctx2 = await initAdminPage({ page: "dashboard", title: "Dashboard" });
        if (ctx2) main7(ctx2);
      })();
    }
  });

  // js/pages/firebase-setup.js
  var firebase_setup_exports = {};
  async function main8() {
    const mode = getMode();
    const { config, source } = loadFirebaseConfig();
    const fileValid = validateConfig(FIREBASE_CONFIG).valid;
    const draft = fileValid ? FIREBASE_CONFIG : getBrowserConfigDraft() || {};
    let session = null;
    try {
      session = await getSession();
    } catch {
    }
    const isAdmin = session?.role === "admin";
    const statusBadge = mode === "local" ? `<span class="mode-indicator local"><span class="dot"></span>Local Demo Mode</span>` : config ? `<span class="mode-indicator" id="liveStatus"><span class="dot"></span>Checking\u2026</span>` : `<span class="mode-indicator error"><span class="dot"></span>Firebase Not Configured</span>`;
    root2.innerHTML = `
  <div class="standalone">
    <header class="standalone-header"><img src="logo.svg" alt=""><div class="grow"><strong>Firebase Setup</strong><div class="small subtle">Masud PPC \u2014 connect secure cloud storage & authentication</div></div>
      ${statusBadge}<a class="btn btn-sm" href="${isAdmin ? "dashboard.html" : "login.html"}">${isAdmin ? "Back to dashboard" : "Sign in"}</a></header>
    <main class="content" style="max-width:1000px">
      <div class="alert alert-info">${icon("info")}<div><p><strong>What this page can and cannot do.</strong> It stores and tests your Firebase <em>web app configuration</em> and switches the data mode. It cannot create a Firebase project, enable services or deploy rules for you \u2014 those need your Google account in the Firebase console / CLI (steps below).</p><p class="mb-0">The web config is public by design. Security comes from <code>firestore.rules</code> and Cloud Functions \u2014 never from hiding the config.</p></div></div>

      <div class="card mb-2"><h2>1. Prepare your Firebase project</h2>
        <ol class="small" style="line-height:1.8">
          <li>Create a project at <a href="https://console.firebase.google.com" target="_blank" rel="noopener">console.firebase.google.com</a> (Blaze plan needed for Cloud Functions).</li>
          <li><strong>Authentication</strong> \u2192 Sign-in method \u2192 enable <em>Email/Password</em>. Do not enable public sign-up flows in the app \u2014 accounts are created by the admin.</li>
          <li><strong>Firestore Database</strong> \u2192 Create database (production mode, region near your clients).</li>
          <li>Project settings \u2192 General \u2192 <em>Your apps</em> \u2192 add a <strong>Web app</strong> \u2192 copy the <code>firebaseConfig</code> values.</li>
          <li>In a terminal in the project folder: <code>npm i -g firebase-tools</code>, <code>firebase login</code>, <code>firebase use --add</code>.</li>
          <li>Deploy security rules & indexes: <code>firebase deploy --only firestore:rules,firestore:indexes</code>.</li>
          <li>Deploy functions (portal links, AI, roles): <code>cd functions && npm install && cd .. && firebase deploy --only functions</code>.</li>
          <li>Create the first administrator with the trusted script: <code>node functions/scripts/set-admin.js you@yourdomain.com</code> (uses a service-account key on your computer \u2014 never upload it). See SETUP-GUIDE.md \xA75.</li>
        </ol></div>

      <div class="card mb-2"><h2>2. Enter the web app configuration</h2>
        ${fileValid ? `<div class="alert alert-success">${icon("check")}<div>Configuration is set in <code>firebase-config.js</code> (deployment file). It takes priority over values entered below.</div></div>` : `<p class="small muted">Recommended for production: paste the values into <code>firebase-config.js</code> \u2014 the single central config file \u2014 and redeploy. For quick testing you can store them in this browser only:</p>`}
        <div class="field mb-2"><label for="paste">Paste the config object (optional)</label><textarea class="textarea mono" id="paste" rows="3" placeholder='{ apiKey: "...", authDomain: "...", projectId: "...", ... }'></textarea><span class="help">Paste the object from the Firebase console; fields below are filled automatically.</span></div>
        <form id="cfgForm" class="form-grid" novalidate>
          ${REQUIRED_KEYS.map((k) => `<div class="field"><label for="k_${k}">${k}</label><input class="input mono" id="k_${k}" name="${k}" value="${esc(/^YOUR_|YOUR_PROJECT_ID/.test(draft[k] || "") ? "" : draft[k] || "")}" ${fileValid ? "readonly" : ""} autocomplete="off" spellcheck="false"></div>`).join("")}
        </form>
        <div id="cfgErr" class="alert alert-danger hidden mt-2"></div>
        <div class="flex gap-1 wrap mt-2">
          ${fileValid ? "" : `<button class="btn btn-primary" id="saveCfg">Validate & save in this browser</button><button class="btn" id="clearCfg">Clear browser config</button>`}
          <button class="btn" id="testBtn">${icon("refresh")}Test connection</button>
        </div>
        <div id="testOut" class="mt-2"></div>
        <p class="small subtle mb-0">Config source in use: <strong>${esc(source === "file" ? "firebase-config.js" : source === "browser" ? "this browser" : "none")}</strong>.</p>
      </div>

      <div class="card mb-2"><h2>3. Choose the data mode</h2>
        <p class="small">Current mode: <strong>${mode === "local" ? "Local Demo Mode" : "Firebase"}</strong>. Switching never copies or deletes data automatically, so data is not silently split between two places. You will be signed out.</p>
        <div class="flex gap-1 wrap">
          <button class="btn ${mode === "firebase" ? "" : "btn-primary"}" id="useFb" ${mode === "firebase" ? "disabled" : ""}>Use Firebase</button>
          <button class="btn" id="useLocal" ${mode === "local" ? "disabled" : ""}>Use Local Demo Mode</button>
        </div></div>

      <div class="card mb-2"><h2>4. Migrate local records to Firestore (optional)</h2>
        <p class="small">Copies clients and their records from this browser's Local Demo storage into Firestore. Requires Firebase mode and an administrator signed in with Firebase. Local logins, demo passwords and simulated share links are <strong>not</strong> copied (create real accounts with <code>setUserRole</code>).</p>
        ${mode !== "firebase" ? `<p class="muted small">Switch to Firebase mode and sign in as administrator first.</p>` : !isAdmin ? `<p class="muted small">Sign in as a Firebase administrator to migrate.</p>` : `
          <p class="small">Local browser storage contains <strong>${localAdapter.exportAll().clients.length}</strong> client(s).</p>
          <label class="check small mb-2"><input type="checkbox" id="skipDemo" checked> Skip fictional demo records (marked \u201CDemo\u201D)</label><br>
          <button class="btn btn-primary" id="migrateBtn">${icon("upload")}Review & migrate</button>`}
        <div id="migOut" class="mt-2"></div></div>

      <div class="card"><h2>5. Before you go live</h2><ul class="small" style="line-height:1.8">
        <li>Verify rules with the Emulator Suite: <code>cd functions && npm test</code> runs <code>tests/firestore.rules.test.mjs</code> (needs Java).</li>
        <li>In Google Cloud console \u2192 APIs & Services \u2192 Credentials, restrict the browser API key to your hosting domains.</li>
        <li>Enable App Check for Firestore and Functions if possible.</li>
        <li>Keep AI keys and Google Ads tokens in Firebase secrets only.</li></ul></div>
    </main>
  </div><div class="toast-stack" id="toasts"></div>`;
    if (mode === "firebase" && config) testConnection(true);
    $("#paste").addEventListener("input", (e) => {
      const t = e.target.value;
      REQUIRED_KEYS.forEach((k) => {
        const m = t.match(new RegExp(`["']?${k}["']?\\s*:\\s*["']([^"']+)["']`));
        if (m && !fileValid) $(`#k_${k}`).value = m[1];
      });
    });
    const readCfg = () => Object.fromEntries(REQUIRED_KEYS.map((k) => [k, $(`#k_${k}`).value.trim()]));
    $("#saveCfg")?.addEventListener("click", () => {
      const cfg = readCfg();
      const v = validateConfig(cfg);
      const box = $("#cfgErr");
      if (!v.valid) {
        box.innerHTML = `${icon("alert")}<div>${v.errors.map(esc).join("<br>")}</div>`;
        box.classList.remove("hidden");
        return;
      }
      box.classList.add("hidden");
      saveBrowserConfig(cfg);
      toast("Configuration saved in this browser. Test the connection next.", "success");
    });
    $("#clearCfg")?.addEventListener("click", async () => {
      if (!await confirmDialog({ title: "Clear browser configuration?", message: mode === "firebase" ? "The app is in Firebase mode and will show a configuration error until a valid config is provided." : "The stored values will be removed from this browser.", confirmText: "Clear", danger: mode === "firebase" })) return;
      clearBrowserConfig();
      location.reload();
    });
    $("#testBtn").addEventListener("click", (e) => withLoading(e.currentTarget, () => testConnection(false)));
    async function testConnection(silent) {
      const out = $("#testOut");
      const live = $("#liveStatus");
      if (!fileValid && !silent) {
        const v = validateConfig(readCfg());
        if (!v.valid) {
          out.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>${v.errors.map(esc).join("<br>")}</div></div>`;
          return;
        }
        saveBrowserConfig(readCfg());
      }
      out.innerHTML = `<div class="loading" style="padding:10px"><div class="spinner"></div>Connecting to Firebase\u2026</div>`;
      try {
        const { initFirebase: initFirebase2 } = await Promise.resolve().then(() => (init_firebase_init(), firebase_init_exports));
        const fb2 = await initFirebase2();
        let msg, ok = true;
        try {
          await fb2.sdk.fs.getDoc(fb2.sdk.fs.doc(fb2.db, "settings", "app"));
          msg = "Firestore responded and this account can read app settings.";
        } catch (err) {
          if (err.code === "permission-denied") msg = "Firestore responded with \u201Cpermission denied\u201D \u2014 this is expected when you are not signed in as a Firebase admin, and proves the security rules are active.";
          else if (err.code === "unavailable") {
            ok = false;
            msg = "Firestore is unreachable (offline or database not created yet).";
          } else if (/not.*found|NOT_FOUND/i.test(err.message)) {
            ok = false;
            msg = "The Firestore database does not exist yet. Create it in the Firebase console.";
          } else {
            ok = false;
            msg = err.message;
          }
        }
        out.innerHTML = `<div class="alert ${ok ? "alert-success" : "alert-danger"}">${icon(ok ? "check" : "alert")}<div><strong>${ok ? "Connected" : "Connection problem"}</strong> \u2014 project <code>${esc(fb2.app.options.projectId)}</code>. ${esc(msg)}</div></div>`;
        if (live) {
          live.className = `mode-indicator ${ok ? "connected" : "error"}`;
          live.innerHTML = `<span class="dot"></span>${ok ? "Firebase Connected" : "Connection Error"}`;
        }
      } catch (err) {
        out.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div><strong>Connection Error.</strong> ${esc(err.message)}</div></div>`;
        if (live) {
          live.className = "mode-indicator error";
          live.innerHTML = `<span class="dot"></span>Connection Error`;
        }
      }
    }
    $("#useFb").addEventListener("click", async () => {
      if (!loadFirebaseConfig().config) return toast("Save a valid configuration first.", "error");
      if (!await confirmDialog({ title: "Switch to Firebase mode?", message: "You will be signed out. Sign in with a Firebase account that has the admin role. Local demo data stays in this browser and is not copied unless you run the migration.", confirmText: "Switch to Firebase" })) return;
      clearLocalSession();
      setMode("firebase");
      location.href = "login.html";
    });
    $("#useLocal").addEventListener("click", async () => {
      if (!await confirmDialog({ title: "Switch to Local Demo Mode?", message: "You will be signed out of Firebase. Cloud data is not affected or copied. Local Demo data is stored only in this browser and is not secure.", confirmText: "Switch to local" })) return;
      try {
        await logout();
      } catch {
      }
      setMode("local");
      location.href = "login.html";
    });
    $("#migrateBtn")?.addEventListener("click", async (e) => {
      const skipDemo = $("#skipDemo").checked;
      const local = localAdapter.exportAll();
      const clients = local.clients.filter((c) => !(skipDemo && c.isDemo));
      const ids = new Set(clients.map((c) => c.id));
      const colls = ["baselines", "dailyMetrics", "optimizationLogs", "aiAnalyses", "reports", "reportSnapshots", "importHistory"];
      const counts = Object.fromEntries(colls.map((c) => [c, local[c].filter((r) => ids.has(r.clientId)).length]));
      if (!clients.length) return toast("Nothing to migrate.", "info");
      const { firestoreAdapter: firestoreAdapter2 } = await Promise.resolve().then(() => (init_firestore_service(), firestore_service_exports));
      const existing = new Set((await firestoreAdapter2.listClients()).map((c) => c.id));
      const clash = clients.filter((c) => existing.has(c.id));
      if (!await confirmDialog({
        title: "Copy local records to Firestore?",
        message: `${clients.length} client(s) will be written to project ${loadFirebaseConfig().config.projectId}.`,
        details: `<ul class="small">${colls.map((c) => `<li>${c}: ${counts[c]}</li>`).join("")}</ul>${clash.length ? `<div class="alert alert-warning">${icon("alert")}<div>${clash.length} client(s) already exist in Firestore and will be <strong>skipped</strong>: ${esc(clash.map((c) => c.businessName).join(", "))}</div></div>` : ""}<p class="small">Local data is not deleted.</p>`,
        confirmText: "Migrate now"
      })) return;
      await withLoading(e.currentTarget, async () => {
        const out = $("#migOut");
        let done = 0;
        const { portalProfileFrom: portalProfileFrom2 } = await Promise.resolve().then(() => (init_state(), state_exports));
        for (const c of clients.filter((x) => !existing.has(x.id))) {
          await firestoreAdapter2.putClient(c);
          await firestoreAdapter2.putPortalProfile(c.id, portalProfileFrom2(c));
          for (const coll of colls) {
            const rows = local[coll].filter((r) => r.clientId === c.id);
            if (rows.length) await firestoreAdapter2.putMany(coll, c.id, rows);
          }
          done++;
          out.innerHTML = `<p class="small">Migrated ${done} of ${clients.length - clash.length}\u2026</p>`;
        }
        if (local.settings) await firestoreAdapter2.putSettings(local.settings);
        await firestoreAdapter2.addAuditLog({ id: `log_migrate_${Date.now()}`, at: (/* @__PURE__ */ new Date()).toISOString(), action: "migration.local-to-firestore", actor: session.email, details: { clients: done } });
        out.innerHTML = `<div class="alert alert-success">${icon("check")}<div>Migration complete: ${done} client(s) copied${clash.length ? `, ${clash.length} skipped` : ""}. Local data was kept.</div></div>`;
        toast("Migration complete.", "success");
      }, { errorPrefix: "Migration stopped: " });
    });
  }
  var root2;
  var init_firebase_setup = __esm({
    "js/pages/firebase-setup.js"() {
      init_app();
      init_state();
      init_auth();
      init_utils();
      init_icons();
      init_firebase_config();
      applyTheme(localStorage.getItem("mppc.theme") || "light");
      root2 = document.getElementById("app");
      main8();
    }
  });

  // js/pages/login.js
  var login_exports = {};
  async function main9() {
    try {
      await ensureLocalSeed();
      await store.ready();
    } catch (e) {
      renderFatal(root3, e);
      return;
    }
    const existing = await getSession();
    if (existing) return go(existing);
    const local = getMode() === "local";
    const { DEMO_ACCOUNTS: DEMO_ACCOUNTS2, DEMO_PASSWORD: DEMO_PASSWORD2 } = local ? await Promise.resolve().then(() => (init_demo_data(), demo_data_exports)) : { DEMO_ACCOUNTS: [], DEMO_PASSWORD: "" };
    const st2 = getStatus();
    root3.innerHTML = `
  <div class="standalone" style="background:var(--bg)">
    <div style="flex:1;display:grid;place-items:center;padding:24px">
      <div style="width:100%;max-width:420px">
        <div class="flex items-center gap-1 mb-3" style="justify-content:center">
          <img src="logo.svg" alt="" width="40" height="40">
          <div><strong style="font-size:16px">Masud PPC</strong><div class="small subtle">Google Ads Intelligence &amp; Reporting</div></div>
        </div>
        <div class="card" style="padding:24px">
          <h1 style="font-size:20px">Sign in</h1>
          <p class="muted small">Sign in with your Firebase email and password.</p>
          <form id="loginForm" novalidate>
            <div class="field mb-2"><label for="email">Email</label><input class="input" id="email" name="email" type="email" autocomplete="username" required></div>
            <div class="field mb-2"><label for="password">Password</label><input class="input" id="password" name="password" type="password" autocomplete="current-password" required></div>
            <div id="loginError" class="alert alert-danger hidden" role="alert"></div>
            <button class="btn btn-primary" style="width:100%" type="submit" id="loginBtn">Sign in</button>
          </form>
          ${!local ? `<p class="small mt-2"><a href="#" id="resetLink">Forgot password?</a></p>` : ""}
        </div>
        <p class="small subtle text-center mt-2"><span class="mode-indicator ${local ? "local" : st2.state === "connected" ? "connected" : "error"}"><span class="dot"></span>${esc(st2.label)}</span></p>
        ${local ? `
        <div class="card mt-2" style="padding:16px">
          <h2 style="font-size:14px">Demo accounts (fictional)</h2>
          <p class="small muted">Local Demo Mode only. Password for all: <code>${esc(DEMO_PASSWORD2)}</code>. Demo logins are a simulation \u2014 they are not secure.</p>
          <ul class="list">${DEMO_ACCOUNTS2.map((a) => `
            <li><div><div class="title small">${esc(a.label)}</div><div class="meta">${esc(a.email)} \xB7 ${esc(a.note)}</div></div>
            <button class="btn btn-sm" data-fill="${esc(a.email)}">Use</button></li>`).join("")}</ul>
        </div>` : ""}
      </div>
    </div>
  </div>
  <div class="toast-stack" id="toasts"></div>`;
    root3.querySelectorAll("[data-fill]").forEach((b) => b.addEventListener("click", () => {
      root3.querySelector("#email").value = b.dataset.fill;
      root3.querySelector("#password").value = DEMO_PASSWORD2;
      root3.querySelector("#loginForm").requestSubmit();
    }));
    root3.querySelector("#resetLink")?.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = root3.querySelector("#email").value.trim();
      if (!email) return toast("Enter your email first.", "warning");
      try {
        const { firebaseAuth: firebaseAuth2 } = await Promise.resolve().then(() => (init_auth_service(), auth_service_exports));
        await firebaseAuth2.sendPasswordReset(email);
        toast("If that account exists, a reset email has been sent.", "success");
      } catch (err) {
        toast(err.message, "error");
      }
    });
    root3.querySelector("#loginForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = root3.querySelector("#loginBtn");
      const err = root3.querySelector("#loginError");
      err.classList.add("hidden");
      btn.classList.add("is-loading");
      try {
        const s = await login(root3.querySelector("#email").value, root3.querySelector("#password").value);
        go(s);
      } catch (ex) {
        err.innerHTML = `${icon("alert")}<div>${esc(ex.message)}</div>`;
        err.classList.remove("hidden");
      } finally {
        btn.classList.remove("is-loading");
      }
    });
  }
  function go(s) {
    const next = qs("next");
    if (s.role === "admin") location.replace(next && /^[\w-]+\.html(\?.*)?$/.test(next) && !next.startsWith("login") ? next : "dashboard.html");
    else location.replace("client-portal.html");
  }
  var root3;
  var init_login = __esm({
    "js/pages/login.js"() {
      init_app();
      init_auth();
      init_state();
      init_utils();
      init_icons();
      root3 = document.getElementById("app");
      main9();
    }
  });

  // js/optimization-log.js
  function validateEntry(e) {
    const errs = [];
    if (!e.dateTime) errs.push("Date and time are required.");
    if (!CATEGORIES.includes(e.category)) errs.push("Choose a category.");
    if (!e.field) errs.push("Describe the field or setting changed.");
    if (!e.reason) errs.push("Give the reason for the change.");
    if (!STATUSES.includes(e.status)) errs.push("Choose a status.");
    if (e.reviewDate && e.dateTime && e.reviewDate < e.dateTime.slice(0, 10)) errs.push("Review date is before the change date.");
    if (e.publishable && !e.clientSummary) errs.push("Write a client-facing summary before marking the entry as publishable.");
    if (["Successful", "Unsuccessful"].includes(e.status) && !e.actualOutcome) errs.push(`Record the actual outcome before marking it "${e.status}".`);
    return errs;
  }
  function withHistory(prev, next, by) {
    if (!prev) return { ...next, history: [{ at: nowIso(), by, action: "created" }] };
    const changes = {};
    TRACKED_FIELDS.forEach((k) => {
      if ((prev[k] ?? "") !== (next[k] ?? "")) changes[k] = [prev[k] ?? null, next[k] ?? null];
    });
    if (!Object.keys(changes).length) return { ...prev, ...next };
    const snapshot = {};
    TRACKED_FIELDS.forEach((k) => snapshot[k] = prev[k] ?? null);
    return { ...prev, ...next, history: [...prev.history || [], { at: nowIso(), by, action: "edited", changes, previous: snapshot }].slice(-50) };
  }
  function impactWindows(entry, rows, allEntries, days = 14, today) {
    const d = entry.date || entry.dateTime.slice(0, 10);
    const before = { from: addDays(d, -days), to: addDays(d, -1) };
    let after = { from: addDays(d, 1), to: addDays(d, days) };
    const truncated = today && after.to >= today;
    if (truncated) after = { ...after, to: addDays(today, -1) };
    const pick2 = (w, campaignOnly) => rows.filter((r) => r.date >= w.from && r.date <= w.to && (!campaignOnly || r.campaignId === entry.campaignId));
    const b = aggregate(pick2(before, true)), a = aggregate(pick2(after, true));
    const bAll = aggregate(pick2(before, false)), aAll = aggregate(pick2(after, false));
    const afterDays = after.to >= after.from ? diffDays(after.from, after.to) + 1 : 0;
    const confounders = allEntries.filter((x) => x.id !== entry.id && (x.date || "") >= before.from && (x.date || "") <= after.to && !["Planned"].includes(x.status));
    const keys = ["spend", "clicks", "conversions", "ctr", "cpc", "cvr", "cpa", "qualifiedLeads"];
    const perDay2 = (t, n) => (k) => ["spend", "clicks", "conversions", "qualifiedLeads"].includes(k) && t[k] !== null && n ? t[k] / n : t[k];
    const metrics = keys.map((k) => ({ key: k, before: perDay2(b, days)(k), after: perDay2(a, afterDays)(k), change: change(perDay2(a, afterDays)(k), perDay2(b, days)(k)), beforeAll: perDay2(bAll, days)(k), afterAll: perDay2(aAll, afterDays)(k) }));
    const warnings = [];
    if (afterDays < days) warnings.push(`The "after" window has only ${afterDays} of ${days} days so far.`);
    if (b.conversions < 5 || a.conversions < 5) warnings.push("Fewer than 5 conversions in a window \u2014 differences may be random noise.");
    if (a.trackingIssueDays || b.trackingIssueDays) warnings.push("Tracking issues were recorded in one of the windows.");
    if (truncated) warnings.push("Recent days may still receive late-reported conversions (conversion lag).");
    if (entry.category === "Conversion tracking") warnings.push("This change affects how conversions are counted, so before/after conversion figures are not directly comparable.");
    return { before, after, afterDays, metrics, confounders, warnings, campaignTotals: { before: b, after: a } };
  }
  var CATEGORIES, STATUSES, PRIORITIES, STATUS_TONE, TRACKED_FIELDS;
  var init_optimization_log = __esm({
    "js/optimization-log.js"() {
      init_calculations();
      init_utils();
      CATEGORIES = ["Keyword changes", "Negative keywords", "Search terms", "Ad copy", "Landing page changes", "Conversion tracking", "Bidding strategy", "Budget", "Geographic targeting", "Ad scheduling", "Audience targeting", "Campaign structure", "Performance troubleshooting", "Other"];
      STATUSES = ["Planned", "In progress", "Completed", "Monitoring", "Successful", "Unsuccessful", "Reverted"];
      PRIORITIES = ["High", "Medium", "Low"];
      STATUS_TONE = { Planned: "", "In progress": "accent", Completed: "accent", Monitoring: "warning", Successful: "success", Unsuccessful: "danger", Reverted: "danger" };
      TRACKED_FIELDS = ["campaignId", "dateTime", "category", "field", "previousValue", "newValue", "reason", "evidence", "expectedOutcome", "priority", "reviewDate", "actualOutcome", "status", "publishable", "clientSummary", "publishOutcome"];
    }
  });

  // js/pages/optimization-log.js
  var optimization_log_exports = {};
  async function main10({ content, session }) {
    const client = await resolveClientOrPicker(content, { pageTitle: "Optimization Log", intro: "Choose a client to record and review optimization changes.", href: "optimization-log.html" });
    if (!client) return;
    const cc = client.currency;
    content.innerHTML = workspaceHeader(client, "optimization") + `
    <div class="page-header">
      <div><h1 style="font-size:18px">Optimization log & change history</h1><p>Every change with its reason, evidence, expected outcome and review. Entries are only shown to the client when marked publishable.</p></div>
      <div class="page-actions"><button class="btn btn-primary" id="addBtn">${icon("plus")}Log a change</button></div>
    </div>
    <div class="card mb-2"><div class="filters">
      <div class="field" style="min-width:240px"><label for="q">Search</label><input class="input" id="q" placeholder="Field, reason, value\u2026"></div>
      <div class="field"><label for="fCat">Category</label><select class="select" id="fCat"><option value="">All</option>${CATEGORIES.map((c) => `<option>${c}</option>`).join("")}</select></div>
      <div class="field"><label for="fStatus">Status</label><select class="select" id="fStatus"><option value="">All</option>${STATUSES.map((c) => `<option>${c}</option>`).join("")}</select></div>
      <div class="field"><label for="fCmp">Campaign</label><select class="select" id="fCmp"><option value="">All</option>${(client.campaigns || []).map((c) => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("")}<option value="__account">Account-wide</option></select></div>
      <div class="field"><label for="fPub">Visibility</label><select class="select" id="fPub"><option value="">All</option><option value="1">Publishable to client</option><option value="0">Internal only</option></select></div>
    </div></div>
    <div id="logBody">${loadingHtml()}</div>`;
    let entries = [], metrics = [];
    async function load2() {
      [entries, metrics] = await Promise.all([store.list("optimizationLogs", client.id), store.list("dailyMetrics", client.id)]);
      render();
    }
    function render() {
      const q = $("#q").value.toLowerCase(), cat = $("#fCat").value, stt = $("#fStatus").value, cmp = $("#fCmp").value, pub = $("#fPub").value;
      const today = todayInTz(client.timezone);
      const rows = entries.filter((e) => (!cat || e.category === cat) && (!stt || e.status === stt) && (!cmp || (cmp === "__account" ? !e.campaignId : e.campaignId === cmp)) && (!pub || String(!!e.publishable ? 1 : 0) === pub) && (!q || [e.field, e.reason, e.previousValue, e.newValue, e.evidence, e.expectedOutcome, e.actualOutcome, e.category].join(" ").toLowerCase().includes(q))).sort((a, b) => (a.dateTime || "") < (b.dateTime || "") ? 1 : -1);
      $("#logBody").innerHTML = rows.length ? `<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Campaign</th><th>Category</th><th>Change</th><th>Reason</th><th>Priority</th><th>Review</th><th>Status</th><th>Client</th><th></th></tr></thead><tbody>
      ${rows.map((e) => `<tr>
        <td class="nowrap">${esc(fmtDate(e.date))}<div class="small subtle">${esc((e.dateTime || "").slice(11, 16))}</div></td>
        <td>${esc(e.campaignId ? campaignName(client, e.campaignId) : "Account-wide")}</td>
        <td>${esc(e.category)}</td>
        <td><strong>${esc(e.field)}</strong>${e.previousValue || e.newValue ? `<div class="small"><span class="subtle">${esc(e.previousValue || "\u2014")}</span> \u2192 ${esc(e.newValue || "\u2014")}</div>` : ""}</td>
        <td class="small" style="max-width:260px">${esc(e.reason)}</td>
        <td><span class="badge ${e.priority === "High" ? "badge-danger" : e.priority === "Medium" ? "badge-warning" : ""}">${esc(e.priority || "\u2014")}</span></td>
        <td class="nowrap small ${e.reviewDate && e.reviewDate < today && !["Successful", "Unsuccessful", "Reverted"].includes(e.status) ? "neg" : ""}">${esc(fmtDate(e.reviewDate))}</td>
        <td><span class="badge ${STATUS_TONE[e.status] ? "badge-" + STATUS_TONE[e.status] : ""}">${esc(e.status)}</span></td>
        <td>${e.publishable ? '<span class="badge badge-success" title="Shown in published reports">Publishable</span>' : '<span class="badge plain">Internal</span>'}</td>
        <td class="nowrap"><button class="btn btn-sm" data-impact="${esc(e.id)}" title="Before / after">${icon("chart")}</button> <button class="btn btn-sm" data-edit="${esc(e.id)}" title="Edit">${icon("edit")}</button> <button class="btn btn-sm" data-hist="${esc(e.id)}" title="History">${icon("history")}</button></td></tr>`).join("")}
      </tbody></table></div><p class="small subtle">${rows.length} of ${entries.length} entries.</p>` : emptyState({ title: entries.length ? "No entries match the filters" : "No optimization entries yet", text: "Log each change you make so results can be reviewed and reported honestly.", iconName: "log" });
      $$("[data-edit]").forEach((b) => b.addEventListener("click", () => entryForm(entries.find((x) => x.id === b.dataset.edit))));
      $$("[data-hist]").forEach((b) => b.addEventListener("click", () => historyModal(entries.find((x) => x.id === b.dataset.hist))));
      $$("[data-impact]").forEach((b) => b.addEventListener("click", () => impactModal(entries.find((x) => x.id === b.dataset.impact))));
    }
    ["q", "fCat", "fStatus", "fCmp", "fPub"].forEach((id) => $(`#${id}`).addEventListener(id === "q" ? "input" : "change", debounce(render, 120)));
    function entryForm(existing) {
      const now = /* @__PURE__ */ new Date();
      const local = new Intl.DateTimeFormat("sv-SE", { timeZone: client.timezone, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(now).replace(" ", "T");
      const e = existing || { dateTime: local, category: "Negative keywords", priority: "Medium", status: "Completed", campaignId: client.campaigns?.[0]?.id || "", publishable: false };
      const sel = (name2, opts, val) => `<select class="select" name="${name2}">${opts.map((o) => Array.isArray(o) ? `<option value="${esc(o[0])}" ${o[0] === val ? "selected" : ""}>${esc(o[1])}</option>` : `<option ${o === val ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>`;
      const ta = (name2, label, help = "") => `<div class="field"><label>${label}</label><textarea class="textarea" name="${name2}" rows="2">${esc(e[name2] || "")}</textarea>${help ? `<span class="help">${help}</span>` : ""}</div>`;
      const m = openModal({
        title: existing ? "Edit optimization entry" : "Log an optimization change",
        size: "wide",
        body: `<form id="optForm" novalidate>
        <div class="form-grid cols-3">
          <div class="field"><label>Date & time * <span class="subtle">(${esc(client.timezone)})</span></label><input class="input" type="datetime-local" name="dateTime" value="${esc((e.dateTime || "").slice(0, 16))}"></div>
          <div class="field"><label>Campaign</label>${sel("campaignId", [["", "Account-wide"], ...(client.campaigns || []).map((c) => [c.id, c.name])], e.campaignId)}</div>
          <div class="field"><label>Category *</label>${sel("category", CATEGORIES, e.category)}</div>
          <div class="field"><label>Field / setting changed *</label><input class="input" name="field" value="${esc(e.field || "")}" placeholder="e.g. Location option"></div>
          <div class="field"><label>Previous value</label><input class="input" name="previousValue" value="${esc(e.previousValue || "")}"></div>
          <div class="field"><label>New value</label><input class="input" name="newValue" value="${esc(e.newValue || "")}"></div>
        </div>
        <div class="form-grid mt-2">
          ${ta("reason", "Reason for the change *")}
          ${ta("evidence", "Evidence / observation", "Data that supports the change, e.g. search terms report figures.")}
          ${ta("expectedOutcome", "Expected outcome")}
          ${ta("actualOutcome", "Actual outcome", "Fill in at review. Describe what you observed \u2014 not assumed causation.")}
        </div>
        <div class="form-grid cols-3 mt-2">
          <div class="field"><label>Priority</label>${sel("priority", PRIORITIES, e.priority)}</div>
          <div class="field"><label>Review date</label><input class="input" type="date" name="reviewDate" value="${esc(e.reviewDate || "")}"></div>
          <div class="field"><label>Status *</label>${sel("status", STATUSES, e.status)}</div>
        </div>
        <fieldset class="mt-2"><legend>Client visibility</legend>
          <label class="check mb-1"><input type="checkbox" name="publishable" ${e.publishable ? "checked" : ""}> Publishable \u2014 include in client reports</label><br>
          <label class="check mb-1"><input type="checkbox" name="publishOutcome" ${e.publishOutcome ? "checked" : ""}> Also show the actual outcome to the client</label>
          <div class="field mt-1"><label>Client-facing summary (plain language)</label><textarea class="textarea" name="clientSummary" rows="2" placeholder="e.g. Added 136 negative keywords to stop ads showing for job-seeker searches.">${esc(e.clientSummary || "")}</textarea><span class="help">Only this summary (not your reason or evidence) appears in reports.</span></div>
        </fieldset>
        <div id="optErr" class="alert alert-danger hidden mt-2"></div></form>`,
        footer: `${existing ? `<button class="btn btn-danger" id="delOpt" style="margin-right:auto">${icon("trash")}Delete</button>` : ""}<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="saveOpt">${existing ? "Save changes" : "Add entry"}</button>`
      });
      const fm = $("#optForm", m.el);
      $("#saveOpt", m.el).addEventListener("click", (ev) => withLoading(ev.currentTarget, async () => {
        const v = {};
        ["dateTime", "campaignId", "category", "field", "previousValue", "newValue", "reason", "evidence", "expectedOutcome", "actualOutcome", "priority", "reviewDate", "status", "clientSummary"].forEach((k) => v[k] = fm.elements[k].value.trim());
        v.publishable = fm.elements.publishable.checked;
        v.publishOutcome = fm.elements.publishOutcome.checked;
        v.date = v.dateTime.slice(0, 10);
        const errs = validateEntry(v);
        if (errs.length) {
          const b = $("#optErr", m.el);
          b.innerHTML = `<div>${errs.map(esc).join("<br>")}</div>`;
          b.classList.remove("hidden");
          return;
        }
        const rec = withHistory(existing, v, session.email);
        await store.put("optimizationLogs", client.id, rec, existing ? "optimization.update" : "optimization.create");
        toast(existing ? "Entry updated \u2014 previous version kept in history." : "Optimization logged.", "success");
        m.close();
        load2();
      }));
      $("#delOpt", m.el)?.addEventListener("click", async () => {
        if (!await confirmDialog({ title: "Delete this entry?", message: "Deleting removes the entry and its history. Consider setting the status to \u201CReverted\u201D instead to keep a record. Published reports keep their snapshot.", confirmText: "Delete permanently", danger: true })) return;
        await store.remove("optimizationLogs", client.id, existing.id, "optimization.delete");
        toast("Entry deleted.", "success");
        m.close();
        load2();
      });
    }
    function historyModal(e) {
      const h = (e.history || []).slice().reverse();
      openModal({
        title: "Change history",
        size: "wide",
        body: `<p><strong>${esc(e.category)}: ${esc(e.field)}</strong></p>${h.length ? h.map((x) => `<div class="history-entry"><div class="when">${esc(fmtDateTime(x.at))} \xB7 ${esc(x.by || "")} \xB7 ${esc(x.action)}</div>
        ${x.changes ? `<ul class="small mb-0">${Object.entries(x.changes).map(([k, [a, b]]) => `<li><strong>${esc(k)}</strong>: <span class="subtle">${esc(a ?? "\u2014")}</span> \u2192 ${esc(b ?? "\u2014")}</li>`).join("")}</ul>` : ""}</div>`).join("") : `<p class="muted">No recorded edits.</p>`}`,
        footer: `<button class="btn" data-close>Close</button>`
      });
    }
    function impactModal(e) {
      let days = 14;
      const m = openModal({ title: "Before / after review", size: "xwide", body: `<div id="impact"></div>`, footer: `<button class="btn" data-close>Close</button>` });
      const draw = () => {
        const w = impactWindows(e, metrics, entries, days, todayInTz(client.timezone));
        $("#impact", m.el).innerHTML = `
        <div class="flex justify-between items-center wrap gap-1 mb-2"><div><strong>${esc(e.category)}: ${esc(e.field)}</strong> on ${esc(fmtDate(e.date))} \xB7 ${esc(e.campaignId ? campaignName(client, e.campaignId) : "Account-wide")}</div>
        <label class="small">Window <select class="select" id="win" style="width:auto;height:30px">${[7, 14, 30].map((d) => `<option ${d === days ? "selected" : ""}>${d}</option>`).join("")}</select> days</label></div>
        <p class="small">Before: <strong>${esc(fmtRange(w.before.from, w.before.to))}</strong> \xB7 After: <strong>${w.afterDays ? esc(fmtRange(w.after.from, w.after.to)) : "no data yet"}</strong> \xB7 The change day is excluded. Volume metrics are per-day averages.</p>
        ${w.warnings.map((x) => `<div class="alert alert-warning">${icon("alert")}<div>${esc(x)}</div></div>`).join("")}
        <div class="table-wrap mb-2"><table class="table"><thead><tr><th>Metric (${e.campaignId ? "this campaign" : "account"})</th><th class="num">Before</th><th class="num">After</th><th class="num">Change</th><th class="num">Account before</th><th class="num">Account after</th></tr></thead><tbody>
        ${w.metrics.map((x) => `<tr><td>${esc(METRICS[x.key].label)}${["spend", "clicks", "conversions", "qualifiedLeads"].includes(x.key) ? " / day" : ""}</td><td class="num">${esc(fmtMetric(x.key, e.campaignId ? x.before : x.beforeAll, cc))}</td><td class="num">${esc(fmtMetric(x.key, e.campaignId ? x.after : x.afterAll, cc))}</td><td class="num ${changeTone(x.key, x.change)}">${esc(fmtChange(x.key, x.change, cc))}</td><td class="num subtle">${esc(fmtMetric(x.key, x.beforeAll, cc))}</td><td class="num subtle">${esc(fmtMetric(x.key, x.afterAll, cc))}</td></tr>`).join("")}
        </tbody></table></div>
        <h3>Other changes in these windows (possible confounding factors)</h3>
        ${w.confounders.length ? `<ul>${w.confounders.map((c) => `<li>${esc(fmtDate(c.date))} \u2014 ${esc(c.category)}: ${esc(c.field)} (${esc(c.campaignId ? campaignName(client, c.campaignId) : "account-wide")})</li>`).join("")}</ul>` : `<p class="muted small">No other logged changes in this period. Unlogged factors (seasonality, competitors, Google algorithm changes) can still apply.</p>`}
        <div class="alert alert-info mt-2">${icon("info")}<div>A difference between windows shows <strong>correlation, not proof</strong> that this change caused it. Record your conclusion in \u201CActual outcome\u201D.</div></div>`;
        $("#win", m.el).addEventListener("change", (ev) => {
          days = Number(ev.target.value);
          draw();
        });
      };
      draw();
    }
    $("#addBtn").addEventListener("click", () => entryForm(null));
    await load2().catch((er) => $("#logBody").innerHTML = `<div class="alert alert-danger">${esc(er.message)}</div>`);
    if (qs("new")) entryForm(null);
  }
  var init_optimization_log2 = __esm({
    "js/pages/optimization-log.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_optimization_log();
      (async () => {
        const ctx2 = await initAdminPage({ page: "optimization", title: "Optimization Log" });
        if (ctx2) main10(ctx2);
      })();
    }
  });

  // js/pages/report-editor.js
  var report_editor_exports = {};
  async function main11({ content, settings, session }) {
    const client = await store.getClient(qs("client") || "");
    let report = client ? await store.get("reports", client.id, qs("report") || "") : null;
    if (!client || !report) {
      content.innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>Report not found. <a href="reports.html">Back to reports</a></div></div>`;
      return;
    }
    const status2 = saveStatusEl();
    let data = null, dirty = false;
    content.innerHTML = workspaceHeader(client, "reports") + `
    <div class="page-header no-print">
      <div><h1 style="font-size:18px">${esc(REPORT_TYPES[report.type])}</h1><p id="pubState"></p></div>
      <div class="page-actions" id="toolbar">
        <span id="saveSlot"></span>
        <button class="btn" id="saveBtn">Save draft</button>
        <button class="btn" id="previewBtn" title="Open a full-size preview">${icon("eye")}Preview</button>
        <button class="btn" id="pdfBtn">${icon("download")}Download PDF</button>
        <button class="btn" id="printBtn">${icon("printer")}Print</button>
        <button class="btn" id="htmlBtn">${icon("file")}Export HTML</button>
        <button class="btn btn-danger hidden" id="unpubBtn">Unpublish</button>
        <button class="btn btn-primary" id="pubBtn">Publish to client</button>
      </div>
    </div>
    <div class="editor-layout">
      <div class="card editor-panel no-print">
        <form id="rf" novalidate>
          <div class="field mb-2"><label for="title">Report title</label><input class="input" id="title" name="title" value="${esc(report.title)}"></div>
          <div class="form-grid mb-2">
            <div class="field"><label for="periodStart">Period start</label><input class="input" type="date" id="periodStart" name="periodStart" value="${esc(report.periodStart)}"></div>
            <div class="field"><label for="periodEnd">Period end</label><input class="input" type="date" id="periodEnd" name="periodEnd" value="${esc(report.periodEnd)}"></div>
            <div class="field full"><label for="comparison">Comparison</label><select class="select" id="comparison" name="comparison">${Object.entries(COMPARISONS).map(([k, l]) => `<option value="${k}" ${k === report.comparison ? "selected" : ""}>${l}</option>`).join("")}</select></div>
          </div>
          <fieldset><legend>Campaigns</legend>
            <label class="check small mb-1"><input type="checkbox" id="allCmp" ${!report.campaignIds?.length ? "checked" : ""}> All campaigns</label>
            <div id="cmpList">${(client.campaigns || []).map((c) => `<div><label class="check small"><input type="checkbox" name="cmp" value="${esc(c.id)}" ${!report.campaignIds?.length || report.campaignIds.includes(c.id) ? "checked" : ""}> ${esc(c.name)}</label></div>`).join("")}</div>
          </fieldset>
          <fieldset><legend>Visible sections</legend><div class="section-toggles" style="grid-template-columns:1fr">${Object.entries(SECTION_LABELS).map(([k, l]) => `<label class="check small"><input type="checkbox" name="sec_${k}" ${report.sections?.[k] ? "checked" : ""}> ${esc(l)}</label>`).join("")}</div></fieldset>
          <fieldset><legend>Narrative</legend>
            <button class="btn btn-sm mb-2" type="button" id="draftText">${icon("refresh")}Generate draft text from data</button>
            ${[["executiveSummary", "Executive summary", 4], ["keyFindings", "Key findings", 4], ["challenges", "Challenges & limitations", 3], ["actionPlan", "Next-period action plan", 4], ["recommendations", "Final recommendations", 3]].map(([k, l, r]) => `<div class="field mb-2"><label for="${k}">${l}</label><textarea class="textarea" id="${k}" name="${k}" rows="${r}">${esc(report[k] || "")}</textarea></div>`).join("")}
            <p class="small subtle">Start a line with "- " for bullet points. Automatic limitations (tracking issues, missing days) are appended to Challenges.</p>
          </fieldset>
          <fieldset><legend>Branding & formatting</legend>
            <div class="field mb-1"><label>Brand name</label><input class="input" name="brandName" value="${esc(report.branding?.brandName || "")}"></div>
            <div class="field mb-1"><label>Header text</label><input class="input" name="headerText" value="${esc(report.branding?.headerText || "")}"></div>
            <div class="field mb-1"><label>Footer text</label><textarea class="textarea" name="footerText" rows="2">${esc(report.branding?.footerText || "")}</textarea></div>
            <label class="check small"><input type="checkbox" name="showClientLogo" ${report.branding?.showClientLogo !== false ? "checked" : ""}> Show client logo</label>
            <p class="small subtle mt-1 mb-0">Currency: ${esc(client.currency)} \xB7 Date format: ${esc(settings.dateFormat)} (change in Settings).</p>
          </fieldset>
          <fieldset><legend>Publication</legend>
            <label class="check small"><input type="checkbox" name="allowPdf" ${report.allowPdf !== false ? "checked" : ""}> Client may download this report as PDF</label>
          </fieldset>
        </form>
      </div>
      <div><div class="report-stage" id="stage">${loadingHtml("Building preview\u2026")}</div></div>
    </div>`;
    $("#saveSlot").appendChild(status2.el);
    const form = $("#rf");
    function readForm() {
      const f2 = form.elements;
      const sections = {};
      Object.keys(SECTION_LABELS).forEach((k) => sections[k] = f2[`sec_${k}`].checked);
      const all = $("#allCmp").checked;
      const ids = $$('input[name="cmp"]:checked').map((i) => i.value);
      return {
        ...report,
        title: f2.title.value.trim() || REPORT_TYPES[report.type],
        periodStart: f2.periodStart.value,
        periodEnd: f2.periodEnd.value,
        comparison: f2.comparison.value,
        campaignIds: all || ids.length === (client.campaigns || []).length ? [] : ids,
        sections,
        executiveSummary: f2.executiveSummary.value,
        keyFindings: f2.keyFindings.value,
        challenges: f2.challenges.value,
        actionPlan: f2.actionPlan.value,
        recommendations: f2.recommendations.value,
        branding: { brandName: f2.brandName.value.trim(), headerText: f2.headerText.value.trim(), footerText: f2.footerText.value.trim(), showClientLogo: f2.showClientLogo.checked },
        allowPdf: f2.allowPdf.checked
      };
    }
    function validate(r) {
      if (!isValidDate(r.periodStart) || !isValidDate(r.periodEnd)) return "Choose a valid reporting period.";
      if (r.periodStart > r.periodEnd) return "Period start must be on or before period end.";
      if (!(client.campaigns || []).length) return "This client has no campaigns.";
      if (!$("#allCmp").checked && !$$('input[name="cmp"]:checked').length) return "Select at least one campaign.";
      return null;
    }
    function pubState() {
      const ps = $("#pubState");
      if (report.status === "published") ps.innerHTML = `<span class="badge badge-success">Published v${report.versions}</span> on ${esc(fmtDateTime(report.publishedAt))}. ${dirty || report.savedAfterPublish ? "<strong>The draft has changes that are not published.</strong> Republish to update what the client sees." : "The client sees this version."}`;
      else if (report.status === "unpublished") ps.innerHTML = `<span class="badge badge-warning">Unpublished</span> The client cannot see this report.`;
      else ps.innerHTML = `<span class="badge">Draft</span> Not visible to the client.`;
      $("#unpubBtn").classList.toggle("hidden", report.status !== "published");
      $("#pubBtn").textContent = report.status === "published" ? "Republish (new version)" : "Publish to client";
    }
    const refreshPreview = debounce(async () => {
      const r = readForm();
      const err = validate(r);
      if (err) {
        $("#stage").innerHTML = `<div class="alert alert-warning">${icon("alert")}<div>${esc(err)}</div></div>`;
        data = null;
        return;
      }
      try {
        data = await buildReportData(r, client, settings);
        $("#stage").innerHTML = renderReportHTML(data);
      } catch (e) {
        console.error(e);
        data = null;
        $("#stage").innerHTML = `<div class="alert alert-danger">${icon("alert")}<div>Preview failed: ${esc(e.message)}</div></div>`;
      }
    }, 350);
    form.addEventListener("input", () => {
      dirty = true;
      status2.dirty();
      pubState();
      refreshPreview();
    });
    form.addEventListener("change", (e) => {
      if (e.target.id === "allCmp") $$('input[name="cmp"]').forEach((i) => i.checked = e.target.checked);
      else if (e.target.name === "cmp") $("#allCmp").checked = $$('input[name="cmp"]').every((i) => i.checked);
    });
    async function save() {
      const r = readForm();
      const err = validate(r);
      if (err) throw new Error(err);
      status2.saving();
      try {
        report = await store.put("reports", client.id, { ...r, savedAfterPublish: r.status === "published" }, "report.save");
        dirty = false;
        status2.saved("Draft saved");
        pubState();
      } catch (e) {
        status2.error("Not saved");
        throw e;
      }
    }
    $("#saveBtn").addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
      await save();
      toast("Draft saved.", "success");
    }));
    $("#draftText").addEventListener("click", async (e) => {
      if (!data) return toast("Fix the report settings first.", "warning");
      const hasText = ["executiveSummary", "keyFindings", "actionPlan"].some((k) => form.elements[k].value.trim());
      if (hasText && !await confirmDialog({ title: "Replace existing text?", message: "The executive summary, key findings and (if empty) action plan will be replaced by text generated from the numbers. Review it before publishing.", confirmText: "Replace" })) return;
      const d = draftNarrative(data);
      form.elements.executiveSummary.value = d.executiveSummary || "";
      form.elements.keyFindings.value = d.keyFindings || "";
      if (d.actionPlan && !form.elements.actionPlan.value.trim()) form.elements.actionPlan.value = d.actionPlan;
      form.dispatchEvent(new Event("input"));
      toast("Draft text generated from the data. Please review and edit.", "info");
    });
    $("#previewBtn").addEventListener("click", () => {
      if (!data) return toast("The preview is not ready.", "warning");
      openModal({ title: "Report preview", size: "xwide", body: `<div class="report-stage">${renderReportHTML(data)}</div>`, footer: `<button class="btn" data-close>Close</button>` });
    });
    $("#pdfBtn").addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
      if (!data) throw new Error("The preview is not ready.");
      const res = await downloadReportPdf(data, reportFileName(data, settings.report.pdfFileNamePattern));
      toast(`PDF downloaded \u2014 ${res.pageCount} page(s), ${Math.round(res.size / 1024)} KB.`, "success");
    }, { errorPrefix: "PDF was not created: " }));
    $("#printBtn").addEventListener("click", () => {
      if (!data) return toast("The preview is not ready.", "warning");
      toast("In the print dialog choose \u201CSave as PDF\u201D for a browser-generated copy. Use A4 and enable \u201CBackground graphics\u201D.", "info", 6e3);
      setTimeout(() => window.print(), 300);
    });
    $("#htmlBtn").addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
      if (!data) throw new Error("The preview is not ready.");
      downloadBlob(await standaloneHtml(data), `${reportFileName(data, settings.report.pdfFileNamePattern)}.html`, "text/html");
      toast("HTML report exported.", "success");
    }));
    $("#pubBtn").addEventListener("click", async (e) => {
      const r = readForm();
      const err = validate(r);
      if (err) return toast(err, "error");
      const profile = await store.getPortalProfile(client.id);
      const details = `<ul class="small"><li>A frozen snapshot of the current numbers and text will be published.</li><li>Later edits to metrics, notes or this draft will not change it.</li>
      ${r.sections.aiInsights ? "<li>The latest <strong>approved</strong> AI client explanation will be included (internal analysis never is).</li>" : ""}
      <li>Only optimization entries marked <em>publishable</em> are included, using their client summary.</li>
      ${!profile?.accessEnabled ? "<li><strong>Portal access is currently disabled</strong> for this client \u2014 enable it in Client Portal Settings for them to see the report.</li>" : ""}</ul>`;
      if (!await confirmDialog({ title: report.status === "published" ? "Publish a new version?" : "Publish to client?", message: `${r.title} \u2014 ${fmtRange(r.periodStart, r.periodEnd)}`, details, confirmText: "Publish" })) return;
      await withLoading(e.target, async () => {
        await save();
        const res = await publishReport(report, client, settings, session);
        report = res.report;
        pubState();
        toast(`Published version ${res.snapshot.version}.`, "success");
      }, { errorPrefix: "Not published: " });
    });
    $("#unpubBtn").addEventListener("click", async (e) => {
      if (!await confirmDialog({ title: "Unpublish this report?", message: "The client will no longer see it. The snapshot is kept.", confirmText: "Unpublish", danger: true })) return;
      await withLoading(e.target, async () => {
        report = await unpublishReport(report, client.id);
        pubState();
        toast("Report unpublished.", "success");
      });
    });
    window.addEventListener("beforeunload", (e) => {
      if (dirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
    pubState();
    refreshPreview();
  }
  var init_report_editor = __esm({
    "js/pages/report-editor.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_reports2();
      init_pdf_export();
      (async () => {
        const ctx2 = await initAdminPage({ page: "reports", title: "Report Editor" });
        if (ctx2) main11(ctx2);
      })();
    }
  });

  // js/pages/reports.js
  var reports_exports2 = {};
  async function main12({ content, settings }) {
    const clients = await store.listClients();
    const clientId = qs("client");
    const client = clients.find((c) => c.id === clientId);
    content.innerHTML = (client ? workspaceHeader(client, "reports") : "") + `
    <div class="page-header">
      <div><h1 style="${client ? "font-size:18px" : ""}">Reports</h1><p>Build client-ready reports. Publishing freezes a snapshot \u2014 later data edits never change a published report.</p></div>
      <div class="page-actions"><button class="btn btn-primary" id="newBtn">${icon("plus")}New report</button></div>
    </div>
    ${client ? "" : `<div class="filters mb-2"><div class="field"><label for="cF">Client</label><select class="select" id="cF"><option value="">All clients</option>${clients.map((c) => `<option value="${esc(c.id)}">${esc(c.businessName)}</option>`).join("")}</select></div></div>`}
    <div id="list">${loadingHtml()}</div>`;
    async function render() {
      const cid = client ? client.id : $("#cF")?.value || "";
      const reports = (cid ? await store.list("reports", cid) : await store.listAcross("reports")).sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1);
      const cName = (id) => clients.find((c) => c.id === id)?.businessName || id;
      $("#list").innerHTML = reports.length ? `<div class="table-wrap"><table class="table"><thead><tr>${client ? "" : "<th>Client</th>"}<th>Title</th><th>Type</th><th>Period</th><th>Status</th><th>Last updated</th><th></th></tr></thead><tbody>
      ${reports.map((r) => `<tr>${client ? "" : `<td>${esc(cName(r.clientId))}</td>`}
        <td><a href="report-editor.html?client=${esc(r.clientId)}&report=${esc(r.id)}">${esc(r.title)}</a></td>
        <td class="small">${esc(REPORT_TYPES[r.type] || r.type)}</td>
        <td class="nowrap small">${esc(fmtRange(r.periodStart, r.periodEnd))}</td>
        <td>${r.status === "published" ? `<span class="badge badge-success">Published v${r.versions}</span>` : r.status === "unpublished" ? '<span class="badge badge-warning">Unpublished</span>' : '<span class="badge">Draft</span>'}
          ${r.status === "published" && r.savedAfterPublish ? '<div class="small subtle">Draft has unpublished edits</div>' : ""}</td>
        <td class="small">${esc(fmtDateTime(r.updatedAt))}</td>
        <td class="nowrap text-right">
          <a class="btn btn-sm" href="report-editor.html?client=${esc(r.clientId)}&report=${esc(r.id)}">${icon("edit")}Edit</a>
          ${r.status === "published" ? `<button class="btn btn-sm" data-pdf="${esc(r.id)}" data-client="${esc(r.clientId)}" title="Download the published PDF">${icon("download")}PDF</button><button class="btn btn-sm" data-unpub="${esc(r.id)}" data-client="${esc(r.clientId)}">Unpublish</button>` : ""}
          ${r.status !== "published" ? `<button class="btn btn-sm btn-danger" data-del="${esc(r.id)}" data-client="${esc(r.clientId)}" aria-label="Delete">${icon("trash")}</button>` : ""}
        </td></tr>`).join("")}</tbody></table></div>` : emptyState({ title: "No reports yet", text: "Create a weekly, monthly, audit or custom report.", iconName: "report" });
      $$("[data-pdf]").forEach((b) => b.addEventListener("click", () => withLoading(b, async () => {
        const r = reports.find((x) => x.id === b.dataset.pdf);
        const snap = await store.get("reportSnapshots", b.dataset.client, r.publishedSnapshotId);
        if (!snap) throw new Error("Published snapshot not found.");
        const res = await downloadReportPdf(snap.data, reportFileName(snap.data, settings.report.pdfFileNamePattern));
        toast(`PDF downloaded (${res.pageCount} pages).`, "success");
      }, { errorPrefix: "PDF not created: " })));
      $$("[data-unpub]").forEach((b) => b.addEventListener("click", async () => {
        if (!await confirmDialog({ title: "Unpublish this report?", message: "The client will no longer see it in the portal. The snapshot is kept and you can publish again.", confirmText: "Unpublish", danger: true })) return;
        await withLoading(b, async () => {
          const r = reports.find((x) => x.id === b.dataset.unpub);
          await unpublishReport(r, b.dataset.client);
          toast("Report unpublished.", "success");
          render();
        });
      }));
      $$("[data-del]").forEach((b) => b.addEventListener("click", async () => {
        if (!await confirmDialog({ title: "Delete this draft?", message: "The draft report will be removed. Earlier published snapshots (if any) are kept for history.", confirmText: "Delete", danger: true })) return;
        await withLoading(b, async () => {
          await store.remove("reports", b.dataset.client, b.dataset.del, "report.delete");
          toast("Draft deleted.", "success");
          render();
        });
      }));
    }
    $("#cF")?.addEventListener("change", render);
    $("#newBtn").addEventListener("click", () => {
      const active = clients.filter((c) => c.status !== "archived");
      const m = openModal({
        title: "New report",
        body: `<div class="field mb-2"><label for="nrClient">Client</label><select class="select" id="nrClient">${active.map((c) => `<option value="${esc(c.id)}" ${c.id === clientId ? "selected" : ""}>${esc(c.businessName)}</option>`).join("")}</select></div>
        <div class="field"><label for="nrType">Report type</label><select class="select" id="nrType">${Object.entries(REPORT_TYPES).map(([k, l]) => `<option value="${k}" ${k === settings.defaultReportPeriod ? "selected" : ""}>${l}</option>`).join("")}</select></div>`,
        footer: `<button class="btn" data-close>Cancel</button><button class="btn btn-primary" id="nrCreate">Create draft</button>`
      });
      $("#nrCreate", m.el).addEventListener("click", (e) => withLoading(e.currentTarget, async () => {
        const c = clients.find((x) => x.id === $("#nrClient", m.el).value);
        if (!c) throw new Error("Choose a client.");
        const type = $("#nrType", m.el).value;
        const baseline = (await store.list("baselines", c.id)).find((b) => b.isOriginal);
        if (type === "initial-audit" && !baseline) throw new Error("This client has no baseline audit yet. Record one first.");
        const r = await store.put("reports", c.id, newReport(c, type, settings, baseline), "report.create");
        location.href = `report-editor.html?client=${encodeURIComponent(c.id)}&report=${encodeURIComponent(r.id)}`;
      }));
    });
    render().catch((e) => $("#list").innerHTML = `<div class="alert alert-danger">${esc(e.message)}</div>`);
  }
  var init_reports3 = __esm({
    "js/pages/reports.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_reports2();
      init_pdf_export();
      (async () => {
        const ctx2 = await initAdminPage({ page: "reports", title: "Reports" });
        if (ctx2) main12(ctx2);
      })();
    }
  });

  // js/pages/settings.js
  var settings_exports = {};
  async function main13({ content, settings, session }) {
    let tab = TABS.some(([k]) => k === qs("tab")) ? qs("tab") : "general";
    content.innerHTML = `
    <div class="page-header"><div><h1>Settings</h1><p>Application, reporting, scoring and access settings. Secret keys are never entered here \u2014 they live in server-side secrets.</p></div></div>
    <nav class="tabs" id="tabs">${TABS.map(([k, l]) => `<button data-tab="${k}">${l}</button>`).join("")}</nav>
    <div id="tabBody"></div>`;
    $$("#tabs [data-tab]").forEach((b) => b.addEventListener("click", () => {
      tab = b.dataset.tab;
      setQs({ tab });
      render();
    }));
    const s = clone(settings);
    async function persist2(btn, msg = "Settings saved.") {
      await withLoading(btn, async () => {
        await store.saveSettings(s);
        toast(msg, "success");
      });
    }
    function render() {
      $$("#tabs [data-tab]").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
      const body = $("#tabBody");
      ({ general, reports, scoring, integrations, access, data })[tab](body);
    }
    function general(body) {
      body.innerHTML = `<div class="card" style="max-width:760px"><form id="gf" class="form-grid">
      <div class="field full"><label>Application name</label><input class="input" name="appName" value="${esc(s.appName)}"></div>
      <div class="field"><label>Logo URL</label><input class="input" name="logo" value="${esc(s.logo)}" placeholder="logo.svg"><span class="help">Leave blank for the default. Or replace logo.svg.</span></div>
      <div class="field"><label>Theme</label><select class="select" name="theme">${[["light", "Light"], ["dark", "Dark"], ["system", "Match system"]].map(([k, l]) => `<option value="${k}" ${k === s.theme ? "selected" : ""}>${l}</option>`).join("")}</select></div>
      <div class="field"><label>Default date range</label><select class="select" name="defaultRange">${RANGE_OPTIONS.filter(([k]) => k !== "custom").map(([k, l]) => `<option value="${k}" ${k === s.defaultRange ? "selected" : ""}>${l}</option>`).join("")}</select></div>
      <div class="field"><label>Default report type</label><select class="select" name="defaultReportPeriod">${Object.entries(REPORT_TYPES).map(([k, l]) => `<option value="${k}" ${k === s.defaultReportPeriod ? "selected" : ""}>${l}</option>`).join("")}</select></div>
      <div class="field"><label>Date format</label><select class="select" name="dateFormat">${["D MMM YYYY", "YYYY-MM-DD", "DD/MM/YYYY", "MM/DD/YYYY"].map((f2) => `<option ${f2 === s.dateFormat ? "selected" : ""}>${f2}</option>`).join("")}</select></div>
      <div class="field"><label>Currency display</label><select class="select" name="currencyDisplay"><option value="symbol" ${s.currencyDisplay === "symbol" ? "selected" : ""}>Symbol ($1,234)</option><option value="code" ${s.currencyDisplay === "code" ? "selected" : ""}>Code (USD 1,234)</option></select><span class="help">Each client keeps its own currency; amounts are never converted.</span></div>
      <div class="full"><button class="btn btn-primary" type="submit">Save</button></div></form></div>`;
      $("#gf").addEventListener("submit", async (e) => {
        e.preventDefault();
        const f2 = e.target.elements;
        ["appName", "logo", "theme", "defaultRange", "defaultReportPeriod", "dateFormat", "currencyDisplay"].forEach((k) => s[k] = f2[k].value.trim());
        await persist2(e.submitter);
        localStorage.setItem("mppc.theme", s.theme);
        applyTheme(s.theme);
      });
    }
    function reports(body) {
      const r = s.report;
      body.innerHTML = `<div class="card" style="max-width:860px"><form id="rf">
      <div class="form-grid mb-2">
        <div class="field"><label>Report brand name</label><input class="input" name="brandName" value="${esc(r.brandName)}"></div>
        <div class="field"><label>Header text</label><input class="input" name="headerText" value="${esc(r.headerText)}"></div>
        <div class="field full"><label>Footer text</label><textarea class="textarea" name="footerText" rows="2">${esc(r.footerText)}</textarea></div>
        <div class="field"><label>Default comparison</label><select class="select" name="defaultComparison">${[["previous", "Previous period"], ["baseline", "Original baseline"], ["both", "Both"], ["none", "None"]].map(([k, l]) => `<option value="${k}" ${k === r.defaultComparison ? "selected" : ""}>${l}</option>`).join("")}</select></div>
        <div class="field"><label>PDF file name pattern</label><input class="input" name="pdfFileNamePattern" value="${esc(r.pdfFileNamePattern)}"><span class="help">Tokens: {client} {type} {start} {end}. PDFs are A4 with header, footer and page numbers.</span></div>
      </div>
      <h3>Default report sections</h3>
      <div class="section-toggles mb-2">${Object.entries(SECTION_LABELS).map(([k, l]) => `<label class="check small"><input type="checkbox" name="sec_${k}" ${r.defaultSections[k] ? "checked" : ""}> ${esc(l)}</label>`).join("")}</div>
      <button class="btn btn-primary" type="submit">Save</button></form></div>`;
      $("#rf").addEventListener("submit", async (e) => {
        e.preventDefault();
        const f2 = e.target.elements;
        ["brandName", "headerText", "footerText", "defaultComparison", "pdfFileNamePattern"].forEach((k) => r[k] = f2[k].value.trim());
        Object.keys(SECTION_LABELS).forEach((k) => r.defaultSections[k] = f2[`sec_${k}`].checked);
        await persist2(e.submitter);
      });
    }
    function scoring(body) {
      const c = s.scoring;
      body.innerHTML = `<div class="card" style="max-width:860px"><form id="sf">
      <div class="alert alert-info">${icon("info")}<div>The performance score is calculated deterministically in <code>js/scoring.js</code> \u2014 never by AI. It is an internal score, not Google's Optimization Score. Thresholds are your own configurable defaults, not universal benchmarks.</div></div>
      <h3>Factor weights (must total 100%)</h3>
      <div class="form-grid mb-1">${Object.entries(FACTOR_LABELS).map(([k, l]) => `<div class="field"><label>${esc(l)}</label><input class="input" type="number" min="0" max="100" step="1" name="w_${k}" value="${c.weights[k]}"></div>`).join("")}
      <div class="field"><label>Total</label><input class="input" id="wTotal" readonly></div></div>
      <h3 class="mt-2">Minimum data thresholds</h3>
      <div class="form-grid cols-3 mb-2">
        <div class="field"><label>Min. clicks (30-day window)</label><input class="input" type="number" min="0" name="minClicks" value="${c.minClicks}"></div>
        <div class="field"><label>Min. conversions (30-day window)</label><input class="input" type="number" min="0" step="0.1" name="minConversions" value="${c.minConversions}"></div>
        <div class="field"><label>Min. days with data</label><input class="input" type="number" min="1" name="minDays" value="${c.minDays}"></div>
        <div class="field"><label>Daily score: min. clicks</label><input class="input" type="number" min="0" name="dailyMinClicks" value="${c.dailyMinClicks}"></div>
        <div class="field"><label>Daily score: min. conversions</label><input class="input" type="number" min="0" step="0.1" name="dailyMinConversions" value="${c.dailyMinConversions}"></div>
        <div class="field"><label>Conversion lag warning (days)</label><input class="input" type="number" min="0" name="lagDays" value="${c.lagDays}"></div>
        <div class="field"><label>Reliable tracking threshold (%)</label><input class="input" type="number" min="0" max="100" name="trackingReliableThreshold" value="${c.trackingReliableThreshold}"></div>
        <div class="field"><label>Score cap when tracking unreliable</label><input class="input" type="number" min="0" max="100" name="unreliableTrackingCap" value="${c.unreliableTrackingCap}"></div>
      </div>
      <p class="small subtle">Shorter windows scale the 30-day minimums proportionally but never below the daily minimums.</p>
      <h3>Score labels</h3>
      <div class="form-grid cols-4 mb-2">${c.labels.map((l, i) => `<div class="field"><label>Label ${i + 1}</label><input class="input" name="lab_${i}" value="${esc(l.label)}"></div><div class="field"><label>From score</label><input class="input" type="number" min="0" max="100" name="min_${i}" value="${l.min}"></div>`).join("")}</div>
      <p class="small subtle">Client-specific targets (CPA, conversion rate, monthly leads) are set on each client's settings tab.</p>
      <div id="wErr" class="alert alert-danger hidden"></div>
      <div class="flex gap-1"><button class="btn btn-primary" type="submit">Save</button><button class="btn" type="button" id="resetW">Restore defaults</button></div></form></div>`;
      const f2 = $("#sf").elements;
      const total = () => {
        const w = {};
        Object.keys(FACTOR_LABELS).forEach((k) => w[k] = Number(f2[`w_${k}`].value) || 0);
        const v = validateWeights(w);
        $("#wTotal").value = `${v.total}%`;
        $("#wTotal").classList.toggle("invalid", !v.valid);
        return { w, v };
      };
      total();
      $("#sf").addEventListener("input", total);
      $("#resetW").addEventListener("click", () => {
        s.scoring = clone(DEFAULT_SETTINGS.scoring);
        scoring(body);
      });
      $("#sf").addEventListener("submit", async (e) => {
        e.preventDefault();
        const { w, v } = total();
        const err = $("#wErr");
        const errs = [];
        if (!v.valid) errs.push(`Weights must total exactly 100% (currently ${v.total}%).`);
        const labels = c.labels.map((_, i) => ({ label: f2[`lab_${i}`].value.trim(), min: Number(f2[`min_${i}`].value) }));
        if (labels.some((l) => !l.label || !(l.min >= 0 && l.min <= 100))) errs.push("Each label needs a name and a threshold between 0 and 100.");
        if (!labels.some((l) => l.min === 0)) errs.push("One label must start at 0.");
        if (errs.length) {
          err.innerHTML = `<div>${errs.map(esc).join("<br>")}</div>`;
          err.classList.remove("hidden");
          return;
        }
        err.classList.add("hidden");
        c.weights = w;
        ["minClicks", "minConversions", "minDays", "dailyMinClicks", "dailyMinConversions", "lagDays", "trackingReliableThreshold", "unreliableTrackingCap"].forEach((k) => c[k] = Number(f2[k].value));
        c.labels = labels.sort((a, b) => b.min - a.min);
        await persist2(e.submitter, "Scoring settings saved.");
      });
    }
    function integrations(body) {
      const st2 = getStatus();
      const aiCfg = getAiLocalConfig();
      const row = (name2, state, tone, detail, action = "") => `<tr><td><strong>${esc(name2)}</strong></td><td><span class="badge badge-${tone}">${esc(state)}</span></td><td class="small">${detail}</td><td class="text-right">${action}</td></tr>`;
      body.innerHTML = `<div class="card mb-2"><div class="table-wrap"><table class="table"><thead><tr><th>Integration</th><th>Status</th><th>Details</th><th></th></tr></thead><tbody>
      ${row("Firebase (Auth + Firestore)", st2.label, st2.state === "connected" ? "success" : st2.state === "local" ? "warning" : "danger", esc(st2.message || ""), `<a class="btn btn-sm" href="firebase-setup.html">Firebase Setup</a>`)}
      ${row("AI provider", s.ai.provider === "direct" ? getAiLocalConfig().apiKey ? "Enabled (direct key)" : "Key missing" : s.ai.provider === "cloud-function" ? getMode() === "firebase" ? "Enabled" : "Enabled \u2014 needs Firebase mode" : "Not configured", s.ai.provider === "direct" ? getAiLocalConfig().apiKey ? "success" : "warning" : s.ai.provider === "cloud-function" && getMode() === "firebase" ? "success" : "warning", s.ai.provider === "direct" ? "Requests go straight from this browser to the AI service. The key is stored only in this browser (never in Firestore)." : `Requests go to the <code>${esc(s.ai.functionName)}</code> Cloud Function. The key is a server secret.`)}
      ${row("Google Ads API", "Not connected", "warning", "Interface prepared in <code>functions/src/google-ads.js</code>. Requires a developer token, OAuth client and server-side refresh token. No live data is fabricated \u2014 use CSV import until connected.")}
      ${row("Firebase Storage", USE_STORAGE ? "Enabled" : "Disabled", USE_STORAGE ? "success" : "warning", USE_STORAGE ? "Client logos upload to Storage." : "Logos are stored as small images in the client record. Enable with <code>USE_STORAGE</code> in firebase-config.js.")}
      ${row("Scheduled automation", "Not active", "warning", "Daily sync, alerts and report reminders run only after deploying the scheduled Cloud Functions with a configured data source. Nothing runs in the background today.")}
    </tbody></table></div></div>
    <div class="card" style="max-width:760px"><h2>AI provider</h2><form id="af" class="form-grid">
      <div class="field full"><label>Provider</label><select class="select" name="provider">
        <option value="none" ${s.ai.provider === "none" ? "selected" : ""}>None (rule-based drafts only)</option>
        <option value="direct" ${s.ai.provider === "direct" ? "selected" : ""}>Direct API key (Gemini / OpenAI) — easiest</option>
        <option value="cloud-function" ${s.ai.provider === "cloud-function" ? "selected" : ""}>Cloud Function (advanced, needs deployed function)</option></select></div>
      <div id="directBox" class="full form-grid" style="grid-column:1/-1">
        <div class="field"><label>Service</label><select class="select" name="service"><option value="xai" ${aiSvc(aiCfg) === "xai" ? "selected" : ""}>xAI Grok (key starts with xai-…)</option><option value="gemini" ${aiSvc(aiCfg) === "gemini" ? "selected" : ""}>Google Gemini (key starts with AIza…)</option><option value="openai" ${aiSvc(aiCfg) === "openai" ? "selected" : ""}>OpenAI (key starts with sk-…)</option></select></div>
        <div class="field"><label>Model (optional)</label><input class="input" name="model" placeholder="grok-4 / gemini-2.5-flash / gpt-4o-mini" value="${esc(aiCfg.model || "")}"></div>
        <div class="field full"><label>API key</label><input class="input" type="password" name="apiKey" autocomplete="off" placeholder="${aiCfg.apiKey ? "Saved in this browser \u2014 leave blank to keep, or paste a new key" : "Paste your API key here"}"></div>
        <div class="full alert alert-info">${icon("lock")}<div>The key is stored <strong>only in this browser</strong> (localStorage). It is not saved to Firestore or any server. On another computer you need to paste it again. Use a key with a spending limit, and never use this on a shared computer.</div></div>
      </div>
      <div id="cfBox" class="full form-grid" style="grid-column:1/-1">
        <div class="field"><label>Function name</label><input class="input" name="functionName" value="${esc(looksLikeSecret(s.ai.functionName) ? "aiAnalyze" : s.ai.functionName)}"></div>
        <div class="field"><label>Label shown to admins</label><input class="input" name="providerLabel" value="${esc(looksLikeSecret(s.ai.providerLabel) ? "Gemini or OpenAI via Cloud Function" : s.ai.providerLabel)}"></div>
        <div class="full alert alert-info">${icon("lock")}<div>Do <strong>not</strong> paste an API key in these two boxes — they are only names. Server secrets: <code>firebase functions:secrets:set GEMINI_API_KEY</code> (see <code>FUNCTIONS-README.md</code>).</div></div>
      </div>
      <div class="full"><button class="btn btn-primary" type="submit">Save</button> <button class="btn" type="button" id="aiClear">Remove saved key</button></div></form></div>`;
      const aiForm = $("#af");
      const syncAi = () => {
        const v = aiForm.elements.provider.value;
        $("#directBox").classList.toggle("hidden", v !== "direct");
        $("#cfBox").classList.toggle("hidden", v !== "cloud-function");
      };
      aiForm.elements.provider.addEventListener("change", syncAi);
      syncAi();
      $("#aiClear").addEventListener("click", () => {
        try {
          localStorage.removeItem(AI_KEY_LS);
        } catch (e) {
        }
        toast("Saved API key removed from this browser.", "success");
        integrations(body);
      });
      aiForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const f2 = e.target.elements;
        const provider = f2.provider.value;
        if (provider === "direct") {
          const old = getAiLocalConfig();
          const typed = f2.apiKey.value.trim();
          const apiKey = typed || old.apiKey || "";
          if (!apiKey) return toast("Paste your API key first.", "error");
          if (/\s/.test(apiKey)) return toast("The API key must not contain spaces.", "error");
          const service = f2.service.value;
          const want = { gemini: [/^AIza/, "AIza"], openai: [/^sk-/, "sk-"], xai: [/^xai-/, "xai-"] }[service];
          if (!want[0].test(apiKey)) return toast(`A ${AI_SVC_NAME[service]} key starts with ${want[1]}… — this key looks different. Check the Service you selected.`, "error");
          try {
            localStorage.setItem(AI_KEY_LS, JSON.stringify({ service, model: f2.model.value.trim(), apiKey }));
          } catch (err) {
            return toast("This browser blocked saving the key (private mode?).", "error");
          }
          s.ai = { provider: "direct", functionName: "aiAnalyze", providerLabel: `${AI_SVC_NAME[service]} (direct)` };
        } else {
          const fn = f2.functionName.value.trim() || "aiAnalyze";
          const lb = f2.providerLabel.value.trim();
          if (provider === "cloud-function" && (looksLikeSecret(fn) || !/^[A-Za-z][A-Za-z0-9_-]{0,62}$/.test(fn))) return toast("Function name must be a short name like aiAnalyze — not an API key.", "error");
          if (looksLikeSecret(lb)) return toast("The label must be plain text — not an API key.", "error");
          s.ai = { provider, functionName: fn, providerLabel: lb || "Gemini or OpenAI via Cloud Function" };
        }
        await persist2(e.submitter);
        integrations(body);
      });
    }
    async function access(body) {
      body.innerHTML = loadingHtml();
      const [clients, users, logs] = await Promise.all([store.listClients(), getMode() === "local" ? store.listUsers() : store.listUsers().catch(() => []), store.listAudit(40).catch(() => [])]);
      body.innerHTML = `
      <div class="grid grid-2 mb-2">
        <div class="card"><h2>Administrator account</h2><dl class="dl"><dt>Signed in as</dt><dd>${esc(session.email)}</dd><dt>Role</dt><dd><span class="badge badge-accent">${esc(session.role)}</span></dd><dt>Mode</dt><dd>${esc(getMode() === "local" ? "Local Demo Mode (simulated auth)" : "Firebase Authentication")}</dd></dl>
          <p class="small subtle mt-1 mb-0">${getMode() === "local" ? "Demo admin password is public (demo1234). Do not store real client data in Local Demo Mode." : "Admin role comes from a custom claim set by a trusted script (functions/scripts/set-admin.js). There is no public sign-up."}</p></div>
        <div class="card"><h2>Client logins</h2>${users.filter((u) => u.role === "client").length ? `<ul class="list">${users.filter((u) => u.role === "client").map((u) => `<li><div><div class="small title">${esc(u.email)}</div><div class="meta">${esc(clients.find((c) => c.id === u.clientId)?.businessName || u.clientId)}</div></div>${u.disabled ? '<span class="badge badge-danger">Disabled</span>' : '<span class="badge badge-success">Active</span>'}</li>`).join("")}</ul>` : `<p class="muted small">None listed. ${getMode() === "firebase" ? "Client accounts are managed with the setUserRole function." : ""}</p>`}</div>
      </div>
      <div class="card mb-2"><div class="card-header"><h2>Client portal permissions</h2><span class="hint">Revoke instantly \u2014 published reports are kept</span></div>
        <div class="table-wrap"><table class="table"><thead><tr><th>Client</th><th>Portal</th><th>PDF downloads</th><th></th></tr></thead><tbody>
        ${clients.map((c) => `<tr><td>${esc(c.businessName)}</td><td>${c.portal?.accessEnabled && c.status !== "archived" ? '<span class="badge badge-success">Enabled</span>' : '<span class="badge">Disabled</span>'}</td><td>${c.portal?.allowPdf !== false ? "Allowed" : "Off"}</td>
          <td class="text-right nowrap"><a class="btn btn-sm" href="client-details.html?id=${esc(c.id)}&tab=portal">Manage</a>${c.portal?.accessEnabled ? ` <button class="btn btn-sm btn-danger" data-revoke="${esc(c.id)}">Revoke</button>` : ""}</td></tr>`).join("")}</tbody></table></div></div>
      <div class="card"><div class="card-header"><h2>Recent administrative activity</h2></div>
        ${logs.length ? `<div class="table-wrap" style="max-height:360px"><table class="table"><thead><tr><th>When</th><th>Who</th><th>Action</th><th>Details</th></tr></thead><tbody>${logs.map((l) => `<tr><td class="nowrap small">${esc(fmtDateTime(l.at))}</td><td class="small">${esc(l.actor)}</td><td><code>${esc(l.action)}</code></td><td class="small subtle">${esc(JSON.stringify(l.details || {}).slice(0, 120))}</td></tr>`).join("")}</tbody></table></div>` : `<p class="muted">No activity recorded.</p>`}</div>`;
      $$("[data-revoke]", body).forEach((b) => b.addEventListener("click", async () => {
        const c = clients.find((x) => x.id === b.dataset.revoke);
        if (!await confirmDialog({ title: `Revoke portal access for ${c.businessName}?`, message: "The client and all share links will immediately lose access. Re-enable any time in Client Portal Settings.", confirmText: "Revoke", danger: true })) return;
        await withLoading(b, async () => {
          await store.saveClient({ ...c, portal: { ...c.portal, accessEnabled: false } }, { action: "portal.revoke" });
          toast("Access revoked.", "success");
          access(body);
        });
      }));
    }
    function data(body) {
      const local = getMode() === "local";
      body.innerHTML = `<div class="card" style="max-width:760px">
      <h2>Backup & restore</h2>
      ${local ? `<p class="muted">Local Demo Mode keeps everything in this browser. Export a backup regularly \u2014 clearing browser data deletes it.</p>
      <div class="flex gap-1 wrap mb-2"><button class="btn" id="expBtn">${icon("download")}Export backup (JSON)</button>
      <label class="btn" for="impFile">${icon("upload")}Restore from backup</label><input type="file" id="impFile" accept="application/json,.json" class="sr-only"></div>
      <hr><h2>Reset</h2><p class="muted small">Delete all local data and reload the fictional demo data.</p><button class="btn btn-danger" id="resetBtn">${icon("trash")}Reset local data</button>` : `<p class="muted">In Firebase mode use the managed Firestore export (<code>gcloud firestore export gs://YOUR_BUCKET</code>) or scheduled backups in the Google Cloud console. Local-to-cloud migration is on the Firebase Setup page.</p>`}
    </div>`;
      $("#expBtn")?.addEventListener("click", () => {
        downloadBlob(JSON.stringify({ exportedAt: (/* @__PURE__ */ new Date()).toISOString(), app: "masud-ppc", data: localAdapter.exportAll() }, null, 1), `masud-ppc-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, "application/json");
        toast("Backup downloaded. It contains client data \u2014 store it securely.", "success");
      });
      $("#impFile")?.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
          const parsed = JSON.parse(await file.text());
          if (parsed.app !== "masud-ppc" || !parsed.data?.clients) throw new Error("This is not a Masud PPC backup file.");
          if (!await confirmDialog({ title: "Restore backup?", message: `All current local data will be replaced with the backup from ${parsed.exportedAt || "unknown date"} (${parsed.data.clients.length} clients).`, confirmText: "Replace & restore", danger: true })) return;
          localAdapter.importAll(parsed.data);
          toast("Backup restored.", "success");
          setTimeout(() => location.reload(), 600);
        } catch (err) {
          toast(`Restore failed: ${err.message}`, "error");
        }
      });
      $("#resetBtn")?.addEventListener("click", async () => {
        if (!await confirmDialog({ title: "Reset all local data?", message: "Every client, report and record in this browser will be deleted and the fictional demo data reloaded. Export a backup first if needed.", confirmText: "Delete everything", danger: true })) return;
        localAdapter.wipe();
        localStorage.removeItem("mppc.session");
        location.href = "login.html";
      });
    }
    render();
  }
  var TABS;
  var init_settings = __esm({
    "js/pages/settings.js"() {
      init_app();
      init_state();
      init_utils();
      init_icons();
      init_calculations();
      init_scoring();
      init_reports2();
      init_firebase_config();
      TABS = [["general", "General"], ["reports", "Reports"], ["scoring", "Scoring"], ["integrations", "Integrations"], ["access", "Access"], ["data", "Data & backup"]];
      (async () => {
        const ctx2 = await initAdminPage({ page: "settings", title: "Settings" });
        if (ctx2) main13(ctx2);
      })();
    }
  });

  // js/router.js
  var router_exports = {};
  __export(router_exports, {
    ROUTES: () => ROUTES
  });
  async function route() {
    try {
      await ensureLocalSeed();
      await store.ready();
    } catch (e) {
      renderFatal(document.getElementById("app"), e);
      return;
    }
    const s = await getSession();
    if (!s) location.replace(ROUTES.login);
    else if (s.role === "admin") location.replace(ROUTES.dashboard);
    else location.replace(ROUTES.portal);
  }
  var ROUTES;
  var init_router = __esm({
    "js/router.js"() {
      init_app();
      init_auth();
      init_state();
      ROUTES = {
        dashboard: "dashboard.html",
        clients: "clients.html",
        client: (id, tab) => `client-details.html?id=${encodeURIComponent(id)}${tab ? `&tab=${tab}` : ""}`,
        baseline: (id) => `baseline-audit.html?client=${encodeURIComponent(id)}`,
        performance: (id) => `daily-performance.html?client=${encodeURIComponent(id)}`,
        optimization: (id) => `optimization-log.html?client=${encodeURIComponent(id)}`,
        ai: (id) => `ai-analysis.html?client=${encodeURIComponent(id)}`,
        reports: (id) => `reports.html?client=${encodeURIComponent(id)}`,
        reportEditor: (id, reportId) => `report-editor.html?client=${encodeURIComponent(id)}${reportId ? `&report=${encodeURIComponent(reportId)}` : ""}`,
        portal: "client-portal.html",
        login: "login.html"
      };
      if (location.pathname.match(/(\/|index\.html)$/)) route();
    }
  });

  // js/entry.js
  var PAGES = {
    "ai-analysis": () => Promise.resolve().then(() => (init_ai_analysis2(), ai_analysis_exports)),
    "baseline-audit": () => Promise.resolve().then(() => (init_baseline_audit(), baseline_audit_exports)),
    "client-details": () => Promise.resolve().then(() => (init_client_details(), client_details_exports)),
    "client-portal": () => Promise.resolve().then(() => (init_client_portal2(), client_portal_exports)),
    "clients": () => Promise.resolve().then(() => (init_clients2(), clients_exports)),
    "daily-performance": () => Promise.resolve().then(() => (init_daily_performance(), daily_performance_exports)),
    "dashboard": () => Promise.resolve().then(() => (init_dashboard(), dashboard_exports)),
    "firebase-setup": () => Promise.resolve().then(() => (init_firebase_setup(), firebase_setup_exports)),
    "login": () => Promise.resolve().then(() => (init_login(), login_exports)),
    "optimization-log": () => Promise.resolve().then(() => (init_optimization_log2(), optimization_log_exports)),
    "report-editor": () => Promise.resolve().then(() => (init_report_editor(), report_editor_exports)),
    "reports": () => Promise.resolve().then(() => (init_reports3(), reports_exports2)),
    "settings": () => Promise.resolve().then(() => (init_settings(), settings_exports)),
    "router": () => Promise.resolve().then(() => (init_router(), router_exports))
  };
  var name = document.currentScript && document.currentScript.dataset.page;
  if (PAGES[name]) PAGES[name]();
  else console.error("Unknown page: " + name);
})();
