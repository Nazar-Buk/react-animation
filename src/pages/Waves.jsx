///////////////////////////////
// Додаю таку бібліотеку yarn add react-wavify
//////////////////////////////

import Wave from "react-wavify";

const Waves = () => {
  return (
    <div className="waves">
      <h1>
        <span class="material-symbols-outlined">waves</span> Waves
      </h1>
      <div className="wrap-wave-component">
        <div className="Sun"></div>
        <Wave
          fill="#0270f7"
          paused={false}
          style={{ display: "flex", height: " 100%", paddingTop: "250px" }}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.25,
            points: 6,
          }}
        />
      </div>
    </div>
  );
};

export default Waves;
