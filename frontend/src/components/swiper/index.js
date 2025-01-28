import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

const SwiperModule = () => {
  const swiper = useSwiper();
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><div>swipe 1</div></SwiperSlide>
        <SwiperSlide><div>swipe 2</div></SwiperSlide>
        <SwiperSlide><div>swipe 3</div></SwiperSlide>
        <SwiperSlide><div>swipe 4</div></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperModule;
