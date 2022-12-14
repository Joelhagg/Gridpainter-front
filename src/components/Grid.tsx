import React, { useContext, useEffect, useState } from "react";
import { IFields } from "./models/IFields";
import { io } from "socket.io-client";

import { IColors } from "./models/IColors";
import Facit from "./../assets/facit.json";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/Socket";
import { UsernameContext } from "../context/UsernameContext";
import "./Grid.css"
//const socket = io("http://localhost:3001", { autoConnect: false });

export const Grid = () => {
  const socket = useContext(SocketContext);
  let { room } = useParams();
  const [fields, setFields] = useState<IFields[]>([]);
  const [colors, setColors] = useState<IColors[]>([]);
  const [myColor, setMyColor] = useState("white");
  const { username } = useContext(UsernameContext);

  let testFacit = [];
  /////////////////////////////////// -- USEEFFECT --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    socket.on("updateColors", function (msg) {
      setColors(msg);
    });
    socket.on("colors", function (msg) {
      setColors(msg);
    });

    socket.on("history", function (msg) {
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
          });
          return;
        }
        field.color = myColor;
        socket.emit("drawing", {
          field,
          room,
        });
      }
    });
  };

  function pickColor(color: IColors) {
    if (color.takenBy === "") {
      socket.emit("colorChange", {
        newColor: color.color,
        room,
      });
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
    <div className="gridLayout">
      {/* {colors.length >= 0 && <> */}

      {/*<button className="facitBtn" onClick={printFacit}>se facit du ritat</button> */}
      <div id="grid">
        {renderGrid}
        <div>{colorsToPickFrom}</div>
      </div>

      <div id="facitGrid">{renderFacit}</div>
      
      <button className="checkBtn" onClick={compareToFacit}>r??tta bilden</button>
      {/* </>
    } */}

      {/* {colors.length == 0 && <div>rummet ??r tyv??rr fullt, prova ett annat rum</div>} */}
    </div>
  );
};
