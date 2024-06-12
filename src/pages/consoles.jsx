import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Prodcontainer from "../components/container/product_container.jsx";
import Consolesdata from "../components/data/consolesdata.jsx";

function Consoles() {

    document.title = "Consoles";
    return (
        <>
            <Header/>
            <Prodcontainer title={"Consoles"} data={<Consolesdata/>}/>
            <Footer/>
        </>
    );

}

export default Consoles
