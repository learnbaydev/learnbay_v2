import { useRef, useState } from "react";
import styles from "./ProjectSection.module.css";
import Image from "next/image";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import VideoPopup from "../../VideoPopup/VideoPopup";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";

const ProjectSection=({
idss,
  dataScience,
  radio,

  dataScienceCounselling,
})=> {

  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  

  const el = useRef(null);

  const popupShow = () => {
    setPopups(true);
  };
 


  return (
    <section className={styles.container} id="ProjectLab">
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
          />
        </div>
      </Popup>
      <h4 className={styles.h4}>
      Work on Real Project with Learnbay’s <span className={styles.span}>ProjectLab</span>
      </h4>
      <div className={styles.box}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
        <div className={styles.InnerBox1}>
          <div className="imgWrapper">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/project-innovation.webp"
              loading="lazy"
              width="358"
              height="212"
              alt="profile-Img"
              onClick={() => videoSHow()}
            />
          </div>
          <p className={styles.BlueHed}>Project Innovation Lab</p>
          <div className={styles.iconPara}>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Work in an industry like environment and gain practical hands-on experience
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Gain the work experience of data scientist with dedicated project mentors from industry.
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Build project portfolio with domain specific capstone projects
            </p>
          </div>
        </div>
        <div className={styles.InnerBox2}>
          <div className="imgWrapper">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Project-Certification.webp"
              loading="lazy"
              width="358"
              height="212"
              alt="profile-Img"
              onClick={() => videoSHow()}
            />
          </div>
          <p className={styles.BlueHed}>Project Certification from IBM</p>
          <div className={styles.iconPara}>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Gain real proof of hands-on experience by having your project certified by the industry
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Make your past experiences count with domain specialisation and Project certification
            </p>
          </div>
        </div>
      </div>
          <div className={styles.secondDiv}>
            <div className={styles.firstDiv}>
              <p className={styles.BlueHed}>Domain Specialization</p>
              <p className={styles.para}>
              With domain specialization, we help you in leveraging your prior work experience to ensure its relevance in your career transition, aiming to get a good salary hike for you.
              </p>
              <div className={styles.iconBoxDesktop}>
                <div className={styles.iconBox}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bank.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>BFSI</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/heartbeat.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHCARE</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/delivery-truck.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>SUPPLYCHAIN</p>
                  </div>
                  <a href="/domain">
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                  </a>
                </div>
              </div>
              <div className={styles.iconBoxMobile}>
                <div className={styles.iconBox}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bank.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>BFSI</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/heartbeat.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHCARE</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/delivery-truck.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>SUPPLYCHAIN</p>
                  </div>
                </div>
                <div className={styles.buttonDiv} >
                  <Button
                  
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/domainSlider.png"
                  loading="lazy"
                  width="517"
                  height="300"
                  alt="profile-Img"
                />
              </div>
            </div>
          </div>
    </section>
  );
}

export default ProjectSection;
