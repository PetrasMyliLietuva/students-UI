import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: #${(props) => props.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.5);
  position: relative;
`;

export const Logo = styled.img`
  max-height: 50px;
  max-width: 100%;
  vertical-align: top;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.8s ease-in-out;
  color: #6b6b6b;

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    color: #000;
  }
`;
