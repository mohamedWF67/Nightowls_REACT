import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Lapdata from "../components/data/laptopsdata.jsx";
import Prodcontainer from "../components/container/product_container.jsx";

function Laptops() {
    document.title = "Laptops";
    return (
        <>
            <Header/>
            <Prodcontainer title={"Laptops"} data={<Lapdata/>}/>
            <Footer/>
        </>
    );

}

export default Laptops
