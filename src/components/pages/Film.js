import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Films from "../Films";

import FILM_GDANSK from "../Assets/FILM_GDANSK.jpg"
import FILM_BUNKRY from "../Assets/FILM_BUNKRY.jpg"
import FILM_WEGRY from "../Assets/FILM_WEGRY.jpg"
import FILM_BIALA from "../Assets/FILM_BIALA.JPG"
import FILM_ZAKOPANE from "../Assets/FILM_ZAKOPANE.JPG"
import FILM_TCZEW from "../Assets/FILM_TCZEW.JPG"
import FILM_LUBLIN from "../Assets/FILM_LUBLIN.jpg"
import FILM_LESKO from "../Assets/FILM_LESKO.JPG"

const Film = () => {
    return (
        <div>
            <Header/>
            <section className="films container">
                <Films title={"Słowacja/Węgry 05.2022"} link={"https://youtu.be/JUZTT_6GJrM"} text={"Wyjazd na Węgry, po drodze spotkałem Adriana z kanału Motopodhale. Zwiedziłem między innymi takie miejsca jak Eger, Słowacki Raj jak i nasze Morskie Oko."} image={FILM_WEGRY}/>
                <Films title={"Wyjazd do Białej Podlaskiej 06.2020"} link="https://youtu.be/ye3xnsuUK-Y" text={"Wypad z Łukaszem na jego Derbi Terra 125. Przejazd przez jezioro Białe, Białą Podlaskę i camping nad Wiłą pod Puławami."} image={FILM_BIALA}/>
                <Films title={"Wyjazd do Zakopanego 06.2020"} link="https://youtu.be/alDD2hn4-ss" text={"Szybki 2 dniowy wyjazd do Zakopanego z chłopakami z Lublina, zwiedżanie okolic Zakopca."} image={FILM_ZAKOPANE}/>
                <Films title={"Offroad'owy wyjazd do Gdaśka 05.2020"} link="https://youtu.be/wcm88SMwu-c" text={"Wyjazd głównie w off'ie. Jechalem z Michałem na jego nowym bmw 850gs adv."} image={FILM_GDANSK}/>
                <Films title={"Offroad z grupa z grupą z Tczewa. 09.2019"} link="https://youtu.be/JQ3a1ZPf1I8" text={"Wyjazd dużą ekipą po okolicach Tczewa. Chłopaki i dziewczyny dobrze nakręceni na off'y :D."} image={FILM_TCZEW}/>
                <Films title={"Zlot Lesko 08.2019"} link="https://youtu.be/ImlcwK0InLI" text={"Jeden z pierwszych wyjazdów na zlot motocyklowy. Bardzo duża ilość fajnych wspomnień. Jechałem z Krystianem na jego Hondzie Cbf 600."} image={FILM_LESKO}/>
                <Films title={"Jazda wokół Lublina/Radawczyka 05.2019"} link="https://youtu.be/Uo6CiFwCUHY" text={"Spontaniczny wypad z Adamem i Łukaszkiem. Troche off'u głóœnie kręcenie sie wokół komina."} image={FILM_LUBLIN}/>
                <Films title={"Pierwszy wyjazd w off'ie. Zwiedzanie bunkrów z okolic Warszawy 04.2019"} link="https://youtu.be/ssLG1rosq5Y" text={"Pierwszy mój wyjazd w offroadzie a zarazem pierwszy wyjazd na którym połamałem conajmniej 4 elementy motorcykla. Dużo wywrotek dużo dobrych wspomnień."} image={FILM_BUNKRY}/>
            </section>
            <Footer/>
        </div>
    );
};

export default Film;