import PropTypes from "prop-types";
import styles from "../components/container/selectors.module.css";

function Reqtable(props) {

    const data = props.data;

    return (
        <>
            <div className={styles.table}>
            <table>
                <caption>{props.title}</caption>
                <tr>
                    <th>Specs</th>
                    <th>Minimum</th>
                    <th>Recommended</th>
                    <th>High-End</th>
                </tr>
                {data.at(props.no).map((lm, index) => (
                    <>
                        <tr>
                            <td key={index}>{lm.spec}</td>
                            {lm.min && <td key={index}>{lm.min}</td>}
                            {lm.rec && <td key={index}>{lm.rec}</td>}
                            {lm.max && <td key={index}>{lm.max}</td>}
                        </tr>
                    </>
                ))}
            </table>
            </div>
        </>
    );

}

Reqtable.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    no: PropTypes.number,
}

export default Reqtable