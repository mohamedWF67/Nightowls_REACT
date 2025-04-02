import styles from './main_home.module.css';
import Product_tag from "../product_tag/product_tag.jsx";
import Prebuiltdata from "../data/prebuiltdata.jsx";
import Consolesdata from "../data/consolesdata.jsx";
import Lapdata from "../data/laptopsdata.jsx";

function Home() {
    const tabs = [
        "New Arrivals","Best Sellers","Pre Built PCs"
    ]
    return (
        <main>
            <div className={styles.video}>
                <iframe src="https://www.youtube.com/embed/GejXnyse-b4?si=NtX7eFIrxrOJjLD_" title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            {tabs.map((tab, index) => (
                <>
                <Product_tag title={tab} nav={true} id={index}/>
                <div id={index} className={styles.slide}>
                    {tab === "New Arrivals" && <Lapdata/>}
                    {tab === "Best Sellers" && <Consolesdata/>}
                    {tab === "Pre Built PCs" && <Prebuiltdata/>}
                </div>
                </>
            ))}
        </main>
    );

}

export default Home