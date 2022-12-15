import React, { useState} from 'react';
import "./_chorwacja.scss";
import BLOG_1 from "../Assets/BLOG_1.jpg"

import { WeatherApi } from "./WeatherApi";

const Chorwacja = () => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <section className="blog">
            <div className="blog_container container">
                <div className="blog_header">
                    <div className="blog_header_text">
                        <h1 className="blog_header_header">Chorwacja 08.2022</h1>
                        <p className="blog_header_text">
                            Mój pierwszy długo wyczekiwany wyjazd do Chorwacji.
                            Na wyjazd pojechałem z Krzyśkiem (Honda CBR 1100 XX Blackbird). Był to również jego pierwszy wyjazd w tamte strony.
                            Na trasie mieliśmy dużo przygód międży innymi przygoty czystko techniczne w motocyklu Krzyśka.
                            Już drugiego dnia okazało się że jego motocykl zaczyna tracić ładowanie. Po trzecim dniu nie miał już go w ogóle.
                            Mimo trudności i zaradności Krzyśka przejechaliśmy całą trasę (tj. ~5000km), było warto.
                        </p>
                        <h1 className="blog_header_header">Kiedy najlepiej pojechać?</h1>
                        <p className="blog_header_text">
                            Lepiej unikać sezonu wakacyjnego zarówno ze względu na wysokie temperatury które niekoniecznie sprzyjają motocyklisom jak i bardzo dużą ilość turystów a co a tym idzie wyższe ceny za praktycznie wszystko.
                            W naszym terminie czyli środek sierpnia było wciąż upalnie i tłoczno. <br/><br/>
                            Aby nadać pewien punkt odniesienia poniżej zestawiłem aktualne temperatury w popularniejszych miastach Chorwacji:
                        </p>
                        <WeatherApi/>
                    </div>
                    <img className="blog_header_photo" src={BLOG_1}/>
                </div>

            </div>
        </section>
    );
};

export default Chorwacja;