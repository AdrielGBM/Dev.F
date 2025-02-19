/* eslint-disable react/prop-types */

const Button = ({ classes, type, functionOnClick, disabled, children }) => {
  return (
    <>
      <button
        className={classes}
        type={type}
        onClick={functionOnClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
