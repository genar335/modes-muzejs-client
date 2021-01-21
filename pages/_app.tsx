import { AppProps, Container } from "next/app";
import "./styles/mainStyle.scss";

import "react-multi-carousel/lib/styles.css";
import { AnimateSharedLayout } from "framer-motion";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
