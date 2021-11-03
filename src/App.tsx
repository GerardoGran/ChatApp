import React from "react";
import "./App.css";
import FormDialog from "./Components/Modal";
import { ChatWindow } from "./Containers/ChatWindow";

function App() {
  return (
    <React.Fragment>
      <ChatWindow />
      <FormDialog />
    </React.Fragment>
  );
}

export default App;
