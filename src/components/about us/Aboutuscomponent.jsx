import styles from './aboutuscomponent.module.css';
import TeamImage from 'src/assets/img.avif';
import user from '../../assets/user.png';
import cart from '../../assets/shopping-cart.png';
function AboutusComponent() {

    const ScrollToTeam = () =>{
        window.scrollTo(0, 500);
    }

    return (
        <>
            <div className={styles.aboutuscontainer}>
                <a onClick={ScrollToTeam}><h1>About Night Owls</h1></a>
                <div className={styles.aboutus_b}>
                    <div className={styles.aboutus_b1}>
                        <h1>Don’t know what’s the best device for you?</h1>
                        <p>Night Owls offers a wide variety of devices, hardware and accessories for all budgets from
                            high-end to low-end. Night Owls can also gamers help in choosing their device that is best
                            suited for them depending on their most played game in our Games Guider.</p>
                    </div>
                    <div className={styles.aboutus_b2}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>What does Night Owls offer it's customers.</h1>
                        <p>Night Owls provides devices that range from consoles, prebuilt PCs, laptops and tablets,
                            hardware and components like graphic cards and storage devices, as well as accessories.</p>
                    </div>
                </div>
                <div className={styles.aboutus_big}>
                    <h1>Our <a href={"/Team"}>team</a></h1>
                    <p>We really enjoyed making this website it was a very wonderful experience having such a great team.</p>
                    <img alt={"Team photo"} className={styles.aboutus_img} src={TeamImage}/>
                    <p>Manager: Mohamed Waleed<br/>
                        Creative Minds: Habiba Harfoosh, Mayan Nassar<br/>
                        Graphics: Mazen Mohamed<br/>
                        Beauty Touches: Jomana Mohamed<br/>
                        Helping Hands: Aya Hassan<br/>
                        Special Thanks to TA.Rana Khalil
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutusComponent
