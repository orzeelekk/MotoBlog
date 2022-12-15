import React from 'react';
import "./_films.scss"



const Films = ({link, title, image, text}) => {
    return (
        <>
            <div className="films_box box">
                <a href={link} target={"_blank"} className="box_link">
                    <img className="box_image" src={image} alt="image" />
                    <h2 className="box_header">{title}</h2>
                    <p className="box_text">{text}</p>
                </a>
            </div>
        </>
    );
};

export default Films;