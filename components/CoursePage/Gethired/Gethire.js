import { useEffect, useState } from "react";
import React from "react";
import data from "./GEtHireData";
import styles from "../Gethired/GetHire.module.css";

function Gethire() {
  const numberColors = [
    "rgba(0, 114, 188, 0.10)",
    "rgba(249, 150, 0, 0.10)",
    "rgba(45, 182, 33, 0.10)",
  ];
  const titleColors = ["#0072BC", "#F99600", "#2DB621"];

  return (
    <div className={styles.hiremain}>
      <h2 className={styles.mainTitle}>Get Hired in 3 Simple Steps</h2>
      <div className={styles.boxmain}>
        {data.expertiseItems.map((item, index) => (
          <div key={index} className={styles.box}>
            <div className={styles.head}>
              <h2
                className={styles.number}
                style={{ color: numberColors[index] }}
              >
                {item.number}
              </h2>
              <p className={styles.title} style={{ color: titleColors[index] }}>
                {item.title}
              </p>
            </div>
            <p className={styles.boxdec}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gethire;
