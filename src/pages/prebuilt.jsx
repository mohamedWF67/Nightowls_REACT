import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Product_tag from "../components/product_tag/product_tag.jsx";
import Prebuiltdata from "../components/data/prebuiltdata.jsx";

function Prebuilt() {
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
                <Product_tag title={"Pre Built PCs"}/>
                <div style={divStyle}>
                    <Prebuiltdata/>
                </div>
            </main>
            <Footer/>
        </>
    );

}

export default Prebuilt
