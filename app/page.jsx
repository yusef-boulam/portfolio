// pages/index.js
import Head from "next/head";
import Link from "next/link";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Portfolio de [Ton Nom]" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>
            MY NAME IS <span className={styles.name}>YUSEF BOULAM...</span>
          </h1>
          <h2>
            <span className={styles.function}>Developpeur Web </span> based in
            Nice
          </h2>

          <Link href="/contact">
            <button className={styles.link}>Let's talk with me !</button>
          </Link>
          <div className={styles.contact}>
            <p>06 37 05 15 43</p>
            <a href="mailto:yusef.boulam@gmail.com" className={styles.email}>
              yusef.boulam@gmail.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
