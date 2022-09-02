import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/Socket";
import { IChatMsg } from "./models/IChatMsg";
import "./styling/InRoom.scss";

interface ICloseProps {
  closeClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Chat = (Props: ICloseProps) => {
  const socket = useContext(SocketContext)
  let room = useParams();
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState<IChatMsg[]>([])
  let messages: IChatMsg[] = []
  let userName = "Louise";

  const sendMessage = () => {
    socket.emit("sendMessage", {
      text: message,
      room: room.room,
      user: userName,
    });
    setMessage("") 
  };

  useEffect(() => {
    socket.on('receiveMessage',( data:IChatMsg) => {
      messages.push(data)
      setMsg(msg => [...msg, data])
    })
    return () => {
      socket.off('receiveMessage')
    }
  }, []);

  let renderMessages = msg.map((message, i) => {
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
          className="messageInput"
          type="text"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="message"
          value={message}
        />
        <button className="sendMsgBtn" onClick={sendMessage}>
          Send
        </button>
      </div>
      <button className="closeChatBtn" onClick={Props.closeClick}>
        --
      </button>
    </div>
  );
};
