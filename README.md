# Delta Studio

Static site for [deltastudio.io](https://deltastudio.io) — a UX product design studio by Alberto & Rob.

Plain HTML/CSS/JS, no build step. Hover a client to reveal its project image.

## Local preview
Open `index.html`, or serve the folder:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Structure
- `index.html` — markup + client list (add a client = one `<li>` with `data-img`)
- `style.css` — layout & tokens (`--accent` is the hover magenta)
- `app.js` — hover/focus image reveal
- `assets/` — project images (one per client), favicon, OG image
