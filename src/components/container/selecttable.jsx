import PropTypes from "prop-types";
import styles from "./selectors.module.css";
import Reqtable from "../req_table.jsx";

function Selecttable(props) {
    var data = props.option;
    var tb = props.tbs;
    return (
        <main className={styles.main}>
            <h1><em>{props.heading}</em></h1>
            <form method="get">
                <select name={props.selname} onChange={props.onchange}>
                    <option value={"#"}>Select</option>
                    {data.map((lm, index) => (
                        <option key={index} value={lm.value}>{lm.value}</option>
                    ))}
                </select>
            </form>
            <h3><em>Games Guider</em> provides you with specifications for the game you select.</h3>
            {props.selvalue === "Valorant" && <Reqtable trans={props.trans} title={props.selvalue} data={tb} no={0}/>}
            {props.selvalue === "Fortnite" && <Reqtable trans={props.trans} title={props.selvalue} data={tb} no={1}/>}
            {props.selvalue === "Overwatch" && <Reqtable trans={props.trans}  title={props.selvalue} data={tb} no={2}/>}
        </main>
    );

}

Selecttable.propTypes = {
    data: PropTypes.string,
    option: PropTypes.array,
    heading: PropTypes.string,
    selname: PropTypes.string,
    selvalue: PropTypes.string,
    value: PropTypes.string,
    onchange: PropTypes.string,
    tbs: PropTypes.array,
    trans: PropTypes.bool,
}
Selecttable.defaultProps = {
    trans: false,
}

export default Selecttable