import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 1em 2em;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: 1em 2em;
`;
