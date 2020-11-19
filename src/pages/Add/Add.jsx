import React, { useState } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./Add.style";

function addStudent(name, surname, email) {
  fetch(`http://127.0.0.1:8080/students`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      surname,
      email,
    }),
  });
}

function Add() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState({});

  return (
    <Section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addStudent(name, surname, email);
        }}
      >
        <InputField
          labelText="name"
          handleChange={(e) => setName(e.target.value)}
        />
        <InputField
          labelText="surname"
          handleChange={(e) => setSurname(e.target.value)}
        />
        <InputField
          labelText="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <S.Wrapper>
          <Button type="submit" color="mainPalette">
            Add Student
          </Button>
        </S.Wrapper>
      </form>
    </Section>
  );
}

export default Add;
