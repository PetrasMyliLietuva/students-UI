import React, { useState } from "react";
import * as S from "./Card.style";

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
        onFocus={() => setDisplay(1)} //todo: onFocus event not working
      />
    </S.Wrapper>
  );
}

export default Card;
