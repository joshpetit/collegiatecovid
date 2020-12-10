import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors/";
import NavBar from "./HomePageComponents/NavBar";

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arial',
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif'
    ].join(','),
    h4: {
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "2vh",
    },
    button: {
      fontSize: "1.5rem",
    },
  },
  palette: {
    secondary: {
      main: "#92a6f8",
    },
  },
});

export default function App() {
  return (
  <ThemeProvider theme={theme}>
    <NavBar />
  </ThemeProvider>
    )

}
