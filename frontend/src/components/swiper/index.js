import { Swiper, SwiperSlide } from "swiper/react";
import { allMen } from "../../constants";

const SwiperModule = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Object.keys(allMen).map((men, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="flex justify-center pt-16">
                <img
                  src={allMen[men].img}
                  style={{ objectFit: "contain" }}
                  width={200}
                  height={300}
                  alt="img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperModule;
