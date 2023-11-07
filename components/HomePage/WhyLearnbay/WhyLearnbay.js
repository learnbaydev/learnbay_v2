import React from "react";
import styles from "./WhyLearnbay.module.css";
import Image from "next/image";
import {FiTrendingUp} from 'react-icons/fi'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {FiVideo} from 'react-icons/fi'

function WhyLearnbay() {
  console.log("why learnbays");
  return (
    <section className={styles.Container}>
      <div>
        <p className={styles.heading}>
          Why choose Learnbay for{" "}
          <span className={styles.contBlue}>Upskilling?</span>
        </p>
        <p className={styles.para}>
          We have upskilled thousands of professionals from various domains to
          land their dream tech job.
        </p>
        <div className={styles.boxDiv}>
          <div className={styles.innerDiv}>
            <div className={styles.imgBox}>
              {/* <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bar-chart.gif"
                width={60}
                height={60}
                alt="Learnbay"
              /> */}
              <div className={styles.iconbox}>
              <FiTrendingUp className={styles.icon}/>
              </div>
            </div>
            <div>
              <p className={styles.OrangeText}>250%</p>
              <p className={styles.botPara}>Highest Salary Hike</p>
            </div>
          </div>
          <div className={styles.innerDiv}>
            <div className={styles.imgBox}>
              {/* <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/building.gif"
                width={60}
                height={60}
                alt="Learnbay"
              /> */}
               <div className={styles.iconbox}>
              <HiOutlineBuildingOffice2 className={styles.icon}/>
              </div>
            </div>
            <div>
              <p className={styles.OrangeText}>Dedicated</p>
              <p className={styles.botPara}>Placement Cell</p>
            </div>
          </div>
          <div className={styles.innerDiv}>
            <div className={styles.imgBox}>
              {/* <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Live-online.gif"
                width={60}
                height={60}
                alt="Learnbay"
              /> */}
               <div className={styles.iconbox}>
              <FiVideo className={styles.icon}/>
              </div>
            </div>
            <div>
              <p className={styles.OrangeText}>Live online</p>
              <p className={styles.botPara}>Interactive Session</p>
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
            loading="lazy"
            quality={40}
          />
        </div>
        <div className={styles.imgShow}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/globe.webp"
            width={370}
            height={370}
            alt="Learnbay"
           loading="lazy"
           quality={40}
          />
        </div>
      </div>
    </section>
  );
}

export default WhyLearnbay;
