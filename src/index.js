import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "../src/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 <Provider store={store}> <ChakraProvider>
    <React.StrictMode>
      
        <App />{" "}
     
    </React.StrictMode>
  </ChakraProvider> </Provider>
);

reportWebVitals();
