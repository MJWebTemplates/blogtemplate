import styled from "styled-components";

export const BlogSection = styled.div`
    margin-top:7rem;
    padding-top:3rem;
    padding-bottom:5rem;
    background:#e2dbdb;
`
export const BlogHeading = styled.h4`
    font-size:5rem;
    color:#000;
    margin-bottom:5rem;
    font-weight:700;
    line-height:3rem;
    margin-left:5rem;
`
export const BlogWrap = styled.div`
    width:100%;
    padding:1rem 5%;
    gap:3rem;
    display:flex;
    position:relative;
    align-items:center;

    @media (max-width:875px){
        flex-direction:column;
    }
`
export const Col = styled.div`
    width:80%;

    @media (max-width:576px){width:90%}
`
export const Img = styled.img`
    width:100%;
    height:41vh;
`
export const BlogContent = styled.div`
    padding:4rem;;
    background:#fff;
    box-shadow:0 .5rem 2rem #000;
    position:relative;
    top:-1rem;
    h3{
        font-size:3rem;
        color:#141615;
        line-height:3rem;
        font-weight:600;
    }
    p{
        font-size:1.4rem;
        color:#212222;
        line-height:3rem;
        font-weight:300;
        .subtitle{
            font-weight:600;
            color:#79797a;
            font-size:1.5rem;
            margin-bottom:5rem;
        }
    }
`