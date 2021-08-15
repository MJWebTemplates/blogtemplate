import React from 'react'
import {FaFacebookF,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'
import {MdEmail,MdLocationOn,MdLocalPhone,MdChevronRight} from 'react-icons/md';
import {
    FooterSection,
    FooterWrap,
    FooterLogo,
    Col,Img,ContactInfo,FooterLink,FooterMenu,SocialIcon,
    ScocialLink,ButtonReply,LinkBtn,ImageBox,Input,TextArea,CopySection,LinkCopy,Form} from '../Footer/FooterElement'
const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterWrap>
                    <Col>
                        <FooterLogo to='/'>
                            <Img src='/images/Logo-1.png' alt="#" />
                        </FooterLogo>

                        <ContactInfo>
                            <span><MdLocationOn />London 145 United Kingdom</span>
                            <span><MdLocalPhone />987 654 3210 <br />987 654 3210</span>
                            <span><MdEmail />abc@gmail.com</span>
                        </ContactInfo>

                        <SocialIcon>
                            <ScocialLink to='/'><FaFacebookF /></ScocialLink>
                            <ScocialLink to='/'><FaInstagram /></ScocialLink>
                            <ScocialLink to='/'><FaTwitter /></ScocialLink>
                            <ScocialLink to='/'><FaYoutube /></ScocialLink>
                        </SocialIcon>
                    </Col>

                    <Col>
                        <h3>Quick Link</h3>
                        <FooterMenu>
                            <FooterLink to='Home'><MdChevronRight />Home</FooterLink>
                            <FooterLink to='/'><MdChevronRight />Service</FooterLink>
                            <FooterLink to='/'><MdChevronRight />About</FooterLink>
                            <FooterLink to='/'><MdChevronRight />Marketing</FooterLink>
                            <FooterLink to='/'><MdChevronRight />Blog</FooterLink>
                            <FooterLink to='/'><MdChevronRight />Contact</FooterLink>
                        </FooterMenu>
                    </Col>

                    <Col>
                        <h3>Instagram</h3>
                        <ImageBox>
                            <img src='/images/footer_blog.png' alt='#' />
                            <img src='/images/footer_blog.png' alt='#' />
                            <img src='/images/footer_blog.png' alt='#' />
                            <img src='/images/footer_blog.png' alt='#' />
                        </ImageBox>
                    </Col>

                    <Col>
                        <h3>Contact Us</h3>
                        <Form>
                            <Input type='text' placeholder='Name' />
                            <Input type='text' placeholder='Email' />
                            <TextArea type='textarea' placeholder='Massages' />
                            <ButtonReply><LinkBtn to='/'>Send</LinkBtn></ButtonReply>
                        </Form>
                    </Col>
                </FooterWrap>
            </FooterSection>
            <CopySection>
                <p>Copyright © 2021 Design by <LinkCopy to='/'> React Blog Templates</LinkCopy></p>
            </CopySection>
        </>
    )
}

export default Footer
