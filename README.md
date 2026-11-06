# Stop Slop

**Stop Slop by The KODE** is a reusable Agent Skill that helps AI assistants and coding agents avoid generic, overdesigned, template-driven UX/UI and build purposeful, accessible interfaces.

Stop Slop is a design-thinking constraint, not a visual theme. It asks agents to justify visual decisions, preserve what works, design around real user tasks, and review rendered results. It does not force every product into minimalism.

## Install with your AI agent

You can give your coding agent this repository link and ask it to install the skill. The agent should read this README, identify its own platform, and use the matching installation method below.

**Copy this prompt into your AI coding agent:**

```text
Read the Stop Slop repository and its README:
https://github.com/mpaanchi/Stop-Slop-Skill

Identify which AI coding agent or IDE you are running in. Install the
complete Stop Slop skill into the correct skill directory for this
platform. Follow the platform-specific instructions in the README.

Preserve SKILL.md, references, evaluations, and scripts. Do not copy
only the main SKILL.md. Do not overwrite an existing installation
without checking it first. After installation, confirm the exact
location and explain how the skill is discovered or invoked.
```

The link alone does not install anything. Your agent needs repository access and permission to run the required install or copy command. Some chat-only assistants cannot install local skills.

## Quick install

The easiest cross-agent option is the open Agent Skills CLI:

```bash
npx skills add mpaanchi/Stop-Slop-Skill
```

The CLI downloads the repository and lets you select the supported agent and installation scope. Check the CLI's current requirements and options at [skills.sh](https://www.skills.sh/docs/cli).

## Manual installation

Clone the whole repository into the skill directory for your platform. Keep the folder name `stop-slop`, and do not move `SKILL.md` away from the supporting folders.

| AI agent | Project-level directory | Personal / global directory |
|---|---|---|
| OpenAI Codex | `.agents/skills/stop-slop/` | `~/.agents/skills/stop-slop/` |
| Claude Code | `.claude/skills/stop-slop/` | `~/.claude/skills/stop-slop/` |
| GitHub Copilot | `.github/skills/stop-slop/` or `.agents/skills/stop-slop/` | `~/.copilot/skills/stop-slop/` or `~/.agents/skills/stop-slop/` |
| Cursor | `.cursor/skills/stop-slop/` or `.agents/skills/stop-slop/` | `~/.cursor/skills/stop-slop/` or `~/.agents/skills/stop-slop/` |
| OpenCode | `.opencode/skills/stop-slop/` or `.agents/skills/stop-slop/` | `~/.config/opencode/skills/stop-slop/` or `~/.agents/skills/stop-slop/` |

For example, to install globally for Codex:

```bash
git clone https://github.com/mpaanchi/Stop-Slop-Skill.git ~/.agents/skills/stop-slop
```

To install for the current project in Codex:

```bash
git clone https://github.com/mpaanchi/Stop-Slop-Skill.git .agents/skills/stop-slop
```

Use the corresponding destination from the table for other agents. Discovery paths and cloud-agent behaviour can vary by platform and version. For example, Cursor Cloud Agents may require skill sync or a project-level skill rather than a local-only personal installation.

## Use

Ask your agent to apply Stop Slop when planning, creating, modifying, or reviewing an interface. Example:

> Apply Stop Slop. Inspect the existing project and design system first, choose structure based on the user task, then audit the rendered result before handoff.

## What's included

- `SKILL.md`: the instruction entry point.
- `references/`: design principles, forbidden patterns, and accessibility guidance.
- `evaluations/`: review checklists for general UI, landing pages, dashboards, and mobile interfaces.
- `scripts/ui-slop-scan.mjs`: an optional source-code heuristic scanner. Findings are review prompts, not automatic defects.

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

[the-kode.vercel.app](https://the-kode.vercel.app/)
