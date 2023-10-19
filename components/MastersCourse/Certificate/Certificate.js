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
      <h4 className={styles.infop}>Globally Recognized Program</h4>
      <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>
      <CertificateTabAdvance
        threeCertificate={threeCertificate}
        oneCertificate={oneCertificate}
        twoCertificate={twoCertificate}
        data={data}
      />
    </div>
  );
};
export default Certificate;