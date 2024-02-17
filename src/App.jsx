import React, { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex")
  const [color, setColor] = useState("#000000")

  function randomColorUtility(elementLength) {
    return (Math.floor(Math.random() * elementLength))
  }

  function handleHexColor() {
    let hashColor = "#";
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
      hashColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hashColor)
    setColor(hashColor);
  }
  // useEffect("hex" === handleHexColor : handleRgbColor
  //   , [typeOfColor])
  function handleRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)
    console.log(`rgb${r}, ${g}, ${b}`)
    setColor(`rgb(${r},${g},${b})`)

  }

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gridGap: "20px",
      background: color
    }}>
      <div >
        <h1>Generating a random </h1>
        <button onClick={() => (setTypeOfColor("hex"))} >select HEX Color</button>
        <button onClick={() => { setTypeOfColor('rgb') }}>select RGB Color</button>
      </div>
      <button onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor} >{`Generate ${typeOfColor === "hex" ? "Hex" : "RGB"}  Random COlor`}</button>
      <div>
        {/* <h1>{typeOfColor === "rgb" ? "Rgb Color" : "Hex Color"}</h1> */}
        <h2>{color}</h2>
      </div>
    </div>

  )

}
