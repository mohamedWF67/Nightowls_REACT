import styles from './cart.module.css';
import CartProductitem from "./cart product item/cart_productitem.jsx";
import HR from "../HR/HR.jsx";

function Cartcomponent() {
    const testing= [
        {
            brand:"ASUS",
            title:"ROG Zephyrus M16 16 240Hz Gaming Laptop QHD - Intel 13th Gen Core i9 with 16GB Memory-NVIDIA GeForce RTX 4070-1TB SSD - Off Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535501_sd.jpg",
            price:"75,756"
        },
        {
            brand:"ASUS",
            title:"ROG Zephyrus G14 14” 165Hz Gaming Laptop QHD-AMD Ryzen 7 7735HS with 16GB DDR5 Memory-NVIDIA RTX 4050 6G-512GB SSD - Moonlight White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535497_sd.jpg",
            price:"42,612"
        },
        {
            brand:"ASUS",
            title:"ROG Strix 18 240Hz Gaming Laptop QHD-Intel 14th Gen Core i9 with 32GB Memory-NVIDIA GeForce RTX 4080-2TB SSD - Eclipse Gray",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570224_sd.jpg",
            price:"123,103"
        },
    ]
    return (
        <>
            <div className={styles.cart_container}>
                <div className={styles.cart_producttab}>
                    {testing.map((item,index) => (
                        <CartProductitem key={index} title={item.title} img={item.img} price={item.price}/>
                    ))}
                </div>
                <div className={styles.cart_pricetab}>
                    <h1>Prices</h1>
                <HR/>
                    <a href={"checkout"} className={styles.cart_submit_btn}>3500</a>
                </div>
            </div>
        </>
    );
}

export default Cartcomponent
