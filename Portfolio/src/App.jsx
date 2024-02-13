import React from "react";
import Header from "./Header/Header.jsx";
import Card from "./Card/Card.jsx";
import My_img from "./assets/self_img.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Card
        x={161}
        y={400}
        text="Hi i am a b.tech student from Amrita Vishwa Vidyapeetam and i am currently interested in AI related stuffs"
        color="white"
        bgcolor="#808080"
        font_size={19}
        font_family="Port Lligat Sans"
        img={My_img}
        className="translatedCard"
      ></Card>
    </>
  );
}

export default App;
