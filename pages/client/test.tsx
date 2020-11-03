import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router'
import styles from "../styles/test.module.scss"

function Test(props: any) {

    //testing out queries
    const router = useRouter()
    const { testid , lang} = router.query
    //API

    /**
     * language handling (urls?)
     * wrap different returns in conditionals to render the tests within one page
     * TODO components: 
     * 
     */

    return(
        <div className={styles.pageContainer}>
            <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}></img>
            <div>
                <h2>hello</h2>
                <p>test id: {testid}</p>
                <p>test language: {lang}</p>
            </div>
        </div>
    );
}

export default Test;