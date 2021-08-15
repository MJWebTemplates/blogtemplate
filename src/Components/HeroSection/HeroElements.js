import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
export const HeroMain = styled.div`
    background:#e2dbdb;
    padding-top:3rem;
    padding-bottom:3rem;
`
export const HeroWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    gap:2rem;
    padding:1rem 5%;
    margin-top:3rem;
    align-items:center;

    @media (max-width:768px){flex-direction:column}
`
export const Col = styled.div`
    flex:1 1 50%;
    max-width:100%;
`
export const TextWrap = styled.div`
    h4{
        color:#006;
        font-size:3rem;
        font-weight:600;
    }
    h3{
        color:#000;
        font-size:5rem;
        font-weight:700;
        padding:0;
        line-height:normal;
    }
    p{
        color:#1944ab;
        font-size:1.7rem;
        font-weight:300;
        line-height:3rem;
        padding-bottom:3rem;
    }
`
export const ButtonWrap = styled.div`
    width:100%;
    display:flex;
    gap:1rem;
`
export const LinkBtn = styled(LinkS)`
    color:#fff;
    background:${({primary}) => (primary ? '#F54748' : '#003')};
    padding:1rem 2rem;
    font-size:1.3rem;
    font-weight:500;
    border-radius:.5rem;
    cursor:pointer;

    &:hover{ 
        background:${({primary}) => (primary ? '#ea6364' : '#000')};
        color:#fff}
`