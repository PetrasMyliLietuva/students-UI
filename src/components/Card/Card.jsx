import React, { useState } from "react";
import * as S from "./Card.style";
import checkmark from "../../assets/checkmark.svg";

function Card({ children }) {
  const [display, setDisplay] = useState(0);

  return (
    <S.CardItem
      active={display}
      onClick={() => setDisplay(1)}
      onMouseUp={() => setDisplay(0)}
    >
      Vardenis Pavardenis {children}
      <S.Img src={checkmark}></S.Img>
    </S.CardItem>
  );
}

export default Card;
