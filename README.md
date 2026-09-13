# Finman

A voice-first personal finance app — budgeting, planning, and proactive guidance, not just transaction logging.
Speak a transaction and Finman transcribes, parses, and confirms it before it's saved; ask it a question and it
answers from your real ledger; ask "can I afford this" and it reasons through your upcoming bills, EMIs, and
goals before answering.

## Repository Layout

```text
FinmanPro/
├── backend/    — Node.js/TypeScript/Express API (not yet initialized)
├── mobile/     — React Native/Expo Android app (not yet initialized)
├── web/        — React web app (not yet initialized)
└── starter/    — the architecture/spec toolkit this project's design was built from (separate git repo, see its
                  own CLAUDE.md/README) — a reference, not part of this codebase
```

## Where Things Are Documented

- **Architecture rules:** [`starter/docs/architecture/`](starter/docs/architecture/) — see
  [`starter/CLAUDE.md`](starter/CLAUDE.md) for which document governs which layer.
- **Current design (the actual build target):** [`starter/docs/design/finman-design.md`](starter/docs/design/finman-design.md)
  — screens, full API surface, data model, and the reasoning behind every non-obvious decision.
- **Recorded stack choices:** the "Technology Choices" table in [`starter/README.md`](starter/README.md).
- **Development roadmap:** tracked as a published checklist (ask if you don't have the link).

## Status

Pre-scaffolding for the backend/mobile/web codebases — see the roadmap's "Scaffolding & Foundation" phase for
what's landed so far.
