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
      <div className={styles.LangSelectContainer}>
        <div className={styles.LangHeaders}>
          <p>Lūdzu, izvēleties valodu!</p>
          <p>Пожалуйста, выберите язык!</p>
          <p>Please, choose a language!</p>
        </div>
        <div className={styles.langLinkContainer}>
          <div className={styles.LinksContainer}>
            <Link href={`/client/test?testid=${testid}&lang=ru`}>
              <p>Русский</p>
            </Link>
          </div>
          <div className={styles.LinksContainer}>
            <Link href={`/client/test?testid=${testid}&lang=lv`}>
              <p>Latviešu</p>
            </Link>
          </div>
          <div className={styles.LinksContainer}>
            <Link href={`/client/test?testid=${testid}&lang=en`}>
              <p>English</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
