import React from 'react'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/services/ServicesSection'
import ContactSection from '../contactSection/ContactSection'

export default function LandingPage() {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <ServicesSection/>
            <AboutSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}
