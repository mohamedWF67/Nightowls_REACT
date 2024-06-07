import Card from "../card/card.jsx";

function Prebuiltdata() {

    const prebuiltdata = [
        {
            id:1,
            brand:"NZXT",
            name:"Player: One i5-12400F, RTX™ 3050, 16GB DDR5-5200, 500GB NVMe WHITE",
            img:"https://www.datocms-assets.com/34299/1715743056-player-one-base-ww-04-09-24-hero-white-badge.png?ixlib=js-3.8.0&w=500&h=500&dpr=1&q=75",
            price:"37,857"
        },
        {
            id:2,
            brand:"CORSAIR",
            name:"ONE PRO a200 Ryzen 9 5950X, RTX 3080, 64GB DDR4-3200, 2TB M.2, 2TB HDD",
            img:"https://i5.walmartimages.com/seo/Corsair-ONE-PRO-a200-Workstation-AMD-Ryzen-9-5950X-64-GB-DDR4-SDRAM-RAM-2-TB-HDD-2-TB-SSD_b8197ada-8bdf-43b1-b653-138e05c0a527.2a04dec1b13924f32f26f4386fdae135.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
            price:"189,512"
        },
        {
            id:3,
            brand:"ALIENWARE",
            name:"AURORA R16 i7 14700F,RTX™ 4060 8GB,16 GB DDR5-5800,1TB NVMe",
            img:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r16/media-gallery/liquid/desktop-aw-r16-bk-lqd-cooling-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=476&qlt=100,1&resMode=sharp2&size=476,402&chrss=full",
            price:"66,330"
        },
        {
            id:4,
            brand:"NZXT",
            name:"Player: Three Prime i9-14900KF, RTX™ 4090 GB, 128GB DDR5-6000, 5TB NVMe WHITE",
            img:"https://www.datocms-assets.com/34299/1712469376-player-three-prime-ww-03-22-24-hero-white-badge.png?ixlib=js-3.8.0&w=500&h=500&dpr=1&q=75",
            price:"200,856"
        },
        {
            id:5,
            brand:"CyberPowerPC",
            name:"Gamer Supreme Gaming Desktop - AMD Ryzen 7 7800X3D - 32GB Memory - AMD Radeon RX 7800 XT 16GB - 2TB SSD - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6575/6575116_sd.jpg;maxHeight=640;maxWidth=550",
            price:"75,758"
        },
        {
            id:6,
            brand:"HP OMEN",
            name:"25L Gaming Desktop - AMD Ryzen 5 5600G - 16GB Memory - AMD Radeon RX 7600 - 1TB SSD - Shadow Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6562/6562652_sd.jpg;maxHeight=640;maxWidth=550",
            price:"44,035"
        },
    ]

    return (<>
            {prebuiltdata.map((lm) => (
                <Card key={lm.id} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}
        </>
    );

}

export default Prebuiltdata
