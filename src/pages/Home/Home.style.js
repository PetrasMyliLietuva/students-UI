import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 500px;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.palette.darkBrown};
  text-align: center;
  line-height: 2;
`;

export const MarginBlock = styled.div`
  margin-bottom: 7px;
  &&:last-of-type {
    margin-bottom: 40px;
  }
`;
