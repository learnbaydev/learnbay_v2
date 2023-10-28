import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SliderTab.module.css";
import Image from "next/image";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";
import Button from "../../Global/Button/Button";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";


const SliderTabs = ({dataScience, dataScienceCounselling}) => {

  const [bfsiButton, setBfsiButton] = useState();
  const [healthCare, setHealthCare] = useState(false);
  const [supplyChain, setSupplyChain] = useState(false);

  const [manufacture, setManufacture] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);



  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 960) {
      setTab(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 960) {
      setBfsiButton(true);
    }
  }, [0]);

  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };



  return (
    <div className={styles.Course} id="course">
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
            // radio={radio}
          />
        </div>
      </Popup>
      <h2>
        Domain <span>Specialization</span>
      </h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <div
            onClick={() => {
              setManufacture(false);
              setBfsiButton(true);

              setHealthCare(false);
              setSupplyChain(false);
            


            }}
            className={bfsiButton ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />

              BFSI
              {mobile ? bfsiButton ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>

            <div>

              <IoIosArrowForward className={styles.rightIcon} />
            </div>


          </div>



          <div
            onClick={() => {
              setManufacture(false);
              setBfsiButton(false);

              setHealthCare(true);
              setSupplyChain(false);
            }}
            className={healthCare ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />

              Healthcare
              {mobile ? bfsiButton ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>

            <div>

              <IoIosArrowForward className={styles.rightIcon} />


            </div>

          </div>


          <div
            onClick={() => {
              setManufacture(false);
              setBfsiButton(false);

              setHealthCare(false);
              setSupplyChain(true);

      
            }}
            className={supplyChain ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />

              Supply Chain
              {mobile ? supplyChain ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>
            <div>

              <IoIosArrowForward className={styles.rightIcon} />
            </div>
          </div>

          <div
            onClick={() => {
              setBfsiButton(false);

              setHealthCare(false);
            
              setSupplyChain(false);
     

              setManufacture(true);
            }}
            className={manufacture ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />
              Manufacturing
              {mobile ? manufacture ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>


            <div>
              <IoIosArrowForward className={styles.rightIcon} />
            </div>
          </div>
         
        </div>
        <div className={styles.middlePanel}>
          {bfsiButton ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Specialize in Banking & Finance</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Elevate Your Profile: Boost your career prospects with IBM's
                    Course Completion Certificate.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Globally Recognised: Secure your future with an internationally acclaimed IBM certification.
                  </p>
                </div>

                <div className={styles.buttonDiv}
                onClick={popupShow}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                
                  />
                </div>

              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                />
              </div>
            </div>
          ) : (
            ""
          )}


          {healthCare ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Specialize in Banking & Finance</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Elevate Your Profile: Boost your career prospects with IBM's
                    Course Completion Certificate.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Globally Recognised: Secure your future with an internationally acclaimed IBM certification.
                  </p>
                </div>

                <div className={styles.buttonDiv}
                 onClick={popupShow}>
                  
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                   
                  />
                </div>

              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {supplyChain ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Specialize in Banking & Finance</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Elevate Your Profile: Boost your career prospects with IBM's
                    Course Completion Certificate.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Globally Recognised: Secure your future with an internationally acclaimed IBM certification.
                  </p>
                </div>

                <div className={styles.buttonDiv}
                onClick={popupShow}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                   
                  />
                </div>

              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                />
              </div>
            </div>

          ) : (
            ""
          )}
          {manufacture ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>Specialize in Banking & Finance</h6>

                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Elevate Your Profile: Boost your career prospects with IBM's
                    Course Completion Certificate.
                  </p>
                </div>
                <div className={styles.mainCont}>
                  <BsCheckCircle className={styles.checkCircle} />
                  <p className={styles.para}>
                    Globally Recognised: Secure your future with an internationally acclaimed IBM certification.
                  </p>
                </div>

                <div className={styles.buttonDiv}
                onClick={popupShow}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                    onClick={() => popupShow(true)}
                  />
                </div>

              </div>

              <div className={`imgWrapper ${styles.right}`}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="200"
                  height="200"
                />
              </div>
            </div>
          ) : (
            ""
          )}


        </div>
      </div>
    </div>
  );
};

export default SliderTabs;
