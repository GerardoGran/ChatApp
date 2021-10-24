import React from "react";
import socketIOClient, { Socket } from "socket.io-client";
import "./App.css";
import { ChatWindow } from "./Containers/ChatWindow";

const ENDPOINT = "localhost:2021";
const socket: Socket = socketIOClient(ENDPOINT);

function App() {
  return <ChatWindow socket={socket} />;
}

export default App;
