import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import styles from "../components/radio_selector/radio_selector.module.css";
import RadioSelector from "../components/radio_selector/radio_selector.jsx";
import Prodcontainer from "../components/container/product_container.jsx";
import {useState} from "react";
import Gamingdata from "../components/data/gamingdata.jsx";

function Gamingpage() {

    const [category, setCategory] = useState("Mouse");
    const categories = [
        "Mouse","Keyboard","Headset","Mic"
    ]

    const catradio = document.getElementById("catradiogroup_gaming");

    function right() {
        catradio.scrollBy(300,0);
    }
    function left() {
        catradio.scrollBy(-300,0);
    }

    document.title = category;
    return (
        <>
            <Header/>
                <Prodcontainer upperelement={<div id={"catradiogroup_gaming"} className={styles.catradiogroup}>
                    <div className={styles.catradiogroup_nav}>
                        <button className={styles.catradiogroup_nav_btn} onClick={left}><i
                            className={"bx bx-chevron-left"}/></button>
                        <button className={styles.catradiogroup_nav_btn} onClick={right}><i
                            className={"bx bx-chevron-right"}/></button>
                    </div>
                    {categories.map((data, index) => (
                        <RadioSelector id={index} key={index} value={data} name={"category"} checked={category === data}
                                       onchange={e => setCategory(e.target.value)}/>
                    ))}
                </div>} title={category} data={<Gamingdata category={category}/>}/>
            <Footer/>
        </>
    );

}

export default Gamingpage
