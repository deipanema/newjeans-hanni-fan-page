import { Post } from "@/service/Posts";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  post: { title, description, date, category, path },
}: {
  post: Post;
}) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image
          src={`/images/posts/${category}.jpg`}
          width={300}
          height={200}
          alt={category}
          className="w-full"
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-600">{date.toString()}</time>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-red-100 px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
