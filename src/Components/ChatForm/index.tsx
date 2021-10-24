import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { Socket } from "socket.io-client";

import "./index.css";

type ChatFormProps = {
  socket: Socket;
  addMessage: (message: string) => void;
};

export const ChatForm = ({ socket, addMessage }: ChatFormProps) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    if (messageText !== "" && messageText !== undefined) {
      setMessageText("");
      // Send message through socket.io
      socket.emit("Message", messageText);
      console.log(`Sending message ${messageText}`);

      // Return message text for displaying on client
      addMessage(messageText);
    }
  };

  const enterPress = (e: any) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item lg={10}>
        <TextField
          onKeyDown={enterPress}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          id="chat-field"
          variant="standard"
        />
      </Grid>
      <Grid item lg={2}>
        <Button onClick={sendMessage} variant="outlined">
          SEND
        </Button>
      </Grid>
    </Grid>
  );
};
