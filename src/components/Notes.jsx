import React from "react";
import { useState } from "react";

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  // console.log(text)
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "60vh",
        width: "30vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}
    >
      <p style={{ color: "black", fontSize: "2rem" }}>All notes</p>
      <textarea
        style={{
          width: "28vw",
          height: "55vh",
          margin: "auto",
          border: "none",
          background: "transparent",
          outline: 0,
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <img
        src='edit.png'
        style={{
          width: "50px",
          height: "50px",
          position: "absolute",
          bottom: "11px",
          right: "5px",
        }}
      />
      <img
        src='pen.png'
        style={{
          width: "30px",
          height: "30px",
          position: "absolute",
          bottom: "17px",
          right: "10px",
        }}
      />
    </div>
  );
};

export default Notes;