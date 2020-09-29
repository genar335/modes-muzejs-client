import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/languages.module.scss"

function Languages() {
  // how to go back to admin?

  return (
    <>
      <Head>Language Selection</Head>
      <div className={styles.langContainer}>
        <Link href="">
          <a>
            <img
              src="https://cdn.countryflags.com/thumbs/russia/flag-round-250.png"
              alt="rus"
              className={styles.flag}
            />
          </a>
        </Link>
        <Link href="">
          <a>
            <img
              src="https://cdn.countryflags.com/thumbs/latvia/flag-round-250.png"
              alt="lv"
              className={styles.flag}
            />
          </a>
        </Link>
        <Link href="">
          <a>
            <img
              src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png"
              alt="eng"
              className={styles.flag}
            ></img>
          </a>
        </Link>
      </div>
    </>
  );
}

export default Languages;
