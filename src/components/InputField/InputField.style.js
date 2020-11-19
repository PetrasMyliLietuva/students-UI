import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding-top: 10px;
  border-bottom: 3px solid ${(props) => props.theme.palette.blue};
  border-bottom: ${(props) => (props.displayBorder ? 0 : "100%")};
  &:focus {
    border-bottom: 0;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: ${(props) => (props.displayBorder ? "100%" : 0)};
    border-bottom: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      45deg,
      rgba(70, 77, 119, 1) 0%,
      rgba(54, 130, 127, 1) 100%
    );
    transition: 1s;
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-top: 20px;
  opacity: ${(props) => (props.displayItem ? 1 : 0)};
  height: ${(props) => (props.displayItem ? "20px" : 0)};
  line-height: ${(props) => (props.displayItem ? "20px" : 0)};
  color: #888;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  background: #f4eded;
  line-height: 2;
  padding: 10px 0;
  border: none;
  outline: none;
  box-sizing: border-box;

  &&::placeholder {
    opacity: ${(props) => (props.displayItem ? 0 : 1)};
    text-transform: uppercase;
    color: #bababa;
  }
`;
