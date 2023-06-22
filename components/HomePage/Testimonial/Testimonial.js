import React, { useEffect, useState } from "react";
import styles from "./Testimonial.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { AiOutlineRise } from "react-icons/ai";
import dynamic from "next/dynamic";
const ReviewPopup = dynamic(() => import("../ReviewPopup/ReviewPopup"));
import { redirect } from "next/dist/server/api-utils";
import { TestimonialDS, TestimonialFS } from "./TestimonialData";
import { Pagination, Navigation } from "swiper";

function Testimonial({ redirectDS, para }) {
  const [mobile, setMobile] = useState(false);
  const [img, setImg] = useState({
    cLogo: "",
    pLogo: "",
  });
  const [profile, setProfile] = useState({
    name: "",
    hike: "",
    position: "",
  });
  const [desc, setDesc] = useState("");
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const [testimonialArray, setTestimonialArray] = useState(TestimonialDS);
  useEffect(() => {
    redirectDS
      ? setTestimonialArray(TestimonialDS)
      : setTestimonialArray(TestimonialFS);

    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  }, []);
  return (
    <div className={styles.testimonial}>
      <ReviewPopup
        trigger={popups}
        setTrigger={setPopups}
        title={profile}
        desc={desc}
        imgSrc={img}
      />
      <h2 className={styles.h1}>Our Alumni Profile</h2>
      {/* <p className={styles.ptop}>
          {para}
        </p>
      <div className={styles.line}>
        <img
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/alumni-arrow.png"
          width="80px"
        />
      </div> */}
      <section>
        <div className={styles.Section1}>
          <div className={styles.Testimonial}>
            <div className={styles.swiperleft}>
              <Swiper
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                  1281: { slidesPerView: 3.1, spaceBetween: 60 },
                  1024: { slidesPerView: 3, spaceBetween: 55 },
                  961: { slidesPerView: 3, spaceBetween: 20 },
                  801: { slidesPerView: 2.5, spaceBetween: 20 },
                  641: { slidesPerView: 2, spaceBetween: 20 },
                  100: { slidesPerView: 1.2, spaceBetween: 20 },
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                style={{ width: "100%" }}
                grabCursor={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {testimonialArray.map((data) => {
                  const {
                    id,
                    name,
                    working,
                    proImg,
                    sDesc,
                    lDesc,
                    complogo,
                    statLogo,
                  } = data;
                  // console.log(data);
                  return (
                    <SwiperSlide className={styles.slide} key={id}>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>{name}</h3>
                            <p>{working}</p>
                          </div>
                          <div className={styles.proImgWrap}>
                            <Image
                              src={proImg}
                              loading="lazy"
                              width="100"
                              height="100"
                              alt="profile-Img"
                            />
                          </div>
                        </div>

                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            {sDesc}
                            {redirectDS ? (
                              <span
                                onClick={() => {
                                  popupShow();
                                  setProfile({
                                    hike: statLogo,
                                    name: name,
                                    position: working,
                                  });
                                  setDesc(lDesc);
                                  setImg({
                                    cLogo: complogo,
                                    pLogo: proImg,
                                  });
                                }}
                              >
                                Learn More
                              </span>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>

                        {redirectDS ? (
                          <div className={styles.imgHike} id={id}>
                            <div
                              className={styles.imgWrap}
                              style={
                                id === "tcs"
                                  ? { width: "20%" }
                                  : { width: "auto" }
                              }
                            >
                              <div className="imgWrapper">
                                <Image
                                  src={complogo}
                                  loading="lazy"
                                  width={mobile ? 130 : 90}
                                  height={mobile ? 21 : 25}
                                  alt="company-logo"
                                />
                              </div>
                            </div>
                            <div className={styles.nameHike}>
                              <p>
                                <AiOutlineRise />
                                {statLogo}
                              </p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
