import { useEffect, useState } from "react";
import { socket } from "./Layout";

interface ICloseProps {
  closeClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Chat = (Props: ICloseProps) => {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  // Lägg in props för att skicka med namnet på rummet osm man joinade
  /*" props med namnet på rummet"*/

  const sendMessage = () => {
    socket.emit("sendMessage", message);
  };

  // const checkMessage = () => {
  //   socket.on

  // }

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
