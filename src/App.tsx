import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import CallToActionWithVideo from "./components/Hero/Hero";

const theme = extendTheme({
  colors: {
    jc: {
      yellow: "#FFB700",
      polyBlue: "#024D95",
      honoBlue: "#0077B6",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <CallToActionWithVideo />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
