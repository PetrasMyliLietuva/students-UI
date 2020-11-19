import styled from "styled-components";
import checkmarkAct from "../../assets/checkmarkActive.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 50px;
  padding: 10px 40px;
  color: ${(props) => props.theme.primary.color};
  text-align: center;
  background: ${(props) => props.theme.palette.green};
  border: 1.5px solid;
  border-radius: 3px;
  object-fit: cover;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-color: ${(props) =>
    props.active ? props.theme.palette.yellow : props.theme.palette.blue};
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  visibility: hidden;

  &&:checked::after {
    content: "";
    position: relative;
    bottom: 3px;
    width: 20px;
    height: 20px;
    background: url(${checkmarkAct});
    background-size: cover;
    display: inline-block;
    visibility: visible;
  }
`;
