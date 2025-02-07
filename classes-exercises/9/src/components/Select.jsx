/* eslint-disable react/prop-types */
const Select = ({ id, classes, title, options = [] }) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>

      <select id={id} className={classes} name={id}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
