import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { FcOk } from "react-icons/fc";
import styles from "./FeeSection.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
const Button = dynamic(() => import("../../Global/Button/Button"));

const FeeSection = ({
  FeeHeading,
  Fee,
  dataScience,
  FeeContent2,
  FeeContent3,
  FeeContent4,
  FeeContent5,
  dataScienceCounselling,
  FeeEmi,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.feesmain}>
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
          />
        </div>
      </Popup>
      <h2>Fee & Batch Details</h2>
      <p>
        Curriculum is specifically engineered to meet the expectations of
        leading tech companies
      </p>
      <div className={styles.mainbatch}>
        <div className={styles.batch}>
          <div>
            <ul className={styles.feesbatch}>
              <li>SEP 24th</li>
              <li>MON - FRI (8 months)</li>
              <li>
                <span>08:00 AM - 10:00 AM</span>
              </li>
            </ul>
            {/* <p className={styles.fill}>Filling Fast!</p> */}
            <ul className={styles.feesbatch}>
              <li>SEP 27th</li>
              <li>SAT & SUN (8 months)</li>
              <li>
                <span>08:00 AM - 10:00 AM</span>
              </li>
            </ul>
            <div className={styles.botttomDiv}>
              <ul className={styles.fee2}>
                <li>
                  {" "}
                  <FcOk /> No cost EMI
                </li>
                <li>
                  {" "}
                  <FcOk /> Easy loan procedure
                </li>
                <li>
                  {" "}
                  <FcOk /> 15 days refund policy
                </li>
              </ul>
              <div className={styles.feeh}>
                <div>
                  <p>Payment Partners</p>
                </div>
                <div className="imgWrapper" style={{paddingRight:"10px"}}>
                   <Image
                     src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Finance+partners.webp"
                     alt="Zest"
                     width="300"
                     height="80"
                   />
                 </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fin}>
            <div className={styles.firstfin}>
              <p>Financing as low as</p>
              <h2>
                {FeeEmi} <span>month</span>
              </h2>
              <div onClick={() => popupShow(false, true)}>
                 <Button className={styles.Btn} text="Request a Callback" />
               </div>
            </div>
            <div className={styles.fingst}>
              <h3>
              {Fee} <span>+ 18% GST</span>
              </h3>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default FeeSection;
