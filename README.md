# Masud PPC — আপনার নিজের লগইনসহ ড্যাশবোর্ড

`index.html` (বা `login.html`) **ডাবল ক্লিক** করলেই ব্রাউজারে খুলবে। কোনো localhost/সার্ভার লাগে না।
ক্লায়েন্টদের কোনো লগইন নেই — রিপোর্ট খুলে **Download PDF** করে PDF ফাইল ক্লায়েন্টকে পাঠাবেন।

## লগইন চালু করার ধাপ (একবারই, ১০ মিনিট)

1. <https://console.firebase.google.com> → **Add project** (ফ্রি Spark প্ল্যানই যথেষ্ট, কার্ড লাগবে না)।
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save**।
3. একই জায়গায় **Users ট্যাব → Add user** → আপনার ইমেইল ও পাসওয়ার্ড দিন। (এটাই আপনার লগইন।)
4. **Build → Firestore Database → Create database** → *Production mode* → কাছের একটা region বেছে নিন।
5. Firestore-এর **Rules** ট্যাবে যান। এই ফোল্ডারের `firestore.rules` ফাইলের লেখা কপি করে বসান।
   তার আগে ফাইলের `YOUR_EMAIL@gmail.com` জায়গায় **ধাপ ৩-এর ইমেইল (ছোট হাতের অক্ষরে)** দিন। তারপর **Publish**।
6. **Project settings (⚙) → General → Your apps → Web (`</>`)** → অ্যাপ রেজিস্টার করুন → `firebaseConfig` এর মানগুলো কপি করুন।
7. `firebase-config.js` ফাইল খুলে placeholder-গুলোর জায়গায় সেই মান বসান। সেভ করুন।
8. `index.html` ডাবল ক্লিক → ধাপ ৩-এর ইমেইল ও পাসওয়ার্ড দিয়ে **Sign in**।

`firebase-config.js`-এ মান না বসালে অ্যাপ **Local Demo Mode**-এ চলে (কাল্পনিক ডেমো ডেটা, শুধু ওই ব্রাউজারে;
ডেমো লগইন `admin@demo.local` / `demo1234`)।

## কিছু জরুরি কথা
- **ডেটা Firebase-এ জমা হয়**, তাই যেকোনো কম্পিউটার/ব্রাউজার থেকে একই লগইনে একই ডেটা পাবেন।
- `firestore.rules`-এ ইমেইল না বদলালে কেউই (আপনিও) ডেটা পড়তে পারবেন না — এটা ইচ্ছাকৃত সুরক্ষা।
- Firebase লাগে ইন্টারনেট। ফন্ট ও চার্টের জন্যও ইন্টারনেট লাগে (না থাকলে সিস্টেম ফন্ট ও সাধারণ SVG চার্ট)।
- পাসওয়ার্ড ভুলে গেলে লগইন পেজের **Forgot password?** বা Firebase Console → Users থেকে রিসেট করুন।
- AI অ্যানালাইসিস: Settings → Integrations → AI provider → **Direct API key** বেছে Gemini/OpenAI key **API key বক্সে** বসিয়ে Save করুন। (Function name/Label ঘরে key দেবেন না।) Key শুধু ওই ব্রাউজারে থাকে। key ছাড়া "rule-based draft" কাজ করবে।
- ক্লায়েন্ট পোর্টাল/শেয়ার-লিংক এই ভার্সনে ব্যবহারের জন্য নয়।
- `.csv` ফাইল দুটো ইমপোর্ট চেষ্টা করার নমুনা।


## Multi-user access fix (patched build)

This project uses **Cloud Firestore**, not Realtime Database. Deploy rules from `firestore.rules` in
Firebase Console → Build → Firestore Database → Rules (or `firebase deploy --only firestore:rules`).
Realtime Database Rules do not apply to this app.

The Firebase session code now reads the trusted custom claims `role` and `clientId` rather than
treating every signed-in account as an administrator. Assign claims only from trusted server code:
- Admin account: `role: "admin"`
- Client account: `role: "client"` and `clientId: "<the unique Firestore clients document ID for that user>"`

Each client user must have a **different clientId** if they should see different reports. Reports and
snapshots are stored under `clients/{clientId}/...`; the client portal only reads published
`reportSnapshots` for the clientId in the user's token. Do not set clientId from a user-editable
form or URL as an authorization mechanism.

After changing claims, sign out and sign in again (or force-refresh the ID token) before testing.
Do not deploy these rules until the admin account has the `role: "admin"` custom claim and each client
account has the correct `role` and `clientId` claims, or access will be denied by design.
