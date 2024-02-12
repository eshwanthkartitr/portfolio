import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header/Header.jsx";
import Card from "./Card/Card.jsx";
import { text } from "@fortawesome/fontawesome-svg-core";

function App() {
  return (
    <>
      <Header></Header>
      <Card
        id="car-1"
        x={161}
        y={304}
        text="Hi i am a b.tech student from Amrita Vishwa Vidyapeetam and i am currently interested in ai related stuffs"
        color="white"
        font_size={19}
        font_family="Port Lligat Sans"
      >
        {/* Nested Card */}
        <Card
          styles={{ backgroundColor: "lightblue", padding: "20px", borderRadius: "20px" }}
        >
          <img src={reactLogo} alt="" />
        </Card>
      </Card>
    </>
  );
}

export default App;
