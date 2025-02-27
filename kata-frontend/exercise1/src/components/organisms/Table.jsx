/* eslint-disable react/prop-types */

import TableRow from "../molecules/TableRow";

function Table({ parentClass, data }) {
  const elementClass = parentClass + "__table";

  return (
    <table className={elementClass}>
      <thead className={elementClass + "-head"}>
        <TableRow
          parentClass={elementClass}
          row={{
            type: "th",
            elements: ["ID", "Título", "Usuario", "Etiquetas"],
          }}
        ></TableRow>
      </thead>
      <tbody className={elementClass + "-body"}>
        {data.map((element, index) => {
          return (
            <TableRow
              key={index}
              parentClass={elementClass}
              row={{
                elements: [
                  element.number,
                  [element.title, element.html_url],
                  element.user.login,
                  element.labels.map((label) => [label.name, label.color]),
                ],
              }}
            ></TableRow>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
