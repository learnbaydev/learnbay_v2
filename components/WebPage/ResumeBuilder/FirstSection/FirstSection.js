import React from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
// import { FaDownload } from "react-icons/fa";
import { FaChevronDown, FaBell, FaDownload } from "react-icons/fa";
import { firstSectionData } from "./FirstSectionData";
import dynamic from "next/dynamic";
import Link from "next/link";
const Button = dynamic(() => import("../../../Global/Button/Button"));

function FirstSection() {
  return (
    <section className={styles.mains}>
      <div className={styles.cont}>
        <p>DOWNLOAD for FREE</p>
        <h4>PROFESSIONAL RESUME TEMPLATES</h4>
      </div>
      <div className={styles.backThank}>
        {firstSectionData.map((data, index) => {
          const { img, url, btnName } = data;
          return (
            <a href={url} target="_blank">
              <div className={styles.boxIinner} key={index}>
                <div>
                  <Image
                    src={img}
                    width="355"
                    height="480"
                     
                    alt="data science course"
                  />
                </div>
                <div className={styles.button}>
                  <button>
                    {btnName}
                    <FaDownload style={{ marginLeft: "10px" }} />
                  </button>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className={styles.backThankbot}>
      {firstSectionData.map((data, index) => {
          const { btnName } = data;
          return ( <p className={styles.botText} key={index}>{btnName}</p> );
        })}
      </div>
    </section>
  );
}

export default FirstSection;
