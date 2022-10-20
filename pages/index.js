import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>almera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            height: "30%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ alignSelf: "center" }}>
            <Image
              src="/header.jpeg"
              objectFit="cover"
              alt="Vercel Logo"
              width={1000}
              height={300}
            />
          </div>
        </div>
        <div
          style={{
            height: "70%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/main.jpeg"
            objectFit="fill"
            alt="Vercel Logo"
            width={1000}
            height={1000}
          />
        </div>
      </main>
    </div>
  );
}
