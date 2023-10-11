import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  return (
    // <div className={`${styles.second} wrapper`}>
    //   <div>
    //     <h4 className={styles.h1}>Why Choose Us?</h4>
    //     <p className={styles.ptop}>
    //       India&apos;s top rated bootcamp for working professionals
    //     </p>
    //   </div>
    //   <div className={styles.secondBox}>
    //     {SecondSectionData.map((data, index) => {
    //       const { heading, para, img, width, height } = data;
    //       return (
    //         <div className={styles.blue} key={index}>
    //           <div>
    //             <h5 className={styles.heading}>{heading}</h5>
    //             <p className={styles.textBox}>{para}</p>
    //           </div>
    //           <div className={styles.imgWrap}>
    //             <Image
    //               src={img}
    //               width={width}
    //               height={height}
    //               alt="data science"
    //             />
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className={styles.boxP}>
      <div className={styles.boxD}>
    <div className={styles.boxC}>
      <div > 
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/global.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            />
          </div> <p>Globally <br></br>Recognized Degree</p> 
    </div>
    </div>
    <div className={styles.boxE}>
    <div  className={styles.boxC}>
      <div>
        <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/immigration.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            /></div> <p>Immigration <br></br>Opportunities</p>
    </div>
    </div>
    <div className={styles.boxE}>
    <div className={styles.boxC}>
      <div>
        <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/credits.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            /></div> <p>Transferable<br></br> ECTS Credits</p>
    </div>
    </div>
    <div className={styles.boxD}>
    <div className={styles.boxC}>
      <div>
        <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/generative.png"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            /></div> <p>Curriculum inclusive <br></br>of Generative AI</p>
    </div>
    </div>
  </div>
  );
}

export default SecondSection;
