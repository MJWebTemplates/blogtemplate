import React from 'react'
import {
    AboutSection,
    AboutContainer,
    HeadingText,
    Row,
    BlogContent,
    BlogDate,
    BlogDesc,
    BlogHeading,
    BlogImg
} from './AboutElement'
const About = () => {
    return (
        <>
           <AboutSection id='/About'>
                <HeadingText>About<span>Us</span></HeadingText>
                <AboutContainer>
                    <Row>
                        <BlogContent>
                            <BlogImg src='/images/blog1.png' />
                        </BlogContent>
                        <BlogContent>
                            <BlogHeading>The biggest and most awesome camera of year</BlogHeading>
                            <BlogDate>MAY 14 2021 5 READ</BlogDate>
                            <BlogDesc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</BlogDesc>
                        </BlogContent>
                    </Row>
                    <Row>
                        <BlogContent>
                            <BlogImg src='/images/blog2.png' />
                        </BlogContent>
                        <BlogContent>
                            <BlogHeading>The biggest and most awesome camera of year</BlogHeading>
                            <BlogDate>MAY 25 2021 5 READ</BlogDate>
                            <BlogDesc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</BlogDesc>
                        </BlogContent>
                    </Row>
                </AboutContainer>
           </AboutSection> 
        </>
    )
}

export default About
