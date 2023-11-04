import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import Styles from "./WhoIsProgram.module.css";

function WhoIsProgram() {
  return (
    
    <section className={Styles.container}>
      <h4>Who is this program for</h4>
      <div className={Styles.BoxDiv}>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineCastForEducation className={Styles.icon} />
            <p className={Styles.BgCont1}>Education</p>
          </div>
          <p className={Styles.BoxCont}>
            Non-tech professionals with 6 months experience
          </p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineWorkOutline className={Styles.icon} />
            <p className={Styles.BgCont2}>Work Exp.</p>
          </div>
          <p className={Styles.BoxCont}>Minimum 1 year of IT work experience</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <FaUserGraduate className={Styles.icon} />
            <p className={Styles.BgCont1}>Career Stage</p>
          </div>
          <p className={Styles.BoxCont}>
            Mid-career professionals interested in data science & AI
          </p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <GiStairsGoal className={Styles.icon} />
            <p className={Styles.BgCont2}>Aspirations</p>
          </div>
          <p className={Styles.BoxCont}>
            Achieving higher career growth in data science and AI
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoIsProgram;
