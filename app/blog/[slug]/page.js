export default function BlogPostPage({ params }) {
  //params is passed by nextjs automatically
  return (
    <main>
      <h1>Blog Post</h1>
      {params.slug}
    </main>
  );
}
