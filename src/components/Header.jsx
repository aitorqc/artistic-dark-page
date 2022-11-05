import React from 'react'
import { Link } from 'react-scroll';
import { useState } from 'react';

import styled from 'styled-components';
import ThemeList from '../data/ThemeList';

import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect } from 'react';

const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: ${(props) => props.theme.theme === ThemeList.light
        ? 'var(--light-blue_1)'
        : 'var(--dark-blue_3)'};
    border-bottom: 1px solid var(--mediumSlateBlue);

    .navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 2rem 0;
    }

    nav ul li{
        display: inline-block;
        margin: 0 .5rem;
        a{
            font-size: 1.6rem;
            font-weight: 500;
            display: inline-block;
            padding: .5rem 1rem;
            color: ${(props) => props.theme.theme === ThemeList.light
                ? 'var(--dark-blue_2)'
                : 'var(--light-blue_1)'};
        }
        &:hover{
            a{
                text-decoration: underline;
            }
        }
    }
    .navMenu{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .menuIcon svg, .closeIcon svg{
        width: 30px;
        height: 30px;
        cursor: pointer;
        margin-left: 10px;
        padding: 3px;
        border-radius: 4px;
        color: var(--dark-blue_1);
        &:hover{
            background-color: #8080803b;
        }
    }
    .closeIcon{
        position: absolute;
        right: 10px;
        top: 10px;
        &:hover{
            svg{
                color: var(--white);
            }
        }
    }
    @media screen and (max-width: 768px){
        nav{
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: fixed;
            width: 90%;
            max-width: 250px;
            top: 0;
            right: 0%;
            background-color: ${(props) => props.theme.theme === ThemeList.light
                ? 'var(--light-blue_2)'
                : 'var(--dark-blue_2)'};
            height: 100vh;
            z-index: 100;
            transform: translateX(100%);
            transition: .3s ease transform;
            overflow: hidden;
        }
        nav.open{
            transform: translateX(0);
        }
        nav ul li{
            display: block;
            text-align: center;
            width: 100%;
            margin: .5rem 0;
            a{
                display: block;
                width: 100%;
            }
        }
    }
`;

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        })
    }, []);

    return (
        <HeaderStyles>
            <div className="container">
                <div className="navigation">
                    <Logo></Logo>
                    <div className="navMenu">
                        <nav className={isMobile && isNavOpen ? "open" : ""}>
                            {isMobile && (
                                <div className="closeIcon" onClick={() => setIsNavOpen(false)}>
                                    <FiX />
                                </div>
                            )}
                            <ul>
                                <li>
                                    <Link to="home" smooth>Home</Link>
                                </li>
                                <li>
                                    <Link to="services" smooth>Services</Link>
                                </li>
                                <li>
                                    <Link to="about" smooth>About</Link>
                                </li>
                                <li>
                                    <Link to="contact" smooth>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <ThemeSwitcher />
                        {isMobile && (
                            <div className="menuIcon" tabIndex={0} role="button"
                                onClick={() => setIsNavOpen(true)}>
                                <FiMenu />
                            </div>)}
                    </div>
                </div>
            </div>
        </HeaderStyles>
    )
}
