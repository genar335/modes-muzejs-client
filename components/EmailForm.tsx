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
        //send email to DB
    }

    return(
        <div className={`${styles.formContainer} ${!props.show ? styles.hidden : null}`} onSubmit={handleSubmit}>
            <h2>Share your results</h2>
            <form className={styles.theForm}>
                <label htmlFor="email">Your Email Address:</label>
                <input type="text" id="email" name="email" onChange={handleEmailChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default EmailForm