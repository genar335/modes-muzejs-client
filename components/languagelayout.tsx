import styles from "./styles/languagelayout.module.scss";

function LanguageLayout({ children }: any) {
  return <div className={styles.container}>{children}</div>;
}

export default LanguageLayout;
