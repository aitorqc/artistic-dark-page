import React from 'react'
import styled from 'styled-components'

import ThemeList from '../../data/ThemeList';
import ParagraphText from '../paragraphTexts/ParagraphText'

const ServiceItemStyles = styled.div`
    text-align: left;
    padding: 3rem;
    border-radius: 12px;
    .service__icon{
        font-size: 2rem;
        margin-bottom: 1rem;
        background-color: var(--mediumSlateBlue);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        svg{
            width: 60%;
        }
    }
    .service__title{
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.5rem;
        text-transform: capitalize;
        margin-bottom: 1rem;
        color: ${(props) => props.theme.theme === ThemeList.light
            ? 'var(--dark-blue_2)'
            : 'var(--light-blue_1)'};
    }
    &:hover{
        background-color: var(--mediumSlateBlue);
        cursor: pointer;
        .service__icon{
            background-color: var(--light-blue_1);
            color: var(--mediumSlateBlue);
        }
        .service__title{
            color: var(--light-blue_1);
        }
        .service__desc{
            color: var(--light-blue_1);
        }
    }
    @media screen and (max-width: 768px){
        background-color: var(--mediumSlateBlue);
        .service__icon{
            background-color: var(--light-blue_1);
            color: var(--mediumSlateBlue);
        }
        .service__title{
            color: var(--light-blue_1);
            font-size: 1.8rem;
            margin-bottom: .5rem;
        }
        .service__desc{
            color: var(--light-blue_1);
        }
    }
`;

export default function ServiceItem({ icon, title, desc }) {
    return (
        <ServiceItemStyles>
            <div className="service__icon">
                {icon}
            </div>
            <div className="service__title">
                {title}
            </div>
            <ParagraphText className="service__desc">{desc}</ParagraphText>
        </ServiceItemStyles>
    )
}
