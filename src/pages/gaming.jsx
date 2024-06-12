import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import styles from "../components/radio_selector/radio_selector.module.css";
import RadioSelector from "../components/radio_selector/radio_selector.jsx";
import Prodcontainer from "../components/container/product_container.jsx";
import {useState} from "react";
import Gamingdata from "../components/data/gamingdata.jsx";

function Gamingpage() {

    const [category, setCategory] = useState("Mouse");
    document.title = category;
    return (
        <>
            <Header/>
            <main>
                <div className={styles.catradiogroup}>
                    <RadioSelector id={1} value={"Mouse"} name={"category"} checked={category === "Mouse"}
                                   onchange={e => setCategory(e.target.value)}/>
                    <RadioSelector id={2} value={"Keyboard"} name={"category"} checked={category === "Keyboard"}
                                   onchange={e => setCategory(e.target.value)}/>
                    <RadioSelector id={3} value={"Headset"} name={"category"} checked={category === "Headset"}
                                   onchange={e => setCategory(e.target.value)}/>
                    <RadioSelector id={4} value={"Mic"} name={"category"} checked={category === "Mic"}
                                   onchange={e => setCategory(e.target.value)}/>
                </div>
                <Prodcontainer title={category} data={<Gamingdata category={category}/>}/>
            </main>
            <Footer/>
        </>
    );

}

export default Gamingpage
