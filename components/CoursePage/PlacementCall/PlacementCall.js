import React from 'react'
import styles from './PlacementCall.module.css'
import {PiCertificate} from 'react-icons/pi'
import Image from 'next/image'
import { ImGithub } from 'react-icons/im'



const PlacementCall=() =>{
  return (


    <div className={styles.PlacementCallMain}>
      <div className={styles.title}>
     <h2> Dedicated Placement Cell</h2>

     <p>Job roles & companies you can target</p>
      </div>


      <div className={styles.course}>
<div className={styles.PlacementCallcourse}> <p>Data Scientist</p></div>
<div className={styles.PlacementCallcourse}><p>ML Engineer</p></div>
<div className={styles.PlacementCallcourse}><p>AI Engineer</p></div>
<div className={styles.PlacementCallcourse}><p>Data Scientist</p></div>
<div className={styles.PlacementCallcourse}><p>ML Engineer</p></div>
      </div>
<div className={styles.imgsection}>
<img
src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/Dedicated-Placement-Cell.gif"
width={600}
height={200}
/>

</div>
      <div className={styles.projectcer}>
   <PiCertificate
 className={styles.PlacementCallIcon}
   />
        <p>Project Certification From IBM</p>
      </div>

   



    </div>
  )
}

export default PlacementCall
