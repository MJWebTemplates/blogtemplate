import React from 'react'
import {
    CommentSection,
    CommentHeading,
    CommentWrap,
    Row,
    Img,
    Col,
    CHeading,
    PostDate,
    CommentText,
    ButtonReply,
    PHeading,
    BtnLink,
    BtnWrap,
    Input,TextArea,Form} from '../Comments/commentElement'
const Comment = () => {
    return (
        <>
            <CommentSection id="/Comment">
                <CommentHeading>Comment / 2</CommentHeading>
                <CommentWrap>
                    <Row>
                        <Img src='/images/c_1.png' alt='#' />
                        <Col>
                            <CHeading>Veninam</CHeading>
                            <PostDate>Posted: 06/06/2021</PostDate>
                            <CommentText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</CommentText>
                        </Col>
                        <ButtonReply to='/'>Reply</ButtonReply>
                    </Row>
                    <Row>
                        <Img src='/images/c_2.png' alt='#' />
                        <Col>
                            <CHeading>Veninam</CHeading>
                            <PostDate>Posted: 06/06/2021</PostDate>
                            <CommentText>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</CommentText>
                        </Col>
                        <ButtonReply to='/'>Reply</ButtonReply>
                    </Row>
                    <PHeading>POST : Your Comments</PHeading>
                    <Form>
                        <Input type='text' placeholder='Name' />
                        <Input type='text' placeholder='Email' />
                        <TextArea type='textarea' placeholder='Comment..' />
                        <BtnWrap>
                            <BtnLink to='/'>Send</BtnLink>
                        </BtnWrap>
                    </Form>
                </CommentWrap>
            </CommentSection>
        </>
    )
}

export default Comment
