// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Pagination, A11y, EffectCube } from "swiper/modules";

// Import Swiper styles
// import "swiper/swiper-bundle.css"; // Витягує стилі зі всіх модулів, без цієї штуки кубіку буде погано

import "swiper/css";
import "swiper/css/effect-cube"; // а так можна тягнути стилі для конкретного модуля

import "swiper/css/pagination";

import pictureOne from "../../img/sliders/cube-slider/01.jpg";
import pictureTwo from "../../img/sliders/cube-slider/02.jpg";
import pictureTree from "../../img/sliders/cube-slider/03.jpg";
import pictureFour from "../../img/sliders/cube-slider/04.jpg";
import pictureFive from "../../img/sliders/cube-slider/05.jpg";
import pictureSix from "../../img/sliders/cube-slider/06.jpg";

const slidesMockData = [
  {
    image: pictureTwo,
  },
  {
    image: pictureTree,
  },
  {
    image: pictureFour,
  },
  {
    image: pictureFive,
  },
  {
    image: pictureSix,
  },
  {
    image: pictureOne,
  },
];

const CubeSliderSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, A11y, EffectCube]}
        // spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {slidesMockData.map((slider) => {
          return (
            <SwiperSlide className="cube-slide">
              <img className="cube-slide-img" src={slider.image} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default CubeSliderSwiper;
