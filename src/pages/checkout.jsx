import purplecentered from "../modifers/purplecentered.jsx";
import Checkoutcomp from "../components/checkout/checkout.jsx";

function Checkoutpage() {
    document.title = "Checkout";
    purplecentered();
    return (
        <>
            <Checkoutcomp/>
        </>
    );

}

export default Checkoutpage
