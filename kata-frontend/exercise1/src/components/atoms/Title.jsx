/* eslint-disable react/prop-types */

function Title({ parentClass, children }) {
  const elementClass = parentClass + "__title";

  return <h1 className={elementClass}>{children}</h1>;
}

export default Title;
