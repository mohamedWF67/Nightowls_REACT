import Card from "../card/card.jsx";
import PropTypes from "prop-types";
import productsData from "../../products.json";

function Gamingdata(props) {
    const products = productsData;
    // Filter products by category
    let filteredProducts = products.filter(product => product.category === props.category);

    return (<>
            {filteredProducts.map((lm) => (<Card id={lm.id} key={lm.id} desc={lm.name} title={lm.brand} img={lm.img} price={lm.price}/>))}
        </>
    );

}

Gamingdata.propTypes = {
    category:PropTypes.string,
}

export default Gamingdata