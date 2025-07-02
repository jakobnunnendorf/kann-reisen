import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map';
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './aboutus.css'

const location = {
  address: 'Venloer Str. 559, 50825 Köln, Germany.',
  lat: 50.956495918505055,
  lng: 6.903862155645957
} // our location object from earlier

function AboutUs() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      <MapSection location={location} zoomLevel={17} /> {/* include it here */}
      <DisclaimerSection />
      <FooterSection />
    </div>
  )
}

export default AboutUs
