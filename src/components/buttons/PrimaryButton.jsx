import React from 'react'
import styled from 'styled-components'

const ButtonStyles = styled.a`
    display: inline-block;
    background: var(--mediumSlateBlue);
    padding: 1.5rem 2rem;
    color: var(--white);
    font-size: 1.6rem;
    text-transform: capitalize;
    border-radius: 8px;
    font-weight: 500;
    border: none;
    @media screen and (max-width: 768px){
        font-size: 1.4rem;
        padding: 1.2rem 1.5rem;
    }
`;

export default function PrimaryButton({ children, buttonType, className }) {
    return (
        <ButtonStyles as={buttonType} className={className}>
            {children}
        </ButtonStyles>
    )
}
