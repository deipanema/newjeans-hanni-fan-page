import AdjacentPostCard from "@/components/AdjacentPostCard";
import MarkdownViewer from "@/components/MarkdownViewer";
import { getFeaturedPosts, getPostData } from "@/service/Posts";
import Image from "next/image";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title, description } = await getPostData(slug);
  return { title, description };
}

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostData(slug);
  const { title, description, date, content, category, next, prev } = post;
  return (
    <article className="m-4">
      <h2 className="text-4xl font-bold">{title}</h2>
      <time className="text-gray-500">{`발매일 ${date.toString()}`}</time>
      <div className="w-1/3 mx-auto mt-8">
        <Image
          src={`/images/posts/${category}.jpg`}
          alt={title}
          width={760}
          height={420}
          className=" h-1/3 max-h-[500px]"
        />
        <p className="mt-3">{description}</p>
      </div>
      <section className="flex flex-col mt-14">
        <MarkdownViewer content={content} />
      </section>
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({ slug: post.path }));
}
