import styles from './checkout.module.css';
import {useState} from "react";
function Checkoutcomp() {

    const [paymentMethod, setPaymentMethod] = useState("Cash");

    const paymentmethods=
        ["Cash","Card","Instapay"]

    return(
        <>
            <div className={styles.checkout_container}>
                <div className={styles.checkout_details}>
                    <h1>BILLING ADDRESS</h1>
                    <form>
                        <div className={styles.input_box}>
                            <span>Full Name:</span>
                            <input type="text" placeholder="Jacob Aiden"/>
                        </div>
                        <div className={styles.input_box}>
                            <span>Email:</span>
                            <input type="email" placeholder="example@example.com"/>
                        </div>
                        <div className={styles.input_box}>
                            <span>Address:</span>
                            <input type="text" placeholder="Room - Street - Locality"/>
                        </div>
                        <div className={styles.input_box}>
                            <span>City:</span>
                            <input type="text" placeholder="Berlin"/>
                        </div>
                        <div className={styles.hori}>
                            <div className={styles.input_box}>
                                <span>State:</span>
                                <input type="text" placeholder="Germany"/>
                            </div>
                            <div className={styles.input_box}>
                                <span>Zip Code:</span>
                                <input type="text" placeholder="123 456"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.checkout_paymentmethod}>
                    <h1>PAYMENT METHOD</h1>
                    <div className={styles.paymentmethodpart}>
                    {paymentmethods.map((lm, index) => (
                        <>
                            <input id={index} className={styles.input} type={"radio"} value={lm} name={"paymentmethod"}
                                   checked={paymentMethod === lm} onChange={e => setPaymentMethod(e.target.value)}/>
                            <label htmlFor={index}>{lm}</label>
                        </>
                    ))}
                    </div>
                    <a href={paymentMethod}><button>Pay</button></a>
                </div>
            </div>
        </>
    )

}

export default Checkoutcomp