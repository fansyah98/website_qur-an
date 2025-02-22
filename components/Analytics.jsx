// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=GTM-5R5RD4KD`} // Ganti dengan tracking ID kamu
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FSCXN7LSE4); // Ganti dengan tracking ID kamu
              `,
            }}
          ></script>
          {/* End Google Analytics */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;