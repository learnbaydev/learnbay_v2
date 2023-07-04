import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import BottomBar from "../../../components/WebPage/BottomBar/BottomBar";
import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import FirstSection from "../../../components/BlogPage/HomePage/FirstSection/FirstSection";

export default function blog() {
  return (
    <div>
      <Head>
        <title>
          LearnBay Blogs - Latest Career Upskilling Trends and Learning
          Resources
        </title>

        <meta
          name="description"
          content="Stay Ahead with LearnBay Blogs on Upskilling Resources & IT Careers in AI, Data Science, Machine Learning & Full Stack Development For Learners & Professionals "
        />
        <link href="/Learnbay-Favicon-L.png" />
        <meta
          name="google-site-verification"
          content="q2xA2OZrvhAj8r1YGNF_3x5m5GuWCqo9rNb7atG4mXU"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://blog.learnbay.co/" />
        <meta name="publisher" content="Learnbay" />
        <meta name="keywords" content="Learnbay Blogs" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection />
        <OfferPopup offer={false} />
        {/* <BottomBar /> */}
        <Footer />
      </main>
    </div>
  );
}
