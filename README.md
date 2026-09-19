# Cricket Auction Arena

Private mobile-first multiplayer cricket auction game for about 3–5 friends.

## Features
- Temporary 5-character room codes
- Playing 5 or Playing 11
- ₹500 virtual budget per player
- 60-player local dataset (expanded from the initial 25–30 target so up to five Playing 11 teams can be completed without duplicate players)
- Firebase Realtime Database synchronization
- Shared deadline-based auction timer
- Transaction-based bid updates
- Budget/duplicate-bid protection
- Team role validation
- Deterministic score calculation; no AI
- Team locking and results
- Temporary session recovery
- No permanent profiles, teams, history, leaderboards, payments or subscriptions

## Architecture
HTML + CSS + Vanilla JavaScript ES modules + Firebase Realtime Database + GitHub Pages. Firebase Anonymous Authentication is used only as a connection identity for database rules; there is no player login/profile UI.

## Important limitations
This is a browser-only private game. It cannot provide perfect anti-cheat because there is no trusted game server. The host performs auction deadline transitions. Automatic host transfer and server-side abandoned-room garbage collection are not implemented in V1. Do not use it for high-stakes competitive play.

## Temporary data
Only the active room is stored under `rooms/<ROOM_CODE>`. It contains active players, budgets, squads, auction state and final scores. There is no global history. The UI's Play Again leaves the old room and starts fresh. For abandoned rooms, V1 does not claim automatic cleanup; stale rooms should be removed manually or via a future server-side cleanup service.

## Cost target
Targets ₹0/month for normal small personal use on Firebase Spark/no-cost plus GitHub Pages. This is not a lifetime-free guarantee. Firebase quotas, limits and pricing are controlled by Google and can change. The app never enables billing automatically.

## Setup and deployment
Read `FIREBASE_SETUP.md` and `DEPLOYMENT.md`.

## Tests
Run `npm test` to execute pure game-logic tests.
