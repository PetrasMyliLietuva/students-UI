import React, { useState } from "react";
import * as S from "./Card.style";
import checkmarkAct from "../../assets/checkmarkActive.svg";

function Card({ id, name, surname, callback }) {
  const [display, setDisplay] = useState(0);

  let activeUser = [];

  function insertStud(id) {
    activeUser.push({ id: id });
    console.log(activeUser);
  }

  function removeStud(id) {
    activeUser = activeUser.filter((x) => x.id !== id);
    console.log(activeUser);
  }

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
        callback(id);
      }}
    >
      <S.Title>{name + " " + surname}</S.Title>
      <S.Img active={display} src={display && checkmarkAct} />
    </S.CardItem>
  );
}

export default Card;
