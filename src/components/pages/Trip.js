import React, {useState} from 'react';
import "./_trip.scss"
import Header from "../Header";
import Footer from "../Footer";
import Trips from "../Trips"
import { contryItems } from "./countryItems";

import TRIP_CHORWACJA from "../Assets/TRIP_CHORWACJA.jpg"
import TRIP_WLOCHY from "../Assets/TRIP_WLOCHY.jpg"
import TRIP_WEGRY from "../Assets/TRIP_WEGRY.jpg"

const Dropdown = ({ dropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {contryItems.map((submenu, index) => (
                <li key={index} >
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};

const Trip = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div>
            <Header/>
            <section className="trips">
                <div className="trips_container container">
                    <h2 className="trips_header">BLOGI WYPRAW MOTOCYKLOWYCH</h2>
                    <div className="trips_main">
                        <div className="trips_main_boxes">
                            <Trips className="trips_one" title={"Chorwacja 08.2022"} link={"/Chorwacja"} text={"Dwutygodniowy wyjazd do Chorwacji, gdzie dodatkowo zwiedzilismy takie kraje jak Albania i Czarnogora."} image={TRIP_CHORWACJA} country={"Polska, Czechy, Węgry, Austria, Słowacja, Chorwacja, Bośnia i Hercegowina, Czarnogóra, Albania"}/>
                            <Trips className="trips_one" title={"Węgry 05.2022"} link={"/"} text={"Wyjazd do Wegier, spotkanie Adriana z Motopodhaleinfo, Eger, Słowacki Raj."} image={TRIP_WEGRY} country={"Polska, Słowacja, Węgry"}/>
                            <Trips className="trips_one" title={"Bari Włochy 04.2022"} link={"/"} text={"Skuterowanie na Kymco 125 przez Bari, Matere i okolice."} image={TRIP_WLOCHY} country={"Włochy"}/>
                        </div>
                        <div className="trips_main_country">
                            <button type="button" className={"button-option trip_button"}
                                    aria-expanded={dropdown ? "true" : "false"}
                                    onClick={() => setDropdown((prev) => !prev)}
                            >
                                KRAJE:
                            </button>
                            <Dropdown dropdown={dropdown}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Trip;