# Personal Portfolio — Maryam Mutlaq

A responsive portfolio built with HTML5, CSS3 and vanilla JavaScript (no frameworks).

## Sections
Navbar, About Me (with photo), Skills grid, Projects 00-03 (plus graduation project),
Certificates, Hobbies, Contact form, Footer.

## Responsive design
Flexbox layout + media queries at 768px (tablet) and 480px (mobile).

## Theme switcher: event lifecycle
1. **User action**: the user clicks the "Theme" button.
2. **Event firing**: the browser creates a `click` event on `#theme-toggle` and propagates it.
3. **JavaScript callback**: the listener registered with `addEventListener('click', switchTheme)` runs `switchTheme()`.
4. **DOM/CSS mutation**: `classList.toggle('dark')` adds/removes the `dark` class on `<body>`. This changes the CSS variables (`--bg`, `--text`, `--card`, `--accent`), so the browser recalculates styles and repaints the page with a smooth transition.

The choice is saved in `localStorage` so it persists after reload.
