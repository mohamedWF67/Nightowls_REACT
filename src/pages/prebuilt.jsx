import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Prebuiltdata from "../components/data/prebuiltdata.jsx";
import Prodcontainer from "../components/container/product_container.jsx";

function Prebuilt() {
    document.title = "Pre Built PCs";
    return (
        <>
            <Header/>
            <Prodcontainer title={"Pre Built PCs"} data={<Prebuiltdata/>}/>
            <Footer/>
        </>
    );

}

export default Prebuilt
