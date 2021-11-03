import React from "react";

import "./index.css";

type MessageProps = {
  received: boolean;
  message: string;
};


export const MessageBubble = ({ received, message }: MessageProps) => {
  const msgType: string = received ? "received-text" : "sent-text";

  return (
    <div className={msgType}>
      <p className={msgType}>{message}</p>
    </div>
  );
};
