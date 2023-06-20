import React, { useState } from "react";
import styles from "./BoxShape.module.css";
import { MdOutlineLiveTv } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import { HomeBoxData } from "./BoxShapeData";

// Custom hook for hover functionality
const useHoverState = (initialState) => {
  const [hoverState, setHoverState] = useState(initialState);

  const handleMouseEnter = (index) => {
    setHoverState((prevHoverState) => {
      const newHoverState = prevHoverState.map((_, i) => i === 2);
      return newHoverState;
    });
  };

  const handleMouseLeave = () => {
    setHoverState((prevHoverState) => {
      const newHoverState = prevHoverState.map(() => true);
      return newHoverState;
    });
  };

  return [hoverState, handleMouseEnter, handleMouseLeave];
};

const BoxShape = () => {
  const [hoverState, handleMouseEnter, handleMouseLeave] = useHoverState([
    true,
    false,
  ]);

  return (
    <div className={styles.boxWrap}>
      <h2>Get Certified & Move Towards Your Dream Job</h2>
      <p className={styles.boxp}>
        Our Domain Specialisation and Industry Certified Capstone Projects help
        you make your past work experience relevant
      </p>
      <div className={styles.boxShape}>
        {HomeBoxData.map((data, index) => {
          const { img, title, desc, id } = data;
          const isHovered = hoverState[index];

          return (
            <div
              className={isHovered ? styles.boxActive : styles.box}
              key={id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
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
