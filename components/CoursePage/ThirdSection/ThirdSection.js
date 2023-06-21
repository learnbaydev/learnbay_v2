import React from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import { ThirdSectionData } from "./ThirdSectionData";

function ThirdSection({leftImage}) {
  return (
    <div  className={styles.program}>
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
                        {/* <MdOutlineCastForEducation className={styles.bIcon} /> */}
                      </div>
                    </div>
                    <h4 className={styles.heading}>{heading}</h4>
                    <p>{para}</p>
                  </div>

                );
            })}
            {/* <div className={styles.top}>
              <div className={styles.leftSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    <MdOutlineCastForEducation className={styles.bIcon} />
                  </div>
                </div>
                <h4 className={styles.heading}>{heading1}</h4>
                <p>{para1}</p>
              </div>
              <div className={styles.rightSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    <MdOutlineWorkOutline className={styles.oIcon} />
                  </div>
                </div>
                <h4 className={styles.heading1}>{heading2}</h4>
                <p>{para2}</p>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.rightSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    <FaUserGraduate className={styles.oIcon} />
                  </div>
                </div>
                <h4 className={styles.heading1}>{heading3}</h4>
                <p>{para3}</p>
              </div>
              <div className={styles.leftSide}>
                <div className={styles.boxIcon}>
                  <div className={styles.imgWrap}>
                    <GiStairsGoal className={styles.bIcon} />
                  </div>
                </div>
                <h4 className={styles.heading}>{heading4}</h4>
                <p>{para4}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
