/* eslint-disable react/prop-types */

import Light from "../atoms/Light";

function TrafficLight({ classes, lightOn }) {
  return (
    <>
      <div className={classes}>
        <Light color={"green"} state={lightOn === "green" ? "" : "off"}></Light>
        <Light
          color={"yellow"}
          state={lightOn === "yellow" ? "" : "off"}
        ></Light>
        <Light color={"red"} state={lightOn === "red" ? "" : "off"}></Light>
      </div>
    </>
  );
}

export default TrafficLight;
