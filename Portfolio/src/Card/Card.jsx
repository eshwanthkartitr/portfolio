import React from "react";

function Card({ x, y, text, color, font_size, font_family, styles, children }) {
  const cardStyle = {
    color: color,
    fontSize: font_size + "px",
    fontFamily: font_family,
    width: x + "px",
    height: y + "px",
    backgroundColor: "lightblue",
    display: "flex",
    flexDirection: "column", // Set flex direction to column
    justifyContent: "flex-start", // Align items at the start
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "40px",
    padding: "40px",
  };

  const imageContainerStyle = {
    marginBottom: "20px", // Add margin to separate text and image
    position: "relative", // Set position to relative
    transform: "translateY(-100px)", // Move the child element up by 100px
  };

  return (
    <div style={cardStyle}>
      {text}
      <div style={imageContainerStyle}>
        {children} {/* Render image */}
      </div>
    </div>
  );
}

export default Card;
