import Header from "../components/Header/header.jsx";
import Home from "../components/home/main_home.jsx";
import Footer from "../components/footer/Footer.jsx";

function Index() {
    document.title = "Night Owls";
    return (
        <>
            <Header/>
            <Home/>
            <Footer/>
        </>
    );

}

export default Index
