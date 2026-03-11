import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Dynamic Job Board - Find Top Jobs Handpicked for You</title>
        <meta
          name="description"
          content="Discover top job opportunities tailored for web designers, developers, and more. Apply instantly and start your new career journey today."
        />
        <meta
          name="keywords"
          content="jobs, career, developer, designer, board, hiring"
        />
        <meta property="og:title" content="Dynamic Job Board - Find Top Jobs" />
        <meta
          property="og:description"
          content="Connect with hundreds of companies offering remote and on-site job opportunities."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
