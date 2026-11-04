# Digital Loop website

A responsive React + Vite marketing/portfolio website with a custom Three.js hero sculpture.

## Run locally
1. Install Node.js (18+ recommended).
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local URL Vite prints.

## Production build
Run `npm run build`. The deployable site is generated in `dist/`.

## Before publishing
- In `src/main.jsx`, replace `hello@digital-loop.example` with the real enquiry email.
- The enquiry form currently opens the visitor's email app using a `mailto:` link. It is not a server-backed form yet.
- The three portfolio cards are explicitly labelled concept demonstrations. Replace or expand them only with genuine demos you have built.
- Review the public company/legal details and add privacy/legal pages if collecting personal information.
- For a lightweight deployment, connect this repository to a static host such as Render Static Sites, Netlify or Vercel.

## Stack
React, Vite, Three.js, React Three Fiber, Drei, GSAP dependency available for future motion work, Lucide icons and custom CSS.
