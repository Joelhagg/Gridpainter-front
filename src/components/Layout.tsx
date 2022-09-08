import { useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { SocketContext, socket, user } from "../context/Socket"
import "./Startpage.css";

export const Layout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if(user === ""){
      navigate('/')
    }
  },[])
  

  return(
  <SocketContext.Provider value={socket}>
  <header className="header">
    <h1>Gridpainter</h1>
  </header>
  <main>
    <Outlet/>
  </main>
  </SocketContext.Provider>)
}