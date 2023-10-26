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


const SliderTabs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState();
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Retail, setRetail] = useState(false);
  const [Oil, setOil] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);

  const [activeIcon, setActiveIcon] = useState(true);

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
      setOneYear(true);
    }
  }, [0]);

  return (
    <div className={styles.Course} id="course">
      <h2>
        Domain <span>Specialization</span>
      </h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <div
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setRetail(false);

              setOil(false);
              setActiveIcon(true);
            }}
            className={oneYear ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />
            </div>

            <div>
              BFSI
              {mobile ? oneYear ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>

            {activeIcon ? (
              <IoIosArrowForward className={styles.rightIcon} />
            ) : (
              ""
            )}
          </div>



          <div
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
              setOil(false);

              setRetail(false);
            }}
            className={Stack ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />
            </div>

            <div>
              Healthcare
              {mobile ? oneYear ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>
          </div>


          <div
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);

              setOil(false);
              setRetail(false);
            }}
            className={Guarantee ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />
            </div>
            <div>
              Supply Chain
              {mobile ? Guarantee ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>
          </div>

          <div
            onClick={() => {
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setRetail(false);
              setGuarantee(false);
              setOil(false);

              setViewAll(true);
            }}
            className={viewAll ? styles.ActiveSpan : styles.span}
          >
            <div class={styles.img}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                loading="lazy"
                width="25"
                height="25"
                alt="Bulb"
              />
            </div>

            <div>
              Manufacturing
              {mobile ? viewAll ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
            </div>
          </div>
          {viewAll ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <h6>
                  Study about applications of DS & AI is applicable in
                  Manufacturing & Automotive.
                </h6>
                <p className={styles.para}>
                  A deeper understanding of the manufacturing and
                  telecommunication industries, where you learn in-depth about
                  robotics, novel materials, nanotechnology, computer-aided
                  design, and geomechanics.
                </p>
                <div className={styles.info}>
                  <div className={styles.left}>
                    <h4>20+</h4>
                    <p>Case Studies </p>
                  </div>
                  <div className={styles.middle}>
                    <h4> IBM</h4>
                    <p> Certification</p>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Manufacturing-domain-slider.webp"
                  width="271"
                  height="353"
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {oneYear ? (
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

                <div className={styles.buttonDiv}>
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


          {Stack ? (
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

                <div className={styles.buttonDiv}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>

              </div>

              <div className={styles.right}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="350"
                  height="350"
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {Guarantee ? (
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

                <div className={styles.buttonDiv}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>

              </div>

              <div className={styles.right}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="350"
                  height="350"
                />
              </div>
            </div>

          ) : (
            ""
          )}
          {viewAll ? (
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

                <div className={styles.buttonDiv}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>

              </div>

              <div className={styles.right}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/doamain-new.webp"
                  width="350"
                  height="350"
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
