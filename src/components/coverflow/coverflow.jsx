import styles from './coverflow.module.css';
import Windowsize from "../windowsize.jsx";


function Coverflow() {

    const width = Windowsize();

    function Coverflowback() {
        document.getElementById("coverflow").scrollBy(-width/2,0);
    }

    function Coverflowforward() {
        document.getElementById("coverflow").scrollBy(width/2,0);
    }

    return (
        <>
        <main>
            <div id={"coverflow"} className={styles.coverflow}>
                <div className={styles.coverflow_img}>
                    <img
                        src={"https://mohamedwf67.github.io/project-web-prep/WhatsApp%20Image%202024-04-29%20at%2001.42.33_1d4374c1.jpg"}/>
                </div>
                <div className={styles.coverflow_img}>
                <img src={"https://images.ctfassets.net/h50kqpe25yx1/2YyN3UuhRqJ59aBodTwCDy/a0828aef7c88fd2ba551e98b13da6134/Setups_Landing_Page_Lifestyle_Shot_10.jpg"}/>
                </div>
                <div className={styles.coverflow_img}>
                <img
                    src={"https://images.ctfassets.net/h50kqpe25yx1/23yXTUpqWoelJEK5faKcIb/45df151420b2a3d4b3beafa40343bf65/Card_34.jpg?q=75&w=3840&fm=webp"}/>
                </div>
                <div className={styles.coverflow_img}>
                <img
                    src={"https://images.ctfassets.net/h50kqpe25yx1/3m4F1Fos7z5lIhfHrlHZzx/0eab8fdc334538e7e7d89838e57997dc/Card_43.jpg?q=75&w=3840&fm=webp"}/>
                </div>
            </div>
            <div className={styles.coverflow_nav}>
                <button onClick={Coverflowback}>Back</button>
                <button onClick={Coverflowforward}>Forward</button>
            </div>
        </main>
        </>
    );
}

export default Coverflow;