import React from "react";
import bg from "../../assets/backgrounds/main-home-rev-2.png";
import { useGamesData } from "../../context/gamesCtx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

function WorkWithUs() {
  const { games } = useGamesData();

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        background: `linear-gradient(0deg, rgba(28,16,36,1) 0%, rgba(28,16,36,0) 50%, rgba(28,16,36,1) 100%), url(${bg}) center center / cover no-repeat`,
      }}
    >
      <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
        <Breadcrumbs />
        <h2 className="mb-14">Work with us</h2>
        <div className="flex w-full flex-col items-center justify-center gap-4 text-black">
          <div className="flex w-full max-w-[800px] flex-col gap-4 md:min-w-[565px]">
            <div className="flex w-full gap-4">
              <button
                className="rounded-md border border-white/25 bg-transparent px-5 py-3 text-white outline-0 hover:border-lightPurple hover:bg-lightPurple focus:border-lightPurple focus:bg-lightPurple"
                autoFocus
              >
                Booster
              </button>
              <button className="rounded-md border border-white/25 bg-transparent px-5 py-3 text-white outline-0 hover:border-lightPurple hover:bg-lightPurple focus:border-lightPurple focus:bg-lightPurple">
                Coach
              </button>
            </div>
            <div className="">
              <form className="grid grid-cols-1 grid-rows-8 gap-4 sm:grid-cols-4 sm:grid-rows-4">
                <select className="col-span-1 rounded-md px-5 py-3 sm:col-span-2">
                  <option hidden>Choose game</option>
                  {games.map((product, index) => (
                    <option key={index} value={product.title}>
                      {product.title}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Your Discord"
                  className="col-span-1 rounded-md px-5 py-3 sm:col-span-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="col-span-1 rounded-md px-5 py-3 sm:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Your Country"
                  className="col-span-1 rounded-md px-5 py-3 sm:col-span-2"
                />
                <textarea
                  type="text"
                  placeholder="Tell us about your self"
                  className="col-span-1 row-span-3 min-h-[120px] rounded-md px-5 py-3 sm:col-span-4"
                ></textarea>
                <button
                  type="submit"
                  className="col-span-1 rounded-md border border-lightPurple bg-transparent px-5 py-3 text-white outline-0 hover:bg-lightPurple focus:border-lightPurple"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;
