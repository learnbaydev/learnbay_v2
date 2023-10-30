import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { FaCheck, FaCheckCircle, FaRocket, FaUserShield, FaDownload  } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import Styles from "./WhyLearnbay.module.css";
import { useState, useEffect } from "react";
import VideoPopup from "../../Global/VideoPopup/VideoPopup";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper";
import { Scrollbar } from "swiper";
import Button from "../../Global/Button/Button";


function WhyLearnbay() {

  const [careerService, setCareerService] = useState(true);
  const [domainSpec, setDomainSpec] = useState(false);
  const [projectInno, setProjectInno] = useState(false);
  const [projectCert, setProjectCert] = useState(false);

  const [vId, setVId] = useState("");
 

  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };
  
  const [video, setVideo] = useState(false);

  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    let width = window.innerWidth;
    if (width > 960) {
      setCareerService(true);
    }
  }, [0]);
  

  return (
    <section className={Styles.container}>
            <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <h4 className={Styles.h4}>
        Learnbay’s <span style={{ color: "#F99600" }}>ProjectLab</span>
      </h4>
      <div className={Styles.MainDiv}>
        <div className={Styles.LeftSide}>
          <div onClick={() => {
              setCareerService(true);
              setDomainSpec(false);
              setProjectInno(false);
              setProjectCert(false);
            
            }}
            
            className={careerService ? Styles.ActiveInnerBox : Styles.InnerBox}  >
            <p className={careerService ? Styles.ActiveCont : Styles.Cont}>
              <GiProgression className={careerService ? Styles.Activeicon: Styles.icon} />
              Career Service PRO
            </p>
          </div>
          <div onClick={() => {
              setCareerService(false);
              setDomainSpec(true);
              setProjectInno(false);
              setProjectCert(false);
            
            }}
            
            className={domainSpec ? Styles.ActiveInnerBox : Styles.InnerBox}>
            <p className={domainSpec  ? Styles.ActiveCont : Styles.Cont}>
              <FaUserShield className={domainSpec ? Styles.Activeicon: Styles.icon} />
              Domain Specialization
            </p>
          </div>
          <div onClick={() => {
              setCareerService(false);
              setDomainSpec(false);
              setProjectInno(true);
              setProjectCert(false);
            
            }}
            
            className={projectInno? Styles.ActiveInnerBox : Styles.InnerBox}>
            <p className={projectInno ? Styles.ActiveCont : Styles.Cont}>
              <FaRocket className={projectInno ? Styles.Activeicon: Styles.icon} />
              Project Innovation Lab
            </p>
          </div>
          <div onClick={() => {
              setCareerService(false);
              setDomainSpec(false);
              setProjectInno(false);
              setProjectCert(true);
            
            }}
            
            className={projectCert ? Styles.ActiveInnerBox : Styles.InnerBox}>
            <p className={projectCert ? Styles.ActiveCont : Styles.Cont}>
              <TbCertificate  className={projectCert ? Styles.Activeicon: Styles.icon} />
              Project Certification
            </p>
          </div>
        </div>

        {careerService ? (
          <div className={Styles.RightSide}>
          <div className={Styles.firstBox}>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/ytThumbnail.webp"
                loading="lazy"
                width="200"
                height="212"
                alt="profile-Img"
                onClick={() => videoShow(vId)}
              />
            </div>
            <div className={Styles.left}>
              <h6>Key Benefits</h6>
              <div className={Styles.mainCont}>
                
                <p className={Styles.para}><FaCheckCircle className={Styles.checkCircle} />
                  Validate your real-work experience
                </p>
                <p className={Styles.para}><FaCheckCircle className={Styles.checkCircle} />
                  Validate your real-work experience
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.TwoBox}>
            <div className={Styles.BlueBox}>
              <FaRocket className={Styles.Icon}/>
              <p className={Styles.head}
              >35K+</p>
              <p className={Styles.Para}
              >Mentors help you select the domain & guide you through.</p>
            </div>
            <div className={Styles.OrangeBox}>
              <p className={Styles.head}
              >450%</p>
              <p className={Styles.Para}
              >Average Salary Hike</p>
            </div>
          </div>
        </div>
        ):('')}

{domainSpec ? (
          <div className={Styles.RightSideDomain}>
              <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // scrollbar={{ draggable: true }}
        grabCursor={true}
        style={{ width: "100%" }}
        modules={[Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={Styles.secondDiv}>
            <div className={Styles.firstDiv}>
          
              <div className={Styles.iconBoxDesktop}>
                <div className={Styles.iconBox}>
                  <div className={Styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bank.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>BFSI</p>
                  </div>
                  <div className={Styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/heartbeat.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHCARE</p>
                  </div>
                  <div className={Styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>

                  <div className={Styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                  <div className={Styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                  <div className={Styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>

                </div>
                
         
                
              </div>
              <div className={Styles.iconButton}>
                  <Button
           
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>
            </div>
         
          </div>
        </SwiperSlide>
       
      </Swiper>
          
        </div>
        ):('')}

{projectInno? (
          <div className={Styles.RightSide}>
          <div className={Styles.firstBox}>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/ytThumbnail.webp"
                loading="lazy"
                width="200"
                height="212"
                alt="profile-Img"
                onClick={() => videoShow(video.vId)}
              />
            </div>
            <div className={Styles.left}>
              <h6>Key Benefits</h6>
              <div className={Styles.mainCont}>
                
                <p className={Styles.para}><FaCheckCircle className={Styles.checkCircle} />
                  Validate your real-work experience
                </p>
                <p className={Styles.para}><FaCheckCircle className={Styles.checkCircle} />
                  Validate your real-work experience
                </p>
              </div>
            </div>
          </div>
          <div className={Styles.TwoBox}>
            <div className={Styles.BlueBox}>
              <FaRocket className={Styles.Icon}/>
              <p className={Styles.head}
              >35K+</p>
              <p className={Styles.Para}
              >Mentors help you select the domain & guide you through.</p>
            </div>
            <div className={Styles.OrangeBox}>
              <p className={Styles.head}
              >450%</p>
              <p className={Styles.Para}
              >Average Salary Hike</p>
            </div>
          </div>
        </div>
        ):('')}

{projectCert? (
          <div className={Styles.RightSide}>
          <div className={Styles.firstBox}>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/ytThumbnail.webp"
                loading="lazy"
                width="200"
                height="212"
                alt="profile-Img"
                onClick={() => videoShow(video.vId)}
              />
            </div>
            <div className={Styles.left}>
              <h6>Key Benefits</h6>
              <div className={Styles.mainCont}>
                
                <p className={Styles.para}><FaCheckCircle className={Styles.checkCircle} />
                  Validate your real-work experience
                </p>
                {/* <p className={Styles.para}><FaCheckCircle className={Styles.checkCircle} />
                  Validate your real-work experience
                </p> */}
              </div>
            </div>
          </div>
          <div className={Styles.TwoBox}>
            <div className={Styles.BlueBox}>
              <FaRocket className={Styles.Icon}/>
              <p className={Styles.head}
              >35K+</p>
              <p className={Styles.Para}
              >Mentors help you select the domain & guide you through.</p>
            </div>
            <div className={Styles.OrangeBox}>
              <p className={Styles.head}
              >450%</p>
              <p className={Styles.Para}
              >Average Salary Hike</p>
            </div>
          </div>
        </div>
        ):('')}

      
        
      </div>
    </section>
  );
}

export default WhyLearnbay;
