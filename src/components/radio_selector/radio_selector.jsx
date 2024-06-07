import styles from './radio_selector.module.css';
import PropTypes from "prop-types";
function RadioSelector(props) {
    return (
        <>
        <input id={props.id} className={styles.input} type={"radio"} value={props.value} name={props.name}
               checked={props.checked} onChange={props.onchange}/>
        <label htmlFor={props.id}>{props.value}</label>
        </>
    );
}
RadioSelector.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.string,
    onchange: PropTypes.string,
    id: PropTypes.string,
}
RadioSelector.defaultProps = {
    id: undefined,
    value: "1",
    name: "category",
    checked: "null",
    onchange: "null",
}
export default RadioSelector