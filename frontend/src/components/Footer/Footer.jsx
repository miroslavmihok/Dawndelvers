import React from "react";
import { Link } from "react-router-dom";
import useGamesFetch from "../../hooks/useGamesFetch";
import { footerMenu } from "../../data/footerMenu";
import { BeatLoader } from "react-spinners";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";

function Footer() {
  const { areGamesLoading, games } = useGamesFetch(
    `${process.env.REACT_APP_GAMES_URL}`,
  );

  return (
    <div className="flex items-center justify-center bg-darkPurple px-8 pt-8">
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
                    <Link to={link.url}>{link.title}</Link>
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
                {areGamesLoading && <BeatLoader color="#fff" />}
                {!areGamesLoading &&
                  games &&
                  games.map((item, index) => (
                    <li key={index}>
                      <Link to={`products/${item.url}`}>{item.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-8 text-center">
          <span>
            BoostingService is not endorsed by, directly affiliated with,
            maintained, or sponsored by Blizzard Entertainment, Bungie,
            Electronic Arts, Grinding Gear Games, Activision Publishing, Square
            Enix Co., Valve, Battlestate Games, Wargaming.net Limited, Amazon
            Technologies, Jagex Limited, Riot Games, Smilegate RPG, Digital
            Extremes. This is only a portfolio project created by{" "}
            <Link
              to={"https://miroslavmihok.com/"}
              className="font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Miroslav Mihok
            </Link>
            .
          </span>
        </div>
        <div className="mb-8">
          <span>&copy; BoostingService 2024. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
