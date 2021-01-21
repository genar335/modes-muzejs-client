import { AppProps, Container } from "next/app";
import "./styles/mainStyle.scss";

import "react-multi-carousel/lib/styles.css";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          // x: -1000,
          opacity: 0,
        },
        pageAnimate: {
          x: 0,
          opacity: 1,
        },
      }}
      key={router.route}
    >
      {" "}
      <Component {...pageProps} />{" "}
    </motion.div>
  );
}

export default App;
