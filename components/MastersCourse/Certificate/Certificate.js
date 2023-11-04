import React from "react";
import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({
  NoCertificate,
  threeCertificate,
  oneCertificate,
  twoCertificate,
  data,
}) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`}>
      <h4 className={styles.infop}>Globally Recognized Degree</h4>

      <CertificateTabAdvance
        threeCertificate={threeCertificate}
        oneCertificate={oneCertificate}
   
        data={data}
      />
    </div>
  );
};
export default Certificate;