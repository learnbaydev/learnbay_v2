import { MdOutlineCastForEducation, MdOutlineWorkOutline } from "react-icons/md"
import styles from "./ThirdSection.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

export const ThirdSectionData = [
    {
        id: 1,
        icon: <MdOutlineCastForEducation className={styles.bIcon} />,
        heading: "Education",
        para: "Non-tech professionals with 6 months experience",
      },
      {
        id: 1,
        icon: <MdOutlineWorkOutline className={styles.oIcon} />,
        heading: "Work experience",
        para: "Minimum 1 year of IT/Non-IT work experience",
      },
      {
        id: 1,
        icon: <FaUserGraduate className={styles.oIcon} />,
        heading: "Career stage",
        para: "Early to mid-career professionals interested in data science",
      },
      {
        id: 1,
        icon: <GiStairsGoal className={styles.bIcon} />,
        heading: "Aspirations",
        para: "To become a data-driven professional & optimise strategies",
      },
]