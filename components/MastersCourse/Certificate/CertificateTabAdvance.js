import React, { useState } from "react";
import styles from "./Certificate.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
function CertificateTab({ degreeCertificate, projectCertificate, data }) {
  const [DCActive, setDCActive] = useState(true);
  const [PCActive, setPCActive] = useState(false);

  return (
    <section className={styles.CertificateTab}>
      <div className={styles.header}>
        <div className={styles.pWrap}>
          <p
            onClick={() => {
              setDCActive(true);
              setPCActive(false);
            }}
            className={DCActive ? styles.activeP : styles.inactiveP}
          >
            Degree
          </p>
          {/* <hr className={styles.line} /> */}
          <p
            onClick={() => {
              setDCActive(false);
              setPCActive(true);
            }}
            className={PCActive ? styles.activeP : styles.inactiveP}
          >
            Project Certificate
          </p>
        </div>
      </div>
      {DCActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.degreeCertificate.title}</h6>
            {data.degreeCertificate.para.map((data, i) => {
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
              width={350}
              height={60}
            />
          </div>
          <div className={styles.leftSide}>
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.degreeCertificate.img}
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

      {PCActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.projectCertificate.title}</h6>
            {data.projectCertificate.para.map((data, i) => {
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
              width={380}
              height={70}
            />
          </div>
          <div className={styles.leftSide}>
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.projectCertificate.img}
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

      {/* {threeCertificate ? (
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
                    width={380}
                    height={70}
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
      )} */}
      {/* {oneCertificate || threeCertificate ? (
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
      )} */}
    </section>
  );
}
export default CertificateTab;
