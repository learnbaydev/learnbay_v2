import styles from "./project.module.scss";
import React, { useState } from "react";
import Form from "../../Form/Form";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../Popup/Popup"));
const ProjectPopup = dynamic(() => import("./ProjectPopup"));
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import { FaDownload, FaTools, FaLaptopCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../../Global/Button/Button";

const Project = ({
  tools,
  project,
  projectData,
  dataScience,
  titleCourse,
  brochureLink,
  SoftwareText,
  redirectDS,
}) => {
  const [popups, setPopups] = useState(false);
  const [popupsP, setPopupsP] = useState(false);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [ProjectTitle, setProjectTitle] = useState("");

  const popupShow = () => {
    setPopups(true);
  };

  const popupShowP = () => {
    setPopupsP(true);
  };

  const [projectArray, setProjectArray] = useState(projectData);

  return (
    <div className={styles.projectHeader}>
      <Popup trigger={popupsP} setTrigger={setPopupsP} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            dataScience={dataScience}
            downloadBrochure
            upSkillingHide={true}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <ProjectPopup
        trigger={popups}
        setTrigger={setPopups}
        title={title}
        desc={desc}
        imgsrc={img}
        PTitle={ProjectTitle}
      />

      <div className={styles.headWrapper}>
        <div className={styles.left}>
          {SoftwareText ? (
            <>
              <h4>Case Studies</h4>
              <p className={styles.ptop}>
                Work on live Case Studies certified from IBM
              </p>
            </>
          ) : (
            <>
              <h4>Industry Projects</h4>
              <p className={styles.ptop}>
              Curriculum is specifically engineered to meet the expectations of leading tech companies. 
              </p>
            </>
          )}
          {/* <div className={styles.iconWrapper}>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Practice with latest tools</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Designed by industry experts</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Get real-world experience</p>
            </div>
          </div>
          <div className={styles.projectNumb}>
            <div className={styles.leftProjectNumb}>
              <FaLaptopCode className={styles.lIcon} />
              <div>
                <h5>{project}</h5>
                <p>Available</p>
              </div>
            </div>
            <div className={styles.rightProjectNumb}>
              <FaTools className={styles.rIcon} />
              <div>
                <h5>{tools}</h5>
                <p>Covered</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className={styles.container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          grabCursor={true}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            761: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            961: {
              slidesPerView: 2.1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 45,
            },
            1280: {
              slidesPerView: 4.8,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projectArray.map((data, index) => {
            const {
              id,
              domain,
              CLogo,
              SDesc,
              PopupImg,
              ProjectTitle,
              Title,
              LDesc,
            } = data;

            return (
              <SwiperSlide className={styles.project} key={index} >
                <div className={styles.header}>
                  <div className={styles.left}>
                    <h5>{domain}</h5>
                  </div>
                  {redirectDS ? (
                    ""
                  ) : (
                    <div
                      className={styles.imgWrap}
                      style={
                        id === "BMW" ? { width: "70px" } : { width: "auto" }
                      }
                    >
                      <div className="imgWrapper">
                        <Image
                          src={CLogo}
                          alt="Learnbay"
                          quality={100}
                          width="80"
                          height="40"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.body}>
                  <p>{SDesc}</p>
                  {redirectDS ? (
                    ""
                  ) : (
                    <span
                      onClick={() => {
                        popupShow();
                        setTitle({ Title });
                        setProjectTitle({ ProjectTitle });
                        setDesc({ LDesc });
                        setImg({ PopupImg });
                      }}
                    >
                      Learn More
                    </span>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div>
        <div onClick={popupShowP} className={styles.btn}>
          <Button
            className={styles.outLineBtn}
            text="Explore Projects"
            style={{ fontSize: "16px" }}
            passIcon={<FaDownload style={{ marginRight: "10px" }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
