import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import {useState} from "react";
import RadioSelector from "../components/radio_selector/radio_selector.jsx";
import Pccompdata from "../components/data/pccompdata.jsx";
import styles from "../components/radio_selector/radio_selector.module.css";

function Pccomp() {

    const [category, setCategory] = useState("CPU");
    return (
            <>
                <Header/>
                <main>
                    <div className={styles.catradiogroup}>
                        <RadioSelector id={1} value={"CPU"} name={"category"} checked={category === "CPU"} onchange={e => setCategory(e.target.value)}/>
                        <RadioSelector id={2} value={"Motherboard"} name={"category"} checked={category === "Motherboard"} onchange={e => setCategory(e.target.value)}/>
                        <RadioSelector id={3} value={"GPU"} name={"category"} checked={category === "GPU"} onchange={e => setCategory(e.target.value)}/>
                        <RadioSelector id={4} value={"RAM"} name={"category"} checked={category === "RAM"} onchange={e => setCategory(e.target.value)}/>
                        <RadioSelector id={5} value={"Storage"} name={"category"} checked={category === "Storage"} onchange={e => setCategory(e.target.value)}/>
                        <RadioSelector id={6} value={"Case"} name={"category"} checked={category === "Case"} onchange={e => setCategory(e.target.value)}/>
                        <RadioSelector id={7} value={"PSU"} name={"category"} checked={category === "PSU"} onchange={e => setCategory(e.target.value)}/>
                    </div>
                    <Pccompdata category={category}/>
                </main>
                <Footer/>
            </>
    );
}

export default Pccomp