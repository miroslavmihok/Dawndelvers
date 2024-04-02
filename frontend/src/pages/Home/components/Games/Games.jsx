import React, { useState, useEffect } from "react";
import GameItem from "./GameItem";
import { useGamesData } from "../../../../context/gamesCtx";
import { Navigation, A11y, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ErrorMessage from "../../../../components/UI/ErrorMessage";
import GameSkeleton from "../../../../components/Skeletons/GameSkeleton";
import "swiper/css";
import "swiper/css/navigation";

function Games() {
  const { areGamesLoading, gamesError, games } = useGamesData();
  const [cards, setCards] = useState(
    window.innerWidth < 768 ? 2 : window.innerWidth < 1280 ? 3 : 4,
  );

  const getCardCount = () => {
    return window.innerWidth < 768 ? 2 : window.innerWidth < 1280 ? 3 : 4;
  };

  useEffect(() => {
    const handleResize = () => {
      setCards(getCardCount());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
      {gamesError ? (
        <div className="flex w-full gap-x-4 lg:w-[742px] xl:w-[880px] 2xl:w-[980px]">
          <ErrorMessage msg={gamesError} />
        </div>
      ) : !games || areGamesLoading ? (
        <div className="flex w-full gap-x-4 lg:w-[742px] xl:w-[880px] 2xl:w-[980px]">
          <GameSkeleton cards={cards} />
        </div>
      ) : (
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
          loop={true}
          freeMode={true}
          navigation
        >
          {games.map((game, index) => (
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
      )}
    </div>
  );
}

export default Games;
