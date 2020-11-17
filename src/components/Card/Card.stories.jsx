import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./Card";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";

storiesOf("Card", module).add("Card Item", () => (
  <ThemeProvider theme={theme}>
    <Card id="1" />
    <Card id="2" />
  </ThemeProvider>
));
