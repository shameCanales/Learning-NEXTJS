import Link from "next/link";
import Header from "@/components/Header";

// this component is rendered on the server side. if you have a console.log here in this component then it won't show in the browser console

export default function Home() {
  console.log("this is rendered on the server");

  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}

// ROUTING : File based routing
// Nextjs works with react server components
// -Components which require a special "environment" NEXTJS provides such an environment
// React Server Components (RSC) - Rendered only on the server never on the client

//adding another route via the file system
//localhost:3000/about - for example we want to have an about page
//define routes using folders

// RESERVED FILE NAMES
// - layout.js : defines the shell around one or more pages. we need at least one root layout filef
// - page.js : defines the content of the page
// - export const metadata : for head element of website.
// layout.js : create a new layout that wraps siblings and nested pages
// not-found.js : fallback page for "Not Found" errors (Thrown by siblin or nested pages or layouts)
// error.js : Fallback page for other errors (thrown by sibling pages or nested pages or layouts
// loading.js : Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
// route.js : Allows you to create an API route (i.e. a page which does not return jsx code but instead data, e.g. in the JSON format)
