import Card from "../card/card.jsx";

function Lapdata() {

    const laptopsdata = [
        {
            id:1,
            brand:"ASUS",
            name:"ROG Zephyrus M16 16 240Hz Gaming Laptop QHD - Intel 13th Gen Core i9 with 16GB Memory-NVIDIA GeForce RTX 4070-1TB SSD - Off Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535501_sd.jpg",
            price:"75,756"
        },
        {
            id:2,
            brand:"ASUS",
            name:"ROG Zephyrus G14 14” 165Hz Gaming Laptop QHD-AMD Ryzen 7 7735HS with 16GB DDR5 Memory-NVIDIA RTX 4050 6G-512GB SSD - Moonlight White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535497_sd.jpg",
            price:"42,612"
        },
        {
            id:3,
            brand:"ASUS",
            name:"ROG Strix 18 240Hz Gaming Laptop QHD-Intel 14th Gen Core i9 with 32GB Memory-NVIDIA GeForce RTX 4080-2TB SSD - Eclipse Gray",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570224_sd.jpg",
            price:"123,103"
        },
        {
            id:4,
            brand:"MSI",
            name:"Stealth 16 144hz FHD+ Gaming Laptop - Intel Core i7 13620H - NVIDIA GeForce RTX 4070 with 32GB RAM and 1TB SSD - Blue",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6534/6534581_sd.jpg",
            price:"75,756"
        },
        {
            id:5,
            brand:"HP OMEN",
            name:"Transcend 14 120Hz 2.8K OLED Gaming Laptop - Intel Core Ultra 7-155H - 16GB Memory - NVIDIA GeForce RTX 4060 - 1TB SSD - Shadow Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569023_sd.jpg;maxHeight=640;maxWidth=550",
            price:"80,496"
        },
        {
            id:6,
            brand:"Alienware",
            name:"x16 FHD+ 480Hz Gaming Laptop - Intel Core i9 13900HK - 32GB Memory - NVIDIA GeForce RTX 4080 - 1TB SSD - Lunar Silver",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560994_sd.jpg;maxHeight=640;maxWidth=550",
            price:"158,500"
        },
        {
            id:7,
            brand:"ASUS",
            name:"ROG Flow X16 16 Touchscreen Gaming Laptop QHD-Intel Core i9 with 16GB DDR5 Memory-NVIDIA GeForce RTX 4060 V8G -1TB SSD - Off Black",
            img:"https://dlcdnwebimgs.asus.com/files/media/C2118EAC-69AE-4260-AC1D-D574E9575F17/v1/img/display/rog-flow-x16.png",
            price:"44,035"
        }

    ]

    return (<>
            {laptopsdata.map((lm) => (
                <Card key={lm.id} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}
        </>
    );

}

export default Lapdata
