import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "normalize.css";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.palette.lightBrown};
    font-family: 'Open Sans', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
