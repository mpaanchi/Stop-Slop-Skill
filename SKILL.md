---
name: stop-slop
description: Prevent generic, overdesigned, template-driven, and AI-looking UX/UI when planning, generating, editing, or reviewing websites, web apps, dashboards, mobile apps, and product interfaces. Use for tasks that create or materially change interfaces, frontend styling, design systems, or user flows.
compatibility: Works with coding agents supporting the Agent Skills SKILL.md format. Project file access is needed for repository inspection; browser or screenshot tools improve visual review.
metadata:
  version: "1.0.2"
  category: "design-quality"
  author: "The KODE"
---

# Stop Slop

## Mission

Build interfaces that feel intentional, useful, product-specific, and professionally designed. Avoid generic AI layouts, decorative complexity, fashionable effects, filler copy, and interchangeable SaaS styling.

**Every visible element must earn its place.** It must improve the user's task, clarify meaning, establish hierarchy, express a real brand decision, or provide necessary feedback.

This is a quality constraint, not a demand for minimalism. Dense, colourful, expressive interfaces can be right. Cards, badges, borders, gradients, diagrams, and animation can be right when they have a defensible purpose.

## When to apply

Apply this skill when designing, scaffolding, generating, modifying, or reviewing a website, app, screen, dashboard, component, stylesheet, design token, visual system, or user flow. For a small bug fix, keep the scope small; do not turn it into a redesign.

## Non-negotiable rules

1. **Inspect before inventing.** Read the repository structure, routes, screens, shared components, styling approach, tokens, assets, and project instructions before making visual decisions.
2. **Preserve what works.** Do not replace an established design system or restyle unrelated parts of the product.
3. **Understand the task.** Design around the real user, content, workflow, and decision—not a fashionable template.
4. **Use evidence.** Prefer supplied brand guidelines, references, screenshots, real content, and working codebase patterns.
5. **Never fabricate product reality.** Do not invent testimonials, customer logos, analytics, revenue, metrics, integrations, security claims, or product screenshots. Label demo data.
6. **Function before decoration.** Controls must work, statuses must be truthful, and visual treatments must preserve legibility.
7. **Choose restraint when uncertain.** Prefer a clear solution over extra panels, labels, animation, styling, or copy.
8. **Do not over-question.** Infer what can be established from the project. Ask only when a missing decision materially changes the result.
9. **Protect accessibility.** Do not remove labels, focus indicators, contrast, hit areas, semantic structure, or essential states to make a screen look cleaner.
10. **Be honest about verification.** Never claim to have inspected a rendered result unless you actually did.

## Design decision gate

Before implementation, establish:
- **User:** who is using this, and in what context?
- **Job:** what must they accomplish?
- **Priority:** what information or action matters first?
- **Content:** what real data, states, and assets exist?
- **Identity:** what brand and existing UI must be respected?
- **Constraints:** what technical, responsive, accessibility, and delivery limits apply?

Then decide the simplest structure that supports the task. Determine what must be visible, what can be secondary, which components can be reused, and what can be removed without losing meaning.

## Prohibited by default

Do not add these as decoration or default styling:

**Interface furniture**
- Decorative tags, chips, pills, badges, and eyebrow labels.
- Section numbering without a real sequence.
- Fake code breadcrumbs, file paths, developer metadata, or technical labels in customer-facing UI.
- Borders or containers around every section, paragraph, feature, or statistic.
- Dividers between every block when spacing and alignment work better.
- Icons beside every heading, bullet, or card.
- Squircles, oversized radii, and pill-shaped controls used indiscriminately.

**Typography and copy**
- Excessive italics, decorative kerning, exaggerated tracking, or fashionable fonts without a brand reason.
- Instrument Serif as an automatic premium choice.
- Excessive monospace typography outside code or technical data.
- ALL-CAPS subtitles and shouty microcopy.
- Periods at the end of short titles unless punctuation is required by meaning.
- Multiple text colours, opacity levels, or washed-out paragraph styles without semantic purpose.
- Verbose, repetitive, vague, or self-congratulatory copy.

**Layout and decoration**
- Over-detailed UI filled with micro-labels, redundant controls, panels, counters, or decorative statistics.
- Elaborate diagrams when a short explanation or simple visual is clearer.
- Repeated card grids or bento layouts as the default answer to every content problem.
- Generic gradient backgrounds/text, rainbow accents, neon glow, or glassmorphism.
- Dithering, grain, noise, ASCII illustrations, and decorative textures without a product or brand reason.
- Motion that adds delay or spectacle without communicating state or meaningful change.

**Common AI defaults**
- Centred hero + oversized headline + two buttons + three feature cards + another CTA.
- Untouched shadcn, Tailwind, or component-library starter styling presented as finished art direction.
- Emoji replacing proper navigation, product, or status icons.
- Generic stock photos, abstract 3D blobs, floating cubes, and irrelevant illustrations.
- Fake charts, dashboards, testimonials, logos, or invented proof.
- Generic AI/SaaS marketing clichés instead of plain descriptions.
- The same rounded card, shadow, accent border, icon treatment, and spacing repeated everywhere.
- Centre alignment for every heading, paragraph, card, and CTA regardless of reading flow.

These are warnings against lazy defaults, not universal bans. Use a discouraged pattern only when it has a clear functional, brand, accessibility, or user-requested reason.

## Implementation workflow

1. **Inspect.** Identify framework, entry points, routes, components, design tokens, assets, interaction patterns, responsive behaviour, and available test/build/preview commands.
2. **Define.** Translate the request into the user's task, information hierarchy, primary action, supporting actions, and relevant states.
3. **Structure first.** Let content determine whether the screen needs a list, table, form, workspace, timeline, editorial layout, dashboard, or cards. Do not force content into cards.
4. **Implement deliberately.** Reuse components and tokens. Control colours, type styles, spacing, shadows, and radii. Use real content. Make visible interactions functional.
5. **Audit.** Use the relevant checklist in `evaluations/`. Run the optional scanner when useful. Inspect rendered desktop and mobile views when tools are available.
6. **Fix before handoff.** Prioritise usability, hierarchy, accessibility, responsiveness, and consistency over decorative polish. Report what changed, what was verified, and what remains unverified.

## Existing-project protection

When editing an established product:
- Identify its visual conventions before changing anything.
- Reuse existing components and tokens unless they cause the issue.
- Scope changes to the requested screen or flow.
- Avoid introducing a second design language.
- Preserve real content, functional behaviour, and accessibility.
- Fix the smallest coherent system boundary rather than patching everything individually.

## Exception policy

A discouraged pattern is acceptable when it solves a real problem, is required by the product, belongs to the supplied brand system, or is explicitly requested.

Examples: status badges for real states; breadcrumbs in deep hierarchies; borders for inputs, tables, dialogs, and selection; dividers in dense lists; cards for independent items; charts for real data; monospace for code and IDs; gradients or animation for a deliberate brand or interaction purpose.

For prominent exceptions, explain the purpose in one sentence. Do not let one justified use become a repeated decorative pattern.

## Completion standard

Do not call the UI finished until:
- It serves the user's actual task and has a clear hierarchy.
- Its visual language fits the product and existing codebase.
- No element exists solely to make it look elaborate.
- Content, metrics, images, and claims are real or labelled illustrative.
- Visible controls work and important states are represented.
- It is responsive, accessible, and readable.
- Rendered output has been inspected when possible, or lack of visual verification is disclosed.

**Final test:** If decorative styling were removed, would the structure and content still make sense? If not, fix the structure before adding more styling.

## About the creator

Created by **The KODE**, a Soweto-based South African digital media, marketing and technology company.

https://the-kode.vercel.app/
