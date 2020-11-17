import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./Card";

storiesOf("Card", module).add("Card Item", () => (
  <>
    <Card id="1" />

    <Card id="2" />
  </>
));
