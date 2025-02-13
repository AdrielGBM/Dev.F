/* eslint-disable react/prop-types */

import Button from "../atoms/Button";

const CounterButtons = ({ value, add, subtract, message }) => {
  return (
    <>
      <div className="container">
        <Button classes="button" type={"button"} functionOnClick={add}>
          +
        </Button>
        <p className="title">{value}</p>
        <Button classes="button" type={"button"} functionOnClick={subtract}>
          -
        </Button>
      </div>
      <p>{message}</p>
    </>
  );
};

export default CounterButtons;
