import React, { useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Form from "../../Form/Form";
import {
  FaRegUser,
  FaCheckCircle,
} from "react-icons/fa";
import FormInline from "../../FormSection/FormInline";
const Button = dynamic(() => import("../../Global/Button/Button"));

function FirstSection({
  dataScience,
  fullStack,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
}) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
  return (
    <section className={styles.container}>
      {mobile ? (
        <>
          <span className={styles.topSpan}>Learnbay Excelvarsity</span>
          <div className={styles.DivContent}>
            <h1 className={styles.h1}>
              Masters in CS:
              <br />
              <span style={{ color: "#0072BC" }}>Data Science and AI</span>
            </h1>
            <div className={styles.paraCollab}>
              <p>In Collaboration with</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/woolf-university.webp"
                alt="woolf-university"
                width="216"
                height="14"
              />
            </div>
          </div>
          <div className={styles.HeadImage}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/DSMasterHeader.webp"
              alt="woolf-university"
              width="367"
              height="214"
            />
          </div>
          <div className={styles.ButtonDiv}>
            <Button className={styles.Btn} text="START YOUR APPLICATION" />
          </div>
          <div className={styles.FormDiv}>
            <p className={styles.NormalPForm}>
              Interested in{" "}
              <span className={styles.span}>Master’s Degree?</span>
            </p>
            <FormInline
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.DivContent}>
            <div className={styles.firstDiv}>
              <h1 className={styles.h1}>
                Masters in Computer Science:
                <br />
                <span style={{ color: "#0072BC" }}>Data Science and AI</span>
              </h1>
              <div className={styles.paraCollab}>
                <p>In Collaboration with</p>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/woolf-university.webp"
                  alt="woolf-university"
                  width="330"
                  height="20"
                />
              </div>
              <div className={styles.iconPara}>
                <p>
                  <FaCheckCircle className={styles.iconCheck} />6 months
                  part-time program with live online classes
                </p>
                <p>
                  <FaCheckCircle className={styles.iconCheck} />
                  Re-engineered curriculum for post Chat-GPT era
                </p>
                <p>
                  <FaCheckCircle className={styles.iconCheck} />
                  No prior coding experience required
                </p>
              </div>
              <div className={styles.BtnDiv}>
                <div>
                  <Button bannerButton={true} text="EXPLORE PROGRAM" />
                </div>
                <div>
                  <Button nobannerButton={true} text="START MY APPLICATION" />
                </div>
              </div>
            </div>
            <div className={styles.FormDiv}>
              <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div>
              <h4>
                Interested in <span>Master’s Degree?</span>
              </h4>
              <Form
                dataScienceCounselling={dataScienceCounselling}
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                fullStack={fullStack}
                syllabus={true}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default FirstSection;
