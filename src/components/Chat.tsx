import { useState } from "react";
import { socket } from "./Layout";

interface ICloseProps {
  closeClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Chat = (Props: ICloseProps) => {
  const [message, setMessage] = useState("");
  let room1 = 1;

  const sendMessage = () => {
    socket.emit("sendMessage", message, room1);
    socket.on("message", (message, room1) => {
      console.log("response", message, room1);
    });
  };

  // const checkMessage = () => {
  //   socket.on

  // }
  return (
    <div>
      <br />
      Woooo chatten öppnades
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="message"
      />
      <button onClick={sendMessage}> Send </button>
      <button onClick={Props.closeClick}>Stäng</button>
      <br />
      <br />
    </div>
  );
};
