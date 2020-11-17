import styled from "styled-components";

export const CardItem = styled.div`
  width: 100%;
  padding: 15px 0;
  color: #ffffff;
  text-align: center;
  background: #36827f;
  border: 2px solid;
  border-radius: 50px;
  object-fit: cover;
  cursor: pointer;
  box-sizing: border-box;
  border-color: ${(props) => (props.active == 1 ? "#f9db6d" : "#464d77")};
`;

export const Img = styled.img`
  width: 20px;
  float: right;
  padding-right: 20px;
`;
