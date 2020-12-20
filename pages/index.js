import Head from "next/head";
import Browser from "../components/browser/browser";
import styles from "../styles/home.module.scss";

export default function Home() {
  const title = "❤️ Celia Rossow ❤️";
  const description =
    "While starting off with fame from her modeling and LiveJournal days, Celia Rossow continues to mesmerize as she runs an international business in style. She somehow manages it all while solving the murder(?) of her best friend.";
  const image = "/share.jpg";

  console.log("~**       ❤️❤️❤️❤️      **~");
  console.log(
    "Yes, you guessed it. This is THAT Celia Rossow. Famed software engineer and internet angel"
  );
  console.log(
    "Please DM all inquieries, and I'll try to respond when I'm back from my modeling shoot in Japan"
  );
  console.log("~**       ❤️❤️❤️❤️      **~");

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="scrollbars.css" type="text/css" />
        <meta name="msapplication-TileColor" content="#ff205f" />
        <meta name="theme-color" content="#ff205f" />
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <title>{title}</title>
      </Head>

      <Browser>
        <div className={styles.outer}>
          <div className={styles.wrapper}>
            <h1>Hi, I'm Celia Rossow</h1>
            <h2>Thanks for visiting my site!</h2>
            <img
              src="/images/celia.jpg"
              alt="Celia Rossow looking absolutely fabulous as she walks out of a cafe with her coffee in hand and all eyes on her"
            />
            <img
              className={styles.flame}
              src="/images/fire.gif"
              alt="Watch out for that flame!"
            />
          </div>

          <div className={styles.comingSoon}>
            <img
              src="/images/construction.gif"
              alt="Site under construction!"
            />
          </div>
        </div>
      </Browser>
    </>
  );
}
