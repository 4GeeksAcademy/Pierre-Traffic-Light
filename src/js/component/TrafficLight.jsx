import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("none");
  const [extraLight, setExtraLight] = useState(false);
  const [randomLights, setRandomLights] = useState(false);

  useEffect(() => {
    if (randomLights) {
      const timer = setInterval(generateRandomLights, 500);
      return () => clearInterval(timer);
    }
  }, [randomLights]);

  const generateRandomLights = () => {
    const lights = ["red", "orange", "green", "purple"];
    const random = lights[Math.floor(Math.random() * light.length)];
    setLight(random);
  };

  return (
    <section className="main-container">
      <div className="traffic-light">
        <div className="bar"></div>
        <div className="light-container">
          <div
            className={`red ${light === "red" ? "clicked" : ""}`}
            onClick={() => setLight("red")}
          />
          <div
            className={`orange ${light === "orange" ? "clicked" : ""}`}
            onClick={() => setLight("orange")}
          />
          <div
            className={`green ${light === "green" ? "clicked" : ""}`}
            onClick={() => setLight("green")}
          />
          {extraLight || light === "purple" ? (
            <div
              className={`purple ${light === "purple" ? "clicked" : ""}`}
              onClick={() => setLight("purple")}
            />
          ) : null}
        </div>
      </div>
      <div className="controls">
        <button onClick={() => setRandomLights(!randomLights)}>
          {randomLights ? "Stop" : "Start"} Random Lights
        </button>
        <button onClick={() => setExtraLight(!extraLight)}>
          {extraLight ? "Remove" : "Add"} Lights
        </button>
      </div>
    </section>
  );
};

export default TrafficLight;
