## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Internationalization (simple JSON dictionaries)

- Dictionaries live in `dictionaries/<locale>/` as JSON files (for example `dictionaries/fr/common.json`).
- To add a locale: create `dictionaries/<locale>/` and copy the JSON keys, then rebuild (`npm run build`).
- Keys missing in a JSON will show the raw key on the page as a fallback.

Build & export

- Build and export static files: `npm run build` (this runs `next build && next export`).
- Serve the exported `out/` directory: `npm run start` (this uses the `serve` command; you can also use any static file server).

Notes

- The site is statically exported with routes under `/<locale>/...` (for example `/fr`, `/en`).
- The root `/` redirects statically to the default locale `/fr`.
