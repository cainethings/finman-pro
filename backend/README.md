# backend

Finman's API — Node.js/TypeScript/Express, governed by [`../starter/docs/architecture/10-BACKEND.md`](../starter/docs/architecture/10-BACKEND.md)
(layer responsibilities, request pipeline) and [`../starter/docs/architecture/11-NODE.md`](../starter/docs/architecture/11-NODE.md)
(Node-specific rendering of that contract). Persistence is MySQL via Prisma, per
[`../starter/docs/architecture/21-MYSQL.md`](../starter/docs/architecture/21-MYSQL.md).

See [`../starter/docs/design/finman-design.md`](../starter/docs/design/finman-design.md) for the full API surface
and data model this package implements, and the published roadmap for build order.

## Getting Started

- **Package manager:** npm.
- **Module policy:** CommonJS (`"type": "commonjs"`) — an Architecture Decision favoring the simpler,
  better-tested Node/TypeScript tooling story over ESM's current interop friction (`11-NODE.md` §2).
- **Node:** `>=20`.

```bash
npm install
npm run dev         # tsx watch, hot-reloads src/server.ts
npm run typecheck   # tsc --noEmit, strict mode
npm run build        # compiles to dist/
npm start            # runs the compiled server
```

`GET /health` is the only route so far (proves the server runs) — routes/controllers/services/etc. land as the
rest of the Phase 1/2 roadmap items are built. `npm audit` currently reports a moderate advisory in `qs`, a
transitive dependency pulled in by Express itself; no fix is available without a Express major-version bump, so
it's left as a known, tracked issue rather than forced.
