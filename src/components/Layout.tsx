import { Outlet } from "react-router-dom"
import { SocketContext, socket } from "../context/Socket"

export const Layout = () => {
  return(<SocketContext.Provider value={socket}>
  <header>
    <h1>Gridpainter</h1>
  </header>
  <main><Outlet/></main>
  </SocketContext.Provider>)
}