import React, { useState } from 'react'
import Footer from '../components/Footer'
import Graduation from '../components/Graduation'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection/>
            <Graduation/>
            {/* <InfoSection {...homeObjOne}/> */}
            {/* <InfoSection {...homeObjTwo }/>
            <InfoSection {...homeObjThree }/>
            <InfoSection {...homeObjFour }/> */}
            <Footer/>
        </>
    )
}

export default Home
