import React, { useState } from "react";
import styles from "./Card.module.css";

function Card({
  x,
  y,
  text,
  color,
  bgcolor,
  font_size,
  font_family,
  img,
  className,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    color: color,
    fontSize: font_size + "px",
    fontFamily: font_family,
    width: x + "px",
    height: y + "px",
    backgroundColor: bgcolor,
    display: "flex",
    flexDirection: "column", // Set flex direction to column
    justifyContent: "flex-start", // Align items at the start
    alignItems: "center",
    position: "absolute",
    top: "55%",
    transform: "translate(50%,-50%) ",
    borderRadius: "40px",
    padding: "40px",
    textAlign: "center",
    transition: "background-color 0.3s ease",
    fontWeight: "normal",
    lineHeight: "1.5",
    zIndex: 100,
  };

  const imageStyle = {
    // Add margin to separate text and image
    borderRadius: "30px",
    objectFit: "cover",
    width: "150px",
    height: "150px",
    backgroundColor: "#A9A9A9",
    transition: "transform 0.3s ease",
    transform: isHovered
      ? "translateY(-20px) translateX(100px) rotateZ(30deg)"
      : "none", // Apply transform based on hover state
  };
  const i1 = {
    marginBottom: "15px",
    backgroundColor: "#A9A9A9",
    maxHeight: "150px",
    borderRadius: "40px",
    position: "relative", // Set position to relative for absolute positioning
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const hiddenTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, ${isHovered ? "-150px" : "0px"})`, // Move text up only when hovered
    opacity: isHovered ? 1 : 0, // Show text only when hovered
    transition: "transform 0.3s ease, opacity 0.3s ease", // Add transition
    color: "black",
  };

  return (
    <div style={cardStyle}>
      <div style={i1} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <img src={img} alt="User" style={imageStyle} className="image" />
        <span style={hiddenTextStyle}>Wow you found me !</span>
      </div>
      <span>This is Eshwanth Karti T R</span>
      {text}
    </div>
  );
}

export default Card;
