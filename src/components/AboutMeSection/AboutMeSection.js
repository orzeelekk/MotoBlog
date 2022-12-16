import React, {useState} from 'react';
import "./_aboutMeSection.scss";
import { daneTechniczne } from "./daneTechniczne";
import DaneTechniczne from "./DaneTechniczne"


const AboutMeSection = () => {

    return (
        <>
        <section className="aboutme">
            <div className="aboutme_container container">
                <div className="box aboutme_info">
                    <h1 className="opening_header">Początki:</h1>
                    <p className="opening_text">
                        Zaczynałem w 2018r. od 125'tki Derbi Terra mając prawojazdy kat B.<br/>
                        Na tym niewielkim sprzęcie postanowilem pojechac na Woodstock (trasa z Warszawy do Kostrzyna nad Odra ~12h jazdy).<br/>
                        Mimo dlugiej dosyc meczacej trasy poczulem ze turystyka motocyklowa to wlasnie to.
                        Na festiwalu o 4 w nocy rozbijajac namiot obudzilem sasiadow campingowych ktorzy mimo poznej pory wstali podali mi piwo :D i pomogli rozbić namiot.
                        Mimo malej pojemnosci motocykla i braku prawka kat A szybko przyjeli mnie do swojej grupy i wprowadzili w swiat motocyklowy.
                        Po powrocie z Woodstocka szybko zrobilem prawojazdy kat A. Aktualnie jestem posiadaczem dwoch motocykli:
                    </p>
                    <h1 className="opening_header">Aktualnie:</h1>
                    <p className="opening_text">
                        Aktualnie głównie uprawiam turystykę motocyklową.<br/>
                        Jak wcześniej wspominałem posiadam dwa motocykle opisane poniżej. Posiadałem również BMW G 650 Gs Sertao, świetny motocykl jednak ze względu na moje wymiary (tj. 1.9m) musiłem zmienić sprzęt.
                    </p>
                </div>
            </div>
        </section>
        <div>
            <h1 className="opening_header">Dane techniczne:</h1>
            <ul className="menus">
                {daneTechniczne.map((menu, index) => {
                    return <DaneTechniczne items={menu} key={index} />;
                })}
            </ul>

        </div>
        </>
    );
};

export default AboutMeSection;

