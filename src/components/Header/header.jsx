import style from './Header.module.css';
import logo from './nightowls3.png';
import user from '../../assets/user.png';
import cart from '../../assets/shopping-cart.png';
import Darkmode from "../darkmode/darkmode.jsx";
function Header() {
    return (
        <header>
            <nav>
                <a href={"home"}><img className={style.logo} src={logo}/></a>
                <ul className={style.navmenu}>
                    <li>
                        <div className={style.dropdown}><a>Accessories</a>
                            <div className={style.dropdown_content}>
                                <a href="gaming">Gaming</a>
                                <a href="setup">Setup</a>
                                <a href="collections">Collections</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={style.dropdown}><a>Devices and hardware</a>
                            <div className={style.dropdown_content}>
                                <a href="prebuilt">Pre built PC</a>
                                <a href="laptops">Laptops</a>
                                <a href="consoles">Consoles</a>
                                <a href="pccomp">PC components</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={style.dropdown}><a>Games guider</a>
                            <div className={style.dropdown_content}>
                                <a href="requirements">Requirements</a>
                                <a href="hardware">Hardware enhancments</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className={style.acc}>
                    <Darkmode/>
                    <li><a>
                        <button><img src={cart} alt="cart"/></button>
                    </a></li>
                    <li>
                        <div className={style.dropdown}>
                            <a>
                                <button><img src={user} alt="user"/></button>
                            </a>
                        <div className={style.dropdown_content}>
                            <a href="log%20in">Log in</a>
                            <a href="registration">Sign up</a>
                        </div>
                    </div>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Header