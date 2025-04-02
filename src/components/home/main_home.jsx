import styles from './main_home.module.css';
import Product_tag from "../product_tag/product_tag.jsx";
import Prebuiltdata from "../data/prebuiltdata.jsx";
import Consolesdata from "../data/consolesdata.jsx";

function Home() {
    const tabs = [
        "New Arrivals","Best Sellers","Pre Built PCs"
    ]
    return (
        <main>
            <div className={styles.video}>
                <iframe src="https://www.youtube.com/embed/GejXnyse-b4?si=NtX7eFIrxrOJjLD_" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            {tabs.map((tab, index) => (
                <>
                <Product_tag title={tab} nav={true} id={index}/>
                <div id={index} className={styles.slide}>
                    {tab === "Best Sellers" && <Consolesdata/>}
                    {tab === "Pre Built PCs" && <Prebuiltdata/>}
                </div>
                </>
            ))}
        </main>
    );

}

export default Home