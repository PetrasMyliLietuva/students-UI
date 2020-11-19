import React, { useEffect, useState } from "react";
import { Card, Section, Button } from "../../components/";
import * as S from "./About.style";

function About() {
  const [studentsList, setStudentsList] = useState([]);
  const [error, setError] = useState(null);

  function DeleteAttendance(id) {
    console.log("fetchinam" + id);
    let value = prompt("To delete please enter password");
    if (value !== null) {
      fetch("http://127.0.0.1:8080/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, pass: value }),
      })
        .then((data) => {
          if (data.status === 200) {
            setError("The attendance was deleted.");
            setStudentsList(studentsList.filter((x) => x.id !== id));
            console.log(studentsList);
          } else {
            setError(
              `Delete was not accepted because of this error: ${data.statusText}`
            );
          }
        })
        .catch((err) => setError(err));
    } else {
      setError(null);
    }
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8080/attendance")
      .then((res) => res.json())
      .then((data) => setStudentsList(data));
  }, []);

  return (
    <Section>
      {error && <h2>{error}</h2>}
      <S.Heading>
        Attendance on {new Date().toLocaleDateString("lt-LT")}
      </S.Heading>
      <S.Wrapper>
        {studentsList.map((x) => (
          <S.MarginBlock key={x.id}>
            <div style={{ width: "80%", display: "inline-block" }}>
              <Card name={x.name} surname={x.surname} id={x.id} />
            </div>
            <div style={{ width: "20%", display: "inline-block" }}>
              <Button handleClick={(e) => DeleteAttendance(x.id)}>
                Delete
              </Button>
            </div>
          </S.MarginBlock>
        ))}
      </S.Wrapper>
    </Section>
  );
}

export default About;
