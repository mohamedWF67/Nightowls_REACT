import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import {useState} from "react";
import RadioSelector from "../components/radio_selector/radio_selector.jsx";
import styles from "../components/radio_selector/radio_selector.module.css";
import Prodcontainer from "../components/container/product_container.jsx";
import Pccompdata from "../components/data/pccompdata.jsx";

function Pccomp() {
    const categories = [
        "CPU","Motherboard","GPU","RAM","Storage","Case","PSU"
    ]
    const [category, setCategory] = useState(categories.at(0));
    document.title = category;

    const catradio = document.getElementById("catradiogroup");

    function right() {
        catradio.scrollBy(300,0);
    }
    function left() {
        catradio.scrollBy(-300,0);
    }
    return (
            <>
                <Header/>
                <Prodcontainer upperelement={<div id={"catradiogroup"} className={styles.catradiogroup}>
                    <div className={styles.catradiogroup_nav}>
                        <button className={styles.catradiogroup_nav_btn} onClick={left}><i className={"bx bx-chevron-left"}/></button>
                        <button className={styles.catradiogroup_nav_btn} onClick={right}><i className={"bx bx-chevron-right"}/></button>
                    </div>
                    {categories.map((data, index) => (
                        <RadioSelector id={index} key={index} value={data} name={"category"} checked={category === data}
                                       onchange={e => setCategory(e.target.value)}/>
                    ))}
                </div>} title={category} data={<Pccompdata category={category}/>}/>
                <Footer/>
            </>
    );
}

export default Pccomp