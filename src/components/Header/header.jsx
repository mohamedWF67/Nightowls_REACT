import style from './Header.module.css';
import logo from './nightowls3.png';
import user from '../../assets/user.png';
import cart from '../../assets/shopping-cart.png';
import Darkmode from "../darkmode/darkmode.jsx";
import Windowsize from "../windowsize.jsx";
import {useState} from "react";
import Accordion from "../accordion/acrodion.jsx";
import HR from "../HR/HR.jsx";
import Transparentbtn from "../transparent btn/transparentbtn_component.jsx";

function Header() {

    const [show, setShow] = useState(false);
    const [transparent] = useState(true);
    Darkmode();
    const width = Windowsize();
    show ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    return (width > 805 ? transparent ?
            //header for transparent full
                <header className={style.header_trans}>
                    <nav className={style.header_nav_trans}>
                        <a href={"home"}><img className={style.logo} src={logo}/></a>
                        <ul className={style.navmenu}>
                            <li>
                                <div className={style.dropdown_trans}><a>Accessories</a>
                                    <div className={style.dropdown_content}>
                                        <a href="gaming">Gaming</a>
                                        <a href="setup">Setup</a>
                                        <a href="collections">Collections</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.dropdown_trans}><a>Devices and hardware</a>
                                    <div className={style.dropdown_content}>
                                        <a href="prebuilt">Pre built PC</a>
                                        <a href="laptops">Laptops</a>
                                        <a href="consoles">Consoles</a>
                                        <a href="pccomp">PC components</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.dropdown_trans}><a>Games guider</a>
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
                                <div className={style.dropdown_trans}>
                                    <a>
                                        <button><img src={user} alt="user"/>
                                        </button>
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
                //header full
                <header className={style.header}>
                    <nav className={style.header_nav}>
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
            transparent
                //header for transparent mobile
                ?
                <header className={style.header_trans}>
                    <nav className={style.header_nav_trans}>
                        <label className={style.burger_trans} htmlFor="burger">
                            <input type="checkbox" id="burger" checked={show === true} onChange={() => setShow(!show)}/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <a href={"home"}><img className={style.logo} src={logo}/></a>
                        <ul className={style.acc}>
                            <li>
                                <div className={style.dropdown_trans}>
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
                        <div id={"hammenu"} className={style.hamburger_trans}>
                            <div className={style.mainburger}>
                                <h1><a href={"home"}>Night owls</a></h1>
                                <HR margin={"5px 0"} width={"100%"}/>
                                <Accordion title={"Accessories"} content={<>
                                    <a href="gaming">Gaming</a>
                                    <a href="setup">Setup</a>
                                    <a href="collections">Collections</a>
                                </>}/>
                                <HR margin={"5px 0"} width={"100%"}/>
                                <Accordion title={"Devices and hardware"} content={<>
                                    <a href="prebuilt">Pre built PC</a>
                                    <a href="laptops">Laptops</a>
                                    <a href="consoles">Consoles</a>
                                    <a href="pccomp">PC components</a>
                                </>}/>
                                <HR margin={"5px 0"} width={"100%"}/>
                                <Accordion title={"Games guider"} content={<>
                                    <a href={"requirements"}>Requirements</a>
                                    <a href={"hardware"}>Hardware enhancments</a>
                                </>}/>
                                <HR margin={"5px 0"} width={"100%"}/>
                            </div>
                            <div className={style.burgerextra}>
                                <Transparentbtn/>
                                <Darkmode/>
                                <a href={"cart"}><img src={cart} alt="cart"/></a>
                                <a><button><img src={user} alt="user"/></button></a>
                            </div>
                        </div>
                    </>}
                </header>
                :
                //header for normal mobile
                <header className={style.header}>
                    <nav className={style.header_nav}>
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
                                <Transparentbtn/>
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