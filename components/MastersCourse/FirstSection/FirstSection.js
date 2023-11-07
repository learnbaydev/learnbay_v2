import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useEffect, lazy, Suspense } from "react";
import FormInline from "../../FormSection/FormInline";
import styles from "./FirstSection.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));
const Popup = dynamic(() => import("../../Popup/Popup"));
const Form = lazy(() => import("../../Form/Form"));

function FirstSection({
  dataScience,
  fullStack,
  dataScienceCounselling,
  titleCourse,
  brochureLink,
}) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.container}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Suspense>
            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              downloadBrochure
              upSkillingHide={true}
              titleCourse={titleCourse}
              brochureLink={brochureLink}
            />
          </Suspense>
        </div>
      </Popup>
      {mobile ? (
        <>
          <span className={styles.topSpan}>Learnbay Excelvarsity</span>
          <div className={styles.DivContent}>
            <h1 className={styles.h1}>
              Masters in Computer Science:
              <br />
              <span style={{ color: "#F99600" }}>Data Science and AI</span>
            </h1>
          </div>
          <div className={styles.paraCollab}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/woolf-univer.webp"
              alt="woolf-university"
              width="180"
              height="20"
            />
          </div>
          <div className={styles.boxDivGreen}>
            <p className={styles.special}>SPECIALIZATION IN</p>
            <div className={styles.iconPara}>
              <p className={styles.boxGreen}>Data Science & Analytics</p>
              <p className={styles.boxGreen}>Artificial Intelligence & ML</p>
            </div>
          </div>
          <div className={styles.FormDiv}>
            <p className={styles.NormalPForm}>
              Interested in{" "}
              <span className={styles.span}>Master’s Degree?</span>
            </p>
            <FormInline
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
            />
          </div>
          <div className={styles.boxDivGreen}>
            <p className={styles.special}>SPECIALIZATION IN</p>
            <div className={styles.iconPara}>
              <p className={styles.boxGreen}>Data Science & Analytics</p>
              <p className={styles.boxGreen}>Artificial Intelligence & ML</p>
            </div>
          </div>
          <div className={styles.FormDiv}>
            {/* <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div> */}
            <h4>
              Interested in <span>Master’s Degree?</span>
            </h4>
            <Form
              dataScienceCounselling={dataScienceCounselling}
              fullStack={fullStack}
              syllabus={true}
              upSkillingHide={true}
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
                <a href="#curriculum">
                  <div>
                    <Button bannerButton={true} text="EXPLORE PROGRAM" />
                  </div>
                </a>

                <a href="/master-application">
                  <Button whiteBgButton={true} text="START YOUR APPLICATION" />
                </a>
              </div>
            </div>
            <div className={styles.FormDiv}>
              {/* <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div> */}
              <h4>
                Interested in <span>Master’s Degree?</span>
              </h4>
              <Form
                dataScienceCounselling={dataScienceCounselling}
                fullStack={fullStack}
                syllabus={true}
                upSkillingHide={true}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default FirstSection;
