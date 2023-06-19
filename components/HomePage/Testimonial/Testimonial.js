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

function Testimonial({ redirectDS }) {
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
      <div className={styles.line}>
        <img
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/alumni-arrow.png"
          width="80px"
        />
      </div>
      <section>
        <div className={styles.Section1}>
          <div className={styles.Testimonial}>
            <div className={styles.swiperleft}>
              <Swiper
                slidesPerView={mobile ? 1.1 : 3.1}
                spaceBetween={mobile ? 10 : 85}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 2500,
                }}
                grabCursor={true}
                modules={[Scrollbar]}
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
                          <div>
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
                          <div className={styles.imgHike}>
                            <div>
                              <Image
                                src={complogo}
                                loading="lazy"
                                width={mobile ? 130 : 140}
                                height={mobile ? 21 : 23}
                                alt="company-logo"
                              />
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
