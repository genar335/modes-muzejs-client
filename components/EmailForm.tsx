import React, { useState } from 'react';
import styles from "./styles/EmailForm.module.scss"
import closeButton from "../GAssets/closeButton.svg"

function EmailForm(props: any) {

    const [email, setEmail] = useState("");

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(email);
        props.showHideModal(false);
    }

    const closeModal = () => {
        props.showHideModal(false);
    }

    return(
        <div className={`${styles.modalContainerBG} ${!props.show ? styles.hidden : null}`} onSubmit={handleSubmit}>
            <div className={styles.modalContainer}>
                <img src={closeButton} alt="close" id={styles.closeButton} onClick={closeModal}></img>
                <h2>Share your results</h2>
                <div className={styles.formContainer}>
                    <form>
                        <label htmlFor="email">Your Email Address:</label>
                        <input type="text" id="email" name="email" onChange={handleEmailChange}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmailForm