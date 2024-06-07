
import StickyBox from "react-sticky-box";
import Header from "../components/Header/header.jsx";
import Footer from "../components/footer/Footer.jsx";



function About() {
    return (
        <>
            <StickyBox offsetTop={10}><Header/></StickyBox>
            <div>
                <p>hello</p>
            </div>
            <Footer/>
        </>
    );

}

export default About
