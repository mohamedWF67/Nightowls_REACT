import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutusComponent from "../components/about us/Aboutuscomponent.jsx";

function About() {
    document.title = "About Us";
    return (
        <>
            <Header/>
                <AboutusComponent/>
            <Footer/>
        </>
    );

}

export default About
