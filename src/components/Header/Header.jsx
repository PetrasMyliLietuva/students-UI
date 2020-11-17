import React from "react";
import * as S from "./Header.style";

function Header({ background }) {
  return (
    <S.Header background={background}>
      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/view">View</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
