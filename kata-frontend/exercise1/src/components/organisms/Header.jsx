/* eslint-disable react/prop-types */

import Title from "../atoms/Title";
import SearchBar from "../molecules/SearchBar";

function Header({ title }) {
  return (
    <header className={"header"}>
      <Title parentClass={"header"}>{title}</Title>
      <SearchBar
        parentClass={"header"}
        label={"Buscar issue:"}
        input={{ id: "search", placeholder: "Escribe algo..." }}
      ></SearchBar>
    </header>
  );
}

export default Header;
