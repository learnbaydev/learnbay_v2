import styles from "./HomeLine.module.css";
import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

const HomeLine = ({ Emi }) => {
  return (
    <div className="wrapper">
      <div className={styles.feature}>
        <div className={styles.container}>
          <div className={styles.left}>
            <AiOutlineRise
              className={styles.featureIcons}
              style={{ color: "#2DB621" }}
            />
            <p>68% salary hike</p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.middle}>
            <BiBriefcase
              className={styles.featureIcons}
              style={{ color: "#0072bc" }}
            />
            <p>300+ hiring partners</p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.right}>
            <FaAward className={styles.featureIcons} />
            <p>100% job calls</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLine;
