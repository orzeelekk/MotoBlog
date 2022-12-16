import React, {useState} from 'react';
import "./_opening.scss";


const Opening = () => {
    const [color, setColor1] = useState('orange');
    const [top1, setTop1] = useState(0)
    const [color2, setColor2] = useState('orange');
    const [top2, setTop2] = useState(0)

    const handleHover1 = (newColor1,newTop1) => {
        setColor1(newColor1);
        setTop1(newTop1)
    }
    const handleHover2 = (newColor2,newTop2) => {
        setColor2(newColor2);
        setTop2(newTop2)
    }

    return (
        <>
            <section className="opening">
                <div className="opening_container container">
                    <div className="opening_left">
                        <h1 className="opening_header">Krotko o mnie:</h1>
                        <h3 className="opening_text">
                            Swoja przygode motocyklowa zaczalem w 2018r.<br/>
                            Przedewszystkim interesuje się turystyką motocyklowa.<br/>
                            Jednak posiadajac supermoto z kompletem kół terenowych od czasu do czasu wpadam na jakiś offroad i intensywaniejsza jazde wokół komina. <br/>
                        </h3>
                        <h1 className="opening_header">
                            Aktualnie jestem posiadaczem dwóch motocykli:
                        </h1>
                        <button onMouseEnter={() => handleHover1( 'orangered',-15)}
                                onMouseLeave={() => handleHover1( 'orange',0)}
                                className="button-option">KTM'a 1190 Adventure R (2015)</button>
                        <button onMouseEnter={() => handleHover2('orangered',-15)}
                                onMouseLeave={() => handleHover2("orange",0)}
                                className="button-option">BMW G 650 Xmoto/~Xchallenge (2007)</button>
                        <a href="/AboutMe" className="opening_button-to button-to">WIECEJ O MNIE I MOTOCYKLACH</a>
                    </div>
                    <div className="opening_right">
                        <div style={{
                            top:top1,
                            borderColor:color
                        }} className="opening_photo ktm"></div>
                        <div style={{
                            top:top2,
                            borderColor:color2
                        }}  className="opening_photo bmw"></div>
                    </div>
                </div>
            </section>
            <div className="crouselto button-to" >Ostatnie z podróży</div>
        </>
    );
};

export default Opening;

// <p className="opening_text">
//     Zaczynałem w 2018r. od 125'tki Derbi Terra mając prawojazdy kat B.<br/>
//     Na tym niewielkim sprzęcie postanowilem pojechac na Woodstock (trasa z Warszawy do Kostrzyna nad Odra ~12h jazdy).<br/>
//     Mimo dlugiej dosyc meczacej trasy poczulem ze turystyka motocyklowa to wlasnie to.
//     Na festiwalu o 4 w nocy rozbijajac namiot obudzilem sasiadow campingowych ktorzy mimo poznej pory wstali pomogli mi powbijac sledzie i zaczeli wypytywac czym przyjechalem.
//     Mimo malej pojemnosci motocykla i braku prawka kat A szybko przyjeli mnie do swojej grupy i wprowadzili w swiat motocyklowy.
//     Po powrocie z Woodstocka szybko zrobilem prawojazdy kat A. Aktualnie jestem posiadaczem dwoch motocykli:
// </p>
