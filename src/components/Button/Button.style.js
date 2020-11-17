import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.background
      : props.theme.secondary.background};
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary.color
      : props.theme.secondary.color};

  background: ${(props) =>
    props.color === "mainPalette" && props.theme.palette.blue};
  color: ${(props) =>
    props.color === "mainPalette" && props.theme.palette.lightBrown};
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.color === "primary"
        ? props.theme.primary.hover.background
        : props.theme.secondary.hover.background};
    background: ${(props) =>
      props.color === "mainPalette" && props.theme.palette.darkBrown};
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }
`;
