import Link from 'next/link'
import styles from "../styles/success.module.scss"

function Success() {

    //email form on this page

    return(
        <div className={styles.pageContainer}>
            <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}></img>
            <Link href="/client/languages">Done</Link>
        </div>
    );
}

export default Success