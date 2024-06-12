import style from './product_tag.module.css';
import PropTypes from "prop-types";

function Product_tag(props) {
    return (props.nav ?
            <div className={style.Product_tag}>
                <h2>{props.title}</h2>
                <div>
                    <a onClick={()=>document.getElementById(props.id).scrollBy(-300,0)}>
                        <i className='bx bx-chevron-left'></i>
                    </a>
                    <a onClick={()=>document.getElementById(props.id).scrollBy(+300,0)}>
                        <i className='bx bx-chevron-right'></i>
                    </a>
                </div>
            </div>
:
    <div className={style.Product_tag}>
                <h2>{props.title}</h2>
            </div>
        );

}

Product_tag.propTypes = {
    title: PropTypes.string,
    nav: PropTypes.bool,
    id: PropTypes.string,
}
Product_tag.defaultProps = {
    title: null,
    nav: false,
    id: null,
}

export default Product_tag