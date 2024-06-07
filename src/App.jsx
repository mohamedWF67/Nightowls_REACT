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
function App() {
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
        </Routes>
    </BrowserRouter>
    );

}

export default App
