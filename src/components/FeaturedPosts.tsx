import { getFeaturedPosts } from "@/service/Posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className="text-4xl font-bold mt-14 mb-4">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
