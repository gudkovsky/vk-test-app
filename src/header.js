import React from "react";
export default function Header() {

  return (
    <div style={{ marginBottom: 10 }}>

      <h1 className="h1">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/768px-VK_Compact_Logo_%282021-present%29.svg.png' alt=''/>Room scheduler for VK
      </h1>
 
      <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
        Комфортное пространство для переговоров и встреч
      </p>
      <a
        className={"preact"}
        target="_blank"
        href="https://github.com/gudkovsky"
        style={{
          fontSize: 10,
          height: 20
        }} rel="noreferrer"
      >
        🐰 привет команде VK
      </a>
    </div>
  );
};
