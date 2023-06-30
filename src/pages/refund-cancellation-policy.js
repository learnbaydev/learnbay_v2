import React from "react";
import Head from "next/head";
import Refund from "../../components/WebPage/Refund/Refund";
import Navbar from "../../components/Navbar/Navbar";
import OfferPopup from "../../components/OfferPopup/OfferPopup";
import Footer from "../../components/Footer/Footer";

function refund() {
  return (
    <div>
      <Head>
        <title>Learnbay - Refund and Cancellations Policies</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learn more about Learnbay's refund policy and cancellation conditions. Your satisfaction is our top priority."
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/refund-cancellation-policy"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <Refund />
        <OfferPopup offer={false} />
        <Footer />
      </main>
    </div>
  );
}

export default refund;
