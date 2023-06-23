import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";
import { SecondSectionData } from "./SecondSectionData";

function SecondSection() {
  return (
    <div className={`${styles.second} wrapper`}>
      <div>
        <h2 className={styles.h1}>Why Choose Us?</h2>
        <p className={styles.ptop}>
          India&apos;s top rated bootcamp for working professionals
        </p>
      </div>
      <div className={styles.secondBox}>
        {SecondSectionData.map((data, index) => {
          const { heading, para, img, width, height } = data;
          return (
            <div className={styles.blue} key={index}>
              <div>
                <h4 className={styles.heading}>{heading}</h4>
                <p className={styles.textBox}>{para}</p>
              </div>
              <div className={styles.imgWrap}>
                <Image
                  src={img}
                  width={width}
                  height={height}
                  alt="data science"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecondSection;
