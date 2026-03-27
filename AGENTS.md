<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# NexSync Project Rules

## Package Manager
- Always use `pnpm` for package management. Never use npm or yarn.

## Testing & Building
- When testing, always use `typecheck` command to verify types.
- Never build the app unless explicitly requested by the user.
