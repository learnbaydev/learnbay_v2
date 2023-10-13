import React from 'react'
import styles from '../../CoursePage/ContactConsellor/ContactConsellor.module.css'
import {MdOutlineWhatsapp} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import Image from 'next/image'

function ContactCounsellor() {
  return (
    <div className={styles.consmain}>
      <div>
<h4>Can’t decide which program to opt for?</h4>
<p>Don’t worry, our expert counsellor is there to guide you make the right career choice</p>


<div className={styles.conbtn}>
<button onClick={null}><MdOutlineWhatsapp className={styles.conicon}/>(+91) 77956 87988</button>
<button onClick={true}><AiOutlineMail className={styles.conicon}/> contacts@learnbay.co</button>
</div>


<div className={styles.consbtn1}>
<button className={styles.consbtn} onClick={null}>Apply for counselling</button>
</div>
</div>
<div className={styles.conimg}>
<Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/contact-counseller.webp"
width={300}
height={200}

/>
</div>



      

    
    
    
    
    
    
    
    
    </div>
  )
}

export default ContactCounsellor