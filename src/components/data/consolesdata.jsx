import Card from "../card/card.jsx";

function Consoledata() {

    const consolesdata = [
        {
            id:1,
            brand:"Nintendo",
            name:"Switch 32GB Lite - Turquoise",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6257/6257139_sd.jpg;maxHeight=640;maxWidth=550",
            price:"9,650"
        },
        {
            id:2,
            brand:"Nintendo",
            name:"Switch with Neon Blue and Neon Red Joy‑Con - Multi ",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522225_sd.jpg;maxHeight=640;maxWidth=550",
            price:"14,476"
        },
        {
            id:3,
            brand:"Nintendo",
            name:"Nintendo - Switch – OLED Model w/ Neon Red & Neon Blue Joy-Con - Multi",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470924_sd.jpg;maxHeight=640;maxWidth=550",
            price:"16,889"
        },
        {
            id:4,
            brand:"Microsoft",
            name:"Xbox Series S 1TB All-Digital Console (Disc-Free Gaming) - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6547/6547877_sd.jpg;maxHeight=640;maxWidth=550",
            price:"16,889"
        },
        {
            id:5,
            brand:"Microsoft",
            name:"Xbox Series X 1TB Console - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428324_sd.jpg;maxHeight=640;maxWidth=550",
            price:"24,122"
        },
        {
            id:6,
            brand:"Microsoft",
            name:"Xbox Series S 512GB All-Digital Starter Bundle Console with Xbox Game Pass (Disc-Free Gaming) - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6558/6558673_sd.jpg;maxHeight=640;maxWidth=550",
            price:"14,200"
        },
        {
            id:7,
            brand:"Sony",
            name:"PlayStation 5 Slim Console - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6566/6566039_sd.jpg;maxHeight=640;maxWidth=550",
            price:"24,122"
        },
        {
            id:8,
            brand:"Sony",
            name:"PlayStation 5 Slim Console – Marvel's Spider-Man 2 Bundle (Full Game Download Included) - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6565/6565065_sd.jpg;maxHeight=640;maxWidth=550",
            price:"24,122"
        }

    ]

    return (<>
            {consolesdata.map((lm) => (
                <Card key={lm.id} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}
        </>
    );

}

export default Consoledata
