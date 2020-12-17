import Link from 'next/link';
import React, { useState } from 'react';
import store from "store";
import styles from "../styles/success.module.scss";
import EmailForm from "../../components/EmailForm";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Success(props: any) {

    const [testID, setTestID] = useState<string>("");

    useEffect(() => {
        const testData = store.get("theTest");
        setTestID(testData._id);
    }, []);

    const shareable = true; //from test props - store.get()?

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
            <Link href={`/client/languages?testid=${testID}`}>
                <button className={styles.finishBtn}>Done</button>
            </Link>
        </div>
    );
}

export default Success;