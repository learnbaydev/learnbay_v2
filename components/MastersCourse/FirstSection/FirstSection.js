import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaRegUser } from "react-icons/fa";
import Form from "../../Form/Form";
import FormInline from "../../FormSection/FormInline";
import styles from "./FirstSection.module.css";
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
              <span style={{ color: "#F99600" }}>Data Science and AI</span>
            </h1>
            <div className={styles.paraCollab}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/woolf-univer.webp"
                alt="woolf-university"
                width="306"
                height="32"
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
              <p className={styles.ptopC}>Learnbay Excelvarsity</p>
              <h1 className={styles.h1}>
                Masters in Computer Science:
                <br />
                <span style={{ color: "#F99600" }}>Data Science and AI</span>
              </h1>
              <div className={styles.paraCollab}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/woolf-univer.webp"
                  alt="woolf-university"
                  width="268"
                  height="28"
                />
              </div>
              <div className={styles.boxDivGreen}>
                <p className={styles.special}>SPECIALIZATION IN</p>
                <div className={styles.iconPara}>
                  <p className={styles.boxGreen}>Data Science & Analytics</p>
                  <p className={styles.boxGreen}>
                    Artificial Intelligence & ML
                  </p>
                </div>
              </div>
              <div className={styles.BtnDiv}>
                <div>
                  <Button bannerButton={true} text="EXPLORE PROGRAM" />
                </div>
                <div>
                  <Button whiteBgButton={true} text="START MY APPLICATION" />
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
