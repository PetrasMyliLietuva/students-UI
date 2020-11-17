import React from "react";
import { Section, Card } from "../../components/";
import * as S from "./Home.style";

function Home() {
  return (
    <Section>
      <S.Heading>Mark Your attendance</S.Heading>
      <S.Wrapper>
        <S.MarginBlock>
          <Card />
        </S.MarginBlock>
        <S.MarginBlock>
          <Card />
        </S.MarginBlock>
        <S.MarginBlock>
          <Card />
        </S.MarginBlock>
      </S.Wrapper>
    </Section>
  );
}

export default Home;
