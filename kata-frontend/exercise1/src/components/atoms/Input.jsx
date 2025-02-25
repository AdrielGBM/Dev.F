/* eslint-disable react/prop-types */

function Input({ id, parentClass, type, placeholder }) {
  const elementClass = parentClass + "-input";

  return (
    <input
      id={id}
      className={elementClass}
      type={type}
      name={id}
      placeholder={placeholder}
    />
  );
}

export default Input;
