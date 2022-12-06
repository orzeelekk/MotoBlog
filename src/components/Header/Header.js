import React from 'react';
import "./_header.scss";
import "../General/_fonts.scss"

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="header_container container">
                <h1 className="header_logo">MotoBlog</h1>
                <ul className="header_navi">
                    <li><a href="index" className="header_navi_link">GLOWNA</a></li>
                    <li><a href="index" className="header_navi_link">FILMY</a></li>
                    <li><a href="index" className="header_navi_link">KRAJE</a></li>
                    <li><a href="index" className="header_navi_link">MAPA</a></li>
                    <li><a href="index" className="header_navi_link">O MNIE</a></li>
                </ul>
                <div className="header_socialmedia">
                    <a href="https://www.youtube.com/channel/UC4EcLfZbiW9GIQYlqPTSGGg"><img src="../Assets/youtube.svg" alt="Youtube"/></a>
                    <a href="#"><img src="../Assets/instagram.svg" alt="Instagram"/></a>
                </div>
            </div>
        </header>
            <div className="header_road">
                <div className="header_road_line"></div>
            </div>
        </>
    );
};

export default Header;