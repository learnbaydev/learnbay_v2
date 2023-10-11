import React from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import FormInline from "../../FormSection/FormInline";
const Button = dynamic(() => import("../../Global/Button/Button"));

function FirstSection({dataScience, dataScienceCounselling}) {
  return (
    <section className={styles.container}>
      <span className={styles.topSpan}>Learnbay Excelvarsity</span>
      <div className={styles.DivContent}>
        <h1 className={styles.h1}>
          Masters in CS:<br />
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
        Interested in <span className={styles.span}>Master’s Degree?</span>
        </p>
        <FormInline
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
        />
      </div>
    </section>
  );
}

export default FirstSection;
