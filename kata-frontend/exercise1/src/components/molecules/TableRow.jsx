/* eslint-disable react/prop-types */

import TableCell from "../atoms/TableCell";

function TableRow({ parentClass }) {
  const elementClass = parentClass + "-row";
  return (
    <tr className={elementClass}>
      <TableCell parentClass={elementClass}></TableCell>
    </tr>
  );
}

export default TableRow;
