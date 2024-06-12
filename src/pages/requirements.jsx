import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import {useState} from "react";
import Selecttable from "../components/container/selecttable.jsx";

function Requirements() {

    document.title = "Requirements";

    const options = [{value:"Valorant"},{value:"Fortnite"},{value:"Overwatch"}]

    const tables = [[
            {
                spec:"CPU",
                min:"Intel Core 2 Duo E8400 or AMD Athlon 200GE",
                rec:"Intel Core i3-4150 or AMD Ryzen 3 1200",
                max:"Intel i5-9400F 2.90Hz or AMD Ryzen 5 2600X",
            },
            {
                spec:"GPU",
                min:"Intel HD 4000 or AMD Radeon R5 200",
                rec:"Nividia GeForce GT 730 or AMD Radeon R7 240",
                max:"Nividia GeForce GTX 1050 Ti or AMD Radeon R7 370",
            },
            {
                spec:"Memory",
                min:"4 GB RAM",
                rec:"8 GB RAM",
            },
            {
                spec:"Storage",
                min:"23 GB HDD",
            },
            {
                spec:"OS",
                min:"Windows 7 64-bit",
                rec:"Windows 10 64-bit",
                max:"Windows 10 64-bit and up",
            },
        ],[
            {
                spec:"CPU",
                min:"Intel Core i3-3225 3.3 GHz",
                rec:"Intel Core i5-7300U 3.5 GHz or AMD Ryzen 3 3300U",
                max:"Intel Core i7-8700 or AMD Ryzen 7 3700x",
            },
            {
                spec:"GPU",
                min:"Intel HD 4000 or AMD Radeon Vega 8",
                rec:"ividia GeForce GTX 960 or AMD R9 280",
                max:"Nividia GeForce RTX 3070 or AMD Radeon RX 6700 XT",
            },
            {
                spec:"Memory",
                min:"8 GB RAM",
                rec:"30 GB RAM",
            },
            {
                spec:"Storage",
                min:"30 GB HDD",
                rec:"26 GB SSD",
            },
            {
                spec:"OS",
                min:"Windows 7 64-bit",
                rec:"Windows 10 64-bit",
                max:"Windows 10 64-bit and up",
            },
        ],[
            {
                spec:"CPU",
                min:"Intel Core i3 or AMD Phenom X3 8650",
                rec:"Intel Core i5 or AMD Phenom II X3 2.8 GHz",
                max:"Intel Core i7-8700 or AMD Ryzen 7 3700x",
            },
            {
                spec:"GPU",
                min:"Intel HD Graphics 4400 or Radeon HD 4850",
                rec:"Nividia GeForce GTX 660 or AMD Radeon HD 7950",
                max:"Nividia GeForce RTX 3070 or AMD Radeon RX 6700 XT",
            },
            {
                spec:"Memory",
                min:"4 GB RAM",
                rec:"8 GB RAM",
                max:"16 GB RAM",
            },
            {
                spec:"Storage",
                min:"30 GB HDD"
            },
            {
                spec:"OS",
                min:"Windows 7 64-bit",
                rec:"Windows 10 64-bit",
                max:"Windows 10 64-bit and up",
            },
        ]];

    const [game, setgame] = useState("#");

    return (
        <>
        <Header/>
        <Selecttable tbs={tables}  option={options} heading={"Select A Game"} onchange={e => setgame(e.target.value)} selvalue={game}
                    selname={"game"}/>
        <Footer/>
</>
)
    ;
}

export default Requirements