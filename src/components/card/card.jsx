import style from './card.module.css';
import PropTypes from "prop-types";
function Card(props) {

    return (
            <div className={style.card}>
                <div className={style.img}><img src={props.img}></img></div>
                <h2 className={style.product_title}>{props.title}</h2>
                <p className={style.product_desc}>{props.desc}</p>
                <button className={style.btn}>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} EGP</button>
            </div>
    );

}
Card.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
}

export default Card