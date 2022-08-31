import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Chat } from "./Chat";
import { Grid } from "./Grid";
import { socket } from "./Layout";
import "./styling/InRoom.scss";

export const InRoom = () => {
  let room = useParams();
  let navigate = useNavigate();

  const [chatOpen, setChatOpen] = useState(false);

  const closeChat = () => {
    setChatOpen(false);
  };

  const routeChange = () => {
    navigate("/rooms");
    // lägg till en socket.leave till back-enden
    socket.emit("leaveRoom", room);
  };

  return (
    <>
      <button onClick={routeChange}>Lämna rummet</button>
      <h2>Du är med i rum: {room.room}</h2>
      <Grid />
      {chatOpen ? (
        <Chat closeClick={closeChat} />
      ) : (
        <button
          className="openChatBtn"
          onClick={() => {
            setChatOpen(true);
          }}
        >
          Chatt
        </button>
      )}
    </>
  );
};
