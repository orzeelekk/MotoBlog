import React from 'react';
import "./_mapSection.scss";

const MapSection = () => {
    return (
        <>
            <section className="map">
                <div className="map_container container">
                    <div className="box map_info">
                        <ul className="map_list">
                            <h1 className="map_header">Mapka ciekawych miejsc z okolic:</h1>
                            <li>Warszawy</li>
                            <li>Lublina</li>
                            <li>Mazur</li>
                            <li>oraz punktow odwiedzonych na dłuższych trasach</li>
                            <p>Mapa jest na bieżąco aktualizowana. <br/>
                                Jeżeli macie jakieś ciekawe miejsca do podesłania prosze o kontakt na maila <a className="email" href="mailto:EMAILADDRESS">MotoBlog</a>.
                            </p>
                        </ul>
                    </div>
                </div>
            </section>
            <iframe className="mapSection" src="https://www.google.com/maps/d/embed?mid=14TaonPkOlJyziG2HBBmH6b8uaiaBaro&ehbc=2E312F"></iframe>

        </>
    );
};

export default MapSection;




