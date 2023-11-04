import React from "react";
import styles from "./MasterSecondSection.module.css";
import Image from "next/image";

const MasterSecondSection = () => {
    return (
        <div>
            <div className={styles.mainBox}>
                <div className={styles.firstbox}>
                    <div className={styles.box}>
                        <p className={styles.BoldP}>60+</p>
                        <p className={styles.NormalP}>Countries Recognition</p>
                        <div className={styles.radial}></div>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.BoldP} style={{color: '#F99600'}}>90+</p>
                        <p className={styles.NormalP}>Transferrable ECTS Credits</p>
                        <div className={styles.radial}></div>
                    </div>
                    <div className={styles.box}>
                        <p className={styles.BoldP}>35K+</p>
                        <p className={styles.NormalP}>Trusted Learners</p>
                        <div className={styles.radial}></div>
                    </div>
                </div>
                <div className={styles.secondbox}>
                    <div>

                        <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/review1.webp" width={280} height={130} />
                    </div>
                    <div>

                        <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/review2.webp" width={380} height={130} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterSecondSection;