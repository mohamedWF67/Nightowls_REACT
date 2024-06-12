import styles from './payment_card.module.css';
function Paymentcard() {

    return(
        <>
            <div className={styles.payment_card}>
            <div className={styles.payment_card_container}>
                <h3>CARD INFORMATION</h3>
                <div className={styles.credit_nu}>
                    <input id="credit-card-input" name="cardno" type="text" maxLength="19"
                           size="19" autoFocus placeholder="XXXX XXXX XXXX XXXX"/>
                </div>
                <div className={styles.credit_rest}>
                    <input id="CVC" name="CVC" type="text" maxLength="3" size="3" placeholder="CVC"/>
                    <input id="EXPIRE" name="expire" type="text" maxLength="5" size="5" placeholder="MM/YY"/>
                </div>
                <div className={styles.nameholder}>
                    <input id="nameholder" type="text" placeholder="CARD HOLDER"/><i className='bx bxl-mastercard'></i>
                </div>
            </div>
            <div className={styles.proceed_card}>
                <button type="submit" className={styles.proceed_card_btn}>Total: 3500 EGP<p>PAY NOW</p></button>
            </div>
            </div>
        </>
    )

}

export default Paymentcard