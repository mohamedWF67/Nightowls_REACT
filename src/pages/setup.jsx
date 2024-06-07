import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Setupdata from "../components/data/setupdata.jsx";
import RadioSelector from "../components/radio_selector/radio_selector.jsx";
import styles from "../components/radio_selector/radio_selector.module.css";
import {useState} from "react";

function Setup() {

    const [category, setCategory] = useState("Desk");

    return (
        <>
            <Header/>
            <main>
                <div className={styles.catradiogroup}>
                    <RadioSelector id={1} value={"Desk"} name={"category"} checked={category === "Desk"}
                                   onchange={e => setCategory(e.target.value)}/>
                    <RadioSelector id={2} value={"Chair"} name={"category"} checked={category === "Chair"}
                                   onchange={e => setCategory(e.target.value)}/>
                    <RadioSelector id={3} value={"Light"} name={"category"} checked={category === "Light"}
                                   onchange={e => setCategory(e.target.value)}/>
                </div>
                <Setupdata category={category}/>
            </main>
            <Footer/>
        </>
    );

}

export default Setup
