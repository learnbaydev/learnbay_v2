import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="ALL"></meta>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Learnbay",
              "url": "https://www.learnbay.co/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            } `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Learnbay",
              "image": "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FALight%2Flearnbay-logo.png&w=256&q=100",
              "@id": "",
              "url": "https://www.learnbay.co/",
              "telephone": "(+91) 77956 87988",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1090 , 1st floor, 18th cross road HSR layout sector 3",
                "addressLocality": "Bangalore",
                "postalCode": "560102",
                "addressCountry": "IN"
              } ,
              "sameAs": [
                "https://www.facebook.com/learnbay/",
                "https://twitter.com/Learbay",
                "https://www.instagram.com/learnbayofficial/",
                "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                "https://www.linkedin.com/company/learnbay/"
              ] 
            } `,
          }}
        />
        <script
          type="text/javascript"
          src="https://web-in21.mxradon.com/t/Tracker.js"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `pidTracker('57020');`,
          }}
        />
   
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NN8XWH8');
              `,
          }}
        />{" "}
      </Head>
      <body>
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-NN8XWH8`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        <Main />
        <NextScript />

        <script
          type="text/javascript"
          src="https://crmplus.zoho.in/crm/javascript/zcga.js"
        >
          {" "}
        </script>
      </body>
    </Html>
  );
}
