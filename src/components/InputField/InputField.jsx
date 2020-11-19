import React, { useState } from "react";
import * as S from "./InputField.style";

function InputField({ name, labelText, handleChange }) {
  const [display, setDisplay] = useState(false);

  return (
    <S.Wrapper displayItem={display} displayBorder={display}>
      <S.Label htmlFor={name} displayItem={display}>
        {labelText}
      </S.Label>
      <S.Input
        type="text"
        id={name}
        placeholder={labelText}
        displayItem={display}
        onFocus={() => setDisplay(true)}
        onBlur={() => setDisplay(false)}
        onChange={handleChange}
      />
    </S.Wrapper>
  );
}

export default InputField;
