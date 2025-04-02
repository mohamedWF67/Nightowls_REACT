import style from './card.module.css';
import PropTypes from "prop-types";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Card(props) {

    const [trans] = useState(props.trans);
    const navigate = useNavigate();

    const handleRedirect = () => {
        // Use navigate to change the route
        navigate(`/products/${props.id}`); // Assuming you have a route for the product page
    };
    /**
     * for adding a description popout
     * */
    //const [isHover, setIsHover] = useState(false);
    //function hoveryes() {setIsHover(true)}
    //function hoverno() {setIsHover(false)}

    return (
        <a href={`/products/${props.id}`}>
            <div className={(trans?style.card_trans:style.card)}>
                        <div className={style.img}><img alt={props.desc} src={props.img}></img></div>
                        <h2 className={style.product_title}>{props.title}</h2>
                        <p className={style.product_desc}>{props.desc}</p>
                        <button
                            className={style.btn}>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} EGP
                        </button>
            </div>
        </a>
    );

}

Card.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    trans: PropTypes.bool,
    id: PropTypes.number,
}
Card.defaultProps = {
    trans: true,
}

export default Card