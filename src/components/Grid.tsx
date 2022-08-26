import axios from "axios"
import React, { useEffect, useState } from "react"
import { IFields } from "./models/IFields"
import { io } from "socket.io-client"

import { IColors } from "./models/IColors"
const socket = io('http://localhost:3001', { "autoConnect": false })

export const Grid = () => {
  const [fields, setFields] = useState<IFields[]>([])
  const [colors, setColors] = useState<IColors[]>([])
  const [myColor, setMyColor] = useState("white");

  let testFacit = []

  let facit = [
    {
      position: "1-1",
      color: "green"
    },
    {
      position: "1-2",
      color: "yellow"
    },
    {
      position: "1-3",
      color: "orange"
    },
    {
      position: "1-4",
      color: "black"
    },
    {
      position: "1-5",
      color: "white"
    },
    {
      position: "1-6",
      color: "white"
    },
    {
      position: "1-7",
      color: "white"
    },
    {
      position: "1-8",
      color: "white"
    },
    {
      position: "1-9",
      color: "white"
    },
    {
      position: "1-10",
      color: "white"
    },
    {
      position: "1-11",
      color: "white"
    },
    {
      position: "1-12",
      color: "white"
    },
    {
      position: "1-13",
      color: "white"
    },
    {
      position: "1-14",
      color: "white"
    },
    {
      position: "1-15",
      color: "white"
    },
    {
      position: "1-16",
      color: "white"
    },
    {
      position: "1-17",
      color: "white"
    },
    {
      position: "1-18",
      color: "white"
    },
    {
      position: "1-19",
      color: "white"
    },
    {
      position: "1-20",
      color: "white"
    },
    {
      position: "1-21",
      color: "white"
    },
    {
      position: "1-22",
      color: "black"
    },
    {
      position: "1-23",
      color: "orange"
    },
    {
      position: "1-24",
      color: "yellow"
    },
    {
      position: "1-25",
      color: "green"
    },
    {
      position: "2-1",
      color: "yellow"
    },
    {
      position: "2-2",
      color: "orange"
    },
    {
      position: "2-3",
      color: "black"
    },
    {
      position: "2-4",
      color: "white"
    },
    {
      position: "2-5",
      color: "white"
    },
    {
      position: "2-6",
      color: "white"
    },
    {
      position: "2-7",
      color: "white"
    },
    {
      position: "2-8",
      color: "white"
    },
    {
      position: "2-9",
      color: "white"
    },
    {
      position: "2-10",
      color: "white"
    },
    {
      position: "2-11",
      color: "white"
    },
    {
      position: "2-12",
      color: "white"
    },
    {
      position: "2-13",
      color: "white"
    },
    {
      position: "2-14",
      color: "white"
    },
    {
      position: "2-15",
      color: "white"
    },
    {
      position: "2-16",
      color: "white"
    },
    {
      position: "2-17",
      color: "white"
    },
    {
      position: "2-18",
      color: "white"
    },
    {
      position: "2-19",
      color: "white"
    },
    {
      position: "2-20",
      color: "white"
    },
    {
      position: "2-21",
      color: "white"
    },
    {
      position: "2-22",
      color: "white"
    },
    {
      position: "2-23",
      color: "black"
    },
    {
      position: "2-24",
      color: "orange"
    },
    {
      position: "2-25",
      color: "yellow"
    },
    {
      position: "3-1",
      color: "orange"
    },
    {
      position: "3-2",
      color: "black"
    },
    {
      position: "3-3",
      color: "white"
    },
    {
      position: "3-4",
      color: "white"
    },
    {
      position: "3-5",
      color: "white"
    },
    {
      position: "3-6",
      color: "white"
    },
    {
      position: "3-7",
      color: "white"
    },
    {
      position: "3-8",
      color: "white"
    },
    {
      position: "3-9",
      color: "white"
    },
    {
      position: "3-10",
      color: "white"
    },
    {
      position: "3-11",
      color: "white"
    },
    {
      position: "3-12",
      color: "white"
    },
    {
      position: "3-13",
      color: "white"
    },
    {
      position: "3-14",
      color: "white"
    },
    {
      position: "3-15",
      color: "white"
    },
    {
      position: "3-16",
      color: "white"
    },
    {
      position: "3-17",
      color: "white"
    },
    {
      position: "3-18",
      color: "white"
    },
    {
      position: "3-19",
      color: "white"
    },
    {
      position: "3-20",
      color: "white"
    },
    {
      position: "3-21",
      color: "white"
    },
    {
      position: "3-22",
      color: "white"
    },
    {
      position: "3-23",
      color: "white"
    },
    {
      position: "3-24",
      color: "black"
    },
    {
      position: "3-25",
      color: "orange"
    },
    {
      position: "4-1",
      color: "black"
    },
    {
      position: "4-2",
      color: "white"
    },
    {
      position: "4-3",
      color: "white"
    },
    {
      position: "4-4",
      color: "white"
    },
    {
      position: "4-5",
      color: "white"
    },
    {
      position: "4-6",
      color: "white"
    },
    {
      position: "4-7",
      color: "white"
    },
    {
      position: "4-8",
      color: "white"
    },
    {
      position: "4-9",
      color: "white"
    },
    {
      position: "4-10",
      color: "white"
    },
    {
      position: "4-11",
      color: "white"
    },
    {
      position: "4-12",
      color: "white"
    },
    {
      position: "4-13",
      color: "white"
    },
    {
      position: "4-14",
      color: "white"
    },
    {
      position: "4-15",
      color: "white"
    },
    {
      position: "4-16",
      color: "white"
    },
    {
      position: "4-17",
      color: "white"
    },
    {
      position: "4-18",
      color: "white"
    },
    {
      position: "4-19",
      color: "white"
    },
    {
      position: "4-20",
      color: "white"
    },
    {
      position: "4-21",
      color: "white"
    },
    {
      position: "4-22",
      color: "white"
    },
    {
      position: "4-23",
      color: "white"
    },
    {
      position: "4-24",
      color: "white"
    },
    {
      position: "4-25",
      color: "black"
    },
    {
      position: "5-1",
      color: "white"
    },
    {
      position: "5-2",
      color: "white"
    },
    {
      position: "5-3",
      color: "white"
    },
    {
      position: "5-4",
      color: "white"
    },
    {
      position: "5-5",
      color: "white"
    },
    {
      position: "5-6",
      color: "white"
    },
    {
      position: "5-7",
      color: "white"
    },
    {
      position: "5-8",
      color: "white"
    },
    {
      position: "5-9",
      color: "white"
    },
    {
      position: "5-10",
      color: "white"
    },
    {
      position: "5-11",
      color: "white"
    },
    {
      position: "5-12",
      color: "white"
    },
    {
      position: "5-13",
      color: "white"
    },
    {
      position: "5-14",
      color: "white"
    },
    {
      position: "5-15",
      color: "white"
    },
    {
      position: "5-16",
      color: "white"
    },
    {
      position: "5-17",
      color: "white"
    },
    {
      position: "5-18",
      color: "white"
    },
    {
      position: "5-19",
      color: "white"
    },
    {
      position: "5-20",
      color: "white"
    },
    {
      position: "5-21",
      color: "white"
    },
    {
      position: "5-22",
      color: "white"
    },
    {
      position: "5-23",
      color: "white"
    },
    {
      position: "5-24",
      color: "white"
    },
    {
      position: "5-25",
      color: "white"
    },
    {
      position: "6-1",
      color: "white"
    },
    {
      position: "6-2",
      color: "white"
    },
    {
      position: "6-3",
      color: "white"
    },
    {
      position: "6-4",
      color: "white"
    },
    {
      position: "6-5",
      color: "white"
    },
    {
      position: "6-6",
      color: "white"
    },
    {
      position: "6-7",
      color: "white"
    },
    {
      position: "6-8",
      color: "white"
    },
    {
      position: "6-9",
      color: "white"
    },
    {
      position: "6-10",
      color: "white"
    },
    {
      position: "6-11",
      color: "white"
    },
    {
      position: "6-12",
      color: "white"
    },
    {
      position: "6-13",
      color: "white"
    },
    {
      position: "6-14",
      color: "white"
    },
    {
      position: "6-15",
      color: "white"
    },
    {
      position: "6-16",
      color: "white"
    },
    {
      position: "6-17",
      color: "white"
    },
    {
      position: "6-18",
      color: "white"
    },
    {
      position: "6-19",
      color: "white"
    },
    {
      position: "6-20",
      color: "white"
    },
    {
      position: "6-21",
      color: "white"
    },
    {
      position: "6-22",
      color: "white"
    },
    {
      position: "6-23",
      color: "white"
    },
    {
      position: "6-24",
      color: "white"
    },
    {
      position: "6-25",
      color: "white"
    },
    {
      position: "7-1",
      color: "white"
    },
    {
      position: "7-2",
      color: "white"
    },
    {
      position: "7-3",
      color: "white"
    },
    {
      position: "7-4",
      color: "white"
    },
    {
      position: "7-5",
      color: "white"
    },
    {
      position: "7-6",
      color: "white"
    },
    {
      position: "7-7",
      color: "white"
    },
    {
      position: "7-8",
      color: "white"
    },
    {
      position: "7-9",
      color: "white"
    },
    {
      position: "7-10",
      color: "white"
    },
    {
      position: "7-11",
      color: "white"
    },
    {
      position: "7-12",
      color: "white"
    },
    {
      position: "7-13",
      color: "white"
    },
    {
      position: "7-14",
      color: "white"
    },
    {
      position: "7-15",
      color: "white"
    },
    {
      position: "7-16",
      color: "white"
    },
    {
      position: "7-17",
      color: "white"
    },
    {
      position: "7-18",
      color: "white"
    },
    {
      position: "7-19",
      color: "white"
    },
    {
      position: "7-20",
      color: "white"
    },
    {
      position: "7-21",
      color: "white"
    },
    {
      position: "7-22",
      color: "white"
    },
    {
      position: "7-23",
      color: "white"
    },
    {
      position: "7-24",
      color: "white"
    },
    {
      position: "7-25",
      color: "white"
    },
    {
      position: "8-1",
      color: "white"
    },
    {
      position: "8-2",
      color: "white"
    },
    {
      position: "8-3",
      color: "white"
    },
    {
      position: "8-4",
      color: "white"
    },
    {
      position: "8-5",
      color: "white"
    },
    {
      position: "8-6",
      color: "white"
    },
    {
      position: "8-7",
      color: "white"
    },
    {
      position: "8-8",
      color: "white"
    },
    {
      position: "8-9",
      color: "white"
    },
    {
      position: "8-10",
      color: "white"
    },
    {
      position: "8-11",
      color: "white"
    },
    {
      position: "8-12",
      color: "white"
    },
    {
      position: "8-13",
      color: "white"
    },
    {
      position: "8-14",
      color: "white"
    },
    {
      position: "8-15",
      color: "white"
    },
    {
      position: "8-16",
      color: "white"
    },
    {
      position: "8-17",
      color: "white"
    },
    {
      position: "8-18",
      color: "white"
    },
    {
      position: "8-19",
      color: "white"
    },
    {
      position: "8-20",
      color: "white"
    },
    {
      position: "8-21",
      color: "white"
    },
    {
      position: "8-22",
      color: "white"
    },
    {
      position: "8-23",
      color: "white"
    },
    {
      position: "8-24",
      color: "white"
    },
    {
      position: "8-25",
      color: "white"
    },
    {
      position: "9-1",
      color: "white"
    },
    {
      position: "9-2",
      color: "white"
    },
    {
      position: "9-3",
      color: "white"
    },
    {
      position: "9-4",
      color: "white"
    },
    {
      position: "9-5",
      color: "white"
    },
    {
      position: "9-6",
      color: "white"
    },
    {
      position: "9-7",
      color: "white"
    },
    {
      position: "9-8",
      color: "white"
    },
    {
      position: "9-9",
      color: "white"
    },
    {
      position: "9-10",
      color: "white"
    },
    {
      position: "9-11",
      color: "white"
    },
    {
      position: "9-12",
      color: "white"
    },
    {
      position: "9-13",
      color: "white"
    },
    {
      position: "9-14",
      color: "white"
    },
    {
      position: "9-15",
      color: "white"
    },
    {
      position: "9-16",
      color: "white"
    },
    {
      position: "9-17",
      color: "white"
    },
    {
      position: "9-18",
      color: "white"
    },
    {
      position: "9-19",
      color: "white"
    },
    {
      position: "9-20",
      color: "white"
    },
    {
      position: "9-21",
      color: "white"
    },
    {
      position: "9-22",
      color: "white"
    },
    {
      position: "9-23",
      color: "white"
    },
    {
      position: "9-24",
      color: "white"
    },
    {
      position: "9-25",
      color: "white"
    },
    {
      position: "10-1",
      color: "white"
    },
    {
      position: "10-2",
      color: "white"
    },
    {
      position: "10-3",
      color: "white"
    },
    {
      position: "10-4",
      color: "white"
    },
    {
      position: "10-5",
      color: "white"
    },
    {
      position: "10-6",
      color: "white"
    },
    {
      position: "10-7",
      color: "white"
    },
    {
      position: "10-8",
      color: "white"
    },
    {
      position: "10-9",
      color: "white"
    },
    {
      position: "10-10",
      color: "white"
    },
    {
      position: "10-11",
      color: "white"
    },
    {
      position: "10-12",
      color: "white"
    },
    {
      position: "10-13",
      color: "white"
    },
    {
      position: "10-14",
      color: "white"
    },
    {
      position: "10-15",
      color: "white"
    },
    {
      position: "10-16",
      color: "white"
    },
    {
      position: "10-17",
      color: "white"
    },
    {
      position: "10-18",
      color: "white"
    },
    {
      position: "10-19",
      color: "white"
    },
    {
      position: "10-20",
      color: "white"
    },
    {
      position: "10-21",
      color: "white"
    },
    {
      position: "10-22",
      color: "white"
    },
    {
      position: "10-23",
      color: "white"
    },
    {
      position: "10-24",
      color: "white"
    },
    {
      position: "10-25",
      color: "white"
    },
    {
      position: "11-1",
      color: "white"
    },
    {
      position: "11-2",
      color: "white"
    },
    {
      position: "11-3",
      color: "white"
    },
    {
      position: "11-4",
      color: "white"
    },
    {
      position: "11-5",
      color: "white"
    },
    {
      position: "11-6",
      color: "white"
    },
    {
      position: "11-7",
      color: "white"
    },
    {
      position: "11-8",
      color: "white"
    },
    {
      position: "11-9",
      color: "white"
    },
    {
      position: "11-10",
      color: "white"
    },
    {
      position: "11-11",
      color: "white"
    },
    {
      position: "11-12",
      color: "white"
    },
    {
      position: "11-13",
      color: "white"
    },
    {
      position: "11-14",
      color: "white"
    },
    {
      position: "11-15",
      color: "white"
    },
    {
      position: "11-16",
      color: "white"
    },
    {
      position: "11-17",
      color: "white"
    },
    {
      position: "11-18",
      color: "white"
    },
    {
      position: "11-19",
      color: "white"
    },
    {
      position: "11-20",
      color: "white"
    },
    {
      position: "11-21",
      color: "white"
    },
    {
      position: "11-22",
      color: "white"
    },
    {
      position: "11-23",
      color: "white"
    },
    {
      position: "11-24",
      color: "white"
    },
    {
      position: "11-25",
      color: "white"
    },
    {
      position: "12-1",
      color: "white"
    },
    {
      position: "12-2",
      color: "white"
    },
    {
      position: "12-3",
      color: "white"
    },
    {
      position: "12-4",
      color: "white"
    },
    {
      position: "12-5",
      color: "white"
    },
    {
      position: "12-6",
      color: "white"
    },
    {
      position: "12-7",
      color: "white"
    },
    {
      position: "12-8",
      color: "white"
    },
    {
      position: "12-9",
      color: "white"
    },
    {
      position: "12-10",
      color: "white"
    },
    {
      position: "12-11",
      color: "white"
    },
    {
      position: "12-12",
      color: "white"
    },
    {
      position: "12-13",
      color: "white"
    },
    {
      position: "12-14",
      color: "white"
    },
    {
      position: "12-15",
      color: "white"
    },
    {
      position: "12-16",
      color: "white"
    },
    {
      position: "12-17",
      color: "white"
    },
    {
      position: "12-18",
      color: "white"
    },
    {
      position: "12-19",
      color: "white"
    },
    {
      position: "12-20",
      color: "white"
    },
    {
      position: "12-21",
      color: "white"
    },
    {
      position: "12-22",
      color: "white"
    },
    {
      position: "12-23",
      color: "white"
    },
    {
      position: "12-24",
      color: "white"
    },
    {
      position: "12-25",
      color: "white"
    },
    {
      position: "13-1",
      color: "white"
    },
    {
      position: "13-2",
      color: "white"
    },
    {
      position: "13-3",
      color: "white"
    },
    {
      position: "13-4",
      color: "white"
    },
    {
      position: "13-5",
      color: "white"
    },
    {
      position: "13-6",
      color: "white"
    },
    {
      position: "13-7",
      color: "white"
    },
    {
      position: "13-8",
      color: "white"
    },
    {
      position: "13-9",
      color: "white"
    },
    {
      position: "13-10",
      color: "white"
    },
    {
      position: "13-11",
      color: "white"
    },
    {
      position: "13-12",
      color: "white"
    },
    {
      position: "13-13",
      color: "white"
    },
    {
      position: "13-14",
      color: "white"
    },
    {
      position: "13-15",
      color: "white"
    },
    {
      position: "13-16",
      color: "white"
    },
    {
      position: "13-17",
      color: "white"
    },
    {
      position: "13-18",
      color: "white"
    },
    {
      position: "13-19",
      color: "white"
    },
    {
      position: "13-20",
      color: "white"
    },
    {
      position: "13-21",
      color: "white"
    },
    {
      position: "13-22",
      color: "white"
    },
    {
      position: "13-23",
      color: "white"
    },
    {
      position: "13-24",
      color: "white"
    },
    {
      position: "13-25",
      color: "white"
    },
    {
      position: "14-1",
      color: "white"
    },
    {
      position: "14-2",
      color: "white"
    },
    {
      position: "14-3",
      color: "white"
    },
    {
      position: "14-4",
      color: "white"
    },
    {
      position: "14-5",
      color: "white"
    },
    {
      position: "14-6",
      color: "white"
    },
    {
      position: "14-7",
      color: "white"
    },
    {
      position: "14-8",
      color: "white"
    },
    {
      position: "14-9",
      color: "white"
    },
    {
      position: "14-10",
      color: "white"
    },
    {
      position: "14-11",
      color: "white"
    },
    {
      position: "14-12",
      color: "white"
    },
    {
      position: "14-13",
      color: "white"
    },
    {
      position: "14-14",
      color: "white"
    },
    {
      position: "14-15",
      color: "white"
    },
    {
      position: "14-16",
      color: "white"
    },
    {
      position: "14-17",
      color: "white"
    },
    {
      position: "14-18",
      color: "white"
    },
    {
      position: "14-19",
      color: "white"
    },
    {
      position: "14-20",
      color: "white"
    },
    {
      position: "14-21",
      color: "white"
    },
    {
      position: "14-22",
      color: "white"
    },
    {
      position: "14-23",
      color: "white"
    },
    {
      position: "14-24",
      color: "white"
    },
    {
      position: "14-25",
      color: "white"
    },
    {
      position: "15-1",
      color: "white"
    },
    {
      position: "15-2",
      color: "white"
    },
    {
      position: "15-3",
      color: "white"
    },
    {
      position: "15-4",
      color: "white"
    },
    {
      position: "15-5",
      color: "white"
    },
    {
      position: "15-6",
      color: "white"
    },
    {
      position: "15-7",
      color: "white"
    },
    {
      position: "15-8",
      color: "white"
    },
    {
      position: "15-9",
      color: "white"
    },
    {
      position: "15-10",
      color: "white"
    },
    {
      position: "15-11",
      color: "white"
    },
    {
      position: "15-12",
      color: "white"
    },
    {
      position: "15-13",
      color: "white"
    },
    {
      position: "15-14",
      color: "white"
    },
    {
      position: "15-15",
      color: "white"
    },
    {
      position: "15-16",
      color: "white"
    },
    {
      position: "15-17",
      color: "white"
    },
    {
      position: "15-18",
      color: "white"
    },
    {
      position: "15-19",
      color: "white"
    },
    {
      position: "15-20",
      color: "white"
    },
    {
      position: "15-21",
      color: "white"
    },
    {
      position: "15-22",
      color: "white"
    },
    {
      position: "15-23",
      color: "white"
    },
    {
      position: "15-24",
      color: "white"
    },
    {
      position: "15-25",
      color: "white"
    },
    {
      position: "16-1",
      color: "white"
    },
    {
      position: "16-2",
      color: "white"
    },
    {
      position: "16-3",
      color: "white"
    },
    {
      position: "16-4",
      color: "white"
    },
    {
      position: "16-5",
      color: "white"
    },
    {
      position: "16-6",
      color: "white"
    },
    {
      position: "16-7",
      color: "white"
    },
    {
      position: "16-8",
      color: "white"
    },
    {
      position: "16-9",
      color: "white"
    },
    {
      position: "16-10",
      color: "white"
    },
    {
      position: "16-11",
      color: "white"
    },
    {
      position: "16-12",
      color: "white"
    },
    {
      position: "16-13",
      color: "white"
    },
    {
      position: "16-14",
      color: "white"
    },
    {
      position: "16-15",
      color: "white"
    },
    {
      position: "16-16",
      color: "white"
    },
    {
      position: "16-17",
      color: "white"
    },
    {
      position: "16-18",
      color: "white"
    },
    {
      position: "16-19",
      color: "white"
    },
    {
      position: "16-20",
      color: "white"
    },
    {
      position: "16-21",
      color: "white"
    },
    {
      position: "16-22",
      color: "white"
    },
    {
      position: "16-23",
      color: "white"
    },
    {
      position: "16-24",
      color: "white"
    },
    {
      position: "16-25",
      color: "white"
    },
    {
      position: "17-1",
      color: "white"
    },
    {
      position: "17-2",
      color: "white"
    },
    {
      position: "17-3",
      color: "white"
    },
    {
      position: "17-4",
      color: "white"
    },
    {
      position: "17-5",
      color: "white"
    },
    {
      position: "17-6",
      color: "white"
    },
    {
      position: "17-7",
      color: "white"
    },
    {
      position: "17-8",
      color: "white"
    },
    {
      position: "17-9",
      color: "white"
    },
    {
      position: "17-10",
      color: "white"
    },
    {
      position: "17-11",
      color: "white"
    },
    {
      position: "17-12",
      color: "white"
    },
    {
      position: "17-13",
      color: "white"
    },
    {
      position: "17-14",
      color: "white"
    },
    {
      position: "17-15",
      color: "white"
    },
    {
      position: "17-16",
      color: "white"
    },
    {
      position: "17-17",
      color: "white"
    },
    {
      position: "17-18",
      color: "white"
    },
    {
      position: "17-19",
      color: "white"
    },
    {
      position: "17-20",
      color: "white"
    },
    {
      position: "17-21",
      color: "white"
    },
    {
      position: "17-22",
      color: "white"
    },
    {
      position: "17-23",
      color: "white"
    },
    {
      position: "17-24",
      color: "white"
    },
    {
      position: "17-25",
      color: "white"
    },
    {
      position: "18-1",
      color: "white"
    },
    {
      position: "18-2",
      color: "white"
    },
    {
      position: "18-3",
      color: "white"
    },
    {
      position: "18-4",
      color: "white"
    },
    {
      position: "18-5",
      color: "white"
    },
    {
      position: "18-6",
      color: "white"
    },
    {
      position: "18-7",
      color: "white"
    },
    {
      position: "18-8",
      color: "white"
    },
    {
      position: "18-9",
      color: "white"
    },
    {
      position: "18-10",
      color: "white"
    },
    {
      position: "18-11",
      color: "white"
    },
    {
      position: "18-12",
      color: "white"
    },
    {
      position: "18-13",
      color: "white"
    },
    {
      position: "18-14",
      color: "white"
    },
    {
      position: "18-15",
      color: "white"
    },
    {
      position: "18-16",
      color: "white"
    },
    {
      position: "18-17",
      color: "white"
    },
    {
      position: "18-18",
      color: "white"
    },
    {
      position: "18-19",
      color: "white"
    },
    {
      position: "18-20",
      color: "white"
    },
    {
      position: "18-21",
      color: "white"
    },
    {
      position: "18-22",
      color: "white"
    },
    {
      position: "18-23",
      color: "white"
    },
    {
      position: "18-24",
      color: "white"
    },
    {
      position: "18-25",
      color: "white"
    },
    {
      position: "19-1",
      color: "white"
    },
    {
      position: "19-2",
      color: "white"
    },
    {
      position: "19-3",
      color: "white"
    },
    {
      position: "19-4",
      color: "white"
    },
    {
      position: "19-5",
      color: "white"
    },
    {
      position: "19-6",
      color: "white"
    },
    {
      position: "19-7",
      color: "white"
    },
    {
      position: "19-8",
      color: "white"
    },
    {
      position: "19-9",
      color: "white"
    },
    {
      position: "19-10",
      color: "white"
    },
    {
      position: "19-11",
      color: "white"
    },
    {
      position: "19-12",
      color: "white"
    },
    {
      position: "19-13",
      color: "white"
    },
    {
      position: "19-14",
      color: "white"
    },
    {
      position: "19-15",
      color: "white"
    },
    {
      position: "19-16",
      color: "white"
    },
    {
      position: "19-17",
      color: "white"
    },
    {
      position: "19-18",
      color: "white"
    },
    {
      position: "19-19",
      color: "white"
    },
    {
      position: "19-20",
      color: "white"
    },
    {
      position: "19-21",
      color: "white"
    },
    {
      position: "19-22",
      color: "white"
    },
    {
      position: "19-23",
      color: "white"
    },
    {
      position: "19-24",
      color: "white"
    },
    {
      position: "19-25",
      color: "white"
    },
    {
      position: "20-1",
      color: "white"
    },
    {
      position: "20-2",
      color: "white"
    },
    {
      position: "20-3",
      color: "white"
    },
    {
      position: "20-4",
      color: "white"
    },
    {
      position: "20-5",
      color: "white"
    },
    {
      position: "20-6",
      color: "white"
    },
    {
      position: "20-7",
      color: "white"
    },
    {
      position: "20-8",
      color: "white"
    },
    {
      position: "20-9",
      color: "white"
    },
    {
      position: "20-10",
      color: "white"
    },
    {
      position: "20-11",
      color: "white"
    },
    {
      position: "20-12",
      color: "white"
    },
    {
      position: "20-13",
      color: "white"
    },
    {
      position: "20-14",
      color: "white"
    },
    {
      position: "20-15",
      color: "white"
    },
    {
      position: "20-16",
      color: "white"
    },
    {
      position: "20-17",
      color: "white"
    },
    {
      position: "20-18",
      color: "white"
    },
    {
      position: "20-19",
      color: "white"
    },
    {
      position: "20-20",
      color: "white"
    },
    {
      position: "20-21",
      color: "white"
    },
    {
      position: "20-22",
      color: "white"
    },
    {
      position: "20-23",
      color: "white"
    },
    {
      position: "20-24",
      color: "white"
    },
    {
      position: "20-25",
      color: "white"
    },
    {
      position: "21-1",
      color: "white"
    },
    {
      position: "21-2",
      color: "white"
    },
    {
      position: "21-3",
      color: "white"
    },
    {
      position: "21-4",
      color: "white"
    },
    {
      position: "21-5",
      color: "white"
    },
    {
      position: "21-6",
      color: "white"
    },
    {
      position: "21-7",
      color: "white"
    },
    {
      position: "21-8",
      color: "white"
    },
    {
      position: "21-9",
      color: "white"
    },
    {
      position: "21-10",
      color: "white"
    },
    {
      position: "21-11",
      color: "white"
    },
    {
      position: "21-12",
      color: "white"
    },
    {
      position: "21-13",
      color: "white"
    },
    {
      position: "21-14",
      color: "white"
    },
    {
      position: "21-15",
      color: "white"
    },
    {
      position: "21-16",
      color: "white"
    },
    {
      position: "21-17",
      color: "white"
    },
    {
      position: "21-18",
      color: "white"
    },
    {
      position: "21-19",
      color: "white"
    },
    {
      position: "21-20",
      color: "white"
    },
    {
      position: "21-21",
      color: "white"
    },
    {
      position: "21-22",
      color: "white"
    },
    {
      position: "21-23",
      color: "white"
    },
    {
      position: "21-24",
      color: "white"
    },
    {
      position: "21-25",
      color: "white"
    },
    {
      position: "22-1",
      color: "black"
    },
    {
      position: "22-2",
      color: "white"
    },
    {
      position: "22-3",
      color: "white"
    },
    {
      position: "22-4",
      color: "white"
    },
    {
      position: "22-5",
      color: "white"
    },
    {
      position: "22-6",
      color: "white"
    },
    {
      position: "22-7",
      color: "white"
    },
    {
      position: "22-8",
      color: "white"
    },
    {
      position: "22-9",
      color: "white"
    },
    {
      position: "22-10",
      color: "white"
    },
    {
      position: "22-11",
      color: "white"
    },
    {
      position: "22-12",
      color: "white"
    },
    {
      position: "22-13",
      color: "white"
    },
    {
      position: "22-14",
      color: "white"
    },
    {
      position: "22-15",
      color: "white"
    },
    {
      position: "22-16",
      color: "white"
    },
    {
      position: "22-17",
      color: "white"
    },
    {
      position: "22-18",
      color: "white"
    },
    {
      position: "22-19",
      color: "white"
    },
    {
      position: "22-20",
      color: "white"
    },
    {
      position: "22-21",
      color: "white"
    },
    {
      position: "22-22",
      color: "white"
    },
    {
      position: "22-23",
      color: "white"
    },
    {
      position: "22-24",
      color: "white"
    },
    {
      position: "22-25",
      color: "black"
    },
    {
      position: "23-1",
      color: "orange"
    },
    {
      position: "23-2",
      color: "black"
    },
    {
      position: "23-3",
      color: "white"
    },
    {
      position: "23-4",
      color: "white"
    },
    {
      position: "23-5",
      color: "white"
    },
    {
      position: "23-6",
      color: "white"
    },
    {
      position: "23-7",
      color: "white"
    },
    {
      position: "23-8",
      color: "white"
    },
    {
      position: "23-9",
      color: "white"
    },
    {
      position: "23-10",
      color: "white"
    },
    {
      position: "23-11",
      color: "white"
    },
    {
      position: "23-12",
      color: "white"
    },
    {
      position: "23-13",
      color: "white"
    },
    {
      position: "23-14",
      color: "white"
    },
    {
      position: "23-15",
      color: "white"
    },
    {
      position: "23-16",
      color: "white"
    },
    {
      position: "23-17",
      color: "white"
    },
    {
      position: "23-18",
      color: "white"
    },
    {
      position: "23-19",
      color: "white"
    },
    {
      position: "23-20",
      color: "white"
    },
    {
      position: "23-21",
      color: "white"
    },
    {
      position: "23-22",
      color: "white"
    },
    {
      position: "23-23",
      color: "white"
    },
    {
      position: "23-24",
      color: "black"
    },
    {
      position: "23-25",
      color: "orange"
    },
    {
      position: "24-1",
      color: "yellow"
    },
    {
      position: "24-2",
      color: "orange"
    },
    {
      position: "24-3",
      color: "black"
    },
    {
      position: "24-4",
      color: "white"
    },
    {
      position: "24-5",
      color: "white"
    },
    {
      position: "24-6",
      color: "white"
    },
    {
      position: "24-7",
      color: "white"
    },
    {
      position: "24-8",
      color: "white"
    },
    {
      position: "24-9",
      color: "white"
    },
    {
      position: "24-10",
      color: "white"
    },
    {
      position: "24-11",
      color: "white"
    },
    {
      position: "24-12",
      color: "white"
    },
    {
      position: "24-13",
      color: "white"
    },
    {
      position: "24-14",
      color: "white"
    },
    {
      position: "24-15",
      color: "white"
    },
    {
      position: "24-16",
      color: "white"
    },
    {
      position: "24-17",
      color: "white"
    },
    {
      position: "24-18",
      color: "white"
    },
    {
      position: "24-19",
      color: "white"
    },
    {
      position: "24-20",
      color: "white"
    },
    {
      position: "24-21",
      color: "white"
    },
    {
      position: "24-22",
      color: "white"
    },
    {
      position: "24-23",
      color: "black"
    },
    {
      position: "24-24",
      color: "orange"
    },
    {
      position: "24-25",
      color: "yellow"
    },
    {
      position: "25-1",
      color: "green"
    },
    {
      position: "25-2",
      color: "yellow"
    },
    {
      position: "25-3",
      color: "orange"
    },
    {
      position: "25-4",
      color: "black"
    },
    {
      position: "25-5",
      color: "white"
    },
    {
      position: "25-6",
      color: "white"
    },
    {
      position: "25-7",
      color: "white"
    },
    {
      position: "25-8",
      color: "white"
    },
    {
      position: "25-9",
      color: "white"
    },
    {
      position: "25-10",
      color: "white"
    },
    {
      position: "25-11",
      color: "white"
    },
    {
      position: "25-12",
      color: "white"
    },
    {
      position: "25-13",
      color: "white"
    },
    {
      position: "25-14",
      color: "white"
    },
    {
      position: "25-15",
      color: "white"
    },
    {
      position: "25-16",
      color: "white"
    },
    {
      position: "25-17",
      color: "white"
    },
    {
      position: "25-18",
      color: "white"
    },
    {
      position: "25-19",
      color: "white"
    },
    {
      position: "25-20",
      color: "white"
    },
    {
      position: "25-21",
      color: "white"
    },
    {
      position: "25-22",
      color: "black"
    },
    {
      position: "25-23",
      color: "orange"
    },
    {
      position: "25-24",
      color: "yellow"
    },
    {
      position: "25-25",
      color: "green"
    }
  ]

  /////////////////////////////////// -- USEEFFECT --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////


  useEffect(() => {
    axios.get<IFields[]>('http://localhost:3001/fields')
      .then(res => {
        setFields(res.data)
      })
  }, [fields])


  useEffect(() => {

    axios.get<IColors[]>('http://localhost:3001/colors')
      .then(res => {
        setColors(res.data)
      })
  }, [myColor])

  useEffect(() => {
    socket.connect()
  }, [])


  socket.on("updateColors", function (msg) {
    setColors(msg)
  })


  /////////////////////////////////// -- FUNKTIONER --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  const paint = (field: IFields, e: React.MouseEvent<HTMLDivElement>) => {

    fields.find(f => {
      if (f.position === field.position) {
        if (field.color !== "white") {
          field.color = "white"
          socket.emit("drawing", field)
          return
        }
        field.color = myColor
        socket.emit("drawing", field)
      }
    })
  }

  function pickColor(color: string) {
    socket.emit("color", color);

    setMyColor(color)
  }

  function printFacit() {
    testFacit = fields;
    console.log(testFacit);
  }

  function compareToFacit() {
    let count = [0, 0];
    for (let i in facit) {
      count[1]++; // total count
      if (fields[i].color === facit[i].color) {
        count[0]++; // match count
      }
    }
    let percentage = count[0] / count[1] * 100 + "%";
    console.log("percentage: " + percentage);
    alert("percentage: " + percentage);
  }

  /////////////////////////////////// -- HTML --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  let renderGrid = fields.map(field => {
    return (
      <div key={field.position} id={field.position} className="pixel"
        onMouseEnter={
          (e) => {
            if (e.currentTarget.style.backgroundColor !== "white") {
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


  let renderFacit = facit.map(pixel => {
    return (
      <div key={pixel.position} id={pixel.position} className="pixel" style={{ backgroundColor: pixel.color }}>
      </div>

    )
  })

  /////////////////////////////////// -- JSX --     //////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  return (<>
    {/* {colors.length >= 0 && <> */}

    <button onClick={printFacit}>se facit du ritat</button>

    <h1>{colors.length}</h1>
    <h1>{myColor}</h1>
    <div id="grid">{renderGrid}
      <div>
        {colorsToPickFrom}
      </div>
    </div>

    <button onClick={compareToFacit}>rätta bilden</button>

    
    <div id="facitGrid">
      {renderFacit}
    </div>


    {/* </>
    } */}




    {/* {colors.length == 0 && <div>rummet är tyvörr fullt, prova ett annat rum</div>} */}
  </>)
}