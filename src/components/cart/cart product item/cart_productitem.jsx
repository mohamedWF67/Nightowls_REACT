import styles from '../cart.module.css';
import PropTypes from "prop-types";

function CartProductitem(props) {
    return (
        <>
            <div className={styles.cart_item}>
                <div className={styles.cart_data}>
                    <div className={styles.cart_product_img}><img src={props.img} alt={props.title}/></div>
                    <p>{props.title}</p>
                </div>
                <div className={styles.cart_item_price}>{props.price} EGP</div>
            </div>
        </>
    );
}
CartProductitem.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
}

export default CartProductitem
