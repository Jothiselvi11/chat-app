import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { AuthContextProvider } from "./context/AuthContent";
// import { ChatContextProvider } from "./context/ChatContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <AuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      </AuthContextProvider>
  
);