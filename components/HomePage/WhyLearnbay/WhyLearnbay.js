import React from "react";
import styles from "./WhyLearnbay.module.css";
import Image from "next/image";

function WhyLearnbay() {
  return (
    <section className={styles.Container}>
      <div>
        <p className={styles.heading}>Why choose Learnbay for Upskilling?</p>
        <p className={styles.para}>
          Globally recognized degree and curriculum inclusive of generative AI.
        </p>
        <div className={styles.boxDiv}>
          <div className={styles.innerDiv}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconNew.png"
                width={120}
                height={120}
                alt="Learnbay"
              />
            </div>
            <p className={styles.OrangeText}>250%</p>
            <p className={styles.botPara}>Highest Salary Hike</p>
          </div>
          <div className={styles.innerDiv}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconNew.png"
                width={120}
                height={120}
                alt="Learnbay"
              />
            </div>
            <p className={styles.OrangeText}>250%</p>
            <p className={styles.botPara}>Highest Salary Hike</p>
          </div>
          <div className={styles.innerDiv}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconNew.png"
                width={120}
                height={120}
                alt="Learnbay"
              />
            </div>
            <p className={styles.OrangeText}>250%</p>
            <p className={styles.botPara}>Highest Salary Hike</p>
          </div>
        </div>
      </div>
      <div>
      <div className={styles.imgBoy}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/global-boy.webp"
          width={350}
          height={350}
          alt="Learnbay"
        />
      </div>
      <div className={styles.imgShow}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/GLOBE+AND+GUY-02.png"
          width={350}
          height={350}
          alt="Learnbay"
        />
      </div>
      </div>
    </section>
  );
}

export default WhyLearnbay;
