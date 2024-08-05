import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { AiFillYoutube, AiOutlineInstagram, AiFillHome } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Contact ADOR",
  description: "Send an Email to ADOR",
};

const LINKS = [
  {
    icon: <AiFillYoutube />,
    url: "https://www.youtube.com/@NewJeans_official",
  },
  {
    icon: <AiOutlineInstagram />,
    url: "https://www.instagram.com/NewJeans_Official/",
  },
  { icon: <AiFillHome />, url: "https://newjeans.kr/" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-4xl font-bold my-2">Contact ADOR</h2>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-3xl hover:text-sky-300"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <p className="font-bold my-2">Or Send an Email to ADOR</p>
      <ContactForm />
    </section>
  );
}
