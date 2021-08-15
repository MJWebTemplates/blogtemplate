import React from 'react'
import {AiFillProfile,AiFillHome,AiFillCustomerService,AiOutlineProfile} from 'react-icons/ai'
import {
    SidebarContainer,
    SidebarWrap,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarMenu
} from './SidebarElement'
const Sidebar = (props) => {
    return (
        <>
          <SidebarContainer isOpen={props.isOpen}>
              <SidebarWrap>
                  <Icon onClick={props.toggle}>
                      <CloseIcon />
                  </Icon>
                  <SidebarMenu>
                      <SidebarLink to='Home' onClick={props.toggle} offset={-60}><AiFillHome />Home</SidebarLink>
                      <SidebarLink to='/About' onClick={props.toggle} offset={-60}><AiFillProfile />About</SidebarLink>
                      <SidebarLink to='/Marketing' onClick={props.toggle} offset={-60}><AiFillCustomerService />Marketing</SidebarLink>
                      <SidebarLink to='/Comment' onClick={props.toggle} offset={-60}><AiFillProfile />Comment</SidebarLink>
                      <SidebarLink to='/Blog' onClick={props.toggle} offset={-60}><AiOutlineProfile />Blog</SidebarLink>
                  </SidebarMenu>
              </SidebarWrap>
          </SidebarContainer>  
        </>
    )
}

export default Sidebar
