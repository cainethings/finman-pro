# Finman — Agent Entry Point

This is the Finman application repository. `starter/` beside this file is a separate, self-contained toolkit —
a frozen, spec-first architecture contract (its own git history, its own `CLAUDE.md`) that this project's design
was built from. It is a reference, not part of this codebase: this root `.gitignore` excludes it, and nothing
here should assume its presence to build or run.

**Before making any change in `backend/`, `mobile/`, or `web/`, read, in order:**

1. [`starter/docs/architecture/00-CORE.md`](starter/docs/architecture/00-CORE.md) — universal architecture rules
   (layering, naming, the requirement/preference/decision/assumption taxonomy). Always in scope.
2. The technology-specific architecture document(s) for the layer you're touching — see
   [`starter/CLAUDE.md`](starter/CLAUDE.md)'s own index for which document(s) apply per layer (frontend, backend,
   data, mobile, security, AI integration, background jobs).
3. [`starter/docs/design/finman-design.md`](starter/docs/design/finman-design.md) — the current, stable design:
   screens, API surface, data model, and the reasoning behind every non-obvious choice. This is what you're
   actually building. (`starter/docs/design/v1-design.md`, `v2-*.md`, `v3-*.md` are superseded — kept only as the
   historical record of how the design got here.)
4. This project's own root `README.md` — the recorded Technology Choices are in
   [`starter/README.md`](starter/README.md); this repo's own `README.md` covers what's actually built so far.
5. If working inside an existing module, its own `README.md` first — that file is part of its contract.

Each of `backend/`, `mobile/`, `web/` has its own `README.md` stating which architecture documents govern it.

**Definition of done** for any change: `starter/docs/architecture/00-CORE.md` §13, plus whichever
technology-specific document's own addendum applies (e.g. `10-BACKEND.md` §19 for backend work,
`02-FRONTEND.md`/`01-REACT.md` §20/§25 for frontend work).
