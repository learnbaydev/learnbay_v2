import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  return (
    <div className={styles.boxP}>
      <div className={styles.boxD}>
        <div className={styles.boxC}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/global.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Globally Recognized Degree</p>
        </div>
      </div>
      <div className={styles.boxE}>
        <div className={styles.boxC}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/immigration.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Immigration Opportunities</p>
        </div>
      </div>
      <div className={styles.boxE}>
        <div className={styles.boxC}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/credits.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Transferable ECTS Credits</p>
        </div>
      </div>
      <div className={styles.boxD}>
        <div className={styles.boxC}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/generative.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            />
          </div>{" "}
          <p>Curriculum inclusive of Generative AI</p>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
