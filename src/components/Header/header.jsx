import style from './Header.module.css';
import logo from './nightowls3.png';
import user from '../../assets/user.png';
import cart from '../../assets/shopping-cart.png';
import Darkmode from "../darkmode/darkmode.jsx";
import Windowsize from "../windowsize.jsx";
import {useState} from "react";
import Accordion from "../accordion/acrodion.jsx";
import HR from "../HR/HR.jsx";
function Header() {

    const [show, setShow] = useState(false);
    Darkmode();
    const width = Windowsize();
    return (width > 805 ?
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
                                    <a href={"requirements"}>Requirements</a>
                                    <a href={"hardware"}>Hardware enhancments</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className={style.acc}>
                        <li><Darkmode/></li>
                        <li><a href={"cart"}>
                            <button><img src={cart} alt="cart"/></button>
                        </a></li>
                        <li>
                            <div className={style.dropdown}>
                                <a>
                                    <button><img src={user} alt="user"/></button>
                                </a>
                                <div className={style.dropdown_content}>
                                    <a href={"login"}>Log in</a>
                                    <a href={"registration"}>Sign up</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            :
            <header>
                <nav>
                    <label className={style.burger} htmlFor="burger">
                        <input type="checkbox" id="burger" checked={show === true} onChange={() => setShow(!show)}/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <a href={"home"}><img className={style.logo} src={logo}/></a>
                    <ul className={style.acc}>
                        <li>
                            <div className={style.dropdown}>
                                <a>
                                    <button><img src={user} alt="user"/></button>
                                </a>
                                <div className={style.dropdown_content}>
                                    <a href={"login"}>Log in</a>
                                    <a href={"registration"}>Sign up</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
                {show && <>
                    <div id={"hammenu"} className={style.hamburger}>
                        <div className={style.mainburger}>
                            <h1><a href={"home"}>Night owls</a></h1>
                            <HR color={"black"} margin={"5px 0"} width={"100%"}/>
                            <Accordion title={"Accessories"} content={<>
                                <a href="gaming">Gaming</a>
                                <a href="setup">Setup</a>
                                <a href="collections">Collections</a>
                            </>}/>
                            <HR color={"black"} margin={"5px 0"} width={"100%"}/>
                            <Accordion title={"Devices and hardware"} content={<>
                                <a href="prebuilt">Pre built PC</a>
                                <a href="laptops">Laptops</a>
                                <a href="consoles">Consoles</a>
                                <a href="pccomp">PC components</a>
                            </>}/>
                            <HR color={"black"} margin={"5px 0"} width={"100%"}/>
                            <Accordion title={"Games guider"} content={<>
                                <a href={"requirements"}>Requirements</a>
                                <a href={"hardware"}>Hardware enhancments</a>
                            </>}/>
                            <HR color={"black"} margin={"5px 0"} width={"100%"}/>
                        </div>
                        <div className={style.burgerextra}>
                            <Darkmode/>
                            <a href={"cart"}><i className={"bx bx-cart"}></i></a>
                            <a><i className={"bx bx-user-circle"}></i></a>
                        </div>
                    </div>
                </>}
            </header>
    );

}

export default Header