import React,{useState,useEffect} from 'react'
import {FaBars ,FaCaretDown} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    ImgLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    DropdownMenu,
    DropdownLink,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
const Navbar = (props) => {
    const [scrollNav,setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 122){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };
    useEffect (() =>{
        window.addEventListener('scroll',changeNav)
    },[]);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'><ImgLogo src='/images/Logo-1.png' /></NavLogo>
                    <MobileIcon >
                        <FaBars onClick={props.toggle}  style={{cursor:'pointer'}}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavLinks to='Home' exact='true' spy={true} smooth={true} offset={-122} duration={500}>Home</NavLinks>
                        <NavLinks to='/About' exact='true' spy={true} smooth={true} offset={-122} duration={500}>About</NavLinks>
                        <NavLinks to='/Marketing' exact='true' spy={true} smooth={true} offset={-122} duration={500}>Marketing</NavLinks>
                        <NavLinks to='/Comment' exact='true' spy={true} smooth={true} offset={-122} duration={500}>Comment</NavLinks>
                        <NavLinks to='/Blog' exact='true' spy={true} smooth={true} offset={-122} duration={500}>Blog
                        <FaCaretDown />
                        <DropdownMenu className='dropdownMenu'>
                            <DropdownLink to='Home'>Marketing</DropdownLink>
                            <DropdownLink to='/'>Product Sub</DropdownLink>
                            <DropdownLink to='/'>News Today</DropdownLink>
                            <DropdownLink to='/'>Quiz</DropdownLink>
                        </DropdownMenu>
                        </NavLinks>
                        <NavBtn>
                            <NavBtnLink to='/'>Sing-in</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
