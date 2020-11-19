import React, { useEffect, useState } from "react";
import { Button, Card, Section } from "../../components/";
import * as S from "./Home.style";

function Register(studentid, date) {
  fetch("http://127.0.0.1:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: Number(studentid), date: date }),
  });
}

function Home() {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <Section>
      <S.Heading>Mark Your attendance</S.Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Register(studentId, new Date());
        }}
      >
        <S.Wrapper>
          {students.map((x) => (
            <S.MarginBlock key={x.id}>
              <Card
                name={x.name}
                surname={x.surname}
                id={x.id}
                handleChange={(e) => {
                  setStudentId(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </S.MarginBlock>
          ))}
          <Button color="mainPalette" type="submit">
            Submit
          </Button>
        </S.Wrapper>
      </form>
    </Section>
  );
}

export default Home;
