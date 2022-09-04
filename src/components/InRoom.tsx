import { emit } from "process";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SocketContext } from "../context/Socket";
import { Chat } from "./Chat";
import { Grid } from "./Grid";
import "./styling/InRoom.scss";

export const InRoom = () => {
  const socket = useContext(SocketContext);
  let room = useParams();
  let navigate = useNavigate();
  const [fields, setFields] = useState([]);
  const [colors, setColors] = useState([]);

  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    socket.emit("renderGame");
    socket.on("history", setFields);
    socket.on("colors", setColors);
  }, []);

  const closeChat = () => {
    setChatOpen(false);
  };

  // lägg till en socket.leave till back-enden
  const routeChange = () => {
    socket.emit("leaveRoom", room);
    navigate("/");
    console.log(room.room);
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
