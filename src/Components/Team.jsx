import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import "../Styles/Team.css"
import atleta1 from "../imgs/Team/FotoMariann.png"
import atleta2 from "../imgs/Team/FotoMichelSteuart.png"
import atleta3 from "../imgs/Team/FotoCarla.png"
import atleta4 from "../imgs/Team/FotoEduardoBorrero.png"
import atleta5 from "../imgs/Team/FotoAmanda.png"
import atleta6 from "../imgs/Team/FotoFranciscoBarrios.png"
import atleta7 from "../imgs/Team/FotoVaninaPikor.png"
import line from "../imgs/Steps/Line.png"

const Team = () => {

  useEffect(() => {

    const initSwiper = async () => {
      const swiper = new Swiper('.trandingSliderTeam', {
        effect: 'coverflow',
        centeredSlides: true,
        loop: false,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        initialSlide: 2,
      });
    };

    initSwiper().catch((error) => console.error('Error al inicializar Swiper:', error));

  }, []);

  return (
    <section id="team">
      <div className="containerTeam">
        
        <div className='titleContainer'>
          <img  src={line} className='line'/>
          <h2 className='componentTitleTeam'><span style={{color: '#6CBD45'}}>Atletas</span> que hemos ayudado en su alimentación</h2>
          <img  src={line} className='line' style={{transform: "rotate(180deg)"}}/>
        </div>

        <div className="swiper trandingSliderTeam">
          <div className="swiper-wrapper">

            <div className="swiper-slide trandingSlide">
              <div className="trandingSlideImg">
                <img src={atleta1} alt="Atleta" className="backgroundImg" />
                <p className="atletaIg">@mariannmartini</p>
                <p className="atletaTitle">Campeona Absoluta Argentina</p>
              </div>
            </div>

            <div className="swiper-slide trandingSlide">
              <div className="trandingSlideImg">
                <img src={atleta2} alt="Atleta" className="backgroundImg" />
                <p className="atletaIg">@michelsteuart</p>
                <p className="atletaTitle">Campeón Absoluto Argentino</p>
              </div>
            </div>

            <div className="swiper-slide trandingSlide">
              <div className="trandingSlideImg">
                <img src={atleta3} alt="Atleta" className="backgroundImg" />
                <p className="atletaIg">@carrveiga.ifbbpro</p>
                <p className="atletaTitle">IFBB Pro Wellnes</p>
              </div>
            </div>

            <div className="swiper-slide trandingSlide">
              <div className="trandingSlideImg">
                <img src={atleta4} alt="Atleta" className="backgroundImg" />
                <p className="atletaIg">@borrerobodybuilder</p>
                <p className="atletaTitle">Campeón Argentino Bodybuilder</p>
              </div>
            </div>

            <div className="swiper-slide trandingSlide">
              <div className="trandingSlideImg">
                <img src={atleta5} alt="Atleta" className="backgroundImg" />
                <p className="atletaIg">@amanndavs</p>
                <p className="atletaTitle">Atleta Vikinis</p>
              </div>
            </div>

            <div className="swiper-slide trandingSlide">
              <div className="trandingSlideImg">
                <img src={atleta6} alt="Atleta" className="backgroundImg" />
                <p className="atletaIg">@franbarriosvlk</p>
                <p className="atletaTitle">IFBB Pro Bodybuilder</p>
              </div>
            </div>

            <div className="swiper-slide trandingSlide">
              <div className="trandingSlideImg">
                <img src={atleta7} alt="Atleta" className="backgroundImg" />
                <p className="atletaIg">@vapiky_ifbbpro</p>
                <p className="atletaTitle">IFBB Pro Wellnes</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team;