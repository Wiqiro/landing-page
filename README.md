## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build & export

- Build and export static files: `npm run build` (this runs `next build && next export`).
- Serve the exported `out/` directory: `npm run start` (this uses the `serve` command; you can also use any static file server).

- The site is statically exported with routes under `/<locale>/...` (`/fr`, `/en`).
