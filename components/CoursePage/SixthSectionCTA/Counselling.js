import React, { useState, useEffect } from "react";
import styles from "../FourthSection/FourthSection.module.css";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import Button from "../../Global/Button/Button";

function Counselling({
  dataScience,
  dataScienceCounselling,
  titleCourse,
  brochureLink,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
  return (
    <>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
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
      <div className={styles.CTA}>
        <div className={styles.boxBlue}>
          <h2 className={styles.boxH2}>
            Can’t decide which program to opt for?
          </h2>
          <p className={styles.boxP}>
            Don’t worry, our expert counsellor is there to guide you make the
            right career choice
          </p>
          <div onClick={popupShow}>
            <Button
              className={styles.fillBtn}
              text=" Apply For Counselling"
              passIcon={<FaArrowRight style={{ marginLeft: "10px" }} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Counselling;
