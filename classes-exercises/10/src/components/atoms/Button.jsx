/* eslint-disable react/prop-types */

const Button = ({ classes, type, functionOnClick, children }) => {
  return (
    <>
      <button className={classes} type={type} onClick={functionOnClick}>
        {children}
      </button>
    </>
  );
};
export default Button;
