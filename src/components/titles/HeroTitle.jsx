import React from 'react'
import styled from 'styled-components'

import ThemeList from '../../data/ThemeList';

const TitleStyles = styled.h1`
    font-size: 4.5rem;
    color:${(props) => props.theme.theme === ThemeList.light
        ? 'var(--dark-blue_2)'
        : 'var(--light-blue_1)'};
    font-weight: 900;
    text-transform: capitalize;
    max-width: 400px;
    margin-bottom: 1.5rem;
    @media only screen and (max-width: 768px){
        font-size: 3rem;
    }
`;

export default function HeroTitle({ children }) {
    return (
        <TitleStyles>
            {children}
        </TitleStyles>
    )
}
