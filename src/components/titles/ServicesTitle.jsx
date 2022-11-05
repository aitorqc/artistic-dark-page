import React from 'react'
import styled from 'styled-components'
import ThemeList from '../../data/ThemeList'

const ServiceTitleStyles = styled.h3`
    font-size: 4rem;
    font-weight: 800;
    color: ${(props) => props.theme.theme === ThemeList.light
        ? 'var(--dark-blue_2)'
        : 'var(--light-blue_1)'};
    text-transform: capitalize;
    margin-bottom: 3rem;
    @media screen and (max-width: 768px){
        font-size: 3rem;
    }
`

export default function ServicesTitle({ children, ...cls }) {
    return (
        <ServiceTitleStyles {...cls}>{children}</ServiceTitleStyles>
    )
}
