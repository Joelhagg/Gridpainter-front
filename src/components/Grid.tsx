import axios from "axios"
import React, { useEffect, useState } from "react"
import { IFields } from "./models/IFields"
import { io } from "socket.io-client"
import { hover } from "@testing-library/user-event/dist/hover"
const socket = io('http://localhost:3001', {"autoConnect": false})

export const Grid = () => {
  const [fields, setFields] = useState<IFields[]>([])
  const myColor = "lightgreen"

  useEffect(() => {
    axios.get<IFields[]>('http://localhost:3001/fields')
    .then(res => {
      setFields(res.data)
    })
  }, [fields])

  const paint = (field: IFields, e: React.MouseEvent<HTMLDivElement>) => {
    socket.connect()
    
    fields.find(f => {
      if(f.position === field.position){
        field.color = myColor
        socket.emit("drawing", field)
        console.log(fields);
      }
    }) 
  }

  let renderGrid = fields.map(field => {
    return(<div key={field.position} id={field.position} className="pixel" 
        onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = myColor}}
        onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = field.color}}
        onClick={(e) => paint(field, e)} style={{backgroundColor: field.color}}>
      </div>)
  })

  return(<div id="grid">{renderGrid}</div>)
}