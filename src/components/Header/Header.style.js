import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background: #${(props) => props.theme.palette.yellow};
  padding: 20px;
  box-shadow: 1px 1px 4px rgb(0, 0, 0, 0.5);
  position: relative;
`;

export const ActionsWrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

export const Actions = styled.nav`
  text-align: right;
  opacity: 0.5;
  &a:hover {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.palette.blue};

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    color: #000;
  }
`;
