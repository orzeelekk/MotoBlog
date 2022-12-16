import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Chorwacja from "../Chorwacja/Chorwacja";
import Films from "../Films";
import FILM_WEGRY from "../Assets/FILM_WEGRY.jpg";

const TripChorwacja = () => {
    return (
        <div>
            <Header/>
            <Chorwacja/>
            <section className="films container">
                <Films title={"Dzień 1"} image={FILM_WEGRY}/>
                <Films title={"Dzień 2"} image={FILM_WEGRY}/>
                <Films title={"Dzień 3"} image={FILM_WEGRY}/>
                <Films title={"Dzień 4"} image={FILM_WEGRY}/>
                <Films title={"Dzień 5"} image={FILM_WEGRY}/>
                <Films title={"Dzień 6"} image={FILM_WEGRY}/>
                <Films title={"Dzień 7"} image={FILM_WEGRY}/>
                <Films title={"Dzień 8"} image={FILM_WEGRY}/>
                <Films title={"Dzień 10"} image={FILM_WEGRY}/>
                <Films title={"Dzień 11"} image={FILM_WEGRY}/>
                <Films title={"Dzień 12"} image={FILM_WEGRY}/>
                <Films title={"Dzień 13"} image={FILM_WEGRY}/>
            </section>
            <Footer/>
        </div>
    );
};

export default TripChorwacja;