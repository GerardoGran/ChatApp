import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { Socket } from "socket.io-client";
import MessageAPI from "../../Services/MessageAPI";

import "./index.css";

type ChatFormProps = {
  socket: Socket;
  addMessage: (message: string) => void;
};

export const ChatForm = ({ socket, addMessage }: ChatFormProps) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    if (messageText !== "" && messageText !== undefined) {
      // Send message via post
      // MessageAPI.post("/enviar_mensaje", { function: 1, data: messageText });
      // const value = { function: 1, data: messageText }
      const message = MessageAPI.sendMessage({ function: 1, data: messageText }).then(
        resp => {
          console.log(resp)
        }
      );
      // console.log(message)
      // console.log(`Sending message ${messageText}`);

      setMessageText("");

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
    <Grid className="container" container spacing={1}>
      <Grid item lg={10}>
        <TextField
          className="fill"
          onKeyDown={enterPress}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          id="chat-field"
          variant="outlined"
        />
      </Grid>
      <Grid item lg={2}>
        <Button className="fill" onClick={sendMessage} variant="outlined">
          SEND
        </Button>
      </Grid>
    </Grid>
  );
};
