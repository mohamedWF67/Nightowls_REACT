import Registration from "../components/registration/Registration.jsx";
import purplecentered from "../modifers/purplecentered.jsx";

function Registrationpage() {
    document.title = "Register / Login";
    purplecentered();
    return (
            <Registration/>
    );

}

export default Registrationpage
