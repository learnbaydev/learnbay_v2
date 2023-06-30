import Head from "next/head";
import Review from "../../components/WebPage/Review/Review";
import styles from "../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import OfferPopup from "../../components/OfferPopup/OfferPopup";
import Footer from "../../components/Footer/Footer";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../components/Global/Button/Button"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Learnbay - Testimonials and Reviews of Our Trusted Learners
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay - The best online professional learning platform, has received numerous positive student reviews. Gain knowledge and make sound decisions. Join today!"
        />
        <link rel="canonical" href="https://www.learnbay.co/reviews" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Review />
        <div className={styles.Button} style={{ marginBottom: "70px", display: "flex", justifyContent: "center" }}>
          <a
            href=" https://www.google.com/search?q=learnbay&rlz=1C1VDKB_enIN998IN998&tbm=lcl&ei=uUDyYunBIoObz7sPzvu7wAQ&oq=learnbay&gs_l=psy-ab.3...0.0.0.6647.0.0.0.0.0.0.0.0..0.0....0...1c..64.psy-ab..0.0.0....0.vlnVRtRM_mw#lrd=0x3bae13b203864921:0xcd2b3d47edc34b69,1,,,&rlfi=hd:;si:14783977580914756457,l,CghsZWFybmJheUj0z4qEu66AgAhaFBAAGAAiCGxlYXJuYmF5KgQIAhAAkgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl;mv:[[12.9145896,77.66070289999999],[12.8624165,77.6400574]]"
            target="_blank"
          >
            <Button
                className={styles.Btn}
                text="View All Reviews"
                
              />
          </a>
        </div>
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}
