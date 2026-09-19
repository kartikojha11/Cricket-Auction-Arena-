# Firebase Setup

1. Create a Firebase project and do not enable billing.
2. Register a Web App in Project settings → General → Your apps.
3. Build → Realtime Database → Create Database.
4. Authentication → Sign-in method → Anonymous → Enable.
5. Copy the Web App config into `firebase-config.js`.
6. Never place Admin SDK credentials, service-account JSON or private keys in this repository.
7. Replace Realtime Database rules with the starting rules in `firebase.rules.json`, then publish them.
8. Serve the folder over HTTPS/local development server and test from three browsers/devices.

The project targets the Spark/no-cost plan for approximately 3–5 friends. The player pool is 60 names so five simultaneous Playing 11 teams can be filled without reusing players. Actual usage is subject to Firebase's current quotas, limits and pricing policies.

### Security note
Rules restrict obvious unauthorized access and require Firebase-authenticated connections, but this remains a browser-only architecture. A malicious user can inspect and manipulate client requests. There is no claim of perfect anti-cheat security.
