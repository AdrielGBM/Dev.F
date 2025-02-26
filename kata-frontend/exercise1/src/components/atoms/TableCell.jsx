/* eslint-disable react/prop-types */

function TableCell({ parentClass }) {
  const elementClass = parentClass + "-cell";
  return <td className={elementClass}></td>;
}

export default TableCell;
