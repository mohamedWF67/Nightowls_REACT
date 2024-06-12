import styles from './contactus.module.css';

function Contactusmodule() {
    return (
        <div className={styles.centerme}>
            <div className={styles.contactus_container}>
                <form>
                    <div className={styles.contactus_header}>
                        <h1>Contact us</h1>
                        <button className={styles.submit_button}>Send</button>
                    </div>
                    <div className={styles.contactus_inputarea}>
                        <div className={styles.inputbox}>
                            <span>Full Name:</span>
                            <input type="text" placeholder="Jacob Aiden"/>
                        </div>
                        <div className={styles.inputbox}>
                            <span>Email:</span>
                            <input type="email" placeholder="example@example.com"/>
                        </div>
                    </div>
                    <div className={styles.contactus_feedback}>
                        <div className={styles.inputbox}>
                            <span>Feedback:</span>
                            <textarea></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Contactusmodule
