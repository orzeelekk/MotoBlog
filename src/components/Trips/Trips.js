import React from 'react';
import "./_trips.scss"

const Trips = ({title, image, text, country, link}) => {
    return (
        <>
            <div className="trips_box box">
                <a href={link} target={"_blank"} className="box_link">
                    <img className="box_image" src={image} alt="image" />
                    <h2 className="box_header">{title}</h2>
                    <p className="box_text">{text}</p>
                    <h2 className="box_header">Odwiedżone kraje:</h2>
                    <div className="box_country">{country}</div>
                </a>
            </div>
        </>
    );
};
// {headerItems.map((menu, index) => {
//     return <MenuItems items={menu} key={index} />;

export default Trips;