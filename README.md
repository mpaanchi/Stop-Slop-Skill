# Stop Slop

A reusable Agent Skill that helps AI assistants and coding agents avoid generic, overdesigned, template-driven UX/UI.

Stop Slop is a design-thinking constraint, not a visual theme. It asks agents to justify visual decisions, preserve what works, design around real user tasks, and review rendered results. It does not force every product into minimalism.

## What's included

- `SKILL.md`: the instruction entry point.
- `references/`: design principles, forbidden patterns, and accessibility guidance.
- `evaluations/`: review checklists for general UI, landing pages, dashboards, and mobile interfaces.
- `scripts/ui-slop-scan.mjs`: an optional source-code heuristic scanner. Findings are review prompts, not automatic defects.

## Install

Clone the repository into a directory your agent discovers.

**Codex / OpenCode**
```bash
git clone https://github.com/mpaanchi/Stop-Slop-Skill.git ~/.agents/skills/stop-slop
```

**Claude Code**
```bash
git clone https://github.com/mpaanchi/Stop-Slop-Skill.git ~/.claude/skills/stop-slop
```

**Project-local install**
```bash
git clone https://github.com/mpaanchi/Stop-Slop-Skill.git .agents/skills/stop-slop
```

For GitHub Copilot, use `.agents/skills/stop-slop` or `.github/skills/stop-slop`, depending on the agent surface and its current discovery support. Copy the entire folder so references and evaluations remain available.

## Use

Ask your agent to apply Stop Slop when planning, creating, modifying, or reviewing an interface. Example:

> Apply Stop Slop. Inspect the existing project and design system first, choose structure based on the user task, then audit the rendered result before handoff.

## Optional source scan

Requires Node.js 18 or later. No npm dependencies are required.

```bash
node scripts/ui-slop-scan.mjs path/to/project
```

Use `--strict` only for experiments; it exits non-zero when a pattern is flagged. Review findings in context. The scanner cannot judge rendered pixels, understand product context, or replace accessibility and visual testing.

## Compatibility and limitations

Stop Slop uses the Agent Skills `SKILL.md` format. Discovery locations and invocation behaviour vary by agent and version. A skill influences agent behaviour but cannot guarantee compliance or replace testing and human review.

## About The KODE

Created by **The KODE**, a Soweto-based South African digital media, marketing and technology company.

https://the-kode.vercel.app/
