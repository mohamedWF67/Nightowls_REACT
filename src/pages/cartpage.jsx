import purplecentered from "../modifers/purplecentered.jsx";
import Cartcomponent from "../components/cart/cart.jsx";

function Cartpage() {
    document.title = "Cart";
    purplecentered()
    return (
        <>
            <Cartcomponent/>
        </>
    );
}

export default Cartpage
