import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import CallToActionWithVideo from "./components/Hero/Hero";

function App() {
  return (
    <ChakraProvider>
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
