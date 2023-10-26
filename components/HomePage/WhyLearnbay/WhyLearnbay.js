import React from "react";
import styles from "./WhyLearnbay.module.css";
import Image from "next/image";

function WhyLearnbay() {
  return (
    <section className={styles.Container}>
      <div>
        <p className={styles.heading}>
        Reasons to Elevate Your Skills with Learnbay{" "}
          <span className={styles.contBlue}>Upskilling?</span>
        </p>
        <p className={styles.para}>
        Earn degrees and certifications acknowledged worldwide, inclusive of cutting-edge topics like Generative AI.
        </p>
        <div className={styles.boxDiv}>
          <div className={styles.innerDiv}>
            <div className={styles.imgBox}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bar-chart.gif"
                width={60}
                height={60}
                alt="Learnbay"
              />
            </div>
            <div>
            <p className={styles.OrangeText}>250%</p>
            <p className={styles.botPara}>Experience an average salary boost</p>
            </div>
          </div>
          <div className={styles.innerDiv}>
            <div className={styles.imgBox}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/building.gif"
                width={60}
                height={60}
                alt="Learnbay"
              />
            </div>
            <div>

            <p className={styles.OrangeText}>450+</p>
            <p className={styles.botPara}>Join our network with 450+ industry partners</p>
          </div>
          </div>
          <div className={styles.innerDiv}>
            <div className={styles.imgBox}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/building.gif"
                width={60}
                height={60}
                alt="Learnbay"
              />
            </div>
            <div>

            <p className={styles.OrangeText}>96%</p>
            <p className={styles.botPara}>of our students recommend us for upskilling.</p>
          </div>
          </div>
        </div>
      </div>
      <div className={styles.boxSecond}>
        <div className={styles.imgBoy}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/global-boy.webp"
            width={420}
            height={420}
            alt="Learnbay"
          />
        </div>
        <div className={styles.imgShow}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/GLOBE+AND+GUY-02.png"
            width={370}
            height={370}
            alt="Learnbay"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyLearnbay;
