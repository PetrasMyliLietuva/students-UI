import React, { useState } from "react";
import * as S from "./Card.style";
// import checkmarkAct from "../../assets/checkmarkActive.svg";

function Card({ id, name, surname, handleChange }) {
  const [display, setDisplay] = useState(false);

  return (
    <S.Wrapper active={display}>
      <S.Label htmlFor={id}>
        {name} {surname}
      </S.Label>
      <S.RadioButton
        id={id}
        type="radio"
        name="student"
        value={id}
        onChange={handleChange}
        active={display}
        onFocus={() => setDisplay(true)}
        onBlur={() => setDisplay(false)}
      />
    </S.Wrapper>
  );
}

export default Card;
