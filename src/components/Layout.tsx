import { Outlet } from "react-router-dom"
import { io } from "socket.io-client"
export const socket = io('http://localhost:3001', { "autoConnect" : false })

export const Layout = () => {
  return(<>
  <header>
    <h1>Gridpainter</h1>
  </header>
  <main><Outlet/></main>
  </>)
}