import React from "react";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import CallToActionWithVideo from "./components/Hero/Hero";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error/NotFound";
import MultiStepRegister from "./components/Register/Register";
import { Provider } from "react-redux";
import store from "./helpers/api/store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CallToActionWithVideo />,
    errorElement: <ErrorPage />,
  },
  { path: "/register", element: <MultiStepRegister /> },
]);

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
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <RouterProvider router={router} />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
