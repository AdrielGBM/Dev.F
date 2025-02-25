/* eslint-disable react/prop-types */

function Label({ parentClass, htmlFor, children }) {
  const elementClass = parentClass + "-label";

  return (
    <label className={elementClass} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
