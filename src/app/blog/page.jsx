import blogPosts from "@/data/blogPosts";

export default function Blog() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
