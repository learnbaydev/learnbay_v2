import styles from "./Certificate.module.css";
import CertificateTabAdvance from "./CertificateTabAdvance";
const Certificate = ({
  NoCertificate,
  degreeCertificate,
  projectCertificate,
  microCertificate,
  data,
}) => {
  return NoCertificate ? (
    ""
  ) : (
    <div className={`${styles.Certificate}`}>
      <h4 className={styles.infop}>Globally Recognized Program</h4>
      <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>
      <CertificateTabAdvance
        degreeCertificate={data.degreeCertificate}
        projectCertificate={data.projectCertificate}
        microCertificate={data.microCertificate}
        data={data}
      />
    </div>
  );
};
export default Certificate;
