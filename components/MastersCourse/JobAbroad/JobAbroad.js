import React from 'react'
import Image from 'next/image'
import Styles from './JobAbroad.module.css'

const JobAbroad= () =>{
  return (
    <div>
      
<div className={Styles.JobAbroadMain}>
<h2>Master’s Degree that gets you<span className={Styles.Ooo}>Job Abroad</span> </h2>

<div className={Styles.JobAbroadHead}>

<div className={Styles.JobAbroadleft}>
<div className={Styles.leftpoints}>
    <div>
<Image
src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job3.webp"
width={90}
height={90}
/>
</div>
<div>
<h3>Dedicated Placement Cell</h3>
<p>Interview prep an resume building from industry expert for</p>
</div>
</div>

<div className={Styles.leftpoints}>
    <div>
<Image
src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job4.webp"
width={90}
height={90}
/>
</div>
<div>
<h3>Dedicated Placement Cell</h3>
<p>Interview prep an resume building from industry expert for</p>
</div>
</div>

<div className={Styles.leftpoints}>
    <div>
<Image
src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job2.webp"
width={90}
height={90}
/>
</div>
<div>
<h3>Dedicated Placement Cell</h3>
<p>Interview prep an resume building from industry expert for</p>
</div>
</div>

</div>





<div className={Styles.JobAbroadRight}>

<Image
src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job1.webp"
width={600}
height={400}
/>



</div>






</div>






</div>







    </div>
  )
}

export default JobAbroad
