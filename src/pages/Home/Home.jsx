import React from "react";
import { Button, Card, Section } from "../../components/";
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
        <Button
          color="mainPalette"
          type="submit"
          handleClick={() => console.log("You've clicked")}
        >
          Submit
        </Button>
      </S.Wrapper>
    </Section>
  );
}

export default Home;
