import Image from "next/image";
import illustration from "../public/images/illustration-mockups.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col md:grid md:grid-cols-7 md:grid-rows-[0.3fr_0.3fr_0.2fr] min-h-screen items-center gap-16 md:gap-0">
      <div className="mx-10 md:mx-16 mt-16 md:row-start-1 md:col-start-1 md:row-end-3 md:col-end-5">
        <Image src={illustration} alt="illustration mockup" />
      </div>
      <div className="text-center md:text-left flex flex-col gap-5 md:row-start-1 md:col-start-5 md:row-end-3 md:col-end-8">
        <h1 className="px-10 font-semibold text-2xl md:text-4xl">
          Build The Community Your Fans Will Love
        </h1>
        <p className="px-9 md:pl-10 md:text-lg md:pr-14">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <a
          className="bg-white text-chViolet rounded-full mx-24 md:mx-10 md:text-center md:w-1/3 md:text-lg py-3 shadow-[0px_10px_10px_0px_#00000024] hover:bg-softMagenta hover:text-white"
          href="#"
        >
          Register
        </a>
      </div>
      <div className="flex flex-row gap-3 md:self-start md:justify-end md:row-start-3 md:col-start-6 md:row-end-4 md:col-end-8 md:mx-14">
        <FaFacebookF className="border border-white rounded-full px-2 md:px-3 w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-softMagenta hover:border-softMagenta" />
        <FaTwitter className="border border-white rounded-full px-2 md:px-3 w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-softMagenta hover:border-softMagenta" />
        <FaInstagram className="border border-white rounded-full px-2 md:px-3 w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-softMagenta hover:border-softMagenta" />
      </div>
    </main>
  );
}
