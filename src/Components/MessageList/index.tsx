import React from "react";
import { MessageBubble } from "../MessageBubble";
import Message from "../../Types/Message";

import "./index.css";

type MessageListProps = {
  messages: Message[];
};

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="container">
      {messages.map((message, id) => {
        return (
          <MessageBubble
            received={message.received}
            message={message.message}
          />
        );
      })}
    </div>
  );
};
