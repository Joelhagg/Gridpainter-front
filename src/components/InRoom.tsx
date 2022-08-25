import { useState } from "react"
import { useParams } from "react-router-dom"
import { Chat } from "./Chat"
import { Grid } from "./Grid"

export const InRoom = () => {
  let room = useParams()

  const [chatOpen, setChatOpen] = useState(false)

  const closeChat = () => {
    setChatOpen(false)
  }

  return(<>
    <h2>{room.room}</h2>
    <Grid/>
    <button onClick={() => {setChatOpen(true)}}>Chatt</button>

    {chatOpen && <Chat closeClick={closeChat}/>}
  </>)
}