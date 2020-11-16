import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "./../../assets/logo.svg";

function Header({ background }) {
  return (
    <S.Header background={background}>
      <Link to="/">
        <S.Logo src={logoImg} alt="Logo" />
      </Link>
      <S.Actions>
        <S.StyledLink to="/">Home</S.StyledLink>
        <S.StyledLink to="/about">About</S.StyledLink>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
