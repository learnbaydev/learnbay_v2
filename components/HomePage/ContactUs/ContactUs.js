import React from "react";
import styles from "./ContactUs.module.css";
import FormInline from "../../FormSection/FormInline";
import { AiOutlineRise } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import Image from "next/image";

function ContactUs({ dataScience, dataScienceCounselling, radio }) {
  return (
    <section className={styles.ContactUs}>
      <div className={styles.LeftSide}>
        <h1 className={styles.h1}>
          Get Ahead with Industry-Leading Courses <br />
        </h1>
      
        <div className={styles.conpara}>
          <p>
          <span className={styles.paraspan}>“</span><br/>
          Learnbay transformed my professional journey. From enrollment to landing an excellent job, the support I received was unmatched. I highly recommend Learnbay for those looking to elevate their tech careers. </p>
          </div>

<div className={styles.leftpaerson}>
  <Image
  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
  width={50}
  height={50}
  />
  


  <p>Shravanthi A<br/>
  <span>Data Scientist at TCS</span>
  </p>
</div>


      </div>



      <div className={styles.RightSide}>
        <p className={styles.NormalPForm}>
          Apply for <span className={styles.span}>Career Counselling</span>
        </p>
        <FormInline
          dataScience={dataScience}
          dataScienceCounselling={dataScienceCounselling}
          radio={radio}
          upSkillingHide={true}
        />
      </div>
    </section>
  );
}

export default ContactUs;
