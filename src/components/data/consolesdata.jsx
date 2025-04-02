import Card from "../card/card.jsx";
import productsData from "/src/products.json";
import {useState} from "react";

function Consoledata() {

    const [category] = useState('consoles');
    const products = productsData;
    // Filter products by category
    const filteredProducts = products.filter(product => product.category === category);

    return (<>
            {filteredProducts.map((lm) => (
                <Card id={lm.id} key={lm.id} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}
        </>
    );

}

export default Consoledata
