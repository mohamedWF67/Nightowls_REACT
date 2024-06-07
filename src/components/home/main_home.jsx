import styles from './main_home.module.css';
import Card from "../card/card.jsx";
import Product_tag from "../product_tag/product_tag.jsx";
import Lapdata from "../data/laptopsdata.jsx";

function Home() {

    const move = ()  => {
        document.querySelector(".slide").scrollBy(300,0);
    }

    const st = {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        overflowY: "auto",
    }

    return (
        <main>
            <div className={styles.video}>
                <iframe src="https://www.youtube.com/embed/GejXnyse-b4?si=NtX7eFIrxrOJjLD_" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <Product_tag nav={false} title={"New Arrivals"}/>
            <Product_tag title={"Best Seller"}/>
            <div className={styles.slide}>
                <Card title={"ASUS"}
                      desc={"ROG Zephyrus M16 16 240Hz Gaming Laptop QHD - Intel 13th Gen Core i9 with 16GB Memory-NVIDIA GeForce RTX 4070-1TB SSD - Off Black"}
                      link={"https://www.elgato.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Felgato-pwa%2Fimage%2Fupload%2Fv1679563440%2FProducts%2F10MAG9901%2Fabove-the-fold%2Fdesktop%2Fwave-xlr-01_jcyurt.jpg&w=1920&q=85"}
                      price={3000}/>
                <Card title={"ASUS"}
                      desc={"ROG Zephyrus M16 16 240Hz Gaming Laptop QHD - Intel 13th Gen Core i9 with 16GB Memory-NVIDIA GeForce RTX 4070-1TB SSD - Off Black"}
                      link={"https://www.elgato.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Felgato-pwa%2Fimage%2Fupload%2Fv1679563440%2FProducts%2F10MAG9901%2Fabove-the-fold%2Fdesktop%2Fwave-xlr-01_jcyurt.jpg&w=1920&q=85"}
                      price={42612}/>
                <Card title={"ASUS"}
                      desc={"ROG Zephyrus M16 16 240Hz Gaming Laptop QHD - Intel 13th Gen Core i9 with 16GB Memory-NVIDIA GeForce RTX 4070-1TB SSD - Off Black"}
                      link={"https://www.elgato.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Felgato-pwa%2Fimage%2Fupload%2Fv1679563440%2FProducts%2F10MAG9901%2Fabove-the-fold%2Fdesktop%2Fwave-xlr-01_jcyurt.jpg&w=1920&q=85"}
                      price={42612}/>
                <Card title={"ASUS"}
                      desc={"ROG Zephyrus M16 16 240Hz Gaming Laptop QHD - Intel 13th Gen Core i9 with 16GB Memory-NVIDIA GeForce RTX 4070-1TB SSD - Off Black"}
                      link={"https://www.elgato.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Felgato-pwa%2Fimage%2Fupload%2Fv1679563440%2FProducts%2F10MAG9901%2Fabove-the-fold%2Fdesktop%2Fwave-xlr-01_jcyurt.jpg&w=1920&q=85"}
                      price={42612}/>
                <Card title={"ASUS"}
                      desc={"ROG Zephyrus M16 16 240Hz Gaming Laptop QHD - Intel 13th Gen Core i9 with 16GB Memory-NVIDIA GeForce RTX 4070-1TB SSD - Off Black"}
                      link={"https://www.elgato.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Felgato-pwa%2Fimage%2Fupload%2Fv1679563440%2FProducts%2F10MAG9901%2Fabove-the-fold%2Fdesktop%2Fwave-xlr-01_jcyurt.jpg&w=1920&q=85"}
                      price={42612}/>
            </div>
            <Product_tag title={"Laptops"}/>
            <button onClick={move}>move</button>
            <div style={st} className={"slide"}>
                <Lapdata/>
            </div>
            <Product_tag title={"Laptops"}/>
            <button >move</button>
            <div className={styles.slide}>
                <Lapdata/>
            </div>
        </main>
    );

}

export default Home