import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  min-height: 1500px;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.palette.darkBrown};
  text-align: center;
  line-height: 2;
`;

export const MarginBlock = styled.div`
  margin-bottom: 5px;
`;
