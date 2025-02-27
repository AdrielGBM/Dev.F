/* eslint-disable react/prop-types */

import Label from "../atoms/Label";
import Input from "../atoms/Input";

function SearchBar({ parentClass, label, input }) {
  const elementClass = parentClass + "__search-bar";

  return (
    <div className={elementClass}>
      <Label parentClass={elementClass} htmlFor={input.id}>
        {label}
      </Label>
      <Input
        id={input.id}
        parentClass={elementClass}
        type={"text"}
        placeholder={input.placeholder}
        functionOnChange={input.functionOnChange}
      ></Input>
    </div>
  );
}

export default SearchBar;
