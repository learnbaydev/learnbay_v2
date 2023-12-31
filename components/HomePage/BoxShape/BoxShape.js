import React from "react";
import styles from "./BoxShape.module.css";
import Image from "next/image";
import { HomeBoxData } from "./BoxShapeData";

const BoxShape = () => {
  return (
    <div className={styles.boxWrap}>
      <h2>Get Certified & Move Towards Your Dream Job</h2>
      <p className={styles.boxp}>
        Our Domain Specialization and Industry Certified Capstone Projects help
        you make your past work experience relevant
      </p>
      <div className={styles.boxShape}>
        {HomeBoxData.map((data) => {
          const { img, title, desc, id } = data;

          return (
            <div className={styles.box} key={id} id="box">
              <div className={styles.imgBack}>
                <Image
                  src={img}
                  width="60"
                  height="60"
                  loading="lazy"
                  alt="data science course"
                />
              </div>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxShape;
