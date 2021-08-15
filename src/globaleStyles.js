import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{font-size:62.5%;}
    @media (max-width:875px){html{font-size:55%}}
    @media (max-width:380px){html{font-size:55%}}
    a{
        text-decoration:none;
        transition:0.2s;
    }
    .sr-only{display:none}
`
export default GlobalStyle;