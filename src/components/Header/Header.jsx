import React from "react";
import * as S from "./Header.style";

function Header({ background }) {
  return (
    <S.Header background={background}>
      <S.ActionsWrapper>
        <S.Actions>
          <S.StyledLink to="/">Register</S.StyledLink>
          <S.StyledLink to="/view">View</S.StyledLink>
        </S.Actions>
      </S.ActionsWrapper>
    </S.Header>
  );
}

export default Header;
