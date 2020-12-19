import React, { useState } from 'react';
import styles from "./styles/EmailForm.module.scss";

function EmailForm(props: any) {

    const [email, setEmail] = useState("");

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    }

    const validateEmail = (userEmail: any) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(userEmail).toLowerCase());
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(email);
        if (validateEmail(email) == true) {
            console.log("success");
            //send email to DB?
            //? Axios.post("http://localhost:4000/emails", email) or something
        } else {
            alert("Please enter a valid email address");
        }
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

export default EmailForm;