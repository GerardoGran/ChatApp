import React, { useEffect, useState } from "react";
import Message from "../../Types/Message";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import MessageAPI from "../../Services/MessageAPI";
import "./index.css";
import { io, Socket } from "socket.io-client";
import { MessageBubble } from "../../Components/MessageBubble";
const ENDPOINT = "172.16.112.43:2021";

type ChatWindowProps = {
  messages: object;
};

const socket: Socket = io(ENDPOINT);

export const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");
  const [pressed, setPressed] = useState(false)
  
  useEffect(() => {
    socket.on("Mensaje ASCP", (msg: string) => {
      console.log(`Received Message: ${msg}`);
      sendMessage();
      if (pressed) {
        const newMessage: Message = {
          received: false,
          // received: true,
          message: msg,
        } as Message;
        setMessages([...messages, newMessage]);
        console.table(messages);

      } else {
        const newMessage: Message = {
          received: true,
          // received: false,
          message: msg,
        } as Message;
        setMessages([...messages, newMessage]);
        console.table(messages);

      }
    });
  } , [messages]);

  const sendMessage = () => {

    if (messageText !== "" && messageText !== undefined) {
      setPressed(true)

      let data = JSON.stringify({ function: "1", data: messageText });
      console.log(data);

      MessageAPI.sendMessage(data).then((res) => {
        console.log(res);
        setPressed(false)

      });

      setMessageText("");
      // const newMessage: Message = {
      //   received: false,
      //   message: messageText,
      // } as Message;

      // setMessages([...messages, newMessage]);
    }

  };

  const enterPress = (e: any) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  return (
    <div>
      <div className="container">
        {messages.map((message, id) => {
          return (
            <MessageBubble
              key={id}
              received={message.received}
              message={message.message}
            />
            // <div className={msgType}>
            //   <p className={msgType}>{message.message}</p>
            // </div>
          );
        })}
      </div>
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
    </div>
  );
};
