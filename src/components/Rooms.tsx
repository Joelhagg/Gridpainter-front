import axios from "axios";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRoom } from "./models/IRoom";
import { SocketContext } from "../context/Socket";
import { UsernameContext } from "../context/UsernameContext";

export const Rooms = () => {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const { username, setUsername } = useContext(UsernameContext);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);

  async function getRooms() {
    let response = await axios.get<IRoom[]>("http://localhost:3001/rooms");
    return response.data;
  }

  useEffect(() => {
    getRooms().then((res) => {
      setRooms(res);
    });
    socket.on("username", setUsername);
  }, []);

  const createRoom = (e: FormEvent) => {
    e.preventDefault();
    // Namnen på alla rum
    const newRoom = {
      name: roomName,
      id: socket.io.engine.id,
    };

    let checkRooms = rooms.some((room) => {
      return room.name === newRoom.name;
    });

    if (checkRooms) {
      setErrorMsg(true);
    } else {
      socket.emit("createRoom", newRoom);
      navigate(`/${roomName}`);
    }
  };

  const joinRoom = (roomName: string) => {
    const membersInRooms = rooms.map((room) => {
      return room.members;
    });
    const flatMembers = membersInRooms.flat();

    const alreadyMember = flatMembers.some((member) => {
      return username == member;
    });

    if (alreadyMember) {
      alert("Nickname används redan, hitta på något nytt!");
      navigate("/");
    } else {
      if (username.length >= 1) {
        const room = {
          name: roomName,
          id: socket.io.engine.id,
        };
        socket.emit("leaveBeforeJoining", socket.id);
        socket.emit("join", room);
      } else {
        alert("Du har inget nickname! Skickar dig tillbaka till start");
        navigate("/");
      }
    }
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
      <h5>Skapa ett nytt rum eller spela i ett som redan finns!</h5>
      <form
        onSubmit={(e) => {
          createRoom(e);
        }}
      >
        <div className="createRoomBox">
          <input
            type="text"
            name="roomName"
            id="roomName"
            placeholder="Nytt rum..."
            required
            value={roomName}
            onChange={(e) => {
              setRoomName(e.target.value);
              setErrorMsg(false);
            }}
          />
          <button type="submit">Create room</button>

          {errorMsg && <div>Room with that name already exist</div>}
        </div>
      </form>
      <br />
      <div>{renderRooms}</div>
    </div>
  );
};
