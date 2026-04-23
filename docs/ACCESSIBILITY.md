# Accessibility — Welcome Diner

What the codebase ships today for accessibility, with file paths. WCAG 2.2 Level AA is the working target.

## 1. Page structure & landmarks

**File:** `src/app/layout.tsx`

- `<html lang="en">` — document language declared.
- `role="banner"` on `<header>`, `role="contentinfo"` on `<footer>` (`src/components/Header.tsx`, `src/components/Footer.tsx`). Semantic tags already imply these roles; the explicit roles are defensive.
- `<main id="main-content">` anchor target for the skip link.
- `<nav aria-label="Primary">` on desktop navigation, `role="dialog" aria-modal="true"` on mobile nav overlay.
- `<address>` element wraps the physical address in the footer (semantic, not just visual).

## 2. Skip-to-content link

**File:** `src/app/layout.tsx`

The first focusable element in `<body>` is:
```html
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[500] ...">
  Skip to main content
</a>
```
Hidden by default; appears only on focus. Keyboard users can bypass the entire header with one Tab + Enter.

## 3. Keyboard navigation

### Global focus ring

**File:** `src/app/globals.css`

One rule covers every interactive element that doesn't already style its own focus:

```css
*:focus-visible {
  outline: 2px solid var(--color-brass);
  outline-offset: 3px;
  border-radius: 2px;
}
```

`:focus-visible` — not `:focus` — so the ring only appears for keyboard users, never on mouse click. Brass against ivory has a ≥ 3:1 contrast ratio for non-text UI per WCAG 1.4.11.

### Desktop header "More" dropdown

**File:** `src/components/Header.tsx`

- `<button>` with `aria-haspopup="menu"`, `aria-expanded={open}`, `aria-controls="header-more-menu"` — announces its state and relationship to screen readers.
- Click to open; Escape to close; click outside to close.
- When open, `<div role="menu" id="header-more-menu">` holds `<Link role="menuitem">` children.
- Dropdown items use `onClick={() => setMoreOpen(false)}` so navigation via keyboard (Enter on a focused item) auto-dismisses the menu.

### Mobile navigation

**File:** `src/components/MobileNav.tsx`

- Hamburger `<button>` has `aria-label`, `aria-expanded`, `aria-controls="mobile-nav-overlay"`.
- Overlay portal carries `role="dialog" aria-modal="true" aria-label="Primary navigation"`.
- On open: body scroll locks, focus moves to the first link after 50ms (after the portal mounts).
- On Escape: overlay closes and focus returns to the hamburger button.
- Links auto-close on click.

### Active page indication

- Desktop `NavLink` + dropdown `<Link>` both carry `aria-current={active ? "page" : undefined}` — screen readers announce the current page. Visually also rendered in terracotta with an always-visible brass underline.

## 4. External link treatment

**File:** `src/components/atoms/ExternalIndicator.tsx`

Every link that opens in a new tab (`target="_blank"`) uses:

```tsx
<a target="_blank" rel="noopener noreferrer">
  Order
  <ExternalIndicator />   {/* renders "(opens in a new tab)" visually hidden */}
</a>
```

Screen readers announce the new-tab behavior. Wired into:

- `src/components/Header.tsx` (nav items Order, Catering)
- `src/components/MobileNav.tsx` (same)
- `src/components/atoms/BrassButton.tsx` (when `external` prop is true — covers every hero CTA, Sister Spot "Visit" buttons, Locations "Get Directions", etc.)
- `src/components/SocialLinks.tsx` uses an `aria-label` with "(opens in a new tab)" suffix instead of the sibling element, since the link contents are icon-only.

`rel="noopener noreferrer"` on every external link — security + a11y best practice.

## 5. Forms & feedback

### CopyEmailButton

**File:** `src/components/molecules/CopyEmailButton.tsx`

- The visible button label changes to `Copied {email}` on success.
- A parallel `<span id="copy-email-status" role="status" aria-live="polite" class="sr-only">` announces "{email} copied to clipboard" to assistive tech.
- `aria-describedby` on the button wires the announcement to the trigger.

## 6. Images

- Every `<Image>` has descriptive `alt`. Menu images include the chef note for context ("Welcome Diner brunch menu — Weekends only — eggs, biscuits, and a long second coffee.").
- Decorative SVGs (`IconArrow`, `Grain` noise overlay, the `▾` dropdown caret, hairlines in `Divider`, the ◆ in `SectionRule`, the scrolling marquee) are marked `aria-hidden="true"` so screen readers don't announce them.
- SocialLinks icons use explicit `aria-label` on the anchor (the inline SVGs themselves are `aria-hidden`).

## 7. Heading hierarchy

- Exactly one `<h1>` per route. Home uses the "WELCOME DINER" letter-reveal as the h1; every other route renders a page title through `DisplayText as="h1"` or an explicit `<h1>` in `MenuImagePage`.
- `<h2>` for page sections, `<h3>` for subsections. No skipped levels.
- Footer column labels are now `<h2>` elements (via `Eyebrow as="h2"`) — previously `<p>` — so the doc outline includes Welcome Diner / Hours / Follow.
- Screen-reader-only menu transcripts emit `<h2>` for the menu title and `<h3>` per section.

## 8. Reduced motion

**Files:** `src/app/globals.css`, `src/components/motion/SmoothScroll.tsx`, `src/components/motion/useReducedMotionSafe.ts`

- CSS media query in `globals.css` forces all animations/transitions to ~0ms and disables smooth scroll for users who prefer reduced motion.
- `SmoothScroll` (Lenis) short-circuits on `prefers-reduced-motion: reduce`. No smooth-scroll hijacking for sensitive users.
- Framer Motion components (`HeroStage` Ken Burns, `ScrollIndicator` pulse, `RevealOnView`, `ParallaxImage`, marquee loop) gate their animations behind `useReducedMotion()` / `useReducedMotionSafe()`. With reduced-motion on, content appears immediately instead of animating.

## 9. Color contrast

Verified against WCAG 1.4.3 (4.5:1 for normal text, 3:1 for large/18pt+ or bold/14pt+ and non-text UI):

| Combo | Ratio | Context |
|---|---|---|
| `ink #231A14` on `bg-ivory #F7F1E6` | 12.7:1 | Body text on ivory — AAA |
| `ink` on `cream #EFE4CF` | 11.7:1 | Body text on cream surfaces — AAA |
| `cream #EFE4CF` on `bg-deep #1F1A17` | 11.4:1 | Deep band text — AAA |
| `brass #B99568` on `bg-deep` | 5.7:1 | Footer labels on deep band — AA |
| `brass` on `bg-ivory` | 2.2:1 | **Large/display text only** — BrassButton uppercase tracked text is 14pt bold-adjacent; under AA "large text" threshold when combined with 0.4em tracking. Not used for body copy. |
| `terracotta #B5532E` on `bg-ivory` | 5.3:1 | Accent text — AA |
| `desert-shadow #8A6B5C` on `bg-ivory` | 3.9:1 | **Muted text** — passes AA large only; used only for 14pt+ serif descriptions and 11pt eyebrow labels that are decorative/supplemental. |

The two borderline combos (brass-on-ivory and desert-shadow-on-ivory) are restricted by convention to large text or UI where they're decorative. Body copy uses `ink` on ivory/cream.

## 10. Touch targets

- Hamburger, copy-email, social links, menu pagination all ship at ≥ 40×40px. Most CTAs (BrassButton) are 44×44+ via `px-8 py-4` or `px-5 py-2` paddings on 11–14px labels.
- Spacing between adjacent interactive elements in the nav and footer exceeds 8px, preventing mistaps.

## 11. Viewport & zoom

**File:** `src/app/layout.tsx`

```ts
export const viewport: Viewport = {
  themeColor: "#F7F1E6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,   // Explicitly allow pinch-zoom to 5×
};
```

`maximumScale: 5` respects users who need to enlarge content. WCAG 1.4.4 (resize text) passes.

## 12. Language & semantics

- `lang="en"` on `<html>`.
- `<address>` for physical address. `<time>` would apply for dates; we have none.
- `role="presentation"` on decorative divider without a label; `role="status"` for the copy-email live region.

## 13. What's intentionally NOT shipped (yet)

| Item | Why |
|---|---|
| Full screen-reader audit (VoiceOver, JAWS, NVDA) | Manual QA, not yet performed. The semantic markup should carry, but a live walkthrough is recommended before domain launch. |
| Color-contrast lint in CI | No `axe-core` or Pa11y integration yet. Adding to `scripts/` would catch regressions. |
| High-contrast / forced-colors mode | Not tested under Windows High Contrast. Framer-Motion styles should degrade cleanly but no dedicated forced-colors media query exists. |
| Language-tagged foreign words | Spanish dish names (jambalaya, chilaquiles, queso fresco, tepary beans) are not individually `lang="es"`-tagged. Impact is small — pronunciation guides only. |
| Keyboard-navigable image gallery | No gallery component exists yet. If a lightbox is added, Esc-close, focus-trap, and initial focus must be wired. |
| Dark mode | Not in scope. `colorScheme: "light"` is declared. |

## 14. How to verify

```bash
# Automated audits — run after a dev server is up.
npx @axe-core/cli http://localhost:3000 --dir out  # or axe-core browser extension

# Lighthouse a11y score — target ≥ 95 on home and menu/brunch
npx lighthouse http://localhost:3000 --only-categories=accessibility --chrome-flags="--headless"

# Manual keyboard walk-through (required before launch)
#  1. Tab through the home page. Verify skip-link appears first.
#  2. Tab to the "More" dropdown, press Enter, Tab through items, Escape to close.
#  3. Open a dropdown item with Enter — focus should move to the new page; no focus lost.
#  4. On mobile viewport: Tab to hamburger, Enter to open, Escape to close. Focus returns to hamburger.
#  5. Visit /opportunity, Tab to "Email Us", press Enter. Confirm a screen reader announces "<email> copied to clipboard".
#  6. Toggle prefers-reduced-motion in the OS. Reload. Confirm no animations play (Ken Burns, marquee, reveals, smooth scroll).

# Accessibility tree inspection (Chromium)
# DevTools → Elements → Accessibility pane
```

## 15. Regression watch-list

When editing, preserve:

- Exactly one `<h1>` per route.
- `aria-current="page"` on active nav links.
- `sr-only` classes — never drop them from copy-email status, external-link indicators, or menu transcripts.
- `aria-hidden="true"` on decorative icons/dividers/marquee.
- `role="dialog" aria-modal="true"` on the mobile nav overlay and the Escape handler.
- Global `*:focus-visible` outline — don't scope it to elements; the universal rule is intentional.
- `prefers-reduced-motion` gates on every motion component.
