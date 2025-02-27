/* eslint-disable react/prop-types */

import Title from "../atoms/Title";
import SearchBar from "../molecules/SearchBar";

function Header({ title, functionOnChange = () => {} }) {
  return (
    <header className={"header"}>
      <Title parentClass={"header"}>{title}</Title>
      <SearchBar
        parentClass={"header"}
        label={"Buscar issue:"}
        input={{
          id: "search",
          placeholder: "Escribe algo...",
          functionOnChange: functionOnChange,
        }}
      ></SearchBar>
    </header>
  );
}

export default Header;
