import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/languages.module.scss";
import store from "store";

function Languages(props: any) {
  const router = useRouter();
  const { testid } = router.query;

  const btnStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    border: "none",
    background: "none",
  };

  const pStyle: React.CSSProperties = {
    margin: "0",
    fontFamily: `"Montserrat", sans-serif`,
  };

  return (
    <div className={styles.pageContainer}>
      <img
        src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png"
        alt="logo"
        id={styles.MMlogo}
      ></img>
      <div className={styles.LangSelectContainer}>
        <div className={styles.LangHeaders}>
          <p>Lūdzu, izvēleties savu valodu!</p>
          <p>Пожалуйста, выберите язык!</p>
          <p>Please, choose your language!</p>
        </div>
        <div className={styles.langLinkContainer}>
          <div className={styles.LinksContainer}>
            <button
              style={btnStyle}
              onClick={() => {
                store.set("activeLang", "lv");
                router.push(`/client/test?testid=${testid}&lang=lv`);
              }}
            >
              {/*     href={`/client/test?testid=${testid}&lang=lv`}> */}
              <p style={pStyle}>Latviešu</p>
            </button>
          </div>
          <div className={styles.LinksContainer}>
            <button
              style={btnStyle}
              onClick={() => {
                store.set("activeLang", "ru");
                router.push(`/client/test?testid=${testid}&lang=ru`);
              }}
            >
              <p style={pStyle}>Русский</p>
            </button>
          </div>
          <div className={styles.LinksContainer}>
            <button
              style={btnStyle}
              onClick={() => {
                store.set("activeLang", "en");
                router.push(`/client/test?testid=${testid}&lang=en`);
              }}
            >
              <p style={pStyle}>English</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
