import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 50px;
  padding: 15px 0;
  padding-left: 40px;
  color: ${(props) => props.theme.primary.color};
  text-align: center;
  background: ${(props) => props.theme.palette.green};
  border: 2px solid;
  border-radius: 50px;
  object-fit: cover;
  cursor: pointer;
  box-sizing: border-box;
  border-color: ${(props) =>
    props.active === 1 ? props.theme.palette.yellow : props.theme.palette.blue};
`;

export const Img = styled.img`
  opacity: ${(props) => (props.active === 1 ? "1" : 0)};
  width: 20px;
  float: right;
  padding-right: 20px;
`;

export const Title = styled.h3`
  flex: 1;
`;
