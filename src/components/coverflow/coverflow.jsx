// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './coverflow.module.css';
import {EffectCoverflow,Pagination} from "swiper/modules";

import 'swiper/css';
function Coverflow() {

    return (
        <>
        <main>
            <h1>hello</h1>
            <Swiper className={styles.swiper}>
                <SwiperSlide><img src={"https://images.ctfassets.net/h50kqpe25yx1/5tuQDvidfpqrnfdwjLI9zq/993acb8eeb190c4a5b9c450a30eec9f2/Card_36.jpg?q=75&w=2048&fm=webp"}/></SwiperSlide>
                <SwiperSlide><img src={"https://images.ctfassets.net/h50kqpe25yx1/6UJ9foU6rGcgfhTvQirYT7/92311fb655194be0a6123462f89870a4/Setups_Landing_Page_Lifestyle_Shot_22.jpg?q=75&w=3840&fm=webp"}/></SwiperSlide>
                <SwiperSlide><img src={"https://images.ctfassets.net/h50kqpe25yx1/5tuQDvidfpqrnfdwjLI9zq/993acb8eeb190c4a5b9c450a30eec9f2/Card_36.jpg?q=75&w=2048&fm=webp"}/></SwiperSlide>
            </Swiper>
        </main>
        </>
    );
}

export default Coverflow;