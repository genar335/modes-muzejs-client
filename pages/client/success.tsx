import Link from 'next/link'
import React, { useState } from 'react';
import store from "store";
import styles from "../styles/success.module.scss"
import EmailForm from "../../components/EmailForm"
import { useRouter } from 'next/router';

function Success(props: any) {
/**
 * const [isVisible, setIsVisible] = useState(false);
 * 
 * const openModal = () => {
 *    setIsVisible(true);
 * }
 * 
 * const toggleModalVisibility = (newValue: any) => {
 *     setIsVisible(newValue);
 * }
 */

    const router = useRouter();
    const { testid , lang } = router.query;
    //get testid from router query and onclick Done direct back to languages of the same test id

    const shareable = true; //from test props

    return(
        <div className={styles.pageContainer}>
            <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}/>
            <div className={styles.textContainer}>
                <h1>Congration</h1>
                <p>you done it</p>
            </div>
            <EmailForm 
                show={shareable}
            />
            <Link href="/client/languages">
                <button className={styles.finishBtn}>Done</button>
            </Link>
        </div>
    );
}

export default Success