import React,{useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import HeroSection from '../HeroSection'
import About from '../About'
import Marketing from '../Marketing'
import Comment from '../Comments'
import Blog from '../Blog'
const Home = () => {
    const [isOpen,setisOpen] = useState(false)
    const toggle = () => {
        setisOpen(!isOpen);
    }
    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
           <Navbar toggle={toggle} />
           <HeroSection />
           <About />
           <Marketing />
           <Comment />
           <Blog />
        </>
    )
}

export default Home
