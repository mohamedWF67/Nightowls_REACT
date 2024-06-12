import Card from "../card/card.jsx";
import PropTypes from "prop-types";

function datafn(x){
    const Mouse = [
        {
            brand:"Glorious",
            name:"Model O- Minus Wireless Optical Honeycomb RGB Gaming Mouse - Matte White - Matte White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6528/6528045_sd.jpg;maxHeight=640;maxWidth=550",
            price:"3350"
        },
        {
            brand:"Razer",
            name:"Basilisk V3 Wired Optical Gaming Mouse with Chroma RBG Lighting - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6475/6475703_sd.jpg;maxHeight=640;maxWidth=550",
            price:"2150"
        },
        {
            brand:"Logitech G",
            name:"G502 X PLUS LIGHTSPEED Wireless Gaming Mouse with HERO 25K Sensor - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6512/6512122_sd.jpg;maxHeight=640;maxWidth=550",
            price:"6360"
        },
        {
            brand:"Logitech G",
            name:"PRO X SUPERLIGHT Lightweight Wireless Optical Gaming Mouse with HERO 25K Sensor - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6440/6440537_sd.jpg;maxHeight=640;maxWidth=550",
            price:"5500"
        },
        {
            brand:"ROCCAT",
            name:"Burst Pro Air Lightweight Symmetrical, Wireless RGB Gaming Mouse with 19K DPI Optical Owl-Eye Sensor, Optical Switches, Titan Wheel, 81-Gram Weight – Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6508/6508305_sd.jpg;maxHeight=640;maxWidth=550",
            price:"1,600"
        },
        {
            brand:"SteelSeries",
            name:"Rival 3 Lightweight Wireless Optical Gaming Mouse with Brilliant Prism RGB Lighting - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6439/6439122_sd.jpg;maxHeight=640;maxWidth=550",
            price:"2400"
        },
    ]
    const Keyboard = [
        {
            brand:"HyperX",
            name:"Alloy Core Full-size Wired Gaming Membrane Keyboard with RGB Lighting - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6283/6283508_sd.jpg;maxHeight=640;maxWidth=550",
            price:"1900"
        },
        {
            brand:"SteelSeries",
            name:"Apex Pro 2023 TKL Wired Mechanical OmniPoint 2.0 Adjustable Actuation Switch Gaming Keyboard with RGB Backlighting - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519673_sd.jpg;maxHeight=640;maxWidth=550",
            price:"7200"
        },
        {
            brand:"Razer",
            name:"Blackwidow V3 Full Size Wired Mechanical Green Clicky Tactile Switch Gaming Keyboard with Chroma RGB Backlighting - Quartz",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425362_sd.jpg;maxHeight=640;maxWidth=550",
            price:"4785"
        },
        {
            brand:"Razer",
            name:"BlackWidow V4 Pro Full Size Wired Mechanical Green Switch Gaming Keyboard with Chroma RGB - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6531/6531755_sd.jpg;maxHeight=640;maxWidth=550",
            price:"9200"
        },
        {
            brand:"Logitech G",
            name:"G915 LIGHTSPEED Full-size Wireless Mechanical GL Clicky Switch Gaming Keyboard with RGB Backlighting - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360844_sd.jpg;maxHeight=640;maxWidth=550",
            price:"12000"
        },
        {
            brand:"SteelSeries",
            name:"Apex 3 Full Size Wired Membrane Whisper Quiet Switch Gaming Keyboard with 10 zone RGB Backlighting - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6396/6396205ld.jpg;maxHeight=640;maxWidth=550",
            price:"2390"
        },

    ]
    const Headset = [
        {
            brand:"Logitech G",
            name:"G PRO X Wireless Gaming Headset for PC - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420879cv11d.jpg;maxHeight=640;maxWidth=550",
            price:"6600"
        },
        {
            brand:"Logitech G",
            name:"G733 LIGHTSPEED Wireless Gaming Headset for PS4, PC - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420856_sd.jpg;maxHeight=640;maxWidth=550",
            price:"5500"
        },
        {
            brand:"Razer",
            name:"Kraken Kitty Edition V2 Pro Wired Gaming Headset - Quartz Pink",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6538/6538905_sd.jpg;maxHeight=640;maxWidth=550",
            price:"9,570"
        },
        {
            brand:"Logitech G",
            name:"Astro A50 X LIGHTSPEED Wireless with PLAYSYNC Gaming Headset + Base Station for Xbox Series X|S, PS5, PC/MAC - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572603_sd.jpg;maxHeight=640;maxWidth=550",
            price:"18950"
        },
        {
            brand:"HyperX",
            name:"Cloud Stinger 2 Wired Gaming Headset for PC - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6518/6518171_sd.jpg;maxHeight=640;maxWidth=550",
            price:"2300"
        },
        {
            brand:"HyperX",
            name:"Cloud Stinger Core Wireless Gaming Headset for PC, PS5, and PS4 - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6431/6431194_rd.jpg;maxHeight=640;maxWidth=550",
            price:"1800"
        },
    ]
    const Mic = [
        {
            brand:"HyperX",
            name:"QuadCast S Wired Multi-Pattern USB Electret Condenser Microphone",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6434/6434274cv12d.jpg;maxHeight=640;maxWidth=550",
            price:"8000"
        },
        {
            brand:"Blue Microphones",
            name:"Yeti X Professional USB Multi-Pattern Condenser Microphone",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367477_sd.jpg;maxHeight=640;maxWidth=550",
            price:"6700"
        },
        {
            brand:"Blue Microphones",
            name:"Blue Yeti Professional Multi-Pattern USB Condenser Microphone",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4758/4758301cv22d.jpg;maxHeight=640;maxWidth=550",
            price:"4700"
        },
        {
            brand:"Samson",
            name:"Q9U XLR/USB Dynamic Broadcast Microphone",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428835_sd.jpg;maxHeight=640;maxWidth=550",
            price:"7100"
        },
        {
            brand:"Logitech G",
            name:"Yeti Orb Wired Cardioid Condenser Gaming Microphone with LIGHTSYNC RGB Lights",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6556/6556752_sd.jpg;maxHeight=640;maxWidth=550",
            price:"1600"
        },
        {
            brand:"RØDE",
            name:"NT-USB+ Wired Condenser Microphone with USB Type-C",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530807_rd.jpg;maxHeight=640;maxWidth=550",
            price:"8200"
        },
    ]
    //x.sort((a, b) => a.price - b.price);
    switch (x){
        case "Mouse":
            return(Mouse);
        case "Keyboard":
            return(Keyboard);
        case "Headset":
            return(Headset);
        case "Mic":
            return(Mic);
    }
}

function Gamingdata(props) {
    return (<>
            {datafn(props.category).map((lm,index) => (<Card key={index} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>))}
        </>
    );

}

Gamingdata.propTypes = {
    category:PropTypes.string,
}

export default Gamingdata