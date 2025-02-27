/* eslint-disable react/prop-types */

function TableTitle({ parentClass, children }) {
  const elementClass = parentClass + "-title";
  return <th className={elementClass}>{children}</th>;
}

export default TableTitle;
