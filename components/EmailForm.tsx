import styles from "./styles/EmailForm.module.scss"

function EmailForm() {
    return(
        <div className={styles.modalContainer}>
            <h2>Share your results</h2>
            <div className={styles.formContainer}>
                <form>
                    <label htmlFor="email">Your Email Address:</label>
                    <input type="text" id="email" name="email"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default EmailForm