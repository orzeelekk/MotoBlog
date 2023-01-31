import React from 'react';
import "./_aboutMeSection.scss";
import { daneTechniczne } from "./daneTechniczne";
import DaneTechniczne from "./DaneTechniczne"
import Form from "./Form";


const AboutMeSection = () => {

    return (
        <>
        <section className="aboutme">
            <div className="aboutme_container container">
                <div className="box aboutme_info">
                    <h1 className="opening_header">Początki:</h1>
                    <p className="opening_text">
                        Swoją motocyklową przygodę rozpocząłem w 2018r na 125'tce Derbi Terra mając prawojazdy kat B.<br/>
                        Na tym niewielkim sprzęcie postanowilem pojechac na Woodstock (trasa z Warszawy do Kostrzyna nad Odra ~12h jazdy).<br/>
                        Mimo meczacej trasy poczulem ze turystyka motocyklowa to wlasnie to.
                        Na festwial dotarłem o 4 w nocy. Poczas rozbijajania namiotu obudzilem sasiadow campingowych ktorzy mimo poznej pory wstali i pomogli rozbić namiot a następnie poczęstwoali mnie piwem.
                        Kolejnego dnia poznałem całą grupę motocyklową od sąsiadów z którymi szybko się zaprzyjazniłem.
                        Po powrocie z Woodstocka szybko zrobilem prawojazdy kat A. Aktualnie jestem posiadaczem dwoch motocykli:
                    </p>
                    <h1 className="opening_header">Aktualnie:</h1>
                    <p className="opening_text">
                        Aktualnie głównie uprawiam turystykę motocyklową i zaczynam jazdę torową.<br/>
                        Dane techniczne moich motocykli opisałem poniżej.
                    </p>
                </div>
            </div>
        </section>
        <div className="motoinfoo container">
                <h1 className="opening_header">Dane techniczne moich motocykli:</h1>
                <div className="motoinfo_box">
                    {daneTechniczne.map((menu, index) => {
                        return <DaneTechniczne items={menu} key={index} />;
                    })}
                </div>
            <Form/>
        </div>
        </>
    );
};

export default AboutMeSection;

