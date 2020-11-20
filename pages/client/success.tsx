import Link from 'next/link'
import React, { useState } from 'react';
import styles from "../styles/success.module.scss"
import EmailForm from "../../components/EmailForm"

function Success() {

const [isVisible, setIsVisible] = useState(false);

const openModal = () => {
    setIsVisible(true);
    console.log(isVisible);
}

const toggleModalVisibility = (newValue: any) => {
    setIsVisible(newValue);
    console.log(isVisible);
}

    return(
        <div className={styles.pageContainer}>
            <img src="https://www.fashionmuseumriga.lv/bitrix/templates/main_template/img/logo.png" alt="logo" id={styles.MMlogo}/>
            <Link href="/client/languages">Done</Link>
            <button type="button" onClick={openModal}>Share Your Results</button>
            <EmailForm 
                show={isVisible}
                showHideModal={toggleModalVisibility}
            />
        </div>
    );
}

export default Success