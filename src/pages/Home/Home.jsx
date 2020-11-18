import React, { useEffect, useState } from "react";
import { Button, Card, Section } from "../../components/";
import * as S from "./Home.style";

function Home(id) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <Section>
      <S.Heading>Mark Your attendance</S.Heading>
      <S.Wrapper>
        {students.map((x) => (
          <S.MarginBlock key={x.id}>
            <Card
              name={x.name}
              surname={x.surname}
              id={x.id}
              handleclick={(e) => console.log("ho")}
            />
          </S.MarginBlock>
        ))}

        <Button
          color="mainPalette"
          type="submit"
          // handleClick={() => console.log("yay")}
          callback={(id) => console.log(id)}
        >
          Submit
        </Button>
      </S.Wrapper>
    </Section>
  );
}

export default Home;
