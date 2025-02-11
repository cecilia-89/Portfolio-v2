import Head from "next/head";
import About from "./about";
import Experience from "./experience";
import Project from "./projects";
import Education from "./education";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Cecilia&apos;s Portfolio</title>
          <meta
            property="og:description"
            content="Cecilia Atabong is a detail-oriented software engineer with years of experience designing, developing, and
            maintaining scalable and high-performing web applications."
          />
          <meta property="og:image" content="/images/Thumbnail.jpeg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content="Summary Image" />
          <meta property="og:title" content="Cecilia Atabong" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_IE" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Cecilia's Portfolio" />
          <meta name="twitter:image:alt" content="Backend Engineer" />
          <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />
          <link
            rel="favicon-16x16"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link
            rel="favicon-32x32"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="android-chrome-192x192"
            sizes="192x192"
            href="/favicon/android-chrome-192x192.png"
          />
          <link
            rel="android-chrome-512x512"
            sizes="512x512"
            href="/favicon/android-chrome-512x512.png"
          />
        </Head>
      </div>
      <About />
      <Experience />
      <Project />
      <Education />
    </>
  );
}
