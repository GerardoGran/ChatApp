import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { Socket } from "socket.io-client";
import MessageAPI from "../../Services/MessageAPI";
import Message from "../../Types/Message";

import "./index.css";

type ChatFormProps = {
  socket: Socket;
  addMessage: (message: string) => void;
};

export const ChatForm = ({ socket, addMessage }: ChatFormProps) => {
  const [messageText, setMessageText] = useState("");

  const sendMessage = () => {
    if (messageText !== "" && messageText !== undefined) {
      let data = { function: "1", data: messageText };

      MessageAPI.sendMessage(data).then((res) => {
        console.log(res);
      });

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
