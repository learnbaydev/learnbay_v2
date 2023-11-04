import React from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import Button from "../../Global/Button/Button";
import { FaCheckCircle, FaDownload } from "react-icons/fa";


function ThirdSection({ leftImage, ThirdSectionData }) {
  return (
    <div className={`${styles.program} wrapper`} id="eligibility">
      <h4>Choose Your Domain Elective</h4>
      <div className={styles.programWrap}>
        <div className={styles.left}>
          <Image src={leftImage} width={500} height={514} alt="who" />
        </div>
        <div>
          <div className={styles.boxWrap}>
            {ThirdSectionData.map((data, index) => {
              const { icon, heading, para } = data;
              return (
                <div className={styles.leftSide} key={index}>
                  <div className={styles.boxIcon} >
                    <div> <Image
                      src={icon}
                      loading="lazy"
                      width={40}
                      height={40}
                    /></div>
                  </div>
                  <h5 className={styles.heading}>{heading}</h5>
                  <p>{para}</p>

                  <div className={styles.buttonDiv}>
                  <Button
                
                    text="Brochure"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
