# LIU LI-YANG — Personal Web Page

A single-page personal portfolio website for **LIU LI-YANG**, styled after the modern dark aesthetic of the Hostinger Adelina template.

---

## ✨ Features

- **Dynamic Live Clock** — Displays the current local time, updating every second with a gradient seconds-progress bar
- **Fully Responsive (RWD)** — Fluid layouts across all screen sizes: mobile (xs/sm), tablet (md), and desktop (lg) using `clamp()` and four media query breakpoints
- **Parallax Mouse Effect** — Subtle 3D depth as you move your cursor (automatically disabled on touch devices)
- **Premium Dark Design** — Deep black background with vibrant electric purple accents
- **Floating Background Particles** — Colorful ambient particles drift across the canvas
- **Mouse Burst Particles** — Interactive colored dashes explode from cursor movement
- **Layered Typography** — Three font styles creating visual depth:
  - **Syne ExtraBold** — Ultra-chunky display font for the hero name
  - **Playfair Display Italic** — Elegant cursive overlay for contrast
  - **Inter** — Clean sans-serif for UI labels and metadata
- **Animated Entry** — Staggered slide-up animations on page load
- **Glassmorphism UI** — Frosted-glass hero card and clock card with hover glow effects
- **Conic Gradient Avatar** — Spinning rainbow ring around the avatar initials
- **Noise Texture Overlay** — Subtle film-grain effect for a premium feel
- **Accessibility** — Respects `prefers-reduced-motion` system setting

---

## 📐 Responsive Breakpoints

| Breakpoint | Range         | Behavior                                          |
|------------|---------------|---------------------------------------------------|
| xs         | < 480px       | Compact header, stacked layout, adjusted font     |
| sm         | 480–767px     | Large phone layout, smaller cards                 |
| md         | 768–1023px    | Tablet layout with adjusted spacing and sizing    |
| lg         | ≥ 1024px      | Full desktop experience (default)                 |

All font sizes and spacings use CSS `clamp()` for smooth, continuous scaling between breakpoints — no sudden jumps.

---

## 🗂️ File Structure

```
LIU LI YANG/
├── index.html   # Semantic page structure
├── style.css    # RWD styles: fluid type, layout, animations, glassmorphism
├── app.js       # Live clock, particles, mouse burst effects, parallax
└── README.md    # This file
```

---

## 🎨 Design System

| Element        | Value                      |
|----------------|----------------------------|
| Background     | `#030303` (Near Black)     |
| Primary Text   | `#e2e8f0` (Soft White)     |
| Accent Color   | `#A358FF` (Electric Purple)|
| Secondary      | `#06b6d4` (Cyan)           |
| Tertiary       | `#f43f5e` (Rose)           |
| Display Font   | Syne ExtraBold             |
| Script Font    | Playfair Display Italic    |
| UI Font        | Inter                      |
| Mono Font      | JetBrains Mono             |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic page structure
- **Vanilla CSS3** — Custom properties, `clamp()`, keyframe animations, `backdrop-filter`, RWD media queries
- **Vanilla JavaScript** — No frameworks or build tools required
- **Canvas API** — Floating particles and mouse burst effects

---

## 🚀 Getting Started

No build step required. Simply open the file in a browser:

```bash
# Clone the repository
git clone https://github.com/saaaacd/liu-li-yang-personal-page.git

# Open in browser
start index.html   # Windows
open index.html    # macOS
```

---

## 🌐 GitHub Pages Deployment

To activate GitHub Pages hosting:

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → Folder: **/ (root)**
4. Click **Save**
5. The site will be live within a minute

---

Built with ❤️ — inspired by the Hostinger Adelina template.
