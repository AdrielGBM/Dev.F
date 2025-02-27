/* eslint-disable react/prop-types */

function Input({ id, parentClass, type, placeholder, functionOnChange }) {
  const elementClass = parentClass + "-input";

  return (
    <input
      id={id}
      className={elementClass}
      type={type}
      name={id}
      placeholder={placeholder}
      onChange={(event) => functionOnChange(event.target.value)}
    />
  );
}

export default Input;
