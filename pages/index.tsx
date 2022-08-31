import type { NextPage } from "next";
import Head from "next/head";
import { HslaColorPicker } from "react-colorful";
import hslToRgba from "utils/hslToRgba";
import AllColorRanges from "../components/AllColorRanges";
import styles from "../styles/index.module.css";
import { useColorContext } from "../contexts/ColorContextProvider";
import Examples from "@/components/Examples";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import useCalculateColorRange from "../hooks/useCalculateColorRange";

const Home: NextPage = () => {
  const context = useColorContext();

  const rgba = hslToRgba({ color: context.color });

  const primaryRange = useCalculateColorRange({
    color: context.color,
    h: null,
    s: null,
    l: null,
  });

  const generateExamples = () => {
    context.setColor(context.color);
    context.setRange(primaryRange);
    if (context.range.length > 0) {
      toast.success("Generated examples");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Chromax</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.introsection}>
          <h1 className={styles.title}>Chromax</h1>
          <h2 className={styles.subtitle}>
            The only color palette you&#39;ll need.
          </h2>
          <h3 className={styles.subheading}>
            Get started by selecting a fun color below.
          </h3>
        </section>
        <section className={styles.colorsection}>
          <div className={styles.colorpicker}>
            <HslaColorPicker
              color={context.color}
              onChange={context.setColor}
            />
            <div className={styles.codes}>
              <h4 className={styles.code}>
                <span>HSLA</span> ({context.color.h}, {context.color.s},{" "}
                {context.color.l}, {context.color.a})
              </h4>
              <h4 className={styles.code}>
                <span>RGBA</span> ({rgba.r}, {rgba.g}, {rgba.b}, {rgba.a})
              </h4>
              <button className={styles.button} onClick={generateExamples}>
                Generate
              </button>
            </div>
          </div>
          <AllColorRanges color={context.color} />
        </section>
        <section className={styles.examplessection}>
          <h2 className={styles.exampletitle}>Examples</h2>
          <AnimatePresence>
            {context.range.length === 0 ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Click &#34;Generate&#34; to display examples
              </motion.p>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Examples />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
      <footer className={styles.footer}>Powered by the colorblind.</footer>
    </div>
  );
};

export default Home;
