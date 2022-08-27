import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { HexColorInput, HslaColorPicker } from "react-colorful";
import hslToRgba from "utils/hslToRgba";
import AllColorRanges from "../components/AllColorRanges";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  const [color, setColor] = useState<Hsla>({
    h: 230,
    s: 100,
    l: 50,
    a: 1,
  });
  const rgba = hslToRgba({ color: color });
  return (
    <div className={styles.container}>
      <Head>
        <title>Chroma</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.introsection}>
          <h1 className={styles.title}>Chroma</h1>
          <h2 className={styles.subtitle}>
            The only color palette you&#39;ll need.
          </h2>
          <h3 className={styles.subheading}>
            Get started by selecting a fun color below.
          </h3>
        </section>
        <section className={styles.colorsection}>
          <div className={styles.colorpicker}>
            <HslaColorPicker color={color} onChange={setColor} />
            <div className={styles.codes}>
              <h4 className={styles.code}>
                <span>HSLA</span> ({color.h}, {color.s}, {color.l}, {color.a})
              </h4>
              <h4 className={styles.code}>
                <span>RGBA</span> ({rgba.r}, {rgba.g}, {rgba.b}, {rgba.a})
              </h4>
            </div>
          </div>
          <AllColorRanges color={color} />
        </section>
      </main>
      <footer className={styles.footer}>Powered by the colorblind.</footer>
    </div>
  );
};

export default Home;
