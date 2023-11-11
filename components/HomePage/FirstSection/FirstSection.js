import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import styles from "./FirstSection.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));
const FirstSection = ({ dataScience, radio, dataScienceCounselling }) => {
  console.log("first section");
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        radio={radio}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            radio={radio}
            upSkillingHide={true}
          />
        </div>
      </Popup>

      <div className={styles.slide}>
        <div className={styles.First}>
          <div className={styles.FirstLeft}>
            <p className={styles.pTop}>Advance your tech career with</p>
            <h1 className={styles.h1}>
              India’s #1 Upskilling Platform for Working Professionals
            </h1>
            <p className={styles.blinkMobile}>
              Master real world skills with our domain specialised certification
              and Degree programs
            </p>
            <div className={styles.imgWrapperMobile}>
              <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/newHeaderOne.webp"
                  width="580"
                  height="450"
                  priority
                  quality={60}
                  alt="data science course"
                />
              </div>
            </div>

            <p className={styles.blink}>
              Master real world skills with our domain specialised certification
              and Degree programs
            </p>
            <div className={styles.GenAiBox}>
              <div className={styles.GenImageBlock}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/genAi.png"
                  width="32"
                  height="32"
                  priority
                  alt="data science course"
                />
              </div>
              <p className={styles.TextGreen}>
                Curricullum inclusive of GenAI and ChatGPT
              </p>
            </div>
            <div className={styles.btnWrapper}>
              <a href="#course">
                <Button
                  className={styles.outLineBtn}
                  ButtonWhiteBg
                  text="Courses"
                  passIcon={<FaChevronDown className="bIconS" />}
                />
              </a>
              <div onClick={popupShow}>
                <Button
                  className={styles.Btn}
                  text="Enquire Now"
                  passIcon={<FaBell className="bIconS" />}
                />
              </div>
            </div>
          </div>
          <div className={styles.secondLeft}>
            <div className={styles.imgWrapperDesktop}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/newHeaderOne.webp"
                width="580"
                height="450"
                priority
                quality={55}
                alt="data science course"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(FirstSection);
