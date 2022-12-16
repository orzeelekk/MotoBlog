import Dropdown from './Dropdown';
import {useState} from "react";

const DaneTechniczne = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <button type="button" className={"button-option"}
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
            >
                {items.title}{" "}
            </button>
            <Dropdown submenus={items.submenu} dropdown={dropdown} />
            {/*<Dropdown dropdown={dropdown}/>*/}
        </>
    );
};

export default DaneTechniczne;