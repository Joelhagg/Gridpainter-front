import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "./Layout";

interface ICloseProps {
  closeClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Chat = (Props: ICloseProps) => {
  let room = useParams();
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  // Lägg in props för att skicka med namnet på rummet osm man joinade
  // Vi behöver även få med användaren och skicka med vårat message
  /*" props med namnet på rummet och userName"*/

  const sendMessage = () => {
    socket.emit("sendMessage", { message: message, room: room.room });
    console.log("room: ", room.room);
  };

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      console.log(message);
      setMessageReceived(message);
    });
  }, [socket]);
  return (
    <div>
      <br />
      <h2>In-game Chat</h2>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="message"
      />
      <button onClick={sendMessage}> Send </button>
      <button onClick={Props.closeClick}>Stäng</button>
      <br />
      <h3>Messages</h3>
      <p>{messageReceived}</p>
      <br />
    </div>
  );
};
