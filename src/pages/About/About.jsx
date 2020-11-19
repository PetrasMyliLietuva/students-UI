import React, { useEffect, useState } from "react";
import { Card, Section } from "../../components/";
import * as S from "./About.style";

// function Register(studentid, date) {
//   fetch("http://127.0.0.1:8080/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id: Number(studentid), date: date }),
//   });
// }

function About() {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/attendance")
      .then((res) => res.json())
      .then((data) => setStudentsList(data));
  }, []);

  return (
    <Section>
      <S.Heading>
        Attendance on {new Date().toLocaleDateString("lt-LT")}
      </S.Heading>
      <S.Wrapper>
        {studentsList.map((x) => (
          <S.MarginBlock key={x.id}>
            <Card
              name={x.name}
              surname={x.surname}
              id={x.id}
              handleChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </S.MarginBlock>
        ))}
      </S.Wrapper>
    </Section>
  );
}

export default About;
