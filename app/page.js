// this component is rendered on the server side. if you have a console.log here in this component then it won't show in the browser console

export default function Home() {
  console.log("this is rendered on the server");

  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
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
