import {BrowserRouter, Routes,Route} from "react-router-dom";
import Index from "./pages/index.jsx";
import About from "./pages/about us.jsx";
import E404 from "./pages/404.jsx";
import Laptops from "./pages/laptops.jsx";
import Consoles from "./pages/consoles.jsx";
import Prebuilt from "./pages/prebuilt.jsx";
import Pccomp from "./pages/pccomp.jsx";
import Requirements from "./pages/requirements.jsx";
import Collection from "./pages/collection.jsx";
import Setup from "./pages/setup.jsx";
import Inspire from "./pages/inspire.jsx";
import Registration from "./pages/registration.jsx";
import Paywithcard from "./pages/card.jsx";
import Checkoutpage from "./pages/checkout.jsx";
import Contactuspage from "./pages/contact.jsx";
import Cartpage from "./pages/cartpage.jsx";
import Gamingpage from "./pages/gaming.jsx";
import Hardwareenhancement from "./pages/hardwareenhancement.jsx";
import Testpage from "./pages/mongo test.jsx";
import ProductPage from "./components/Product_Page/Product_Page.jsx";
import productsData from './products.json';
import {useEffect, useState} from "react";
function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // In a real app, you'd fetch this data from an API
        setProducts(productsData);
    }, []);

    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Index/>} />
            <Route path="/home" element={<Index/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<E404/>} />
            <Route path="/laptops" element={<Laptops/>} />
            <Route path="/consoles" element={<Consoles/>} />
            <Route path="/prebuilt" element={<Prebuilt/>} />
            <Route path="/pccomp" element={<Pccomp/>} />
            <Route path="/requirements" element={<Requirements/>} />
            <Route path="/collections" element={<Collection/>} />
            <Route path="/setup" element={<Setup/>} />
            <Route path="/inspire" element={<Inspire/>} />
            <Route path="/login" element={<Registration/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/Card" element={<Paywithcard/>} />
            <Route path="/checkout" element={<Checkoutpage/>} />
            <Route path="/contact" element={<Contactuspage/>} />
            <Route path="/cart" element={<Cartpage/>} />
            <Route path="/gaming" element={<Gamingpage/>} />
            <Route path="/hardware" element={<Hardwareenhancement/>} />
            <Route path="/TEST" element={<Testpage/>} />
            <Route
                path="/products/:productId"
                element={(<ProductPage products={products} /> != null?<ProductPage products={products} />:<E404/>)}
            />
        </Routes>
    </BrowserRouter>
    );

}

export default App
