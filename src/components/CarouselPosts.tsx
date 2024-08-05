import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";
import { getNonFeaturedPosts } from "@/service/Posts";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section>
      <h2 className="text-4xl font-bold mt-14 mb-4">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
