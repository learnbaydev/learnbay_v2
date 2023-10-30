import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import dynamic from "next/dynamic";
import BottomBar from "../../components/WebPage/BottomBar/BottomBar";
const Button = dynamic(() => import("../../components/Global/Button/Button"));
import GoogleReview from "../../components/SuccessStory/GoogleReview/GoogleReview";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
         Success Story
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
       < GoogleReview />
        <Footer />
        <BottomBar radio={true} />
      </main>
    </div>
  );
}
