import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Contactusmodule from "../components/contact/contactus.jsx";

function Contactuspage() {
    document.title = "Contact us";
    return (
        <>
            <Header/>
            <Contactusmodule/>
            <Footer/>
        </>
    );

}

export default Contactuspage
