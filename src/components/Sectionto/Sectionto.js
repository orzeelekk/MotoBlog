import React, {useEffect} from 'react';
import "./_sectionto.scss";

const Sectionto = () => {
    return (
        <>
            <section className="sectionto container">
                <div className="sectionto_elements">
                    <div className="button-to sectionto_1"><a href="Trip" className="button-to_text">WYPRAWY</a></div>
                    <div className="button-to sectionto_2"><a href="Map" className="button-to_text">MAPA</a></div>
                    <div className="button-to sectionto_3"><a className="button-to_text">WYDARZENIA</a></div>
                    <div className="button-to sectionto_4"><a className="button-to_text">PORADNIK</a></div>
                </div>
            </section>
        </>
    );
};

export default Sectionto;