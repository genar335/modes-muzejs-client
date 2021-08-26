import { AppProps, Container } from "next/app";
import "./styles/mainStyle.scss";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import Head from "next/head";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <title>FM API</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
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
    </div>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
