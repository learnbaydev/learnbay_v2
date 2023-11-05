import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { FcOk } from "react-icons/fc";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import styles from "./FeeSection.module.css";
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
    <div className={styles.feesmain} id="Fees">
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        // radio={radio}
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
            upSkillingHide={true}
            // radio={radio}
          />
        </div>
      </Popup>
      <h2>Fee & Batch Details</h2>
      <p className={styles.pTop}>
        Curriculum is specifically engineered to meet the expectations of
        leading tech companies
      </p>
      {/* <div className={styles.mainbatch}>
        <div className={styles.batch}>
          <div>
            <ul className={styles.feesbatch}>
              <li>SEP 24th</li>
              <li>MON - FRI (8 months)</li>
              <li>
                <span>08:00 AM - 10:00 AM</span>
              </li>
            </ul>
            <p className={styles.fill}>Filling Fast!</p>
            <ul className={styles.feesbatch}>
              <img
                className={styles.fillimg}
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/filling-fast.webp"
                width={90}
                height={56}
              />
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
                <div className="imgWrapper" style={{ paddingRight: "10px" }}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Finance+partners.webp"
                    alt="Zest"
                    width="300"
                    height="80"
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className={styles.fin}>
            <div className={styles.firstfin}>
              <p>Financing as low as</p>
              <h2>
                {FeeEmi} <span className={styles.montspan}>month</span>
              </h2>
              <div onClick={popupShow}>
                <Button className={styles.Btn} text="Request a Callback" />
              </div>
              <div className={styles.feeh1}>
                <div>
                  <p>Payment Partners</p>
                </div>
                <div className="imgWrapper" style={{ paddingRight: "10px" }}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Finance+partners.webp"
                    alt="Zest"
                    width="300"
                    height="80"
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div className={styles.fingst}>
              <h3>
                {Fee} <span className={styles.gstspan}>+ 18% GST</span>
              </h3>
            </div>
          </div>
          <div />
        </div>
      </div> */}
      <div className={styles.ThreeCard}>
        <div className={styles.first}>
          <p style={{ textAlign: "center" }}>
            <b>Scholarship Details</b>
          </p>
          <div className={styles.imgFee}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/feeSection.webp"
              width="367"
              height="221"
              alt="data science course"
              loading="lazy"
            />
          </div>
          <p style={{ marginTop: "10px" }}>
            Scholarships are awarded based on profile review. Eligible
            candidates can avail upto 25% scholarship on desired courses. Click
            the button below to apply.
          </p>
          <div className={styles.divButton} onClick={popupShow}>
            <Button
              className={styles.Btn}
              text="Check Scholarship Eligibility"
            />
          </div>
        </div>
        <div className={styles.second}>
          <p className={styles.pTop}>Financing as low as</p>
          <p className={styles.price}>₹ 8,570/ month</p>
          <div className={styles.divButton} onClick={popupShow}>
            <Button className={styles.Btn} text="Check EMI Options" />
          </div>
          <hr style={{ color: "rgba(0, 0, 0, 0.20)", margin: "30px 0px" }} />
          <p style={{ textAlign: "center", margin: "0" }}>
            <b>No Cost EMI</b>
          </p>
          <div className={styles.box}>
            <p className={styles.boxP}>
              6 months <span className={styles.boxSpan}> ₹8,570</span>
              <span className={styles.boxSpanP}> (Monthly Payments)</span>
            </p>
            <p className={styles.boxP}>
              12 months <span className={styles.boxSpan}> ₹5,860</span>
              <span className={styles.boxSpanP}> (Monthly Payments)</span>
            </p>
          </div>
          <p className={styles.orangeText}>Payment Partners</p>
          <div className={styles.iconImage}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Finance+partners.webp"
              alt="Zest"
              width="370"
              height="36"
            />
          </div>
        </div>
        <div className={styles.third}>
          <p>Batch Details</p>
          <div className={styles.boxOrange}>
            <p>Weekday Batch</p>
            <div className={styles.batches}>
              <p className={styles.date}>SEP 24th</p>
              <div className={styles.Time}>
                <p className={styles.day}>MON - FRI</p>
                <p className={styles.paraBot}>08:00 AM - 10:00 AM</p>
              </div>
            </div>
          </div>
          <hr style={{ color: "rgba(0, 0, 0, 0.20)" }} />
          <div className={styles.boxOrange}>
            <div className={styles.batchImg}>
              <p>Weekend Batch</p>
              {/* <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/filling-fast.png"
                width="136"
                height="50"
                alt="Zest"
              /> */}
            </div>
            <div className={styles.batches}>
              <p className={styles.date}>SEP 24th</p>
              <div className={styles.Time}>
                <p className={styles.day}>SAT - SUN</p>
                <p className={styles.paraBot}>08:00 AM - 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSection;
