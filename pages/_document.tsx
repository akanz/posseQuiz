import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="#Yin Yang quiz brought to you by Yin Yang Devs"
        />
        <meta
          property="og:title"
          content="The Yin Yang trivia | Test your #Yin Yang knowledge"
        />
        <meta
          property="og:description"
          content="#Yin Yang quiz brought to you by Yin Yang Devs"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/Lz9P8Rg/yy.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://yinyangquiz.vercel.app/" />
        <meta
          name="twitter:title"
          content="The Yin Yang trivia | Test your #Yin Yang knowledge"
        />
        <meta
          name="twitter:description"
          content="#Yin Yang quiz brought to you by Yin Yang Devs"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/Lz9P8Rg/yy.jpg"
        />
        <link rel="icon" href="/images/yyang.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
