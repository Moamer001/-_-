// import React from "react";
// import NavBar from "../components/NavBar";

import Landing from '../components/home/Landing';
import Deps from '../components/home/Deps';
import Ads from '../components/home/Ads';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';
import NavBarHome from '../components/NavBarHome'


const HomePage = () => {

    return (
        <>
           <NavBarHome />
            <Landing/>
            <Deps/>
            <Ads/>
            <Contact/>
            <Footer/>

        </>
    )
}

export default HomePage;
