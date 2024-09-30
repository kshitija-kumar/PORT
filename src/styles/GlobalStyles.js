import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* Global Reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        font-family: 'Poppins', sans-serif;
        background-color: #F2E7DC; 
        color: #4A3C3C; 
        line-height: 1.6;
        scroll-behavior: smooth;
    }

    /* Other styles... */
`;

export default GlobalStyles;
