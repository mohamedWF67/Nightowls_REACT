import {useState} from "react";
import PropTypes from "prop-types";
import styles from "./accordion.module.css";

function Accordion(props) {

    const [accordion, setaccordion] = useState(false);

    return (
        <div className={styles.accordion}>
            <div onClick={() => setaccordion(!accordion)} className={styles.accordion_header}>
                <p>{props.title}</p>
                <div>{accordion ? <i className={"bx bx-chevron-up"}/> : <i className={"bx bx-chevron-down"}/>}</div>
            </div>
            <div className={styles.accordion_content}>
                {accordion && <>{props.content}</>}
            </div>
        </div>
    );

}

Accordion.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
}

export default Accordion