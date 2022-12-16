import React from "react";

const Dropdown = ({ submenus,dropdown }) => {
    console.log(submenus)

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <ul key={index} className="menu-items">
                    <li>Typ silnika: {submenu.silnik}</li>
                    <li>Moc: {submenu.moc}</li>
                    <li>Moment obrotowy: {submenu.moment}</li>
                    <li>Waga na sucho: {submenu.waga_na_sucho}</li>
                    <li>Pojemność zbiornika paliwa: {submenu.zbiornik}</li>
                </ul>
            ))}
        </ul>
    );
};

export default Dropdown;

