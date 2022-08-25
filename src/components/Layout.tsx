import { Outlet } from "react-router-dom"

export const Layout = () => {
  return(<>
  <header>
    <h1>Gridpainter</h1>
  </header>
  <main><Outlet/></main>
  </>)
}