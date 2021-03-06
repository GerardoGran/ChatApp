import React from "react";
import { io, Socket } from "socket.io-client";
import "./App.css";
import FormDialog from "./Components/Modal";
import { ChatWindow } from "./Containers/ChatWindow";

const ENDPOINT = "192.168.100.22:2021";
const socket: Socket = io(ENDPOINT);

function App() {
  return (
    <React.Fragment>
      <ChatWindow socket={socket} />
      <FormDialog />
    </React.Fragment>
  );
}

export default App;
