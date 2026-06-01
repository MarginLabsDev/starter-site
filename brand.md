# Brand — TODO: client name

Internal reference. Every agent and designer must read this before touching any file.
Do not hardcode any value that appears here — always reference via CSS variables.

---

## Audience & Tone
- Target: [describe target customer]
- Tone: [e.g. warm, professional, minimal, bold]
- Vibe: [e.g. luxury, approachable, modern, energetic]

---

## Colors
```
--color-primary: #000000
--color-secondary: #000000
--color-accent: #000000
--color-background: #ffffff
--color-surface: #f5f5f5
--color-text: #000000
--color-muted: #666666
--color-border: #e0e0e0
```

---

## Typography
```
--font-heading: 'Font Name', sans-serif
--font-body: 'Font Name', sans-serif
```

- Heading font: [name — weight used — use case]
- Body font: [name — weight used — use case]
- Max two font families. No CDN links. Local woff2 only in /public/fonts/

---

## Logo
- Format: SVG
- Location: /public/images/logo.svg
- Dark variant: /public/images/logo-dark.svg (if needed)
- Minimum size: [px]
- Clear space: [rule]

---

## Do not
- Never use colors outside this palette
- Never load fonts from Google Fonts or any CDN
- Never hardcode hex values in components — always use CSS variables
