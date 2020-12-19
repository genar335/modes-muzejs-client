import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/languages.module.scss";
import store from "store";

function Languages(props: any) {
  const router = useRouter();
  const { testid } = router.query;

  return (
    <div className={styles.pageContainer}>
      <img
        src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
        alt="logo"
        id={styles.MMlogo}
      ></img>
      <div className={styles.langContainer}>
        <Link href={`/client/test?testid=${testid}&lang=ru`}>
          <a>
            <img
              onClick={(e) => store.set("activeLang", "ru")}
              src="https://cdn.countryflags.com/thumbs/russia/flag-round-250.png"
              alt="rus"
              className={styles.flag}
            />
          </a>
        </Link>
        <Link href={`/client/test?testid=${testid}&lang=lv`}>
          <a>
            <img
              onClick={(e) => store.set("activeLang", "lv")}
              src="https://cdn.countryflags.com/thumbs/latvia/flag-round-250.png"
              alt="lv"
              className={styles.flag}
            />
          </a>
        </Link>
        <Link href={`/client/test?testid=${testid}&lang=en`}>
          <a>
            <img
              onClick={(e) => store.set("activeLang", "en")}
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
