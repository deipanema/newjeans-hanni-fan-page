import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";

export default function Hero() {
  return (
    <section className="text-center mt-8">
      <Image
        src={profileImage}
        alt="profile"
        width={250}
        height={250}
        className="rounded-full mx-auto"
        priority
      />
      <h2 className="text-4xl font-bold mt-4">Hanni Pham</h2>
      <h3 className="text-xl font-semibold">ADOR</h3>
      <p>NewJeans</p>
      <Link href="/contact">
        <button className="bg-sky-300 py-2 px-4 mt-6 font-semibold rounded-md hover:text-white">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
