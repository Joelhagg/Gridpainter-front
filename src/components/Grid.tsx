import React, { useContext, useEffect, useState } from "react";
import { IFields } from "./models/IFields";
import { io } from "socket.io-client";

import { IColors } from "./models/IColors";
import Facit from "./../assets/facit.json";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/Socket";
//const socket = io("http://localhost:3001", { autoConnect: false });

export const Grid = () => {
  const socket = useContext(SocketContext);
  let { room } = useParams();
  const [fields, setFields] = useState<IFields[]>([]);
  const [colors, setColors] = useState<IColors[]>([]);
  const [myColor, setMyColor] = useState("white");
  const [nickname] = useState(localStorage.getItem("nickname"));

  let testFacit = [];
  /////////////////////////////////// -- USEEFFECT --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    socket.on("updateColors", function (msg) {
      const myServerColor = msg.find((colorInPalette: any) => {
        return colorInPalette.takenBy === nickname;
      });
      if (myServerColor !== "white") {
        setMyColor(myServerColor.color);
      } else {
        setMyColor("white");
      }

      setColors(msg);
    });

    socket.on("colors", function (msg) {
      setColors(msg);
    });

    socket.on("history", function (msg) {
      console.log("32 history", msg);
      setFields(msg);
    });

    socket.on("drawing", (data) => {
      const gridState = data;
      //  console.log("drawing", data);
      setFields([...gridState]);
    });
    return () => {
      socket.off("updateColors");
      socket.off("colors");
      socket.off("history");
      socket.off("drawing");
    };
  }, []);

  /////////////////////////////////// -- FUNKTIONER --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  const paint = (field: IFields, e: React.MouseEvent<HTMLDivElement>) => {
    fields.find((f) => {
      if (f.position === field.position) {
        if (field.color !== "white") {
          field.color = "white";
          socket.emit("drawing", {
            field,
            room,
            nickname,
          });
          return;
        }
        field.color = myColor;
        socket.emit("drawing", {
          field,
          room,
          nickname,
        });
      }
    });
  };

  function pickColor(color: IColors) {
    if (color.takenBy === "") {
      if (myColor !== "white") {
        console.log("colorChange", color, myColor);
        socket.emit("colorChange", {
          oldColor: myColor,
          newColor: color.color,
          room,
          nickname,
        });
      } else {
        console.log("pickColor", color, myColor, nickname);
        socket.emit("pickedColor", {
          color: color.color,
          room,
          nickname,
        });
      }

      setMyColor(color.color);
    }
  }

  function printFacit() {
    testFacit = fields;
    console.log(testFacit);
  }

  function compareToFacit() {
    let count = [0, 0];
    for (let i in Facit) {
      count[1]++; // total count
      if (fields[i].color === Facit[i].color) {
        if (fields[i].color === "white" && Facit[i].color === "white") {
          count[1]--;
        } else {
          count[0]++;
        } // match count
      }
    }
    let percentage = (count[0] / count[1]) * 100 + "%";
    console.log("percentage: " + percentage);
    console.log("count 0)" + count[0]);
    console.log("count1)" + count[1]);
    alert("percentage: " + percentage);
  }

  /////////////////////////////////// -- HTML --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  let renderGrid = fields.map((field) => {
    return (
      <div
        key={field.position}
        id={field.position}
        className="pixel"
        onMouseEnter={(e) => {
          if (e.currentTarget.style.backgroundColor !== "white") {
            e.currentTarget.style.backgroundColor = "white";
          } else {
            e.currentTarget.style.backgroundColor = myColor;
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = field.color;
        }}
        onClick={(e) => paint(field, e)}
        style={{ backgroundColor: field.color }}
      ></div>
    );
  });

  let colorsToPickFrom = colors.map((color) => {
    return (
      <div
        style={{ color: color.takenBy !== "" ? "#f00" : "#000" }}
        key={color.color}
        onClick={() => {
          pickColor(color);
        }}
      >
        {color.takenBy !== ""
          ? `${color.color} - ${color.takenBy}`
          : `${color.color}`}
      </div>
    );
  });

  let renderFacit = Facit.map((pixel) => {
    return (
      <div
        key={pixel.position}
        id={pixel.position}
        className="pixelFacit"
        style={{ backgroundColor: pixel.color }}
      ></div>
    );
  });

  /////////////////////////////////// -- JSX --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {/* {colors.length >= 0 && <> */}

      <button onClick={printFacit}>se facit du ritat</button>

      <h1>{colors.length}</h1>
      <h1>{myColor}</h1>
      <div id="grid">
        {renderGrid}
        <div>{colorsToPickFrom}</div>
      </div>

      <button onClick={compareToFacit}>rätta bilden</button>

      <div id="facitGrid">{renderFacit}</div>

      {/* </>
    } */}

      {/* {colors.length == 0 && <div>rummet är tyvörr fullt, prova ett annat rum</div>} */}
    </>
  );
};
