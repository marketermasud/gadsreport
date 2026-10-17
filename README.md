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
- AI অ্যানালাইসিসে বাইরের AI সংযোগ বন্ধ; "rule-based draft" কাজ করবে।
- ক্লায়েন্ট পোর্টাল/শেয়ার-লিংক এই ভার্সনে ব্যবহারের জন্য নয়।
- `.csv` ফাইল দুটো ইমপোর্ট চেষ্টা করার নমুনা।
