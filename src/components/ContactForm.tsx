"use client";

import { useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

const TEXT_CLASS = "p-3 placeholder-gray-700";

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: "success!", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: "Try again.", state: "fail" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md flex flex-col gap-2 m-14 pt-16 pb-10 px-10 bg-gray-100 rounded-lg"
      >
        <label htmlFor="from" className="sr-only">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          value={form.from}
          onChange={onChange}
          placeholder="Email"
          className={TEXT_CLASS}
          required
          autoFocus
        />
        <label htmlFor="subject" className="sr-only">
          Title
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={onChange}
          className={TEXT_CLASS}
          required
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={onChange}
          className={TEXT_CLASS}
          required
        />
        <button className="bg-sky-300 font-bold mt-3 p-3 hover:text-white">
          Submit
        </button>
      </form>
    </>
  );
}
