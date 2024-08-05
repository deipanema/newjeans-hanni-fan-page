import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "NewJeans Career",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </>
  );
}
