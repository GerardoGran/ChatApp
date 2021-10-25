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
    socket.on("Mensaje ASCP", (msg: string) => {
      console.log(`Received Message: ${msg}`);
      const newMessage: Message = {
        received: true,
        message: msg,
      } as Message;
      setMessages([...messages, newMessage]);
      console.table(messages);
    });
  }, [messages, socket]);

  const addMessage = (messageText: string) => {
    const newMessage: Message = {
      received: false,
      message: messageText,
    } as Message;

    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <ChatForm socket={socket} addMessage={addMessage} />
    </div>
  );
};
