# Blog CMS Indie Gamer

A modern and minimalistic blogging platform built for indie game developers. This app allows creators to publish blog posts, manage content easily through a CMS, and share their review / thought for the game dev community.

Deployemnt link: [https://nextjs-blog-cms-indie-gamer-k7t5.vercel.app](https://nextjs-blog-cms-indie-gamer-k7t5.vercel.app).

## Technology Used

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn](https://ui.shadcn.com/)
- [Sanity](https://www.sanity.io/)

## Prerequisites

Before setting up this project, make sure you have the following installed:

- Node.js (v18 or newer)
- Node package manager (bun recommended)
- Sanity Project For CMS: [https://www.sanity.io/manage?new-project](https://www.sanity.io/manage?new-project)

## Getting Started

1.  Clone this repository to your local machine.
2.  In the project folder, rename **.env.example** to **.env** (no period after).
3.  Set **all** the environment variables according to the instructions I've included in the file. If you don't set them properly, the application is not going to work.
4.  Run `bun install` to install the dependencies.
5.  Run `bun run dev` to start the web server.

## Adding Data

1. Open your browser and navigate to: `http://localhost:3000/studio`

2. On your first visit:

   - You’ll be prompted to log in with your Sanity account
   - You may need to approve CORS settings
   - Click Continue when prompted

3. Once inside the Studio:

   - You can create new blog posts, categories, or authors
   - All content will be reflected on the main site
