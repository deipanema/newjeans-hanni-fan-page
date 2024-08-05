import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hanni Pham Fanpage",
    template: "Hanni Pham | %s",
  },
  description:
    "Explore the latest updates, photos, and news about Hanni Pham from NewJeans. Join the fan community and stay connected!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full">
        <Header />
        <main className="grow w-full max-w-screen-2xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
