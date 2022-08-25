import axios from "axios"
import React, { useEffect, useState } from "react"
import { IFields } from "./models/IFields"
import { io } from "socket.io-client"

import { IColors } from "./models/IColors"
const socket = io('http://localhost:3001', { "autoConnect" : false })

export const Grid = () => {
  const [fields, setFields] = useState<IFields[]>([])
  const [colors, setColors] = useState<IColors[]>([])
  const [myColor, setMyColor] = useState("white");

  // let mycolorpicker = ["green", "yellow", "orange", "black"]
  //let myColor = ""

  // mycolorpicker.splice(0,1);
  // socket.emit("color", mycolorpicker);

  useEffect(() => {
    axios.get<IFields[]>('http://localhost:3001/fields')
      .then(res => {
        setFields(res.data)
      })
  }, [fields])

  useEffect(() => {

    //kopplar upp vid första load
    socket.connect()


    axios.get<IColors[]>('http://localhost:3001/colors')
      .then(res => {
        setColors(res.data)
        console.log(res.data);

      })
  }, [])

  useEffect(() => {
    socket.on("updateColors", function(msg){
      axios.get<IColors[]>('http://localhost:3001/colors')
      .then(res => {
        setColors(res.data)
      })
      //console.log("du vill" + msg.color);
    })
  }, [myColor])

  const paint = (field: IFields, e: React.MouseEvent<HTMLDivElement>) => {
    //socket.connect()

    fields.find(f => {
      if (f.position === field.position) {
        if (field.color != "white") {
          setMyColor("white");
        }
        field.color = myColor
        socket.emit("drawing", field)
      }
    })
  }

  function pickColor(color: string) {
    socket.emit("color", color);
    console.log(color);
    setMyColor(color)
    //socket.emit("drawing", field)

  }


  let renderGrid = fields.map(field => {
    return (
      <div key={field.position} id={field.position} className="pixel"
        onMouseEnter={
          (e) => {
            if (e.currentTarget.style.backgroundColor != "white") {
              e.currentTarget.style.backgroundColor = "white"
            }
            else { e.currentTarget.style.backgroundColor = myColor }
          }
        }
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = field.color }}
        onClick={(e) => paint(field, e)} style={{ backgroundColor: field.color }}>
      </div>

    )
  })

  let colorsToPickFrom = colors.map(color => {
    return (
      <div key={color.color} onClick={() => { pickColor(color.color) }}>
        {color.color}
      </div>

    )
  })

  return (<div id="grid">{renderGrid}
    <div>
      {colorsToPickFrom}
    </div>
  </div>)
}