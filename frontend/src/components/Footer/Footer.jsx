import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import { categories } from "../../Data/categories";
import { footerMenu } from "../../Data/footerMenu";

function Footer() {
  return (
    <div className="flex items-center justify-center px-8 pt-8">
      <div className="flex flex-col items-center justify-center xl:max-w-[1120px]">
        <div className="mb-8 flex w-full items-center justify-center gap-4 text-xl">
          <a
            href="/"
            className="rounded-md border-none bg-mediumPurple p-2 hover:bg-lightPurple"
          >
            <FaFacebookF />
          </a>
          <a
            href="/"
            className="rounded-md border-none bg-mediumPurple p-2 hover:bg-lightPurple"
          >
            <FaInstagram />
          </a>
          <a
            href="/"
            className="rounded-md border-none bg-mediumPurple p-2 hover:bg-lightPurple"
          >
            <FaTiktok />
          </a>
          <a
            href="/"
            className="rounded-md border-none bg-mediumPurple p-2 hover:bg-lightPurple"
          >
            <FaYoutube />
          </a>
          <a
            href="/"
            className="rounded-md border-none bg-mediumPurple p-2 hover:bg-lightPurple"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="mb-8 w-full text-center">
          <div className="mb-8 grid w-full grid-cols-2">
            {footerMenu.map((item, index) => (
              <ul key={index} className="leading-7">
                <h5 className="mb-2 uppercase tracking-widest">
                  {item.heading}
                </h5>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="w-full">
            <div className="mb-2 w-full columns-2">
              <h5 className="uppercase tracking-widest">Games</h5>
            </div>
            <div className="w-full columns-2">
              <ul className="leading-7">
                {categories.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8 text-center">
          <span>
            Dawndelvers is not endorsed by, directly affiliated with,
            maintained, or sponsored by Blizzard Entertainment, Bungie,
            Electronic Arts, Grinding Gear Games, Activision Publishing, Square
            Enix Co., Valve, Battlestate Games, Wargaming.net Limited, Amazon
            Technologies, Jagex Limited, Riot Games, Smilegate RPG, Digital
            Extremes. The views and opinions expressed by Dawndelvers do not
            reflect those of anyone officially associated with producing or
            managing their game franchises. Copyrighted art submitted to or
            through Dawndelvers remains the intellectual property of the
            respective copyright holder. Dawndelvers does not engage in the sale
            of in-game items. Instead, our service focuses on enhancing players'
            in-game skills.
          </span>
        </div>
        <div className="mb-8">
          <span>&copy; Dawndelvers 2024. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
