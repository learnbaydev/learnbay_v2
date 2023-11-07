import "../styles/globals.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-215989751-1`}
      />

      <Script
        strategy="afterInteractive"
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
        strategy="afterInteractive"
        src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-86WLBHQTY3`}
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-86WLBHQTY3');
          `,
        }}
      />
    </>
  );
}

export default MyApp;
