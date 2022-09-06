import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Startpage.css";
import { SocketContext } from "../context/Socket";

export const Startpage = () => {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(
    localStorage.getItem("nickname") ?? ""
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("nickname", nickname);
    socket.emit("username", nickname);
    navigate("/rooms");
  };

  return (
    <div className="startpage-container">
      <form onSubmit={handleSubmit}>
        <label>Ange nickname: </label>
        <input
          type="text"
          name="nickname"
          id="nickname"
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          placeholder="Namn"
          required
        />
        <input type="submit" value="Spara" />
      </form>
    </div>
  );
};
