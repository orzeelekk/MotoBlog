import React from 'react';
import Header from "../Header";
import Opening from "../Opening";
import Carousel from "../Carousel";
import Sectionto from "../Sectionto";
import Footer from "../Footer";

const Home = () => {
    return (
        <div className="App">
            <Header/>
            <Opening/>
            <Carousel/>
            <Sectionto/>
            <Footer/>
        </div>
    );
};

export default Home;