import React from "react";
import styles from "./SubCard.module.css"; // Import CSS module for styling

const Sub_card = () => {
  return (
    <div className={styles.subCardContainer}>
      <div className={`${styles.subCard} ${styles.big}`}></div>
      <div className={`${styles.subCard} ${styles.small}`}></div>
      <div className={`${styles.subCard} ${styles.small}`}></div>
      <div className={`${styles.subCard} ${styles.big} 2`}></div>
    </div>
  );
};

export default Sub_card;
