import React from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import { ThirdSectionData } from "./ThirdSectionData";

function ThirdSection({leftImage}) {
  return (
    <div className={`${styles.program} wrapper`} >
      <h4>Who Is This Program For?</h4>
      <div className={styles.programWrap}>
        <div className={styles.left}>
          <Image src={leftImage} width={373} height={406} />
        </div>
        <div>
          <div className={styles.boxWrap}>
            {ThirdSectionData.map((data, index) => {
                const {icon, heading, para} = data;
                return ( <div className={styles.leftSide} key={index}>
                    <div className={styles.boxIcon}>
                      <div>{icon}
                      </div>
                    </div>
                    <h5 className={styles.heading}>{heading}</h5>
                    <p>{para}</p>
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
