import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Slider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const slides = [];
    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <img
                    src={'oicms/i_com/uploads/2021/01/icom-hp-hero-3-mobile-devices-1.jpg'}
                    style={{ listStyle: 'none' }}
                    alt={`Slide ${i}`}
                />
            </SwiperSlide>
        );
    }

    return (
        <React.Fragment>
            <Swiper
                id="main"
                thumbs={{ swiper: thumbsSwiper }}
                controller={{ control: controlledSwiper }}
                tag="section"
                wrapperTag="ul"
                navigation
                pagination
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                onSlideChange={(swiper) => {
                    console.log('Slide index changed to: ', swiper.activeIndex);
                }}
                onReachEnd={() => console.log('Swiper end reached')}
            >
                {slides}
            </Swiper>

        </React.Fragment>
    );
}

export default Slider;