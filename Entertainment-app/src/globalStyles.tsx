import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img{
        display: block;
    }
    svg{
        display: block;
    }
    body{
        min-height: 100vh;
        font-family: 'Outfit';
        font-weight: 300;
        background-color: rgb(16, 20, 30);

        &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
    }
`;

export default GlobalStyles;
