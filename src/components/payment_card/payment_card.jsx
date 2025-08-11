import styles from './payment_card.module.css';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
function Paymentcard() {

    const [cardValue, setCardValue] = useState("");

    const handleCardValueChange = (e) => {
        let input = e.target.value;

        // Remove all non-digits
        input = input.replace(/\D/g, "");

        // Limit to max 16 digits
        input = input.slice(0, 16);

        // Add spaces every 4 digits
        input = input.replace(/(\d{4})(?=\d)/g, "$1 ");

        setCardValue(input);
    };

    const [expireValue, setExpireValue] = useState("");

    const handleExpireValueChange = (e) => {
        let input = e.target.value.replace(/\D/g, ""); // Only digits

        if (input.length > 4) {
            input = input.slice(0, 4); // Max 4 digits total (MMYY)
        }

        // If first digit > 1, force '0' in front (e.g., 4 → 04)
        if (input.length >= 1) {
            if (parseInt(input[0], 10) > 1) {
                input = "0" + input[0];
            }
        }

        // If month > 12, cap it at 12
        if (input.length >= 2) {
            let month = parseInt(input.slice(0, 2), 10);
            if (month === 0) month = 1; // No month 00
            if (month > 12) month = 12;
            input = month.toString().padStart(2, "0") + input.slice(2);
        }

        // Add slash after month if more than 2 digits
        if (input.length > 2) {
            input = input.slice(0, 2) + "/" + input.slice(2);
        }

        setExpireValue(input);
    };

    const [cvcValue, setCvcValue] = useState("");

    const handleCVCValueChange = (e) => {
        const onlyNums = e.target.value.replace(/\D/g, ""); // Remove non-digits
        setCvcValue(onlyNums);
    };

    const [nameValue, setNameValue] = useState("");

    const handleNameValueChange = (e) => {
        let input = e.target.value;

        // Remove anything that's not a letter or space
        input = input.replace(/[^a-zA-Z\s]/g, "");

        // Prevent multiple spaces in a row
        input = input.replace(/\s{2,}/g, " ");

        // Capitalize first letter of each word
        input = input.replace(/\b\w/g, (char) => char.toUpperCase());

        setNameValue(input);
    };

    const [success, setSuccess] = useState(false);
    const [seconds, setSeconds] = useState(5);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setSeconds(5); // reset timer each submit
    };

    useEffect(() => {
        if (!success) return;

        const id = setInterval(() => {
            setSeconds((s) => {
                if (s <= 1) {
                    clearInterval(id);
                    window.location.href = "/";
                    return 0;
                }
                return s - 1;
            });
        }, 1000);

        return () => clearInterval(id); // cleanup
    }, [success]);

    return(
        <>
        {!success ?
            <form onSubmit={handleSubmit} className={styles.payment_card}>
            <div className={styles.payment_card_container}>
                <h3>CARD INFORMATION</h3>
                <div className={styles.credit_nu}>
                    <input id="credit-card-input" value={cardValue} onChange={handleCardValueChange} name="cardno" type="text" maxLength="19"
                           size="19" autoFocus placeholder="XXXX XXXX XXXX XXXX" required/>
                </div>
                <div className={styles.credit_rest}>
                    <input id="EXPIRE" value={expireValue} onChange={handleExpireValueChange} name="expire" type="text"
                           maxLength="5" size="5" placeholder="MM/YY" required/>
                    <input id="CVC" value={cvcValue} onChange={handleCVCValueChange} name="CVC" type="text"
                           maxLength="3" size="3" placeholder="CVC" required/>
                </div>
                <div className={styles.nameholder}>
                    <input id="nameholder" value={nameValue} onChange={handleNameValueChange} type="text" placeholder="CARD HOLDER" required/><i className='bx bxl-mastercard'></i>
                </div>
            </div>
            <div className={styles.proceed_card}>
                <button type="submit" className={styles.proceed_card_btn}>Total: 241,471 EGP<p>PAY NOW</p></button>
            </div>
            </form>
            :
                <div className={styles.successMessage}>
                    <h2>✅ Payment Success</h2>
                    <p>Returning to home in <strong>{seconds}</strong>s…</p>
                </div>
        }
        </>
    )

}

export default Paymentcard