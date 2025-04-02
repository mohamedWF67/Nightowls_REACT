import { useParams } from 'react-router-dom';
import E404 from "../../pages/404.jsx";
import PropTypes from "prop-types";

const ProductPage = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id == productId);
    if (!product) return(<E404/>);
    document.title = product.name;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    );
};

ProductPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({}))
}

export default ProductPage;
