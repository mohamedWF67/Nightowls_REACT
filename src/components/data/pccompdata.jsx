import Card from "../card/card.jsx";
import PropTypes from "prop-types";
import Prodcontainer from "../container/container.jsx";

function datafn(x){
    const cpu = [
        {
            brand:"Intel",
            name:"Core i9-14900K 14th Gen 24-Core 32-Thread - 4.4GHz (6.0GHz Turbo) Socket LGA 1700 Unlocked Desktop Processor",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560418_sd.jpg;maxHeight=640;maxWidth=550",
            price:"30450"
        },
        {
            brand:"Intel",
            name:"Core i7-14700K 14th Gen 20-Core 28-Thread - 4.3GHz (5.6GHz Turbo) Socket LGA 1700 Unlocked Desktop Processor",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560420_sd.jpg;maxHeight=640;maxWidth=550",
            price:"23610"
        },
        {
            brand:"Intel",
            name:"Core i5-14600K 14th Gen 14-Core 20-Thread - 4.0GHz (5.3GHz Turbo) Socket LGA 1700 Unlocked Desktop Processor",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6560/6560423_sd.jpg;maxHeight=640;maxWidth=550",
            price:"16599"
        },
        {
            brand:"AMD",
            name:"Ryzen 9 7950X 16-core - 32-Thread 4.5GHz (5.7 GHz Max Boost) Socket AM5 Desktop Processor - Silver",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519470cv11d.jpg;maxHeight=640;maxWidth=550",
            price:"30450"
        },
        {
            brand:"AMD",
            name:"Ryzen 7 7800X3D 8-Core - 16-Thread 4.2 GHz (5.0 GHz Max Boost) Socket AM5 Unlocked Desktop Processor - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6537/6537139cv11d.jpg;maxHeight=640;maxWidth=550",
            price:"20420"
        },
        {
            brand:"AMD",
            name:"Ryzen 5 7600X 6-core - 12-Thread 4.7GHz (5.3 GHz Max Boost) Socket AM5 Desktop Processor - Silver",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6519/6519479cv11d.jpg;maxHeight=640;maxWidth=550",
            price:"12760"
        },
    ]
    const gpu = [
        {
            brand:"NVIDIA",
            name:"GeForce RTX 4080 SUPER 16GB GDDR6X Graphics Card - Titanium/Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570219cv1d.jpg;maxHeight=200;maxWidth=300",
            price:"50000"
        },
        {
            brand:"XFX",
            name:"AMD Radeon RX 580 GTS XXX Edition 8GB GDDR5 PCI Express 3.0 Graphics Card - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6136/6136515_sd.jpg;maxHeight=200;maxWidth=300",
            price:"6750"
        },
        {
            brand:"XFX",
            name:"SPEEDSTER SWFT210 AMD Radeon RX 6650XT Core 8GB GDDR6 PCI Express 4.0 Gaming Graphics Card - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6513/6513906_sd.jpg;maxHeight=200;maxWidth=300",
            price:"12499"
        },
        {
            brand:"XFX",
            name:"Speedster MERC310 AMD Radeon RX 7900XTX 24GB GDDR6 PCI Express 4.0 Gaming Graphics Card - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6528/6528715_sd.jpg;maxHeight=200;maxWidth=300",
            price:"123103"
        },
        {
            brand:"GIGABYTE",
            name:"NVIDIA GeForce RTX 4090 Gaming OC 24GB GDDR6X PCI Express 4.0 Graphics Card - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6521/6521518_sd.jpg;maxHeight=200;maxWidth=300",
            price:"75756"
        },
        {
            brand:"ASUS",
            name:"NVIDIA GeForce RTX 4060 Overclock 8GB GDDR6 PCI Express 4.0 Graphics Card - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6549/6549640_sd.jpg;maxHeight=200;maxWidth=300",
            price:"80496"
        },
    ]
    const mobo = [
        {
            brand:"ASUS",
            name:"ROG STRIX Z790-E GAMING WIFI (Socket LGA 1700) USB 3.2 Intel Motherboard",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523725cv1d.jpg;maxHeight=640;maxWidth=550",
            price:"18940"
        },
        {
            brand:"MSI",
            name:"MAG B760 TOMAHAWK WIFI DDR4 (Socket LGA 1700) USB 3.2 Intel Motherboard - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530193_sd.jpg;maxHeight=200;maxWidth=300",
            price:"7620"
        },
        {
            brand:"ASUS",
            name:"ROG MAXIMUS Z790 HERO (Socket LGA 1700) USB 3.2 Intel Motherboard",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523718_sd.jpg;maxHeight=200;maxWidth=300",
            price:"87599"
        },
        {
            brand:"GIGABYTE",
            name:"B650 AORUS ELITE AX (Socket AM5) USB 3.2 Gen2 AMD Motherboard - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523178_sd.jpg;maxHeight=200;maxWidth=300",
            price:"10199"
        },
        {
            brand:"ASUS",
            name:"ROG STRIX B650E-F GAMING WIFI (Socket AM5) USB 3.2 AMD Motherboard",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523721_sd.jpg;maxHeight=200;maxWidth=300",
            price:"15640"
        },
        {
            brand:"ASUS",
            name:"ROG CROSSHAIR X670E HERO (Socket AM5) USB-C Gen2 AMD Motherboard with LED Lighting",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523724_sd.jpg;maxHeight=200;maxWidth=300",
            price:"34000"
        },
    ]
    const ram = [
        {
            brand:"CORSAIR",
            name:"Vengeance RGB PRO 16GB (2PK x 8GB) 3200MHz DDR4",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6256/6256216_sd.jpg;maxHeight=640;maxWidth=550",
            price:"3300"
        },
        {
            brand:"CORSAIR",
            name:"VENGEANCE 32GB (2x16GB) 6000MHz DDR5 ",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6562/6562314_sd.jpg;maxHeight=640;maxWidth=550",
            price:"4500"
        },
        {
            brand:"CORSAIR",
            name:"VENGEANCE RGB PRO SL 32GB (2PK x 16GB) 3600MHz DDR4",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457798_sd.jpg;maxHeight=640;maxWidth=550",
            price:"6400"
        },
        {
            brand:"CORSAIR",
            name:"VENGEANCE 64GB (2PK 32GB) 6400MHz PC5-51200 DDR5 C32",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6542/6542590_sd.jpg;maxHeight=640;maxWidth=550",
            price:"10529"
        },
    ]
    const storage = [
        {
            brand:"Crucial",
            name:"P3 Plus 1TB Internal SSD PCIe Gen 4 x4 NVMe",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509715cv11d.jpg;maxHeight=2000;maxWidth=2000",
            price:"3589"
        },
        {
            brand:"Samsung",
            name:"970 EVO Plus 1TB Internal SSD PCIe Gen 3 x4 NVMe",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6351/6351466_sd.jpg;maxHeight=640;maxWidth=550",
            price:"3876"
        },
        {
            brand:"Samsung",
            name:"990 PRO 4TB Internal SSD PCle Gen 4x4 NVMe",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6559/6559270_sd.jpg;maxHeight=640;maxWidth=550",
            price:"15794"
        },
        {
            brand:"Samsung",
            name:"980 PRO Heatsink 2TB Internal SSD PCIe Gen 4 x4 NVMe",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6485/6485009_sd.jpg;maxHeight=640;maxWidth=550",
            price:"15900"
        },
        {
            brand:"Kingston",
            name:"NV2 NVMe PCIe 4.0 SSD 250G M.2 2280 SNV2S/250G",
            img:"https://m.media-amazon.com/images/I/71JM21OBzhL._AC_SL1500_.jpg",
            price:"1700"
        },
        {
            brand:"Lexar",
            name:"NM710 2TB M.2 PCIe Gen4x4 Nvme SSD",
            img:"https://www.egprices.com/images/md/lexar-nm710-2tb-m-2-pcie-gen4x4-nvme-ssd-1.jpg",
            price:"7500"
        },
        {
            brand:"Lexar",
            name:"NM790 512GB PCIe Gen4 NVMe M.2 2280 SSD",
            img:"https://www.egprices.com/images/large/lexar-nm790-512gb-pcie-gen4-nvme-m-2-2280-ssd-1.jpg",
            price:"2899"
        },
        {
            brand:"Crucial",
            name:"P3 2TB PCIe M.2 2280 SSD",
            img:"https://www.egprices.com/images/md/crucial-p3-2tb-pcie-m-2-2280-ssd-1.png",
            price:"6500"
        },
    ]
    const Case = [
        {
            brand:"CORSAIR",
            name:"4000D AIRFLOW ATX MidTower Case",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6424/6424213_sd.jpg;maxHeight=200;maxWidth=300",
            price:"5756"
        },
        {
            brand:"NZXT",
            name:"H7 Flow ATX Mid-Tower Case - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507400_sd.jpg;maxHeight=200;maxWidth=300",
            price:"5612"
        },
        {
            brand:"NZXT",
            name:"H9 Flow ATX Mid-Tower Case with Dual Chamber - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529621_sd.jpg;maxHeight=200;maxWidth=300",
            price:"5599"
        },
        {
            brand:"NZXT",
            name:"H5 Flow ATX Mid-Tower Case - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522038_sd.jpg;maxHeight=200;maxWidth=300",
            price:"5103"
        },
        {
            brand:"Cooler Master",
            name:"MasterBox MCB-NR200-KNNN-S00 Mini ITX/Mini DTX Mini-tower Case - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494853_sd.jpg;maxHeight=200;maxWidth=300",
            price:"5756"
        },
        {
            brand:"ThermalTake",
            name:"The Tower 300 Micro ATX Case - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577421_sd.jpg;maxHeight=200;maxWidth=300",
            price:"7499 EGP"
        },
    ]
    const psu = [
        {
            brand:"CORSAIR",
            name:"HXi Series HX1200i 80 PLUS Platinum Cybenetics Platinum Fully Modular ATX Power Supply - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577051_sd.jpg;maxHeight=200;maxWidth=300",
            price:"15250"
        },
        {
            brand:"EVGA",
            name:"SuperNOVA 1300W GT Power Supply",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500780_sd.jpg;maxHeight=200;maxWidth=300",
            price:"12612"
        },
        {
            brand:"NZXT",
            name:"C1200 80 Plus Gold Fully-Modular Low Noise ATX 3.0 PSU - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6538/6538048_sd.jpg;maxHeight=200;maxWidth=300",
            price:"10599"
        },
        {
            brand:"MSI",
            name:"MPG A850G PCIE 5 - Full Modular – 80 Plus Gold 850W - 100% Japanese 105°C Capacitors – ATX 3.0 Gaming Power Supply - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524434cv17d.jpg;maxHeight=200;maxWidth=300",
            price:"7630"
        },
        {
            brand:"ThermalTake",
            name:"Toughpower GF2 ARGB 750W 80 PLUS Gold Fully Modular ATX Power Supply - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510218_sd.jpg;maxHeight=200;maxWidth=300",
            price:"8200"
        },
        {
            brand:"CORSAIR",
            name:"RM Series RM750 750W ATX 80 PLUS GOLD Certified Fully Modular Power Supply - White",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477388_sd.jpg;maxHeight=200;maxWidth=300",
            price:"5200"
        },
        {
            brand:"MSI",
            name:"MSI - A750GL PCIE 5 750W ATX 3.0 Full Modular 80 Plus Gold Gaming Power Supply - Black",
            img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6562/6562433cv17d.jpg;maxHeight=200;maxWidth=300",
            price:"4400"
        },
    ]
    //x.sort((a, b) => a.price - b.price);
    switch (x){
        case "CPU":
            return(cpu);
        case "GPU":
            return(gpu);
        case "Motherboard":
            return(mobo);
        case "RAM":
            return(ram);
        case "Storage":
            return(storage);
        case "Case":
            return(Case);
        case "PSU":
            return(psu);
    }
}

function Pccompdata(props) {
    return (<>
            <Prodcontainer title={props.category} data={datafn(props.category).map((lm,index) => (
                <Card key={index} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}/>
        </>
    );

}

export default Pccompdata

Pccompdata.propTypes = {
    category:PropTypes.string,
}