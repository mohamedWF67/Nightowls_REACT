import darkmode from '../../assets/dark-mode.png';
import styles from './darkmode.module.css';

function Darkmode() {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("SelectedTheme","dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("SelectedTheme","light");
    }

    const selectedTheme = localStorage.getItem("SelectedTheme");

    switch (selectedTheme){
        case "dark":
            setDarkMode();
            break
        case "light":
            setLightMode();
            break
    }
    const toggleDarkMode = e => {
        (e.target.checked ? setDarkMode():setLightMode());
    }
    return (
                <a className={styles.darkmodeicon}>
                <input className={styles.checkbox} type="checkbox" id={"darkmode"} name="darkmode" defaultChecked={selectedTheme === "dark"} onChange={toggleDarkMode}/>
                <label htmlFor="darkmode"><img src={darkmode} alt="darkmode"/></label>
                </a>
    );
}

export default Darkmode