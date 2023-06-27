import React, { useState } from "react";
import Form from "../../Form/Form";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import styles from "../FourthSection/FourthSection.module.css";

const FifthSection = ({
  dataScience,
  dataScienceCounselling,
  titleCourse,
  brochureLink,
  secondLine,
  thirdHead,
  thirdHeadSpan,
}) => {
  const [popups, setPopups] = useState(false);
  const [popupsB, setPopupsB] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const popupShowD = () => {
    setPopupsB(true);
  };
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <div className={`${styles.map} imgWrapper`}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Map(learners).png"
          width="617"
          height="779"
          alt="data science course"
        />
      </div>
      <div className={styles.First}>
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
            <h5>Apply For Counselling</h5>
            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              titleCourse={titleCourse}
              brochureLink={brochureLink}
            />
          </div>
        </Popup>
        <div className={styles.FirstLeft}>
          <p className={styles.ptopBox}>Invest in yourself!</p>
          <h4 className={styles.h1}>
            Stay Ahead Of The Curve With Support Of Our
            <span className={styles.h1Span}> Alumni Community</span>
          </h4>
        </div>
        <div className={styles.secondLeft}>
          <div className={styles.PlayImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni-Map-Mobile-View.png"
              width="910"
              height="920"
              alt="data science course"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
