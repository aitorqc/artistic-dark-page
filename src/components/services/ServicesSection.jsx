import React from 'react'

import {RiImageEditLine} from 'react-icons/ri'
import styled from 'styled-components'

import ServicesTitle from '../titles/ServicesTitle'
import ServiceItem from './ServiceItem'

const ServicesSectionStyles = styled.div`
    padding: 10rem 0;
    text-align: center;
    .services__items{
        display: flex;
        gap: 2rem;
        justify-content: space-between;
    }
    @media screen and (max-width: 768px){
        .services__items{
            flex-direction: column;
            max-width: 300px;
            margin: 0 auto;
        }
    }
`;

export default function ServicesSection() {
  return (
    <ServicesSectionStyles id='services'>
        <div className="container">
            <ServicesTitle className="services__title">Our Services</ServicesTitle>
            <div className="services__items">
                <ServiceItem icon={<RiImageEditLine/>} 
                title="Professional Editing"
                desc="We do professional photo editing. Let us help you to take your photo next level."/>
                <ServiceItem icon={<RiImageEditLine/>} 
                title="Professional Editing"
                desc="We do professional photo editing. Let us help you to take your photo next level."/>
                <ServiceItem icon={<RiImageEditLine/>} 
                title="Professional Editing"
                desc="We do professional photo editing. Let us help you to take your photo next level."/>
            </div>
        </div>
    </ServicesSectionStyles>
  )
}
