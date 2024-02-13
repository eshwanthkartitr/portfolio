import React from "react";
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
  };

  const imageStyle = {
    // Add margin to separate text and image
    borderRadius: "30px",
    objectFit: "cover",
    width: "150px",
    height: "150px",
    backgroundColor: "#A9A9A9",
    transition: "transform 0.3s ease",
  };
  const i1 = {
    marginBottom: "15px",
    backgroundColor: "#A9A9A9",
    maxHeight: "150px",
    borderRadius: "40px",
  };

  const handleHover = (e) => {
    e.target.style.transform =
      "translateY(-20px) translateX(100px) rotateZ(30deg)";
  };

  const handleLeave = (e) => {
    e.target.style.transform = "translateY(0px) ";
  };

  return (
    <div style={cardStyle}>
      <div style={i1}>
        <img
          src={img}
          alt="User"
          style={imageStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="image"
        />
      </div>
      <span>This is Eshwanth Karti T R</span>
      {text}
    </div>
  );
}

export default Card;
