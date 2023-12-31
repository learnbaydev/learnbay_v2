import React from "react";
import Head from "next/head";
import Terms from "../../components/WebPage/terms/terms";
import Navbar from "../../components/Navbar/Navbar";
import OfferPopup from "../../components/OfferPopup/OfferPopup";
import Footer from "../../components/Footer/Footer";
import BottomBar from "../../components/WebPage/BottomBar/BottomBar";

function terms() {
  return (
    <div>
      <Head>
        <title>Learnbay - Terms and Conditions</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's terms and conditions are clear and concise for your peace of mind. Explore more information for a smooth learning experience. Come join us today!"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/terms-conditions" />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Terms />

        <Footer />
        <BottomBar radio={true} />
      </main>
    </div>
  );
}

export default terms;
