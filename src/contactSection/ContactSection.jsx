import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../components/buttons/PrimaryButton'
import ParagraphText from '../components/paragraphTexts/ParagraphText'
import ServicesTitle from '../components/titles/ServicesTitle'
import FormField from './FormField'

const ContactSectionStyles = styled.div`
    padding: 10rem 0;
    .contact__wrapper{
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }
    .contact__info{
        margin-bottom: 4rem;
    }
    .contact__form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 3rem;
        .contact__form--fullWidth{
            grid-column: span 2;
        }
        .contact__submit{
            width: max-content;
            cursor: pointer;
        }
    }
    @media screen and (max-width: 768px){
        .contact__form{
            grid-template-columns: 1fr;
            row-gap: 2rem;
            .contact__form--fullWidth{
                grid-column: span 1;
            }
        }
    }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyles id="contact">
        <div className="container">
            <div className="contact__wrapper">
                <div className="contact__info">
                    <ServicesTitle>Get In Touch</ServicesTitle>
                    <ParagraphText>We would love to hear from you</ParagraphText>
                </div>
                <form className="contact__form">
                    <FormField className="contact__form--fullWidth" label="Name" id="name" type="text" name="name" required/>
                    <FormField label="Email" id="email" type="email" name="email" required/>
                    <FormField label="Subject" id="subject" type="text" name="subject" required/>
                    <FormField className="contact__form--fullWidth" label="Message" id="message" rows={6} name="message"/>
                    <PrimaryButton className="contact__submit" type="submit" buttonType={"button"}>Submit</PrimaryButton>
                </form>
            </div>
        </div>
    </ContactSectionStyles>
  )
}
