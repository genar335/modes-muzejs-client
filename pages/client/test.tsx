import Link from "next/link";
import Head from "next/head";
import { useRouter } from 'next/router';
import interact from 'interactjs';
import styles from "../styles/test.module.scss";
import OptionTop from "../../components/OptionTop";
import OptionBottom from "../../components/OptionBottom";

function Test(props: any) {

    //testing out queries
    const router = useRouter()
    const { testid , lang } = router.query
    //API

    /**
     * if router.query.lang === {lang}
     * 
     * wrap different returns in conditionals to render the tests within one page
     * TODO components: 
     * 
     */


    return(
        <div className={styles.pageContainer}>
            <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}></img>
            {/*<div>
                <p>test id: {testid}</p>
                <p>tēst language: {lang}</p>
            </div>*/}
            <div className={styles.testContainer}>
                <div className={styles.qnaContainer}>
                    <OptionTop />
                    <OptionBottom />
                </div>
                <div className={styles.qnaContainer}>
                    <OptionTop />
                    <OptionBottom />
                </div>
                <div className={styles.qnaContainer}>
                    <OptionTop />
                    <OptionBottom />
                </div>
            </div>
        </div>
    );
}

export default Test;