import { AppProps } from "next/app";
import "./styles/mainStyle.scss";

import "react-multi-carousel/lib/styles.css";
import { AnimateSharedLayout } from "framer-motion";

function App({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />;
    </AnimateSharedLayout>
  );
}

export default App;
