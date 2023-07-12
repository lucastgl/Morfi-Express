import React, {useEffect} from 'react'
import './App.css'
import About from './Components/About'
import Steps from './Components/Steps'
import Testimonios from './Components/Testimonios'
import Form from './Components/Form'
import Footer from './Components/Footer'
import WhatsAppButton from './Components/WhatsAppButton'
import GaleriaViandas from './Components/GaleriaViandas'
import Team from './Components/Team'
import Header from './Components/Header'



function App() {

  // useEffect(() => {
  //   !function(f,b,e,v,n,t,s)
  //   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //   n.queue=[];t=b.createElement(e);t.async=!0;
  //   t.src=v;s=b.getElementsByTagName(e)[0];
  //   s.parentNode.insertBefore(t,s)}(window, document,'script',
  //   'https://connect.facebook.net/en_US/fbevents.js');
  //   fbq('init', '4650603041680222');
  //   fbq('track', 'PageView');
  // }, []);

  return (
    <div>
      <WhatsAppButton/>
      <Header/>
      <GaleriaViandas/>
      <About/>
      <Steps/>
      <Team/>
      <Testimonios/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
