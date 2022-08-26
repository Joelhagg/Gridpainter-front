import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Startpage.css";

export const Startpage = () => {
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
          navigate("/rooms");
        }}
      >
        Gå till Rum
      </button>
    </div>
  );
};
