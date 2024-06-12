import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Collecdata from "../components/data/collectiondata.jsx";
import Prodcontainer from "../components/container/product_container.jsx";

function Collection() {
    document.title = "Collection";
    return (
        <>
            <Header/>
            <Prodcontainer title={"Collection"} data={<Collecdata/>}/>
            <Footer/>
        </>
    );

}

export default Collection
