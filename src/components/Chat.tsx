import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "./Layout";
import { IChatMsg } from "./models/IChatMsg";
import "./styling/InRoom.scss";

interface ICloseProps {
  closeClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Chat = (Props: ICloseProps) => {
  let room = useParams();
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState<IChatMsg>(Object);
  let recievedMessages: IChatMsg[] = [];
  let userName = "Louise";

  const sendMessage = () => {
    socket.emit("sendMessage", {
      text: message,
      room: room.room,
      user: userName,
    });
  };

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      console.log("message", message);
      setMessageReceived(message);
    });
  }, [socket]);

  let renderMessages = recievedMessages.map((message, i) => {
    return (
      <div
        key={i}
        className={message.userId === socket.id ? "sentMsg" : "recievedMsg"}
      >
        <p className="msgUser">{message.user}</p>
        <p className="msgText">{message.text}</p>
      </div>
    );
  });

  return (
    <div className="inGameChatBox">
      <h3>In-game Chat</h3>
      <div className="messagesBox">{renderMessages}</div>
      <div className="newMsgBox">
        <input
          type="text"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="message"
        />
        <button className="sendMsgBtn" onClick={sendMessage}>
          {" "}
          Send{" "}
        </button>
      </div>
      <button className="closeChatBtn" onClick={Props.closeClick}>
        --
      </button>
    </div>
  );
};
