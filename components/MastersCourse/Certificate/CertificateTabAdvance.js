import React, { useState } from "react";
import styles from "./Certificate.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
function CertificateTab({
  threeCertificate,
  oneCertificate,
  twoCertificate,
  data,
}) {
  const [MActive, setMActive] = useState(false);
  const [IActive, setIActive] = useState(true);

  return (
    <section className={styles.CertificateTab}>
      <div className={styles.header}>
     
        {threeCertificate ? (
          <div className={styles.pWrap}>

            <p
              onClick={() => {
                setIActive(true);
                setMActive(false);
               
              }}
              className={IActive ? styles.activeP : styles.inactiveP}
            >
              Degree
            </p>
            {/* <hr className={styles.line} /> */}
            <p
              onClick={() => {
                setIActive(false);
                setMActive(true);
         
              }}
              className={MActive ? styles.activeP : styles.inactiveP}
            >
             Project Certificate
            </p>
            {/* <hr className={styles.line} /> */}
            
          </div>
        ) : (
          ""
        )}
      </div>
      {threeCertificate ? (
        <div>
          {IActive ? (
            <div className={styles.MicroCert}>
            <div className={styles.rightSide}>
              <h6>{data.oneCertificate.title}</h6>
              {data.oneCertificate.para.map((data, i) => {
                return (
                  <>
                  <p key={i}>
                    <BsCheckCircle className={styles.checkCircle} />
                    {data}
                  </p>
                  
                  </>
                );
              })}

          
                <Image
                    className={styles.clogo}
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/certificate/clogo.webp"
                    alt="Certificate"
                    quality={100}
                    width={300}
                    height={50}
                  />
        
            </div>
            <div className={styles.leftSide}>
          
              <div className={`${styles.CertificateDiv} imgWrapper`}>
                <Image
                  src={data.oneCertificate.img}
                  alt="Certificate"
                  quality={100}
                  width={900}
                  height={800}
                />
              </div>
            </div>
          </div>
          ) : (
            ""
          )}

        </div>
      ) : (
        ""
      )}
      {oneCertificate || threeCertificate ? (
        <div>
          {oneCertificate ? (
           <div className={styles.MicroCert}>
           <div className={styles.rightSide}>
             <h6>{data.oneCertificate.title}</h6>
             {data.oneCertificate.para.map((data, i) => {
               return (
                <>
                 <p key={i}>
                   <BsCheckCircle className={styles.checkCircle} />
                   {data}
                 </p>
                  
                  </>
                 
               );
             })}
           </div>
           <div className={styles.leftSide}>
           <Image
                 src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/cert-arrow.png"
                 alt="arrow"
                 quality={100}
                 width={100}
                 height={50}
                 className={styles.arrowImg}
                 style={{position:"relative",top:"160px"}}
               />
             <div className={`${styles.CertificateDiv} imgWrapper`}>
               <Image
                 src={data.oneCertificate.img}
                 alt="Certificate"
                 quality={100}
                 width={1150}
                 height={800}
               />
             </div>
           </div>
         </div>
          ) : (
            ""
          )}
          {MActive ? (
           <div className={styles.MicroCert}>
           <div className={styles.rightSide}>
             <h6>{data.oneCertificate.title}</h6>
             {data.oneCertificate.para.map((data, i) => {
               return (
                 <p key={i}>
                   <BsCheckCircle className={styles.checkCircle} />
                   {data}
                 </p>
               );
             })}
           </div>
           <div className={styles.leftSide}>
           <Image
                 src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/cert-arrow.png"
                 alt="arrow"
                 quality={100}
                 width={100}
                 height={50}
                 className={styles.arrowImg}
                 style={{position:"relative",top:"160px"}}
               />
             <div className={`${styles.CertificateDiv} imgWrapper`}>
               <Image
                 src={data.oneCertificate.img}
                 alt="Certificate"
                 quality={100}
                 width={1150}
                 height={800}
               />
             </div>
           </div>
         </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default CertificateTab;