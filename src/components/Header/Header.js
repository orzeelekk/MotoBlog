import React, {useState} from 'react';
import "./_header.scss";
import { headerItems } from './headerItems';

import youtube from "../Assets/youtube.svg"
import instagram from "../Assets/instagram.svg"
import motorcycle from "../Assets/motorcycle-solid.svg"

const Header = () => {
    const [animation,setAnimation] = useState("shake")
    const [animationDuration,setAnimationDuration] = useState("0.08s")
    const [animationDirection,setAnimationDirection] = useState("alternate-reverse")
    const [animationIterationCount,setAnimationIterationCount] = useState("infinite")

    const changeAnimation = (changeAnimation,changeAnimationDuration,changeAnimationDirection,
                             changeAnimationIterationCount) => {
        setAnimation(changeAnimation);
        setAnimationDuration(changeAnimationDuration);
        setAnimationDirection(changeAnimationDirection);
        setAnimationIterationCount(changeAnimationIterationCount);
    }

    return (
        <>
        <header className="header">
            <div className="header_container container">
                <div className="header_box">
                    <a href="/" className="header_logo logo">MotoBlog</a>
                    <img className="header_logo_motorcycle" src={motorcycle} alt="motorcycle"
                         style={{
                             animation:animation,
                             animationDuration:animationDuration,
                             animationDirection:animationDirection,
                             animationIterationCount:animationIterationCount,
                         }}
                    />
                </div>
                <ul className="header_navi">
                    {headerItems.map((menu, index) => {
                        return(
                            <li key={index}>
                                <a className="header_navi_link" href={menu.url}
                                   onMouseEnter={() => changeAnimation(menu.changeAnimation,"0.5s",
                                       "normal","1")}
                                   onMouseLeave={() => changeAnimation( "shake","0.08s",
                                       "alternate-reverse","infinite")}
                                >{menu.title}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="header_socialmedia">
                    <a href="https://www.youtube.com/channel/UC4EcLfZbiW9GIQYlqPTSGGg" target="_blank"><img src={youtube} alt="Youtube"/></a>
                    <a href="https://www.instagram.com/swiat_motocykli/" target="_blank"><img src={instagram} alt="Instagram"/></a>
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