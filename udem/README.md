# Nouvel BRc

A small, multi-page React application for a reading community / book-club style site. Built with Vite for a fast development experience and React Router for client-side navigation.

## Highlights

- Multi-page UI (Home, Blog, Blog Post details, Our Picks, About, Contact, Join Us, Login)
- Blog content backed by a simple local data source
- Responsive navigation with a mobile menu toggle
- Vite-powered dev server, production builds, and preview

## Tech Stack

- React
- React Router
- Vite
- ESLint

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local dev URL (typically `http://localhost:5173`).

## Scripts

All commands are run from this project directory.

- `npm run dev` – start the development server
- `npm run build` – create a production build in `dist/`
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint across the codebase

## Routing

This app uses React Router and defines its main routes in `src/App.jsx`.

Common routes:

- `/` – Home
- `/Blog` – Blog
- `/Blog/:id` – Blog post details
- `/RecentBlogs` – Recent blogs
- `/Pick` – Our picks
- `/JoinUs` – Join us
- `/Login` – Login
- `/Contact` – Contact
- `/about` – About

## Content & Data

Blog posts are currently stored in a simple local data file:

- `src/data/posts.js`

Some posts use local images from `src/assets/images/`, and others use external image URLs.

## Project Structure

```text
udem/
	public/
	src/
		assets/
			images/
		components/
		data/
		App.jsx
		main.jsx
```

Key folders:

- `src/components/` – page components (Home, Blog, About, Contact, etc.) and shared UI
- `src/data/` – local data sources (blog posts)
- `src/assets/` – images and other static assets imported by the app

## Build & Deployment

Create a production build:

```bash
npm run build
```

The output is generated in `dist/`. You can serve it locally with:

```bash
npm run preview
```

For static hosting (e.g., GitHub Pages, Netlify, Vercel), deploy the `dist/` folder and ensure the host is configured to serve `index.html` for client-side routes.

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch
3. Open a Pull Request with a clear description and screenshots (if UI changes)

## License

No license file is currently included. If you plan to open-source this project, add a `LICENSE` file and update this section.
