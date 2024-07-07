import {useState} from "react";

function Transparentbtn() {

    const setTransMode = () => {
        localStorage.setItem("Istransparent",true);
        setTransparentbtn(true);
    }

    const setSolidMode = () => {
        localStorage.setItem("Istransparent",false);
        setTransparentbtn(false);
    }

    const transmode = localStorage.getItem("Istransparent");

    switch (transmode){
        case true:
            setTransMode()
            break
        case false:
            setSolidMode()
            break
    }
    const toggleOpacitykMode = e => {
        (e.target.checked ? setTransMode():setSolidMode());
    }

    return (
        <a>
            <input type="checkbox" id={"transmode"} name="darkmode"
                   defaultChecked={transmode === false} onChange={toggleOpacitykMode}/>
            <label htmlFor="transmode"><i className={"bx bx-accessibility"}></i></label>
        </a>
    );

}

export default Transparentbtn