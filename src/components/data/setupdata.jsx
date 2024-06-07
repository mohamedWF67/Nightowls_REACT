import Card from "../card/card.jsx";
import PropTypes from "prop-types";
import Prodcontainer from "../container/container.jsx";

function datafn(x){
    const Desk = [
        {
            brand:"Cooler Master",
            name:"GD160 PC Gamimg Desk, Gaming Table, Black, Purple",
            img:"https://m.media-amazon.com/images/I/51bfphEIWlL._AC_SL1500_.jpg",
            price:"17600"
        },
        {
            brand:"Arozzi",
            name:"Arena Gaming Desk 63 Wide, Ultrawide Curved Gaming and Office Desk, Large Gaming Desk with Custom Monitor Mount & Cable Management Under Desk (Black)",
            img:"https://m.media-amazon.com/images/I/51SKlRGV4vL._AC_SL1500_.jpg",
            price:"14500"
        },
        {
            brand:"ODK",
            name:"47 Inch Small L Shaped Computer Desk with Reversible Storage Shelves, L-Shaped Corner Desk with Monitor Stand for Small Space, Modern Simple Writing Study Table for Home Office Workstation, Black",
            img:"https://m.media-amazon.com/images/I/71ExckqCniL._AC_SL1500_.jpg",
            price:"20330"
        },
        {
            brand:"COUGAR",
            name:"E-mars",
            img:"https://cougargaming.com/global/img/products/desk/e-mars-list-pro.png",
            price:"21847"
        },
        {
            brand:"FlexiSpot",
            name:"E7 Plus 4-leg Standing Desk (E7 Plus)",
            img:"https://image.springbeetle.com/cdn-cgi/image/dpr=1,format=webp,fit=pad/https://staticprod.site.flexispot.com/dev/trantor/attachments/223Q-4.jpg",
            price:"16650"
        },
        {
            brand:"FlexiSpot",
            name:"E7L Pro L-Shaped Standing Desk (E7L)",
            img:"https://image.springbeetle.com/cdn-cgi/image/dpr=1,format=webp,fit=pad/https://s3.springbeetle.com/prod-us2-bucket/trantor/attachments/US/E7L-main%20picture-24.2.29.jpg",
            price:"18460"
        },
    ]
    const Chair = [
        {
            brand:"ASUS",
            name:"SL300 ROG Chariot Core Gaming Chair",
            img:"https://img.overclockers.co.uk/images/GC-000-AS/08d36c2f14e6f16e56178422d7fb4ae7.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442",
            price:"20250"
        },
        {
            brand:"Aerocool",
            name:"Crown Nobility Series Gaming Chair - Moonstone White",
            img:"https://img.overclockers.co.uk/images/GC-00Z-AE/b3ca6fd30f78047bf7de48ec2dc938cc.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442",
            price:"8512"
        },
        {
            brand:"Nitro Concepts",
            name:"X1000 Gaming Chair - Transformers Decepticons Edition",
            img:"https://img.overclockers.co.uk/images/GC-06D-NR/91e85b0d0262739c3fd7282fa827e069.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442",
            price:"13856"
        },
        {
            brand:"Noblechairs",
            name:"EPIC Gaming Chair - Black/Red",
            img:"https://img.overclockers.co.uk/images/GC-003-NC/bf43ef1278cfea87a50ccf0ec97528d9.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442",
            price:"16730"
        },
        {
            brand:"Noblechairs",
            name:"HERO Gaming Chair - Black/White",
            img:"https://img.overclockers.co.uk/images/GC-00X-NC/59325cc781abb4d7fa8fb4a2af90e84e.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442",
            price:"17730"
        },
        {
            brand:"ASUS",
            name:"ROG Destrier Ergo Gaming Chair",
            img:"https://img.overclockers.co.uk/images/GC-008-AS/17fb342e2e98afc90c51e13aa7e95122.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=442&h=442",
            price:"26330"
        },
    ]
    const Light = [
        {
            brand:"Govee",
            name:"Glide RGBIC Y Lights",
            img:"https://cdn.shopify.com/s/files/1/0512/3489/8105/products/H6065-1.jpg?v=1681728169&width=1400&height=1400&crop=center",
            price:"7800"
        },
        {
            brand:"Govee",
            name:"Glide Hexagon Light Panels Ultra",
            img:"https://cdn.shopify.com/s/files/1/0512/3489/8105/files/ID2_1_b9e4ed17-9797-456e-85ae-a97bac2aa6ce.jpg?v=1715046395&width=1400&height=1400&crop=center",
            price:"20350"
        },
        {
            brand:"Govee",
            name:"Glide Wall Light",
            img:"https://cdn.shopify.com/s/files/1/0558/4712/5176/products/B6062102-ID.jpg?v=1682416756&width=1400&height=1400&crop=center",
            price:"3650"
        },
        {
            brand:"Govee",
            name:"RGBIC LED Neon Rope Lights for Desks",
            img:"https://cdn.shopify.com/s/files/1/0558/4712/5176/products/GoveeRGBICLEDNeonRopeLightsforDesks.jpg?v=1701764131&width=1400&height=1400&crop=center",
            price:"8950"
        },
        {
            brand:"Govee",
            name:"Glide Hexa Light Panels",
            img:"https://cdn.shopify.com/s/files/1/0558/4712/5176/products/3.png?v=1682337219&width=1400&height=1400&crop=center",
            price:"6260"
        },
        {
            brand:"Nanoleaf",
            name:"Limited Edition Ultra Black Triangles Starter Kit (9 Panels)",
            img:"https://int-cdn.nanoleaf.me/assets/img/products/shapes/owl/black-triangles/smk/9pk/1-nanoleaf-shapes-ultra-black-triangles-light-panels-smarter-kit-9-cool@1x.webp",
            price:"11150"
        },
    ]
    //x.sort((a, b) => a.price - b.price);
    switch (x){
        case "Desk":
            return(Desk);
        case "Chair":
            return(Chair);
        case "Light":
            return(Light);

    }
}

function Setupdata(props) {
    return (<>
            <Prodcontainer title={props.category} data={datafn(props.category).map((lm,index) => (
                <Card key={index} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}/>
        </>
    );

}

export default Setupdata

Setupdata.propTypes = {
    category:PropTypes.string,
}