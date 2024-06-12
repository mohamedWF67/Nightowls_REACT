import styles from './HR.module.css';
import PropTypes from "prop-types";
function HR(props) {
    const divstyle = {
        margin: props.margin,
        width: props.width,
        background: props.color,
    }
    return (
        <div style={divstyle} className={styles.hr}></div>
    );
}
HR.propTypes = {
    margin: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
}
export default HR