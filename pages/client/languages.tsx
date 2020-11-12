import Link from "next/link";
import Head from "next/head";
import styles from "../styles/languages.module.scss"

function Languages() {
  /**
   * in admin the test id is selected,
   * from selected lang:
   * link to href="/client/test?testid=[$testid]&lang=[$lang]"
   */

  return (
      <div className={styles.pageContainer}>
        <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}></img>
        <div className={styles.langContainer}>
          <Link href="/client/test?testid=123&lang=ru">
            <a>
              <img
                src="https://cdn.countryflags.com/thumbs/russia/flag-round-250.png"
                alt="rus"
                className={styles.flag}
              />
            </a>
          </Link>
          <Link href="/client/test?testid=123&lang=lv">
            <a>
              <img
                src="https://cdn.countryflags.com/thumbs/latvia/flag-round-250.png"
                alt="lv"
                className={styles.flag}
              />
            </a>
          </Link>
          <Link href="/client/test?testid=123&lang=en">
            <a>
              <img
                src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png"
                alt="eng"
                className={styles.flag}
              />
            </a>
          </Link>
        </div>
      </div>
  );
}

export default Languages;
