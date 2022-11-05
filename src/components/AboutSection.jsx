import React from 'react'
import styled from 'styled-components'

import AboutImg from '../assets/images/about.png'
import PrimaryButton from './buttons/PrimaryButton'
import ParagraphText from './paragraphTexts/ParagraphText'
import ServicesTitle from './titles/ServicesTitle'

const AboutStyles = styled.div`
    padding: 10rem 0;
    .about__wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about__subtitle{
        margin-bottom: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        color: var(--mediumSlateBlue);
    }
    .about__title{
        margin-bottom: 2rem;
        max-width: 300px;
    }
    @media screen and (max-width: 768px){
        .about__wrapper{
            flex-direction: column;
        }
        .about__img{
            max-width: 400px;
        }
    }
`;

export default function AboutSection() {
  return (
    <AboutStyles id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__img">
                    <img src={AboutImg} alt="Artistic" />
                </div>
                <div className="about__info">
                    <ParagraphText className="about__subtitle">Who are we</ParagraphText>
                    <ServicesTitle className="about__title">Capturing life as it happens</ServicesTitle>
                    <ParagraphText>"Artistic" is a studio of some passionate photographer. Our Goal is to capture your experience</ParagraphText>
                    <PrimaryButton>Get in Touch</PrimaryButton>
                </div>
            </div>
        </div>
    </AboutStyles>
  )
}
