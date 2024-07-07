import Product_tag from "../product_tag/product_tag.jsx";
import PropTypes from "prop-types";
import styles from "./prod_container.module.css";


function Prodcontainer(props) {

    return (
        <div className={styles.full}>
            {props.upperelement && <div className={styles.upperelement}>{props.upperelement}</div>}
            <Product_tag title={props.title}/>
            {props.innerelement && <div className={styles.innerelement}>{props.innerelement}</div>}
        <div className={styles.cardlayout}>
            {props.data}
        </div>
        </div>
    );

}
Prodcontainer.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    innerelement: PropTypes.string,
    upperelement: PropTypes.string,
}

export default Prodcontainer