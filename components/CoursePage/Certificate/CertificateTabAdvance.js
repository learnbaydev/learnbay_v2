import React, { useState } from "react";
import styles from "./Certificate.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

function CertificateTab({
  threeCertificate,
  twoCertificate,
  oneCertificate,
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
              IBM Certificate
            </p>
            <hr className={styles.line} />

            <p
              onClick={() => {
                setIActive(false);
                setMActive(true);
              }}
              className={MActive ? styles.activeP : styles.inactiveP}
            >
              Microsoft Certification
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      {threeCertificate || twoCertificate ? (
        <div>
          {IActive ? (
            <div className={styles.gridPanel}>
              {data.twoCertificate.map((CertificateAdvance2ata) => {
                const { id, title, img, para } = CertificateAdvance2ata;
                return (
                  <div className={styles.leftSide} key={title}>
                    <div className={styles.leftSideP} key={id}>
                      <div className="imgWrapper">
                        <Image
                          src={img}
                          alt="Certificate"
                          quality={100}
                          width={1150}
                          height={800}
                        />
                      </div>
                      <div className={styles.rightSide}>
                        <h6>{title}</h6>
                        {para.map((data, i) => {
                          return (
                            <p key={i}>
                              <BsCheckCircle className={styles.checkCircle} />
                              {data}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    <p key={i}>
                      <BsCheckCircle className={styles.checkCircle} />
                      {data}
                    </p>
                  );
                })}
              </div>
              <div className={styles.leftSide}>
                <div className="imgWrapper">
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
                <div className="imgWrapper">
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
