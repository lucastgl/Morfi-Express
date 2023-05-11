import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/FodySlider.css';

import { EffectCoverflow, Pagination} from 'swiper';

import vianda1 from '../imgs/Viandas/Vianda1.png';
import vianda2 from '../imgs/Viandas/Vianda2.png';
import vianda3 from '../imgs/Viandas/Vianda3.png';
import vianda4 from '../imgs/Viandas/Vianda4.png';
import vianda5 from '../imgs/Viandas/Vianda5.png';
import vianda6 from '../imgs/Viandas/Vianda6.png';

const GaleriaViandas = () => {
  return (
    <div className="containerViandas">
        <div>
          <h2 className='componentTitle'>¡Tu <span style={{color: 'green'}}>dieta</span> en las mejores manos!</h2>
        </div>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="swiper_container"
        >

                <SwiperSlide>
                    <div className="swiper-slide tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={vianda1} alt="Tranding" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="swiper-slide tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={vianda2} alt="Tranding" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="swiper-slide tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={vianda3} alt="Tranding" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="swiper-slide tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={vianda4} alt="Tranding" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="swiper-slide tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={vianda5} alt="Tranding" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="swiper-slide tranding-slide">
                        <div className="tranding-slide-img">
                            <img src={vianda6} alt="Tranding" />
                        </div>
                    </div>
                </SwiperSlide>

            <div className="swiper-pagination" style={{position: "relative", marginTop: "60px"}}></div>

        </Swiper>
  </div>
  )
}

export default GaleriaViandas;