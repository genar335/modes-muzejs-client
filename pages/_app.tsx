import { AppProps } from "next/app";
import "./styles/mainStyle.scss";

import "react-multi-carousel/lib/styles.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
