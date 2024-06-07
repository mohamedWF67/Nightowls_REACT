import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Product_tag from "../components/product_tag/product_tag.jsx";
import Consoledata from "../components/data/consolesdata.jsx";

function Consoles() {
    const divStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        padding: "25px"
    };
    return (
        <>
            <Header/>
            <main>
                <Product_tag title={"Consoles"}/>
                <div style={divStyle}>
                    <Consoledata/>
                </div>
            </main>
            <Footer/>
        </>
    );

}

export default Consoles
