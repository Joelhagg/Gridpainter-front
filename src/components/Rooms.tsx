import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRoom } from "./models/IRoom";
import { SocketContext } from "../context/Socket";

export const Rooms = () => {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState<IRoom[]>([]);

  async function getRooms() {
    let response = await axios.get<IRoom[]>("http://localhost:3001/rooms");
    return response.data;
  }

  useEffect(() => {
    getRooms().then((res) => {
      setRooms(res);
    });
  }, []);

  const createRoom = () => {
    const room = {
      name: roomName,
      id: socket.io.engine.id,
      nickname: localStorage.getItem("nickname"),
    };
    socket.emit("createRoom", room);
    navigate(`/${roomName}`);
  };

  const joinRoom = (roomName: string) => {
    const room = {
      name: roomName,
      id: socket.io.engine.id,
      nickname: localStorage.getItem("nickname"),
    };
    socket.emit("leaveBeforeJoining", socket.id);
    socket.emit("join", room);
  };

  const deleteRoom = (room: IRoom) => {
    socket.emit("deleteRoom", { _id: room._id, name: room.name });
    socket.on("newRoomsList", setRooms);
  };

  let renderRooms = rooms.map((room, i) => {
    return (
      <div key={i}>
        {room.name}
        <button
          onClick={() => {
            navigate(`/${room.name}`);
            joinRoom(room.name);
          }}
        >
          Join
        </button>
        <button
          onClick={() => {
            deleteRoom(room);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={createRoom}>
        <div className="createRoomBox">
          <input
            type="text"
            name="roomName"
            id="roomName"
            placeholder="Room name"
            required
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input type="submit" value="Skapa rum" />
        </div>
      </form>
      <div>{renderRooms}</div>
    </div>
  );
};
