import styles from './Footer.module.css';
import 'boxicons';
import HR from "../HR/HR.jsx";
import {useState} from "react";

function Footer() {

    const [trans] = useState(true);

    return (
        <footer className={(trans?styles.footer_trans:null)}>
            <div className={styles.footer}>
                <div className={styles.content}>
                    <h2>Accessories</h2>
                    <ul>
                        <li><a href={"gaming"}>Gaming</a></li>
                        <li><a href={"setup"}>Setup</a></li>
                        <li><a href={"collections"}>Collections</a></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Devices and hardware</h2>
                    <ul>
                        <li><a href={"prebuilt"}>Pre built PC</a></li>
                        <li><a href={"laptops"}>Laptops</a></li>
                        <li><a href={"Consoles"}>Consoles</a></li>
                        <li><a href={"pccomp"}>PC components</a></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Games guider</h2>
                    <ul>
                        <li><a href={"Requirements"}>Requirements</a></li>
                        <li><a href={"Hardware"}>Hardware enhancements</a></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Cart</h2>
                    <ul>
                        <li><a href={"cart"}>View cart</a></li>
                        <li><a href={"checkout"}>Checkout</a></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Account</h2>
                    <ul>
                        <li><a href={"login"}>Login</a></li>
                        <li><a href={"registration"}>Sign-up</a></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Night Owls</h2>
                    <ul>
                        <li><a href={"about"}>About us</a></li>
                        <li><a href={"contact"}>Contact us</a></li>
                    </ul>
                </div>
            </div>
            <HR/>
            <div className={styles.copyright}>
                <div className={styles.text}>
                    <p>Copyright: © {new Date().getFullYear()} NightOwls Group</p>
                    <p> Email:<a href="mailto:info@bue.edu.eg">info@bue.edu.eg</a></p>
                </div>
                <div className={styles.socials}>
                    <ul>
                        <li className={styles.social_icon_facebook}><a
                            href="https://www.facebook.com/thebritishuniversityegypt">
                            <box-icon type='logo' name='facebook' color='white' size='25px'></box-icon>
                        </a></li>
                        <li className={styles.social_icon_instagram}><a
                            href="https://www.instagram.com/thebritishuniversityinegypt/">
                            <box-icon name='instagram' type='logo' color='white' size='25px'></box-icon>
                        </a></li>
                        <li className={styles.social_icon_youtube}><a
                            href="https://www.youtube.com/@thebritishuniversityinegyp985">
                            <box-icon name='youtube' type='logo' color='white' size='25px'></box-icon>
                        </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );

}

export default Footer