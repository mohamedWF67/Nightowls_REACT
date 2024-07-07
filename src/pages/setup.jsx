import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Setupdata from "../components/data/setupdata.jsx";
import RadioSelector from "../components/radio_selector/radio_selector.jsx";
import styles from "../components/radio_selector/radio_selector.module.css";
import {useState} from "react";
import Prodcontainer from "../components/container/product_container.jsx";

function Setup() {

    document.title = "Setup";

    const [category, setCategory] = useState("Desk");
    const categories = [
        "Desk","Chair","Light"
    ]
    return (
        <>
            <Header/>
            <main>
                <div className={styles.getintoinspire}>
                    <h1>Get inspired</h1>
                    <a href={"inspire"} className={styles.getintoinspire_btn}>See now</a>
                </div>
                <Prodcontainer upperelement={<div className={styles.catradiogroup}>
                    {categories.map((data, index) => (
                        <RadioSelector id={index} key={index} value={data} name={"category"} checked={category === data}
                                       onchange={e => setCategory(e.target.value)}/>
                    ))}
                </div>} title={category} data={<Setupdata category={category}/>}/>
            </main>
            <Footer/>
        </>
    );

}

export default Setup
