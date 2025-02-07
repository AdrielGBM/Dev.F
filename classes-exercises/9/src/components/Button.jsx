/* eslint-disable react/prop-types */
const Button = ({ classes, type, title }) => {
  return (
    <>
      <button className={classes} type={type}>
        {title}
      </button>
    </>
  );
};
export default Button;
