import Card from "../card/card.jsx";

function Collecdata() {

    const collecdata = [
        {
            brand:"CORSAIR",
            name:"K100 OPX Keyboard + SCIMITAR ELITE Mouse + HS80 WIRELESS Headset",
            img:"https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/akamai/pdp/bundles/K100_SCIMITAR_HS80.webp?width=1080&quality=85&auto=webp&format=pjpg",
            price:"20200"
        },
        {
            brand:"CORSAIR",
            name:"M65 ULTRA WIRELESS Mouse + HS80 WIRELESS Headset + K70 PRO MINI Keyboard",
            img:"https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Bundles/K70-MINI-HS80-M65-WS-BLACK/-K70-MINI-HS80-M65-WS-BLACK-Gallery-K70-MINI-HS80-M65-WS-BLACK.webp?width=1080&quality=85&auto=webp&format=pjpg",
            price:"20600"
        },
        {
            brand:"CORSAIR",
            name:"VOID ELITE Headset + IRONCLAW Mouse + K60 PRO Keyboard Bundle",
            img:"https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Bundles/BL-50006-NA/-BL-50006-NA-Gallery-competitive-gamer-comp.webp?width=1080&quality=85&auto=webp&format=pjpg",
            price:"12303"
        },
        {
            brand:"Razer",
            name:"Kraken Power Up Bundle",
            img:"https://www.games2egypt.com/Images/Products/31573?fileFormat=1&height=500",
            price:"4049"
        },
        {
            brand:"logitech G",
            name:"G915 Lightspeed RGB Mechanical Gaming Keyboard Powerplay Wireless Charging System Bundle",
            img:"https://m.media-amazon.com/images/I/315UMiVjgUL._AC_SY450_.jpg",
            price:"15150"
        },
        {
            brand:"MSI",
            name:"ADVENTURE 202",
            img:"https://asset.msi.com/resize/image/global/product/product_1626935545f03c71f0136772708d73a987bfa1467d.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            price:"2700"
        },
        {
            brand:"Redragon",
            name:"K552-BB - PC GAMER VALUE SET",
            img:"https://www.redragonzone.com/cdn/shop/products/K552-BB-1_180x.png?v=1533018865",
            price:"2000"
        }

    ]

    return (<>
            {collecdata.map((lm,index) => (
                <Card key={index} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}
        </>
    );

}

export default Collecdata
