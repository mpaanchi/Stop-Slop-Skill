# Stop Slop: Design Principles

## Start with the user's job
Describe the screen's purpose with a verb: review orders, compare plans, book a transfer, edit a script, reconcile stock, or publish a page. Identify the user's context, required information, primary action, secondary actions, and likely states.

## Build hierarchy before decoration
1. Decide what users must notice first.
2. Group related information.
3. Arrange groups in the order users need them.
4. Establish primary and secondary actions.
5. Add emphasis only where it reinforces hierarchy.
6. Remove repeated or non-functional elements.

Use proximity, alignment, spacing, and typography before boxes, colour, or dividers.

## Let content determine layout
- Lists for scanning similar items.
- Tables for precise comparison.
- Forms for structured input and validation.
- Cards when items need containment or independent actions.
- Timelines for chronological progress.
- Dashboards for overviews that support decisions.
- Editorial layouts for reading and discovery.
- Workspaces for related tools and information.

Do not choose a layout because it is easy to generate.

## Use a coherent visual system
Use a controlled set of text roles, semantic colours, spacing values, radii, elevation, and interaction states. Reuse existing tokens. Avoid one-off styling values when a shared token works.

## Make identity specific
Infer visual direction from the product, audience, content, and references. It can be quiet, expressive, dense, playful, editorial, technical, or colourful. It must be coherent and appropriate, not fashionable for its own sake.

Minimalism is not automatically quality. Remove needless complexity, not necessary capability.

## Use progressive disclosure carefully
Keep essential information visible. Move secondary details behind tabs or expandable sections only when doing so reduces cognitive load without hiding information needed for the task.

## Make copy useful
Explain what a feature does, what information is needed, what happens after an action, and how to resolve errors. Remove hype, repetition, vague adjectives, and filler.

## Review the rendered result
When possible, inspect typical, dense, empty, and error/loading states at realistic desktop and mobile sizes. Source code alone cannot prove that a layout works.
