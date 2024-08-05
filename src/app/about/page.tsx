import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Hani's Career Introduction",
};

const TITLE_CLASS = "text-4xl font-bold my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Is She?</h2>
        <p>
          대한민국에서 활동하는 가수.
          <br />
          ADOR 소속 5인조 걸그룹 NewJeans의 멤버.
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>ADOR NewJeans 멤버(~현재)</p>
        <p>쏘스뮤직 연습생(~2020)</p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>Visual, Vocal, Dance</p>
      </section>
    </>
  );
}
