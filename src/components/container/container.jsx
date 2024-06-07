import Product_tag from "../product_tag/product_tag.jsx";
import PropTypes from "prop-types";


function Prodcontainer(props) {

    const divStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        padding: "25px"
    };

    return (
        <>
        <Product_tag title={props.title} />
        <div style={divStyle}>{props.data}</div>
        </>
    );

}
Prodcontainer.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
}

export default Prodcontainer