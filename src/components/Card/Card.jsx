import React, { useState } from "react";
import * as S from "./Card.style";
import checkmark from "../../assets/checkmark.svg";

let activeUser = [];

function insertStud(id) {
  activeUser.push({ id: id });
  console.log(activeUser);
}

function removeStud(id) {
  activeUser = activeUser.filter((x) => x.id !== id);
  console.log(activeUser);
}

function Card({ children, id }) {
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
      Vardenis Pavardenis {children}
      <S.Img src={checkmark}></S.Img>
    </S.CardItem>
  );
}

export default Card;
