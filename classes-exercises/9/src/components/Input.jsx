/* eslint-disable react/prop-types */
const Input = ({ id, classes, type, title, placeholder = "" }) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        className={classes}
        type={type}
        name={id}
        placeholder={type !== "date" ? placeholder : undefined}
      />
    </>
  );
};
export default Input;
