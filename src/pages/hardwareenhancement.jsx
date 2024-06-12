import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import styles from "../components/radio_selector/radio_selector.module.css";
import RadioSelector from "../components/radio_selector/radio_selector.jsx";
import {useState} from "react";
import Pccompdata from "../components/data/pccompdata.jsx";
import Prodcontainer from "../components/container/product_container.jsx";

function Hardwareenhancementpage() {

    const [category, setCategory] = useState("PC");
    document.title = category;

    return (
        <>
            <Header/>
            <main>
                <div className={styles.catradiogroup}>
                    <RadioSelector id={1} value={"PC"} name={"category"} checked={category === "PC"}
                                   onchange={e => setCategory(e.target.value)}/>
                    <RadioSelector id={2} value={"Laptop"} name={"category"} checked={category === "Laptop"}
                                   onchange={e => setCategory(e.target.value)}/>
                </div>
                {category === "PC" && (
                    <>
                        <Prodcontainer title={"RAM"} data={<Pccompdata category={"RAM"}/>} innerelement={<p
                            className="title">Enhancing your PC's RAM is like giving it a turbo boost.<br/>
                            With our meticulously curated selection of high-quality RAM modules, accompanied by expert
                            advice and seamless shopping experience, you can elevate your computing experience to new
                            heights. <br/>
                            Say goodbye to frustrating lag and hello to seamless multitasking with RAM Products!
                        </p>}/>
                        <Prodcontainer title={"SSD"} data={<Pccompdata category={"Storage"}/>} innerelement={<p
                            className="title">Upgrading your PC's storage with SSDs is like giving it a speed boost<br/>
                            Whether you're tired of slow loading times or need more space for your files, our SSDs
                            deliver the performance and reliability you need. <br/>
                            Say goodbye to waiting and hello to instant responsiveness with SSD Products. </p>}/>
                    </>
                )}
                {category === "Laptop" && (
                    <>
                       <Prodcontainer title={"RAM"} data={<Pccompdata category={"laptopram"}/>} innerelement={<p
                           className="title">Enhancing your laptop's RAM is like giving it a turbo boost.<br/>
                           With our meticulously curated selection of high-quality RAM modules, accompanied by expert
                           advice and seamless shopping experience, you can elevate your computing experience to new
                           heights. <br/>
                           Say goodbye to frustrating lag and hello to seamless multitasking with RAM Products!
                       </p>}/>
                        <Prodcontainer title={"SSD"} data={<Pccompdata category={"laptopssd"}/>} innerelement={<p
                            className="title">Upgrading your laptop's storage with SSDs is like giving it a speed
                            boost<br/>
                            Whether you're tired of slow loading times or need more space for your files, our SSDs
                            deliver the performance and reliability you need. <br/>
                            Say goodbye to waiting and hello to instant responsiveness with SSD Products. </p>}/>
                    </>
                )}
            </main>
            <Footer/>
        </>
    );

}

export default Hardwareenhancementpage
