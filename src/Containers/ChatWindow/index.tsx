import React, { useEffect, useState } from "react";
import Message from "../../Types/Message";

import "./index.css";
import { MessageList } from "../../Components/MessageList";
import { ChatForm } from "../../Components/ChatForm";
import { Socket } from "socket.io-client";

type ChatWindowProps = {
  socket: Socket;
};

export const ChatWindow = ({ socket }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("Message", (data) => {
      console.log(data);
      let temp: Message[] = messages;
      temp.push({
        received: true,
        message: data,
      } as Message);
      setMessages([...temp]);
    });
  }, [messages, socket]);

  const addMessage = (messageText: string) => {
    const newMessage: Message = {
      received: false,
      message: messageText,
    } as Message;

    setMessages([...messages, newMessage]);
    console.table(messages);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <ChatForm socket={socket} addMessage={addMessage} />
    </div>
  );
};
