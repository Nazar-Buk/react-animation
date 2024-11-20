///////////////////////////////
// Додаю таку бібліотеку yarn add react-wavify
//////////////////////////////

import { useState } from "react";
import Wave from "react-wavify";

const WavesLogo = () => {
  const [wavesColor, setWavesColor] = useState("#0270f7");

  return (
    <div className="waves-logo">
      <h1>
        <i class="material-icons">waves</i> <span>Waves Logo</span>
      </h1>
      <div className="buttons">
        <button onClick={() => setWavesColor("#f80fec")}>Pink</button>
        <button onClick={() => setWavesColor("#f86d0f")}>Orange</button>
        <button onClick={() => setWavesColor("#0270f7")}>Blue</button>
        <button onClick={() => setWavesColor("#712cf9")}>Purple</button>
      </div>
      <div className="wrap-wave-logo-component">
        <div className="logo-wave-text">
          <span>{"< " + "BUK _" + " />"}</span>
        </div>
        <Wave
          fill={wavesColor}
          paused={false}
          style={{ display: "flex", height: " 100%", paddingTop: "350px" }}
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

export default WavesLogo;
