# Francesca's Cucina — Design Brainstorm

## Design Philosophy Options

<response>
<text>
**Idea 1: Roman Noir — Dark Luxury Editorial**
- **Design Movement**: Art Deco meets contemporary dark luxury editorial (think Nobu, Carbone NYC)
- **Core Principles**: Darkness as elegance; gold as punctuation not decoration; typography does the heavy lifting; restraint over abundance
- **Color Philosophy**: Near-black charcoal (#0f0d0b) as the canvas, aged parchment (#e8dcc8) for body text, a single deep burgundy (#8b1a2f) as the brand accent, and 22k gold (#c9a84c) used sparingly for dividers and highlights only. The palette evokes a candlelit cellar.
- **Layout Paradigm**: Full-bleed asymmetric sections — hero spans 100vw with text anchored bottom-left. Content sections alternate between full-bleed image left + text right, then text left + image right. Menu uses a two-column editorial layout on desktop, single column on mobile.
- **Signature Elements**: Thin gold horizontal rules (1px) between sections; italic serif display type for section labels; subtle grain texture overlay on dark backgrounds
- **Interaction Philosophy**: Slow, deliberate transitions (600ms ease-out). Hover states reveal rather than transform — underlines draw in, images desaturate slightly. Nothing bounces.
- **Animation**: Fade-up entrance animations (40px translateY, opacity 0→1, 700ms). Parallax on hero image. Menu items stagger in on scroll.
- **Typography System**: Cormorant Garamond (700 italic) for hero headlines; Cormorant Garamond (400) for subheadings; DM Sans (300/400) for body copy. Scale: 80px hero, 48px section heads, 18px body.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Idea 2: Tuscan Modernist — Warm Minimal**
- **Design Movement**: Italian Modernism meets Scandinavian minimalism — think Eataly meets Muji
- **Core Principles**: Warmth through restraint; terracotta and linen as the emotional palette; generous whitespace; food photography as the primary visual language
- **Color Philosophy**: Off-white linen (#faf6f0) background, deep espresso (#2c1a0e) for text, terracotta (#c4622d) as the accent, and sage green (#7a8c6e) as a secondary tone. Evokes a sun-drenched Tuscan farmhouse.
- **Layout Paradigm**: Generous vertical rhythm with large section breaks. Hero uses a split layout: left half is a full-height food photo, right half is the brand statement on linen. Menu sections use a card grid with generous padding.
- **Signature Elements**: Terracotta brush-stroke dividers (SVG); rounded serif display font; subtle linen texture on section backgrounds
- **Interaction Philosophy**: Warm, inviting hover states — buttons fill with terracotta, images scale gently (1.03x). Feels like being welcomed in.
- **Animation**: Gentle fade-in on scroll (no translateY). Smooth color transitions on interactive elements (300ms).
- **Typography System**: Playfair Display (700) for headlines; Playfair Display (400 italic) for subheadings; Source Serif 4 (400) for body. Scale: 72px hero, 42px section heads, 17px body.
</text>
<probability>0.06</probability>
</response>

<response>
<text>
**Idea 3: Contemporary Italian — Cinematic Dark with Gold Accents** ← SELECTED
- **Design Movement**: Contemporary fine dining editorial — inspired by Eleven Madison Park, Le Bernardin, and modern Italian luxury brands
- **Core Principles**: Cinema-quality photography as the foundation; typography as sculpture; gold as warmth not ostentation; the site should feel like opening a high-end menu
- **Color Philosophy**: Deep charcoal-black (#0c0b09) for backgrounds, warm ivory (#f5f0e8) for primary text, antique gold (#b8965a) for accents and interactive elements, and a muted brick red (#7a2828) used only for the brand wordmark. The palette is confident and timeless.
- **Layout Paradigm**: Vertical editorial scroll with full-bleed hero. Navigation is minimal — fixed top bar with transparent background that transitions to solid on scroll. Sections use a "magazine spread" approach: alternating full-bleed imagery with typographic content blocks. Menu page uses a clean list format with category anchors.
- **Signature Elements**: Thin gold horizontal rules; spaced-out uppercase tracking for section labels (letter-spacing: 0.3em); a subtle noise/grain texture on dark sections for tactile depth
- **Interaction Philosophy**: Understated elegance — hover states use opacity shifts and thin underlines. Buttons are outlined with gold, filling on hover. No aggressive animations.
- **Animation**: Scroll-triggered fade-up (50px, 800ms cubic-bezier). Hero text appears with a slow reveal. Navigation items have a subtle slide-in on page load.
- **Typography System**: Cormorant Garamond (600 italic) for the brand wordmark and hero headlines; Cormorant Garamond (400) for section subheadings; DM Sans (300) for body copy and navigation. Scale: 96px hero, 52px section heads, 16px body. Letter-spacing on all-caps labels: 0.25em.
</text>
<probability>0.09</probability>
</response>

## Selected Design: Contemporary Italian — Cinematic Dark with Gold Accents

The third approach best captures the "classy and modern" brief. It uses the restaurant's existing warmth (exposed brick, candlelight) and elevates it through cinematic photography, restrained typography, and a confident dark palette. The result feels like a Michelin-starred restaurant's website — approachable but unmistakably premium.
