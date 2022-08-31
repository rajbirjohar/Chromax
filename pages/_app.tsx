import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorContextProvider } from "../contexts/ColorContextProvider";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ColorContextProvider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "var(--gray-800)",
              color: "var(--gray-50)",
            },
            icon: "🎉",
          },
          error: {
            style: {
              background: "var(--gray-800)",
              color: "var(--gray-50)",
            },
          },
        }}
      />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ColorContextProvider>
  );
}

export default MyApp;
