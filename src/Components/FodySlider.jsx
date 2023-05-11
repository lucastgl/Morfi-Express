import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

import '../Styles/FodySlider.css';
import vianda1 from "../imgs/Viandas/Vianda1.png"
import vianda2 from "../imgs/Viandas/Vianda2.png"
import vianda3 from "../imgs/Viandas/Vianda3.png"
import vianda4 from "../imgs/Viandas/Vianda4.png"
import vianda5 from "../imgs/Viandas/Vianda5.png"
import vianda6 from "../imgs/Viandas/Vianda6.png"

const FodySlider = () => {

  useEffect(() => {

    const initSwiper = async () => {
      const swiper = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        }
      });
    };

    initSwiper().catch((error) => console.error('Error al inicializar Swiper:', error));

  }, []);
  
  return (
    <section id="tranding">
      <div className="container">
        
        <div>
          <h2 className='componentTitle'>¡Tu <span style={{color: 'green'}}>dieta</span> en las mejores manos!</h2>
        </div>
        
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={vianda1} alt="Tranding" />
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={vianda2} alt="Tranding" />
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={vianda3} alt="Tranding" />
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={vianda4} alt="Tranding" />
              </div>
            </div>
            
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={vianda5} alt="Tranding" />
              </div>
            </div>

            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src={vianda6} alt="Tranding" />
              </div>
            </div>
            
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
    </section>
  );
};

export default FodySlider;