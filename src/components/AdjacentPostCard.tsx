import { Post } from "@/service/Posts";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type AdjacentPostCard = {
  post: Post;
  type: "prev" | "next";
};

const ICON_CLASS = "text-4xl m-4 transition-all group-hover:text-7xl";

export default function AdjacentPostCard({
  post: { title, description, path },
  type,
}: AdjacentPostCard) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full max-h-56">
      <div className="w-full h-40 bg-gray-200 opacity-40"></div>
      <div className="group absolute top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/3 w-full flex justify-around items-center px-8">
        {type === "prev" && <IoIosArrowBack className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold line-clamp-2">{description}</p>
        </div>
        {type === "next" && <IoIosArrowForward className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
