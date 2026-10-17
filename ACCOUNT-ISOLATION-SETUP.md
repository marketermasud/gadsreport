# Account-wise data isolation setup

This build keeps the same app features for every Firebase Authentication account. It does not use an Admin-vs-Client UI distinction for Firebase logins. Instead, every signed-in user gets a private Firestore workspace keyed by their Firebase Authentication UID.

## Apply the update

1. Back up your current project and Firestore data.
2. Replace the project files with this updated build (keep your own `firebase-config.js` values).
3. In Firebase Console, open **Firestore Database → Rules**, replace the rules with this build's `firestore.rules`, and click **Publish**.
4. Deploy the updated `app.js` with your normal hosting method.
5. Sign out and sign in again with each account.

## Data layout

- Private account data: `workspaces/{FirebaseAuthUID}/clients/...`, `workspaces/{FirebaseAuthUID}/users/...`, and `workspaces/{FirebaseAuthUID}/auditLogs/...`.
- Shared app settings: `settings/app` (readable and writable by signed-in users, so changes are common to all accounts).

## Important migration note

Existing records under the old global paths such as `clients/...`, `users/...`, and `auditLogs/...` are not automatically copied. The new rules intentionally deny access to those legacy global records to avoid exposing one account's data to everyone. Back up the old data and migrate it into the intended account's `workspaces/{UID}/...` path before relying on it. Do not copy all legacy client records into every user's workspace unless that duplication is explicitly intended.

## Security model

Every signed-in account receives the same app UI/features. Firestore rules enforce isolation by Firebase Authentication UID. This is not a system where all users can read each other's data; only shared, non-sensitive settings are common. Anyone who can sign in can edit shared settings, so do not put secrets or personal client data there.
