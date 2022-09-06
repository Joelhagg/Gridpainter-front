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
  const [currentUser, setCurrentUser] = useState("");

  async function getRooms() {
    let response = await axios.get<IRoom[]>("http://localhost:3001/rooms");
    return response.data;
  }

  useEffect(() => {
    getRooms().then((res) => {
      setRooms(res);
    });
    socket.on("username", setCurrentUser);
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
    if (currentUser.length >= 1) {
      const room = {
        name: roomName,
        id: socket.io.engine.id,
        nickname: localStorage.getItem("nickname"),
      };
      socket.emit("leaveBeforeJoining", socket.id);
      socket.emit("join", room);
    } else {
      alert("Du har inget nickname! Skickar dig tillbaka till start");
      navigate("/");
    }
  };

  const deleteRoom = (room: IRoom) => {
    socket.emit("deleteRoom", { _id: room._id, name: room.name });
    socket.on("newRoomsList", setRooms);
  };

  // getNames();

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
      <h3>Hej {currentUser}!</h3>
      <form onSubmit={createRoom}>
        <div className="createRoomBox">
          <input
            type="text"
            name="roomName"
            id="roomName"
            placeholder="Nytt rum..."
            required
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input type="submit" value="Skapa rum" />
        </div>
      </form>
      <h5>Skapa ett nytt rum eller spela i ett som redan finns!</h5>
      <div>{renderRooms}</div>
    </div>
  );
};
