import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { FaCheck, FaCheckCircle, FaRocket, FaUserShield } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import Styles from "./WhyLearnbay.module.css";
import { useState, useEffect } from "react";

function WhyLearnbay() {

  const [careerService, setCareerService] = useState(false);
  const [domainSpec, setDomainSpec] = useState(false);
  const [projectInno, setProjectInno] = useState(false);
  const [projectCert, setProjectCert] = useState(false);


  useEffect(() => {
    let width = window.innerWidth;
    if (width > 960) {
      setCareerService(true);
    }
  }, [0]);

  return (
    <section className={Styles.container}>
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
                onClick={() => videoShow()}
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
          <div className={Styles.RightSide}>
          <div className={Styles.firstBox}>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/ytThumbnail.webp"
                loading="lazy"
                width="200"
                height="212"
                alt="profile-Img"
                onClick={() => videoShow()}
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
                onClick={() => videoShow()}
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
                onClick={() => videoShow()}
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
