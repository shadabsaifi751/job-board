# Dynamic Job Board

This responsive, modern Dynamic Job Board is built using **Next.js (Pages Router)**, matching the premium aesthetics requested. It includes full state-based filtering (by search, location, category, and type), micro-interactions, subtle shadow/glassmorphism effects, and highly readable vanilla CSS.

## Getting Started Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment Guidelines

### Vercel (Recommended)

You can deploy this application securely via [Vercel](https://vercel.com).

1. Push this repository to GitHub.
2. Go to your Vercel dashboard and click "Add New Project" -> "Import from Git".
3. Select your repository. Vercel will automatically detect that this is a **Vite** project.
4. Leave the default build command (`npm run build`) and output directory (`dist`).
5. Click **Deploy**.

### Netlify

1. Push to GitHub.
2. Go to Netlify -> "Add new site" -> "Import an existing project".
3. Select this repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site**.

## Features Implemented

- **Data Binding:** Hardcoded list of jobs populated via `/src/data/jobs.js`.
- **Filtering Interface:** Robust state-management system seamlessly filters by search intent, categories, tags, and locations without lag.
- **Visual Excellence:** Completely custom Vanilla CSS, clean UI architecture, hover animations, no generic Bootstrap layout utilized.
- **Component-Driven:** Cleanly broken down into dedicated components inside `/src/components/`.
- **SEO Ready:** Meta tags and OpenGraph tags cleanly optimized.
