import { createGlobalStyle } from "styled-components";

import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import ThemeList from "../data/ThemeList";

const GlobalStyles = createGlobalStyle`
    :root{
        --dark-blue_1: #4b558e;
        --dark-blue_2: #2c3774;
        --dark-blue_3: #172033;
        --dark-blue_4: #1a273d;
        --mediumSlateBlue: #6c62e2;
        --light-blue_1: #e3dfff;
        --light-blue_2: #98acdb;
        --white: #fff:
        --black: #000;

        --header-height: 70px
    }
    html{
        font-size: 10px;
    }
    body{
        background-color: ${(props) => props.theme.theme === ThemeList.light
        ? 'var(--light-blue_1)'
        : 'var(--dark-blue_3)'};
        font-family: "Poppins", sans-serif;
    }
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    ul,li{
        list-style: none;
    }
    .container{
        max-width: 1200px;
        height: 100%;
        width: 90%;
        margin: 0 auto;
    }
    img,svg{
        width: 100%;
    }
`;

export default GlobalStyles;