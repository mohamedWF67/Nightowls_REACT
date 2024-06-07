import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Lapdata from "../components/data/laptopsdata.jsx";
import Product_tag from "../components/product_tag/product_tag.jsx";

function Laptops() {
    const divStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        padding: "25px"
    };
    return (
        <>
            <Header/>
            <main>
                <Product_tag title={"Laptops"}/>
                    <div style={divStyle}>
                        <Lapdata/>
                    </div>
                </main>
            <Footer/>
        </>
    );

}

export default Laptops
