## Job Notification App – Design System Foundation

This repository contains the **visual and interaction foundation** for a premium, calm B2C Job Notification App. It is **not a feature implementation** – only the design system scaffolding.

### Philosophy

- **Calm, intentional, coherent, confident**
- No gradients, no glassmorphism, no neon, no playful or hackathon-style visuals
- Subtle surfaces, clear hierarchy, and predictable interaction patterns

### Running locally

You can open `index.html` directly in a browser, or run a lightweight static server:

```bash
npm install
npm run dev
```

> The `dev` script uses `npx serve .` to host the static files.

### Global layout structure

Every page follows this structure:

1. **Top Bar** – app name (left), progress indicator (center), status badge (right)
2. **Context Header** – large serif headline, one-line subtext, clear purpose
3. **Workspace** – 70% **Primary Workspace** + 30% **Secondary Panel**
4. **Proof Footer** – checklist-style delivery proof

The example in `index.html` demonstrates this canonical layout and should be reused as the shell for all future screens.

### Color system

- **Background**: `#F7F6F3`
- **Primary text**: `#111111`
- **Accent**: `#8B0000` (deep red, used for primary actions and focus)
- **Success**: `#2F6F4E` (muted green, used in success feedback)
- **Warning**: `#B07C2A` (muted amber, used in warning feedback)

All borders and subtle lines are created via **alpha variations** of the primary text color rather than introducing new base colors.

### Spacing system

Only these spacing tokens are used:

- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 40px
- `--space-5`: 64px

Margins, padding, gaps, and layout rhythm are built exclusively from this scale.

### Typography

- **Headings**: serif (`--font-serif`), confident sizes, generous spacing
- **Body**: sans-serif (`--font-sans`), 16px base, line-height 1.7
- **Max text width**: context copy constrained to 720px for readability

### Components

Defined in `styles.css` and showcased in `index.html`:

- **Top bar**: `top-bar`, `status-badge`
- **Cards**: `card`, `card--primary`, `card--secondary`
- **Buttons**:
  - Primary: `btn btn--primary` (solid deep red)
  - Secondary: `btn btn--secondary` (outlined)
  - Ghost: `btn btn--ghost` (low-emphasis tertiary)
  - Small size: `btn--sm`
- **Inputs**: `field`, `field__control`, `field__label`, `field__hint`
- **Feedback**:
  - `alert alert--success`
  - `alert alert--warning`
  - `alert alert--error`
  - `empty-state` with guided actions
- **Prompt block** (secondary panel): `prompt-block` for copyable guidance
- **Proof footer**: checklist items for UI, logic, tests, and deployment

### Interaction rules

- Transitions: **150ms**, `ease-in-out` for hover/focus states
- No bounce, no parallax, no ornamental animation
- Inputs have a clear focus ring based on the accent color

### How to extend

When adding real product features later:

- Reuse the **global layout shell** from `index.html`.
- Only use the **existing button, card, and field classes**.
- Keep spacing constrained to the defined scale.
- Introduce new variants **only** when a real product requirement appears, and add them to this design system first.

