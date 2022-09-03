import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Startpage.css";
import { SocketContext } from "../context/Socket";

export const Startpage = () => {
  const socket = useContext(SocketContext)
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    setNickname(localStorage.getItem("nickname") ?? "");
  }, []);

  return (
    <div className="startpage-container">
      <input
        type="text"
        value={nickname}
        placeholder="Namn"
        onChange={(event) => {
          setNickname(event.target.value);
        }}
      />

      <button
        onClick={() => {
          localStorage.setItem("nickname", nickname);
          socket.emit('username', nickname)
          navigate("/rooms");
        }}
      >
        Gå till Rum
      </button>
    </div>
  );
};
