import style from './card.module.css';
import PropTypes from "prop-types";
import {useState} from "react";

function Card(props) {

    const [isHover, setIsHover] = useState(false);

    function hoveryes() {setIsHover(true)}
    function hoverno() {setIsHover(false)}

    return (
            <div onMouseEnter={hoveryes} onMouseLeave={hoverno} className={style.card}>
                {isHover ? (
                    <>
                        <div className={style.img}><img alt={props.desc} src={props.img}></img></div>
                        <h2 className={style.product_title}>{props.title}</h2>
                        <p className={style.product_desc}>{props.desc}</p>
                        <button className={style.btn}>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} EGP</button>
                    </>
                ) : (
                    <>
                        <div className={style.img}><img alt={props.desc} src={props.img}></img></div>
                        <h2 className={style.product_title}>{props.title}</h2>
                        <p className={style.product_desc}>{props.desc}</p>
                        <button className={style.btn}>{props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} EGP</button>
                    </>
                )}
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