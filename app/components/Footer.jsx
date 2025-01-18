import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="w-36 mx-auto mb-2 dark:text-white">VIKASH</h1>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6 "
          />{" "}
          vikashmishra8610@gamil.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>@ 2025 Vikash Kumar Mishra. All rights reserved.</p>
      </div>

      <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
        <li>
          <a target="_blank" href="https://github.com/Vik123-gif">
            Github
          </a>
        </li>
        <li>
          <a target="_blank" href="">
            instagram
          </a>
        </li>
        <li>
          <a target="_blank" href="">
            LinkedIn
          </a>
        </li>
        <li>
          <a target="_blank" href="">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
