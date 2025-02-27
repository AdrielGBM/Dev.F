/* eslint-disable react/prop-types */

function TableData({ parentClass, children }) {
  const elementClass = parentClass + "-data";
  return <td className={elementClass}>{children}</td>;
}

export default TableData;
