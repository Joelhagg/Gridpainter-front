import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SocketContext, user } from "../context/Socket";
import { Chat } from "./Chat";
import { Grid } from "./Grid";
import "./styling/InRoom.scss";

export const InRoom = () => {
  const socket = useContext(SocketContext);
  let room = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    socket.emit("renderGame", room);
  }, []);

  // lägg till en socket.leave till back-enden
  const routeChange = () => {
    socket.emit("leaveRoom", { room: room.room });
    navigate("/rooms");
    console.log(room.room);
  };

  return (
    <>
      <div className="inRoomsContainer">
        <h2>Du är med i rum: {room.room}</h2>
      <button className="leaveRoomBtn" onClick={routeChange}>Lämna rummet</button>
      </div>
      <Grid />
      <Chat />
    </>
  );
};
