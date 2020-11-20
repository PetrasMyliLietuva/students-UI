import React, { useState } from "react";
import * as S from "./Card.style";
import checkmarkAct from "../../assets/checkmarkActive.svg";

function Card({ id, name, surname, handleChange }) {
  const [display, setDisplay] = useState(false);

  return (
    <S.Wrapper active={display}>
      <S.RadioButton
        id={id}
        type="radio"
        name="student"
        value={id}
        onChange={handleChange}
        onFocus={(e) => setDisplay(true)}
        onBlur={(e) => setDisplay(false)} //todo: onFocus event not working
      />
      <S.Label htmlFor={id}>
        {name} {surname}
      </S.Label>

      <S.RadioImg src={checkmarkAct} alt="Check" active={display} />
    </S.Wrapper>
  );
}

export default Card;
