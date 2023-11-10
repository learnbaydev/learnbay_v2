import React from 'react'
import Styles from './EMipopup.module.css'

function Emipopup() {
  return (
    <div >




<div  className={Styles.Emipopup}>


<div className={Styles.Main }>
<div className={Styles.containers}>
<h2>EMI Options</h2>

<div className={Styles.firstrow}>
    <p className={Styles.para}>
    Duration
    </p>

    <p className={Styles.para}>
    Total Amount
    </p>

    <p className={Styles.para}>
    Monthly Payments
    </p>
</div>

<div className={Styles.secrow}> 

    <p className={Styles.greencol}>
    No Cost EMI
    </p>

    <span className={Styles.month}>
    18 months
    </span>

    <span className={Styles.Amount}>
    ₹2,50,000
    </span>

    <span className={Styles.Amount}>
    ₹16,389
    </span>





    <p className={Styles.greenDown}>
    Standard Interest Rates Applicable
    </p>

    <span className={Styles.month}>
    24 months
    </span>

    <span className={Styles.Amount}>
    ₹2,50,000
    </span>

    <span className={Styles.Amount}>
    ₹12,292
    </span>
</div>








</div>




</div>


      
    </div>







    </div>
  )
}

export default Emipopup
