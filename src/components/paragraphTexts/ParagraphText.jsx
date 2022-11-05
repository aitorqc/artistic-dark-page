import React from 'react'
import styled from 'styled-components'
import ThemeList from '../../data/ThemeList'

const ParagraphTextStyles = styled.p`
    font-size: 1.8rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
    /* max-width: 300px; */
    color: ${(props) => props.theme.theme === ThemeList.light
        ? 'var(--dark-blue_2)'
        : 'var(--light-blue_2)'};
     @media screen and (max-width: 768px){
        font-size: 1.4rem;
     }       
`

export default function ParagraphText({ children, ...cls }) {
    return (
        <ParagraphTextStyles {...cls}>
            {children}
        </ParagraphTextStyles>
    )
}
