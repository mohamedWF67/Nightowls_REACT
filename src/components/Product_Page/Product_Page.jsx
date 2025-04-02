import {useNavigate, useParams} from 'react-router-dom';
import PropTypes from "prop-types";
import Header from "../Header/header.jsx";
import Footer from "../footer/Footer.jsx";
import style from "./Product_page.module.css";

const ProductPage = ({ products }) => {
    const { productId } = useParams();
    const product = products.find(p => p.id == productId);
    const navigate = useNavigate();
    if (!product) {
        // Redirect to /E404 if product is not found
        navigate('/home');
        return null;  // Return null to avoid rendering anything else
    }
    document.title = product.name;

    return (
        <>
        <Header/>
        <div className={style.page_container}>
        <div className={style.main_box}>
            <div className={style.product_img}>
                <img src={product.img} alt={product.name}/>
            </div>
            <div className={style.product_info}>
                <h1 className={style.product_brand}>{product.brand}</h1>
                <h1 className={style.product_name}>{product.name}</h1>
                <p className={style.product_desc}>{product.description}</p>
                <h2 className={style.product_price}>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} EGP</h2>
            </div>
        </div>
        </div>
            <Footer/>
        </>
    );
};

ProductPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({}))
}

export default ProductPage;
