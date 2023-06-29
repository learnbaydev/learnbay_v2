import React, { useState } from "react";
import styles from "./FAQNew.module.css";
import FAQ from "../FAQNew/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { FAQNewData } from "./FAQNewData";

function FAQNew() {
  // const [mobile, setMobile] = useState(false);
  const [dataLoop, setDataLoop] = useState([
    { title: "Course Related", value: true },
    { title: "Domain Electives", value: false },
    { title: "Payments and Scholarships", value: false },
    { title: "Capstone and Real-Time Projects", value: false },
    { title: "Certification", value: false },
    { title: "Job Assistance", value: false },
    { title: "Mentorship", value: false },
    { title: "Support", value: false },
  ]);

  const menuChange = (title, index) => {
    if (title === dataLoop[index].title) {
      setDataLoop([...dataLoop], (dataLoop[index].value = true));
      for (let i = 0; i < dataLoop.length; i++) {
        if (index === i) {
          setDataLoop([...dataLoop], (dataLoop[index].value = true));
        } else {
          setDataLoop([...dataLoop], (dataLoop[i].value = false));
        }
      }
    }
  };

  return (
    <div className={`${styles.course} wrapper`}>
      <div className={styles.courseM}>
        <h4 className={styles.infop}>FAQs</h4>
        <div className={styles.courses}>
          <div className={styles.listPanel}>
            {FAQNewData.map((data, index) => {
              console.log(data, "kooo");
              return (
                <span
                  onClick={() => {
                    menuChange(data.sectionName, index);
                  }}
                  style={
                    dataLoop[index].value
                      ? { background: "white", borderLeft: "4px solid #2D9CD7" }
                      : {}
                  }
                  key={index}
                >
                  {data.sectionName}
                </span>
              );
            })}
          </div>
          {FAQNewData.map((dataF, index) => {
            const { data } = dataF;
            return dataLoop[index].value ? (
              <div className={styles.gridPanel} key={index}>
                <FAQ FaqData={data} />
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
      {/* <div className={styles.courseD}>
        <div className={styles.listPanel}>
          <Swiper
            slidesPerView={mobile ? 2 : 2}
            spaceBetween={mobile ? 0 : 0}
            grabCursor={true}
            navigation={true}
            style={{
              paddingLeft: "5px",
              paddingRight: "5px",
              overflow: "hidden",
              "--swiper-navigation-color": "#0072BC",
              "--swiper-navigation-size": "20px",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(true);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  viewAll
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                COURSE RELATED
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(true);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  oneYear
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                DOMAIN ELECTIVES
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(true);
                  setManager(false);
                  setGuarantee(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  nonTech
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                PAYMENTS AND SCHOLARSHIPS
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(true);
                  setGuarantee(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  manager
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                CAPSTONE AND REAL-TIME PROJECTS
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(true);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  Guarantee
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                CERTIFICATION
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
                  setJobAssistance(true);
                  setMentorship(false);
                  setSupport(false);
                }}
                style={
                  Assistance
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                JOB ASSISTANCE
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
                  setJobAssistance(false);
                  setMentorship(true);
                  setSupport(false);
                }}
                style={
                  Mentorship
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                MENTORSHIPS
              </span>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <span
                onClick={() => {
                  setViewAll(false);
                  setOneYear(false);
                  setNonTech(false);
                  setManager(false);
                  setGuarantee(false);
                  setJobAssistance(false);
                  setMentorship(false);
                  setSupport(true);
                }}
                style={
                  Support
                    ? {
                        background: "#E1F1F566",
                        color: "#0072BC",
                        textAlign: "center",
                      }
                    : { background: "none", textAlign: "center" }
                }
              >
                SUPPORT
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
        {viewAll ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={FaqDatas} />
          </div>
        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={DomainFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={PaymentFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={CertificationFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Assistance ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={jobFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {manager ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={CapstoneFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Mentorship ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={MentorshipFaqDatas} />
          </div>
        ) : (
          ""
        )}
        {Support ? (
          <div className={styles.gridPanel}>
            <FAQ FaqData={SupportFaqDatas} />
          </div>
        ) : (
          ""
        )}
      </div> */}
    </div>
  );
}

export default FAQNew;
