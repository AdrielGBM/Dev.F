/* eslint-disable react/prop-types */

import TableTitle from "../atoms/TableTitle";
import TableData from "../atoms/TableData";

function TableRow({ parentClass, row }) {
  const elementClass = parentClass + "-row";
  return (
    <tr className={elementClass}>
      {row.elements.map((element, index) => {
        if (row.type !== "th" && index !== 0) {
          return (
            <TableData key={index} parentClass={parentClass}>
              {index === 1 ? (
                <a
                  className={parentClass + "-a"}
                  href={element[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element[0]}
                </a>
              ) : index === 3 && Array.isArray(element) ? (
                element.map((label, index) => {
                  return (
                    <div
                      key={index}
                      className={parentClass + "-label"}
                      style={{
                        color: `#${label[1]}`,
                        backgroundColor: `#${label[1]}50`,
                        border: `1px solid #${label[1]}`,
                      }}
                    >
                      {label[0]}
                    </div>
                  );
                })
              ) : (
                element
              )}
            </TableData>
          );
        }
        return (
          <TableTitle key={index} parentClass={parentClass}>
            {element}
          </TableTitle>
        );
      })}
    </tr>
  );
}

export default TableRow;
