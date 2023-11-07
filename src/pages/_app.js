import "../styles/globals.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  // Initialize GTM outside of the component

  return (
    <>
      <Script
        strategy="afterInteractive" // Use "afterInteractive" strategy
        src={`https://www.googletagmanager.com/gtag/js?id=UA-215989751-1`}
      />

      <Script
        strategy="afterInteractive" // Use "afterInteractive" strategy
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-215989751-1');
          `,
        }}
      />

      <Script
        strategy="afterInteractive" // Use "afterInteractive" strategy
        src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"
      />

      <Script
        strategy="afterInteractive" // Use "afterInteractive" strategy
        src={`https://www.googletagmanager.com/gtag/js?id=G-86WLBHQTY3`}
      />

      <Script
        strategy="afterInteractive" // Use "afterInteractive" strategy
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-86WLBHQTY3');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
