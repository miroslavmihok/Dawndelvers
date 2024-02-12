import React from "react";
import GameItem from "./GameItem";
import { Navigation, A11y, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../../../../Data/products";
import "swiper/css";
import "swiper/css/navigation";

function Games() {
  return (
    <div className="mb-8 flex w-full flex-col items-center justify-center px-8 sm:mb-10 md:mb-12 xl:mb-14">
      <Swiper
        style={{
          "button-prev": "300px",
        }}
        modules={[Navigation, FreeMode, A11y]}
        className="w-full lg:w-[742px] xl:w-[880px] 2xl:w-[980px]"
        breakpoints={{
          0: {
            spaceBetween: 15,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 3,
          },
          1280: {
            spaceBetween: 15,
            slidesPerView: 4,
          },
        }}
        loop={true}
        freeMode={true}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* relative flex w-full min-w-0 flex-col items-center justify-center */}
        {/* flex w-full min-w-0 max-w-full flex-row overflow-x-auto  */}
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <GameItem
              title={product.title}
              url={product.url}
              bgUrl={product.bg}
              logoUrl={product.logo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Games;
