import React from "react";
import { Button, Section } from "../../components/";

function Home() {
  return (
    <>
      <Section background="eee">Welcome to the React boilerplate</Section>
      <Section>
        This is the Home page with a button:
        <Button color="primary" handleClick={() => alert("Hi")}>
          Click me
        </Button>
      </Section>
    </>
  );
}

export default Home;
