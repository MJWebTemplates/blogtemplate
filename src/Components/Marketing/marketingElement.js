import styled from 'styled-components';

export const MarketingSection = styled.div`
    background:#0f0824;
    padding-top:3rem;
    padding-bottom:5rem;
    color:#fff;
`
export const MarketingHeading = styled.h3`
    font-size:5rem;
    padding:2rem 5%;
    font-weigth:700;
`
export const MarketingWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:2rem;
    padding:1rem 5%;

    @media (max-width:768px){
        flex-direction:column;
        gap:5rem;
        margin-top:3rem;
    }
`
export const Img = styled.img`
    width:50%;max-width:50%;
`
export const MarketingContent = styled.div`
    h3{
        font-size:5rem;
        padding-bottom:2rem;
        font-weigth:600;
        line-height:4rem;
    }
    h5{
        color:grey;
        font-size:1.5rem;
        padding-bottom:1rem;
        font-weigth:500;
    }
    p{
        font-size:1.7rem;
        line-height:3rem;
        font-weigth:300;

        @media (max-width:991px){line-height:2.5rem}
    }
`