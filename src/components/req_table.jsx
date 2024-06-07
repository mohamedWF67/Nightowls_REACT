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
                    <th>Specifications</th>
                    <th>Minimum</th>
                    <th>Recommended</th>
                    <th>High-End</th>
                </tr>
                {data.at(props.no).map((lm, index) => (
                    <>
                        <tr>
                            <td key={index}>{lm.spec}</td>
                            {(() => {
                                if (lm.min !== undefined ) {
                                    return (
                                        <td key={index}>{lm.min}</td>
                                    )
                                }else{
                                    return (null)
                                }
                            })()}
                            {(() => {
                                if (lm.rec !== undefined ) {
                                    return (
                                        <td key={index}>{lm.rec}</td>
                                    )
                                }else{
                                    return (null)
                                }
                            })()}
                            {(() => {
                                if (lm.max !== undefined ) {
                                    return (
                                        <td key={index}>{lm.max}</td>
                                    )
                                }else{
                                    return (null)
                                }
                            })()}
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