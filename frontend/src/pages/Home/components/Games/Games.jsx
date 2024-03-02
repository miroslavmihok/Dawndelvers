import React from "react";
import GameItem from "./GameItem";
import { useGamesData } from "../../../../dataContext/gamesCtx";
import { Navigation, A11y, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Games() {
  const { isLoading, error, games } = useGamesData();

  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
      <Swiper
        modules={[Navigation, FreeMode, A11y]}
        className="w-full lg:w-[742px] xl:w-[880px] 2xl:w-[980px]"
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        // loop={true}
        freeMode={true}
        navigation
      >
        {error
          ? "Something went wrong"
          : isLoading
            ? "loading"
            : games.map((game, index) => (
                <SwiperSlide key={index}>
                  <GameItem
                    title={game.title}
                    url={game.url}
                    bgUrl={game.bg}
                    logoUrl={game.logo}
                  />
                </SwiperSlide>
              ))}
      </Swiper>
    </div>
  );
}

export default Games;
