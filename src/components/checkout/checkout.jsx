import styles from './checkout.module.css';
import { useState } from "react";

function Checkoutcomp() {
    const [paymentMethod, setPaymentMethod] = useState("Cash");

    const handleSubmit = (e) => {
        e.preventDefault();

        switch (paymentMethod) {
            case "Cash":
                window.location.href = "/";
                break;
            case "Card":
                window.location.href = "/Card";
                break;
            case "Instapay":
                window.location.href = "/";
                break;
            default:
                alert("Please select a payment method");
        }
    };

    const paymentmethods = ["Cash", "Card", "Instapay"];

    return (
        <form onSubmit={handleSubmit} className={styles.checkout_container}>
            <div className={styles.checkout_details}>
                <h1>BILLING ADDRESS</h1>
                <div className={styles.input_box}>
                    <span>Full Name:</span>
                    <input type="text" placeholder="Jacob Aiden" required />
                </div>
                <div className={styles.input_box}>
                    <span>Email:</span>
                    <input type="email" placeholder="example@example.com" required />
                </div>
                <div className={styles.input_box}>
                    <span>Address:</span>
                    <input type="text" placeholder="Room - Street - Locality" required />
                </div>
                <div className={styles.input_box}>
                    <span>City:</span>
                    <input type="text" placeholder="Berlin" required />
                </div>
                <div className={styles.hori}>
                    <div className={styles.input_box}>
                        <span>State:</span>
                        <input type="text" placeholder="Germany" required />
                    </div>
                    <div className={styles.input_box}>
                        <span>Zip Code:</span>
                        <input type="text" placeholder="123 456" />
                    </div>
                </div>
            </div>

            <div className={styles.checkout_paymentmethod}>
                <h1>PAYMENT METHOD</h1>
                <div className={styles.paymentmethodpart}>
                    {paymentmethods.map((lm, index) => (
                        <div key={index}>
                            <input
                                id={`pm-${index}`}
                                className={styles.input}
                                type="radio"
                                value={lm}
                                name="paymentmethod"
                                checked={paymentMethod === lm}
                                onChange={e => setPaymentMethod(e.target.value)}
                            />
                            <label htmlFor={`pm-${index}`}>{lm}</label>
                        </div>
                    ))}
                </div>
                <button type="submit">{"Pay " + "241,471"}</button>
            </div>
        </form>
    );
}

export default Checkoutcomp;
