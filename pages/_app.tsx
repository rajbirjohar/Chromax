import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorContextProvider } from "../contexts/ColorContextProvider";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </ColorContextProvider>
  );
}

export default MyApp;
