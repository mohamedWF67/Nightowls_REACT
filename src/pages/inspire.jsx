import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Coverflow from "../components/coverflow/coverflow.jsx";

function Inspire() {
    document.title = "Inspiration";
    return (
        <>
            <Header/>
            <Coverflow/>
            <Footer/>
        </>
    );
}

export default Inspire