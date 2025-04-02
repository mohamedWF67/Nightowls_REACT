import Card from "../card/card.jsx";
import {useState} from "react";
import productsData from "/src/products.json";

function Collecdata() {

    const [category] = useState('collection');
    const products = productsData;
    // Filter products by category
    const filteredProducts = products.filter(product => product.category === category);

    return (<>
            {filteredProducts.map((lm,index) => (
                <Card id={lm.id} key={index} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>
            ))}
        </>
    );

}

export default Collecdata
