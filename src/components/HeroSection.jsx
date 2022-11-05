import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import HeroImg from "../assets/images/hero.png";

import HeroTitle from './titles/HeroTitle'

const HeroSectionStyles = styled.div`
    padding-top: calc(var(--header-height) + 10px);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .hero__wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1rem;
    }
    .hero__info{
        flex: 3;
    }
    .hero__img{
        flex: 4;
        img{
            object-fit: contain;
        }
    }
    @media screen and (max-width: 768px){
        .hero__wrapper{
            flex-direction: column-reverse;
            gap: .5rem;
        }
        .hero__img{
            display: flex;
            justify-content: flex-end;
            img{
                max-width: 400px;
                margin-top: auto;
            }
        }
    }
`;

export default function HeroSection() {
  return (
    <HeroSectionStyles id='home'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__info">
                    <HeroTitle>A Click of Artistic Joy</HeroTitle>
                    <ParagraphText>Because every picture tells a story, let us help you tell yours.</ParagraphText>
                    <PrimaryButton>Contact Now</PrimaryButton>
                </div>
                <div className="hero__img">
                    <img src={HeroImg} alt="Artistic" />
                </div>
            </div>
        </div>
    </HeroSectionStyles>
  )
}
