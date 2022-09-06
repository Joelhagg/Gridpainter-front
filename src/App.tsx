import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Startpage } from "./components/Startpage";
import { InRoom } from "./components/InRoom";
import { Rooms } from "./components/Rooms";
import { UsernameContext } from "./context/UsernameContext";

function App() {
  const [username, setUsername] = useState("");
  const value = { username, setUsername };
  return (
    <React.StrictMode>
      <UsernameContext.Provider value={value}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Startpage />} />
              <Route path="/:room" element={<InRoom />} />
              <Route path="rooms" element={<Rooms />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UsernameContext.Provider>
    </React.StrictMode>
  );
}

export default App;
