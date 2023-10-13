import styles from "./HomeLine.module.css";
import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import Image from "next/image";

const HomeLine = ({ Emi }) => {
  return (
    <div className="wrapper">
      <div className={styles.feature}>
        <p>
          Get Coached by the Industry's Best: <span>Top 1% Tech Mentors</span>
        </p>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
              width="170"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>
          {/* <hr className={styles.hr} /> */}
          <div className={styles.middle}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paypal.webp"
              width="170"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>
          {/* <hr className={styles.hr} /> */}
          <div className={styles.right}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/globallogic.webp"
              width="170"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>
          {/* <hr className={styles.hr} /> */}
          <div className={styles.right}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/walmart.webp"
              width="170"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>
          {/* <hr className={styles.hr} /> */}
          <div className={styles.right}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paytm.webp"
              width="125"
              height="35"
              priority={true}
              alt="data science course"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLine;
