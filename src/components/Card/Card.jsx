import React, { useState } from "react";
import * as S from "./Card.style";
import checkmarkAct from "../../assets/checkmarkActive.svg";

function Card({ id, name, surname, callback }) {
  const [display, setDisplay] = useState(0);

  return (
    <S.CardItem
      active={display}
      onClick={() => {
        callback();
        display ? setDisplay(0) : setDisplay(1);
      }}
    >
      <S.Title>{name + " " + surname}</S.Title>
      <S.Img active={display} src={display && checkmarkAct} />
    </S.CardItem>
  );
}

export default Card;
