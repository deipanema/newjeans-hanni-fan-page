import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-screen-2xl mx-auto text-center flex items-center justify-between p-4 my-8">
      <Link href="/">
        <h1 className="text-5xl font-bold">Hanni Pham Fanpage</h1>
      </Link>
      <nav className="flex gap-6">
        <Link href="/">홈</Link>
        <Link href="/about">개요</Link>
        <Link href="/posts">게시글</Link>
        <Link href="/contact">연락</Link>
      </nav>
    </header>
  );
}
