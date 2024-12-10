////////////////////////////// Додаю таку бібліотеку swiper
///// yarn add swiper
//////////////////////////////

import CubeSliderSwiper from "../components/sliders/CubeSliderSwiper";

const SliderCube = () => {
  return (
    <div className="slider-cube">
      <h1>
        <span class="material-symbols-outlined">deployed_code</span> Cube Slider{" "}
      </h1>
      <div className="wrap-slider-cube">
        <CubeSliderSwiper />
      </div>
    </div>
  );
};

export default SliderCube;
