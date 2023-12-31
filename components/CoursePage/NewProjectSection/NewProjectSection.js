import Styles from "./NewProjectSection.module.css";
import Image from "next/image";
import React, { useState, useEffect, lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
const Button = dynamic(() => import("../../Global/Button/Button"));
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
const Popup = dynamic(() => import("../../Popup/Popup"));
const Form = lazy(() => import("../../Form/Form"));

function NewProjectSection({ projectSection, dataScience, titleCourse, brochureLink, interstedInHide }) {
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
    <section className={Styles.container}>
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
                downloadBrochure
                upSkillingHide={true}
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                interstedInHide={interstedInHide}
              />
            </Suspense>
          </div>
        </Popup>
      <h4>Industry Projects</h4>
      <p>
        Curriculum is specifically engineered to meet the expectations of
        leading tech companies.{" "}
      </p>
      <div className={Styles.BoxDiv}>
        <Swiper
          breakpoints={{
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 45,
            },
            961: {
              slidesPerView: 2.1,
              spaceBetween: 40,
            },
            761: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          style={{ width: "100%" }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {projectSection.map((data, index) => {
            const {
              id,
              duration,
              logo,
              heading,
              img,
              para,
              toolImg,
              learnMore

            } = data;

            return (
              <SwiperSlide key={index}>
                <div className={Styles.Box}>
                  <div className={Styles.boxGreen}>{data.duration}</div>
                  <div className={Styles.content}>
                    <div className={Styles.DivImg}>
                      <Image
                        src={img}
                        loading="lazy"
                        width="215"
                        height="79"
                        alt="microsoft"
                      />
                    </div>
                    <p className={Styles.heading}>
                    {data.heading}
                    </p>
                    <div className={Styles.strip}>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Group+502.png"
                        loading="lazy"
                        width="370"
                        height="41"
                        alt="microsoft"
                      />
                    </div>
                    <p className={Styles.para}>
                      {data.para}
                    </p>
                    <div className={Styles.ImgBox}>
                      <Image
                        src={toolImg}
                        loading="lazy"
                        width="420"
                        height="70"
                        alt="microsoft"
                      />
                    </div>
                    {/* <p className={Styles.blue}>Learn more</p> */}
                  </div>
                </div>
              </SwiperSlide>
            );

          })}


        </Swiper>
      </div>
      <div onClick={popupShow} className={Styles.buttonDiv}>
                  <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
                </div>
    </section>
  );
}

export default NewProjectSection;
