import React from 'react'
import styled from 'styled-components'
import ThemeList from '../data/ThemeList';

const FieldStyles = styled.div`
    label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: 1.6rem;
        text-transform: capitalize;
        color: ${(props) => props.theme.theme === ThemeList.light
            ? 'var(--dark-blue_2)'
            : 'var(--light-blue_1)'};
    }
    input, textarea{
        margin-top: 1rem;
        width: 100%;
        height: 40px;
        padding: 1rem;
        border: none;
        border-radius: 4px;
        font-size: 1.6rem;
        background-color: var(--light-blue_2);
    }
    textarea{
        height: auto;
        resize: vertical;
    }
    @media screen and (max-width: 768px){
        input{
            font-size: 1.4rem;
        }
    }
`;

export default function FormField({label, id, rows = 1, className, ...rest}) {
  return (
    <FieldStyles className={className}>
        <label htmlFor={id}>
            {label}
            {rows <= 1 ? (
                <input type="text" id={id} {...rest}/>
            ) : (
                <textarea id={id} rows={rows} {...rest}/>
            )}
        </label>
    </FieldStyles>
  )
}
