// import React, { useState, useEffect } from "react";
// import Form from "../../Form/Form";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// const Popup = dynamic(() => import("../../Popup/Popup"));
// import styles from "../FourthSection/FourthSection.module.css";

// const FifthSection = ({
//   dataScience,
//   dataScienceCounselling,
//   titleCourse,
//   brochureLink,
//   secondLine,
//   thirdHead,
//   thirdHeadSpan,
// }) => {
//   const [popups, setPopups] = useState(false);
//   const [popupsB, setPopupsB] = useState(false);

//   const popupShow = () => {
//     setPopups(true);
//   };
//   const popupShowD = () => {
//     setPopupsB(true);
//   };
//   const [mobile, setMobile] = useState(false);
//   useEffect(() => {
//     let width = window.innerWidth;
//     if (width < 641) {
//       setMobile(true);
//     }
//   }, []);
//   return (
//     <div className={styles.First}>
//       <div className="bgWrap">
//         <Image
//           src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni-Map-BG.png "
//           className={styles.desktopImage}
//           alt="bg-image"
//           fill={true}
//           style={{ objectFit: "contain" }}
//         />
//       </div>

//       <Popup
//         trigger={popups}
//         setTrigger={setPopups}
//         className="popupModal"
//         downloadBrochure
//       >
//         <div className="leftPopup">
//           <div
//             className="whiteP"
//             style={{ width: "340px", height: "400px" }}
//           ></div>
//         </div>
//         <div className="RightPopup">
//           <h5>Apply For Counselling</h5>
//           <Form
//             dataScience={dataScience}
//             dataScienceCounselling={dataScienceCounselling}
//             titleCourse={titleCourse}
//             upSkillingHide={true}
//             brochureLink={brochureLink}
//           />
//         </div>
//       </Popup>
//       <div className={styles.FirstLeft}>
//         <p className={styles.ptopBox}>Invest in yourself!</p>
//         <h4 className={styles.h1}>
//           Stay Ahead Of The Curve With Support Of Our
//           <span className={styles.h1Span}> Alumni Community</span>
//         </h4>
//       </div>
//       <div className={styles.secondLeft}>
//         {mobile ? (
//           <div>
//             <div className="imgWrapper">
//               <Image
//                 src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni-Map-Mobile-View.png"
//                 width="910"
//                 height="920"
//                 alt="data science course"
//               />
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default FifthSection;

import React, { useState, useEffect } from "react";
import Form from "../../Form/Form";
import Image from "next/image";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../Popup/Popup"));
import styles from "../FourthSection/FourthSection.module.css";
const FifthSection = ({
  dataScience,
  dataScienceCounselling,
  titleCourse,
  brochureLink,
  secondLine,
  thirdHead,
  thirdHeadSpan,
}) => {
  const [popups, setPopups] = useState(false);
  const [popupsB, setPopupsB] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const popupShowD = () => {
    setPopupsB(true);
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
  return (
    <div className={styles.First}>
      <div className="bgWrap">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni-Map-BG.png "
          className={styles.desktopImage}
          alt="bg-image"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
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
          <h5>Apply For Counselling</h5>
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            titleCourse={titleCourse}
            upSkillingHide={true}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <div className={styles.FirstLeft}>
        {/* <p className={styles.ptopBox}>Invest in yourself!</p> */}
        {/* <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/newtwork.png"
                  width="50"
                  height="50"
                  alt="Learnbay placement partners"
                />
              </div> */}
         <div className={styles.Nimg}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/network.png"
                  width="20"
                  height="20"
                  alt="Learnbay placement partners"
                />
              </div>
        <h4 className={styles.h1}>
          We are enlightened to pave path for 35k+, and continue do so
          {/* <span className={styles.h1Span}> Alumni Community</span> */}
        </h4>
      </div>
      <div className={styles.secondLeft}>
        {mobile ? (
          <div>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Alumni-Map-Mobile-View.png"
                width="910"
                height="920"
                alt="data science course"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FifthSection;
