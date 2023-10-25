import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { FaRocket, FaUserShield } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import Styles from "./WhyLearnbay.module.css";

function WhyLearnbay() {
  return (
    <section className={Styles.container}>
      <h4 className={Styles.h4}>
        Learnbay’s <span style={{ color: "#F99600" }}>ProjectLab</span>
      </h4>
      <div className={Styles.MainDiv}>
        <div className={Styles.LeftSide}>
          <div className={Styles.InnerBox}>
            <p className={Styles.Cont}>
              <GiProgression className={Styles.icon} />
              Career Service PRO
            </p>
          </div>
          <div className={Styles.InnerBox}>
            <p className={Styles.Cont}>
              <FaUserShield className={Styles.icon} />
              Domain Specialization
            </p>
          </div>
          <div className={Styles.InnerBox}>
            <p className={Styles.Cont}>
              <FaRocket className={Styles.icon} />
              Project Innovation Lab
            </p>
          </div>
          <div className={Styles.InnerBox}>
            <p className={Styles.Cont}>
              <TbCertificate className={Styles.icon} />
              Project Certification
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-review.webp"
                loading="lazy"
                width="358"
                height="212"
                alt="profile-Img"
                onClick={() => videoShow()}
              />
            </div>
            <div className={Styles.left}>
              <h6>Specialize in Banking & Finance</h6>
              <div className={Styles.mainCont}>
                <BsCheckCircle className={Styles.checkCircle} />
                <p className={Styles.para}>
                  Validate your real-work experience
                </p>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
}

export default WhyLearnbay;
