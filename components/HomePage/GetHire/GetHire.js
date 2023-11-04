import React from 'react'
import Styles from './GetHire.module.css'
import Image from 'next/image'
import {FcCheckmark} from 'react-icons/fc'

function GetHire() {
  return (
    <div>
      
<div className={Styles.GetHireMain}>

<div className={Styles.GetHireHead}>


<div className={Styles.HireLeft}>
<h2>Land Your Dream Job with Career Services <span className={Styles.PRo}>PRO</span></h2>
<div className={Styles.GetHireBulet}>
    <div className={Styles.minibullet}>
    <div className={Styles.Points}>


    <span><FcCheckmark/></span>
        <p>1:1 Doubt Sessions</p>
    </div>


    <div className={Styles.Points}>
    <span><FcCheckmark/></span>
        <p>Interview Prep.</p>
        </div>

    <div className={Styles.Points}>
    <span><FcCheckmark/></span>
        <p>Resume BuildUp</p></div>
</div>
<div>
<Image
src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job-ready.webp"
width={125}
height={160}

/>
</div>
</div>
</div>





<div className={Styles.HireRight}>
<p className={Styles.mainpara}> <span>Get</span>Hired At</p>
    <Image  
    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/company-logos.webp"
    width={600}
    height={270}
    />
</div>
</div>

</div>





    </div>
  )
}

export default GetHire
