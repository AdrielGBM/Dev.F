import { useState } from "react";
import { useEffect } from "react";

import TrafficLight from "../molecules/TrafficLight";
import Button from "../atoms/Button";

function Main() {
  const [color, setColor] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [message, setMessage] = useState("");

  function stopCars() {
    setIsButtonClicked(true);
  }

  useEffect(() => {
    setColor("green");
    setMessage("Los autos pueden pasar");
  }, []);

  useEffect(() => {
    if (isButtonClicked) {
      setIsButtonDisabled(true);
      setColor("yellow");
      setMessage("¡Precaución!");
      setTimeout(() => {
        setColor("red");
        setMessage("Las personas pueden pasar");
        setTimeout(() => {
          setColor("green");
          setMessage("Los autos pueden pasar");
          setIsButtonDisabled(false);
        }, 10000);
      }, 3000);
      setIsButtonClicked(false);
    }
  }, [isButtonClicked]);

  return (
    <>
      <main className="main">
        <h1 className="title">Semáforo</h1>
        <TrafficLight classes={"traffic-light"} lightOn={color}></TrafficLight>
        <Button
          classes={"button"}
          type={"button"}
          functionOnClick={stopCars}
          disabled={isButtonDisabled}
        >
          Detener autos
        </Button>
        <p className="message">{message}</p>
      </main>
    </>
  );
}

export default Main;
