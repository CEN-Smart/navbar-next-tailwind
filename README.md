# This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## This Repo contains a code sample for a simple Navbar with mobile and desktop views

The Navbar is built using [Tailwind CSS](https://tailwindcss.com/). The Navbar is responsive and has a mobile and desktop view. The mobile view is a hamburger menu that opens a sidebar. The desktop view is a horizontal navbar.

The Navbar is built using [React Hooks](https://reactjs.org/docs/hooks-intro.html). 

Steps to build the Navbar:

- Copy the code from `src/components/navbar/Navbar.tsx` into your project
- Copy the code from `src/components/navbar/NavbarMobile.tsx` into your project
- Copy the `tailwindcss styles` in the `global.css` file into your project
- To ensure everything works, copy the `tailwind.config.js` file into your project and install dependencies in `package.json` file
  
  ```bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  ```

**`Note`:**

The `md:` breakpoints use are used to target the mobile view. You can change the breakpoints to target your mobile view.

For example, if you want to target the mobile view at `sm` breakpoint, you can change the `md:` breakpoints to `sm:` breakpoints.

You can add your own styling to the Navbar by adding your own Tailwind CSS classes to the Navbar components.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
