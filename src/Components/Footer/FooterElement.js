import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const FooterSection = styled.div`
    background:#0f0824;
    padding-top:4rem;
    padding-bottom:5rem;
`
export const FooterWrap = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:flex-start;
    gap:2rem;
    padding:1rem 5%;

    @media (max-width:991px){display:grid;grid-template-columns: 1fr 1fr;}
    @media (max-width:480px){grid:none};}
`
export const FooterLogo = styled(LinkS)`
    width:100%;
    cursor:pointer;
`
export const Img =styled.img`
    width:60%;
    max-width:100%;
`
export const Col = styled.div`
    flex:1 1 16%;
    h3{
        color:#fff;
        font-size:2rem;
        font-weight:500;
        margin-bottom:3rem;
        padding:1rem 0;
    }
`
export const ContactInfo = styled.div`
    padding-bottom:2rem;
    span{
        display:flex;
        color:#fff;
        font-size:1.5rem;
        padding:1rem 0;
        gap:1rem;
        align-items:center;
    }
    svg{font-size:2rem;}
`
export const SocialIcon = styled.div`
    display:flex;
    gap:2rem;
`
export const ScocialLink = styled(LinkR)`
    color:#0f0824;
    width:3.6rem;
    height:3.6rem;
    font-size:1.8rem;
    text-align:center;
    background:#fff;
    padding:.3rem;
    cursor:pointer;

    &:hover{color:#F54748}
`
export const FooterMenu = styled.ul`
    list-style:none;
    display:grid;
`
export const FooterLink = styled(LinkS)`
    color:#fff;
    font-size:1.7rem;
    padding:.7rem 0;
    width:100px;
    cursor:pointer;
    svg{
        font-size:1.7rem;
    }
    &:hover{color:#f54748}
`
export const ImageBox = styled.div`
    width:100%;
    list-style:none;
    display:grid;
    gap:1rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width:991px){grid:none;display:flex;flex-wrap:wrap}
`
export const Form = styled.form`
    background:#fff;
    padding:1.5rem 1rem;

    @media (max-width:991px){padding:3rem;}
    @media (max-width:480px){width:90%;}
`
export const Input = styled.input`
    width:100%;
    min-height:35px;
    padding:0 1rem;
    font-weight:500;
    font-size:1.3rem;
    border:.1rem solid #b5b5b5;
    margin-bottom:1.6rem;

    &:active,
    &:focus{
        outline:none;color:#000;
    }
`
export const TextArea = styled.textarea`
    width:100%;
    min-height:62px;
    padding:0 1rem;
    font-weight:500;
    font-size:1.3rem;
    border:.1rem solid #b5b5b5;
    margin-bottom:1.6rem;
    &:active,
    &:focus{
        outline:none;color:#000;
    }
`
export const ButtonReply = styled.div`
    display:flex;
    justify-content:center;
`
export const LinkBtn = styled(LinkS)`
    background:#003;
    color:#fff;
    padding:.9rem 2rem;
    text-align:center;
    border-radius:.5rem;
    cursor:pointer;
    &:hover{
        color:#fff;background:#F54748;
    }
`
// Copy section start....
export const CopySection = styled.div`
    text-align:center;
    p{
        font-size:1.4rem;
        line-height:3rem;
        color:#212222;
        padding:1rem;
        font-weight:400;
    }
`
export const LinkCopy = styled(LinkS)`
    color:#212222;
    cursor:pointer;
    &:hover{color:red;}
`
