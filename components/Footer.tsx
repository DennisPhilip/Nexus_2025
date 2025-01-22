import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";



const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">

      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
      <h1 className="heading lg:max-w-[45vw] text-center">
        Ready to build the{" "}
        <span className="text-purple">Next Generation</span> of Technology?
      </h1>
      <p className="text-white-200 md:mt-10 my-5 text-center">
        Register for <span className="text-purple">NexGen 2.0</span> and be a part of the future of technology
      </p>

      <a
        href="mailto:nexus_cse@pes.edu"
        className="flex items-center gap-2 cursor-pointer z-10"
      >
        <Image src="/mail.svg" alt="mail" width={25} height={25} />
        <p>Email: nexus_cse@pes.edu</p>
      </a>

      {/* Button */}
        <MagicButton
          title="NexGen 2.0"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => window.open("https://nexgen-20.vercel.app/", "_blank")}
        />
    </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
            Made with <span className="text-purple">❤️</span> by{" Nexus Club "}
            <br></br>
          Copyright © 2025 Nexus
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => window.open(info.link, "_blank")}
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;