/* eslint-disable react/prop-types */

function Light({ color, state }) {
  return (
    <>
      <div className={"light " + color + " " + state}></div>
    </>
  );
}

export default Light;
