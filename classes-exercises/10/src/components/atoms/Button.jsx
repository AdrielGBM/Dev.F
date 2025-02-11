/* eslint-disable react/prop-types */

const Button = ({ classes, type, children }) => {
  return (
    <>
      <button className={classes} type={type}>
        {children}
      </button>
    </>
  );
};
export default Button;
