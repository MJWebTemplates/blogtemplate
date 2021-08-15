import React from 'react'
import {
    BlogSection,
    BlogHeading,
    BlogWrap,
    Col,
    Img,
    BlogContent
} from '../Blog/BlogElement'
const Blog = () => {
    return (
        <>
            <BlogSection id='/Blog'>
                <BlogHeading>Blog</BlogHeading>
                <BlogWrap>
                    <Col>
                        <Img src='/images/blog_1.png' alt="#"/>
                        <BlogContent>
                            <h3>Why do we use it</h3>
                            <p className='subtitle'>March 19 2021 READ</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making..</p>
                        </BlogContent>
                    </Col>
                    <Col>
                        <Img src='/images/blog_1.png' alt="#"/>
                        <BlogContent>
                            <h3>Why do we use it</h3>
                            <p className='subtitle'>March 19 2021 READ</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making..</p>
                        </BlogContent>
                    </Col>
                </BlogWrap>
            </BlogSection>
        </>
    )
}

export default Blog
