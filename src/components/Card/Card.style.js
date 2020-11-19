import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 50px;
  padding: 15px 40px;
  color: ${(props) => props.theme.primary.color};
  text-align: center;
  background: ${(props) => props.theme.palette.green};
  border: 1.5px solid;
  border-radius: 50px;
  object-fit: cover;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-color: ${(props) =>
    props.active === true
      ? props.theme.palette.yellow
      : props.theme.palette.blue};
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  visibility: hidden;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.palette.yellow};

  &&:checked:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -1px;
    left: -1px;
    position: relative;
    background: ${(props) => props.theme.palette.yellow};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid ${(props) => props.theme.palette.lightBrown};
  }
`;
