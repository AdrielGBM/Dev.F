/* eslint-disable react/prop-types */

import TableRow from "../molecules/TableRow";

function Table({ parentClass }) {
  const elementClass = parentClass + "__Table";

  return (
    <table className={elementClass}>
      <TableRow parentClass={elementClass}></TableRow>
    </table>
  );
}

export default Table;
