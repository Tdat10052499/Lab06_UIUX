# Design System Strategy: The Cinematic Nocturne

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Auteur."** 

We are moving away from the "SaaS-standard" layout of rigid boxes and safe grids. Instead, we are designing a cinematic, editorial experience that feels like a high-end film title sequence or a luxury boutique lookbook. This system prioritizes atmosphere, depth, and intentionality. By utilizing fullscreen motion backgrounds and high-contrast typography, we create an immersive environment where the interface doesn't just "house" content—it frames it.

The aesthetic breaks the "template" look through:
*   **Intentional Asymmetry:** Off-center typography and staggered image placements.
*   **Breathing Room:** Utilizing large-scale spacing (16, 20, 24 tokens) to force focus.
*   **Tonal Depth:** Replacing borders with light and shadow (Glassmorphism).

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, midnight abyss (`surface: #001524`), providing a canvas where light and glass can dance.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional borders are a sign of "default" design. In this system, boundaries are created through:
*   **Background Shifts:** Moving from `surface` to `surface-container-low`.
*   **Negative Space:** Using the spacing scale to create distinct visual islands.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of frosted glass sheets. 
*   **Base:** `surface` (#001524) or a fullscreen video background.
*   **Level 1 (Subtle Lift):** `surface-container-low` for large content blocks.
*   **Level 2 (Active Focus):** `surface-container-high` for interactive cards or navigation bars.
*   **Nesting Example:** A `surface-container-highest` card should sit inside a `surface-container-low` section to create natural, soft-edge definition.

### The "Liquid Glass" Rule
To achieve the signature "liquid-glass" effect, use `surface-variant` or `secondary-container` at 40-60% opacity. Apply a `backdrop-filter: blur(24px)`. This allows the deep navy or background video to bleed through, ensuring the UI feels integrated into the environment rather than "pasted" on top.

### Signature Textures
Main CTAs should use a subtle linear gradient: `primary` (#c6c6c7) to `primary-fixed-dim`. This adds a "metallic luster" that flat colors lack, reinforcing the premium feel.

---

## 3. Typography: Editorial Authority
We utilize a "High-Contrast Serif" pairing to evoke a sense of heritage and cinematic scale.

*   **Display & Headlines:** `Instrument Serif` (notoSerif token). Use `tracking-tight` (-0.02em to -0.04em) for all display sizes. This font is our "Voice." It should be large, commanding, and often used in `on-surface` (white) for maximum impact.
*   **Body & UI:** `Inter`. This is our "Utility." It must remain legible and humble. Use `body-md` for standard descriptions and `label-md` for metadata.
*   **The Hierarchy:** Use `display-lg` (3.5rem) sparingly for Hero moments. Ensure a massive jump between `headline-lg` and `body-lg` to maintain the "Editorial" look—never settle for "middle-ground" font sizes.

---

## 4. Elevation & Depth
Depth in this system is a result of light physics, not structural dividers.

*   **Tonal Layering:** Avoid shadows on elements sitting directly on the background. Only use shadows for "Floating" elements (e.g., Modals or Glass Navbars).
*   **Ambient Shadows:** If a lift is required, use a shadow with a 40px–60px blur and 5% opacity. The color should be `#00101c` (surface-container-lowest), not pure black, to keep the deep blue tones "alive."
*   **The Ghost Border Fallback:** If accessibility requires a stroke (e.g., in a high-glare environment), use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons (Liquid Glass)
*   **Primary:** `rounded-full`, Background: `primary` (#c6c6c7), Text: `on-primary`. Apply a subtle glow on hover using a 10px spread of the primary color at 20% opacity.
*   **Secondary (Liquid):** `rounded-full`, Background: `surface-variant` at 30% opacity, `backdrop-blur: 12px`. Text: `on-surface`.
*   **Interaction:** On click, scale the button down slightly (0.98) to simulate physical glass being pressed.

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Execution:** Use `surface-container-low` for the card body. To separate list items, use a background shift to `surface-container-high` on hover, or simply use `spacing-4` (1.4rem) between items.

### Navigation
*   **The Cinematic Bar:** A floating `rounded-full` pill centered at the top or bottom of the screen. Use `surface-container-highest` at 50% opacity with a heavy blur. This keeps the focus on the fullscreen content.

### Input Fields
*   **Styling:** No bottom-line or box-border. Use a soft `surface-container-lowest` background with `rounded-md` (1.5rem). Text should be `on-surface`, while helper text uses the muted `on-surface-variant`.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** allow video backgrounds to play behind the UI. Ensure a `surface` overlay at 20% opacity sits over the video to maintain text contrast.
*   **Do** use asymmetrical layouts (e.g., Title on the left, Body text on the far right).
*   **Do** use `rounded-full` for all interactive triggers to contrast against the sharp, tall serifs of the typography.

### Don't:
*   **Don't** use 100% opaque black or grey. Every "dark" color must have a hint of navy blue (#001524).
*   **Don't** use "Standard" 16px padding for everything. Vary your spacing—use `spacing-20` for section gaps and `spacing-3` for internal element grouping.
*   **Don't** use icons with heavy fills. Use thin-stroke (1px) icons to match the elegance of `Inter` and `Instrument Serif`.