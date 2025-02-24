/* eslint-disable react/prop-types */

import Title from "../atoms/Title";

function Header({ title }) {
  return (
    <header className={"header"}>
      <Title parentClass={"header"}>{title}</Title>
    </header>
  );
}

export default Header;
