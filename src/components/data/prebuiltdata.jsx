import Card from "../card/card.jsx";
import productsData from "../../products.json";

function Prebuiltdata() {
    const products = productsData;
    // Filter products by category
    const filteredProducts = products.filter(product => product.category === 'pre-built');

    return (<>
            {filteredProducts.map((lm) => (
                <Card id={lm.id} key={lm.id} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}
        </>
    );

}

export default Prebuiltdata
