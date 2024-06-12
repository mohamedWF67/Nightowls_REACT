import styles from './aboutuscomponent.module.css';

function AboutusComponent() {

    return (
        <>
            <div className={styles.aboutuscontainer}>
                <h1>About Night Owls</h1>
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
                    <h1>Our team</h1>
                    <p>We really enjoyed making this website it was a very wonderful experience having a good team and
                        collaboration.</p>
                    <p>Thanks to<br/>
                        Manager: Mohamed Waleed<br/>
                        Creative minds: Habiba Harfoosh, Mayan Nassar<br/>
                        Graphics: Mazen Mohamed<br/>
                        Helping hands: Jomana Mohamed, Aya Hassan<br/>
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutusComponent
