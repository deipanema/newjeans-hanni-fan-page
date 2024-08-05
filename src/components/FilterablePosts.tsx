"use client";

import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";
import { Post } from "@/service/Posts";

type FilterablePosts = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

export default function FilterablePosts({
  posts,
  categories,
}: FilterablePosts) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex">
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <PostsGrid posts={filtered} />
    </section>
  );
}
