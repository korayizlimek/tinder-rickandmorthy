import React, { useState } from "react";
import "./Messages.css";
import Chat from "../../components/Chat";

function Messages() {
  const [chats, setChats] = useState([
    {
      name: "Justin Roiland",
      message:
        "Hi. I am Creator  of Rick and Morty and I wanted you to meet many characters. Just say Hello ! ",
      timestamp: "10 seconds ago",
      imageUri:
        "data:image/jpeg;base64,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",
    },
    {
      name: "koray izlimek",
      message:
        "Hi, I am frontend Developer. Did you like this app? Enjoy it!",
      timestamp: "30 seconds ago",
      imageUri:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFuGz8Yw2BmRg/profile-displayphoto-shrink_200_200/0/1624627666427?e=1632960000&v=beta&t=4MbHxcsrkSB1ojlsim69S0OqDjZSdl2RykpgFrD8tBQ",
    },
  ]);

  return (
    <div className="messages">
      {chats.map((chat) => (
        <Chat
          name={chat.name}
          message={chat.message}
          timestamp={chat.timestamp}
          imageUri={chat.imageUri}
        />
      ))}
    </div>
  );
}

export default Messages;
