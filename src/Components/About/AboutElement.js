import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

export const AboutSection = styled.div`
    padding-top:3rem;
    padding-bottom:5rem;
`
export const HeadingText = styled.h3`
    font-size:5rem;
    font-weight:700;
    line-height:2;
    margin-left:7rem;
    margin-bottom:3rem;
    span{
        color:#F54748;
        margin-left:1rem;
    }
`
export const AboutContainer = styled.div`
    display:flex;
    justify-content:center;
    padding:1rem 5%;
    flex-wrap:wrap;
    gap:3rem;
`
export const Row = styled.div`
    display:flex;
    justify-content:center;
    gap:3rem;

    @media (max-width:768px){
        flex-direction:column;
        width:100%;
        padding-left:5rem;
        padding-right:5rem;
        position:relative;
    }
`
export const BlogImg = styled.img`
    width:100%;
    max-width:100%;
`
export const BlogContent = styled.div`
    flex:1 1 50%;
`
export const BlogHeading = styled.h3`
    padding-top:3rem;
    color:#333;
    font-size:3.2rem;
    line-height:4rem;
    font-weight:600;

    @media (max-width:991px){font-size:2rem;padding:0}
    @media (max-width:380px){line-height:1.2rem}
`
export const BlogDate = styled.h5`
    color:#79797a;
    margin-top:2rem;
    margin-bottom:2rem;
    font-size:1.5rem;
    font-weight:500;

    @media (max-width:875px){margin:.3rem 0;padding:0}
`
export const BlogDesc = styled.p`
    color:#212222;
    font-size:1.7rem;
    line-height:3rem;
    font-weight:300;
`
export const LinkBtn = styled(LinkS)`
    color:#ff;
    backgrond:#000;
    font-size:1.7rem;
    font-weight:600;
    padding:1rem 2rem;
    cursor:pointer;
    border:none;
    border-radius:.5rem;

    &:hover{backgrond:#F54748;color:#fff}
`