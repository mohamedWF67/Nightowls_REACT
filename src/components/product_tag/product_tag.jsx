import style from './product_tag.module.css';
import PropTypes from "prop-types";

function Product_tag(props) {
    return (props.nav ?
            <div className={style.Product_tag}>
                <h2>{props.title}</h2>
                <div>
                    <a><i className='bx bx-chevron-left'></i></a>
                    <i className='bx bx-chevron-right'></i>
                </div>
            </div> :
            <div className={style.Product_tag}>
                <h2>{props.title}</h2>
            </div>
        );

}

Product_tag.propTypes = {
    title: PropTypes.string,
    nav: PropTypes.bool,
}
Product_tag.defaultProps = {
    title: null,
    nav: false,
}

export default Product_tag