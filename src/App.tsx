import React from "react";
import { io, Socket } from "socket.io-client";
import "./App.css";
import { ChatWindow } from "./Containers/ChatWindow";

const ENDPOINT = "localhost:2021";
const socket: Socket = io(ENDPOINT);

function App() {
  return <ChatWindow socket={socket} />;
}

export default App;
