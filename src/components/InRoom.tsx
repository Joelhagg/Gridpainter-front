import { useState } from "react"
import { Chat } from "./Chat"
import { Grid } from "./Grid"

export const InRoom = () => {
  const [chatOpen, setChatOpen] = useState(false)

  const closeChat = () => {
    setChatOpen(false)
  }

  return(<>
    <h2>Ett rum</h2>
    <Grid/>
    <button onClick={() => {setChatOpen(true)}}>Chatt</button>

    {chatOpen && <Chat closeClick={closeChat}/>}
  </>)
}