import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {
    HeroMain,
    HeroWrap,
    Col,
    TextWrap,
    ButtonWrap,
    LinkBtn
} from './HeroElements'
const HeroSection = () => {
    return (
        <>
            <HeroMain id='Home'>
                <HeroWrap>
                    <Col>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src="/images/slider_1.png"
                                    alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src="/images/slider_2.png"
                                    alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/slider_3.png"
                                    alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <TextWrap>
                            <h4>More Featured in</h4>
                            <h3>Jack Blogger</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                            <ButtonWrap>
                                <LinkBtn to='/Blog' primary='true'>Read More</LinkBtn>
                                <LinkBtn to='/'>Read More</LinkBtn>
                            </ButtonWrap>
                        </TextWrap>
                    </Col>
                </HeroWrap>
            </HeroMain>
        </>
    )
}

export default HeroSection
