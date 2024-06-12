import styles from './registration.module.css';
import {useSubmit} from "react-router-dom";
import {useState} from "react";
function Registration() {

    const [reglog, setreglog] = useState("login");

    return (reglog === "login" ?
        <div className={styles.regcontainer}>
        <h1>Login</h1>
        <div className={styles.details}>
            <div className={styles.inputbox}>
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Username" required/>
            </div>
            <div className={styles.inputbox}>
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" required/>
            </div>
            <div className={styles.rememberme}>
                <input id={"remembermechk"} type="checkbox"/>
                <label htmlFor={"remembermechk"}>
                    <p>Remember me</p>
                </label>
            </div>
        </div>
        <button onClick={useSubmit} className={styles.btn}>Submit</button>
            <div className={styles.reglogswitcher}>
                <p>Dont have an account?<button onClick={()=>setreglog("register")}>Register</button></p>
            </div>
        </div>
        :
        <div className={styles.regcontainer}>
            <h1>Register</h1>
            <div className={styles.details}>
                <div className={styles.inputbox}>
                    <i className="bx bxs-user"></i>
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className={styles.inputbox}>
                    <i className="bx bxs-user"></i>
                    <input type="email" placeholder="Email" required/>
                </div>
                <div className={styles.inputbox}>
                    <i className="bx bxs-lock-alt"></i>
                    <input type="password" placeholder="Password" required/>
                </div>
            </div>
            <button onClick={useSubmit} className={styles.btn}>Submit</button>
            <div className={styles.reglogswitcher}>
                <p>Do you have an account?<button onClick={()=>setreglog("login")}>Login</button></p>
            </div>
        </div>);

}


export default Registration