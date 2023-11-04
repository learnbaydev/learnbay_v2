import React from 'react';
import styles from './PlacementCall.module.css';
import { PiCertificate } from 'react-icons/pi';
import { useState, useEffect } from 'react';

const courseData = [
  { title: 'Data Scientist' },
  { title: 'ML Engineer' },
  { title: 'AI Engineer' },
  { title: 'Data Scientist' },
  { title: 'AI Engineer' },
  { title: 'AI Engineer' },
  { title: 'ML Engineer' },
  { title: 'AI Engineer' },
  { title: 'AI Engineer' },
  { title: 'AI Engineer' },
  { title: 'AI Engineer' },
  { title: 'AI Engineer' },
  
];

const PlacementCall = () => {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Add a listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile view
    handleResize();

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.PlacementCallMain}>
      <div className={styles.title}>
        <h2>Dedicated Placement Cell</h2>
        <p>Job roles & companies you can target</p>
      </div>
<div className={styles.margin}>
      <div className={styles.course}>
        <div className={styles.mbldiv}>
        
        {courseData.map((course, index) => (
          <div className={`${styles.PlacementCallcourse} ${styles.scrollAnimation}`} key={index}>
            <p>{course.title}</p>
          </div>
        ))}
      </div>
      </div>
      </div>

      <div className={styles.imgsection}>
        <img
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Dedicated-Placement-Cell.gif"
          width={600}
          height={200}
        />
      </div>

      <div className={styles.projectcer}>
        <PiCertificate className={styles.PlacementCallIcon} />
        <p>Project Certification From IBM</p>
      </div>
    </div>
  );
};

export default PlacementCall;
