import styles from './Footer.module.css';
import 'boxicons';
import HR from "../HR/HR.jsx";

function Footer() {

    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.content}>
                    <h2>Accessories</h2>
                    <ul>
                        <li>Gaming</li>
                        <li>Setup</li>
                        <li>Collections</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Devices and hardware</h2>
                    <ul>
                        <li><a href={"prebuilt"}>Pre built PC</a></li>
                        <li> <a href={"laptops"}>Laptops</a></li>
                        <li><a href={"Consoles"}>Consoles</a></li>
                        <li><a href={"pccomp"}>PC components</a></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Games guider</h2>
                    <ul>
                        <li>Requirements</li>
                        <li>Hardware enhancements</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Cart</h2>
                    <ul>
                        <li>View cart</li>
                        <li>Checkout</li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h2>Account</h2>
                    <ul>
                        <li>Login</li>
                        <li>Sign-up</li>
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
                        <li className="social_icon facebook"><a
                            href="https://www.facebook.com/thebritishuniversityegypt">
                            <box-icon type='logo' name='facebook' color='white' size='25px'></box-icon>
                        </a></li>
                        <li className="social_icon instagram"><a
                            href="https://www.instagram.com/thebritishuniversityinegypt/">
                            <box-icon name='instagram' type='logo' color='white' size='25px'></box-icon>
                        </a></li>
                        <li className="social_icon youtube"><a
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