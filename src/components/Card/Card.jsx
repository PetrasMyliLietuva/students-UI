import React, { useState } from "react";
import * as S from "./Card.style";
import checkmarkAct from "../../assets/checkmarkActive.svg";

let activeUser = [];

function insertStud(id) {
  activeUser.push({ id: id });
  console.log(activeUser);
}

function removeStud(id) {
  activeUser = activeUser.filter((x) => x.id !== id);
  console.log(activeUser);
}

function Card({ id }) {
  const [display, setDisplay] = useState(0);

  return (
    <S.CardItem
      active={display}
      onClick={() => {
        if (!display) {
          setDisplay(1);
          insertStud(id);
        } else {
          setDisplay(0);
          removeStud(id);
        }
      }}
    >
      <S.Title>Name Surname Name Surname</S.Title>
      <S.Img active={display} src={display && checkmarkAct} />
    </S.CardItem>
  );
}

export default Card;
