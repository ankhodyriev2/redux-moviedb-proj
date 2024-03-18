import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"container"}>
                <div className={"header-wrapper"}>
                    <Link to={"/"}>Головна</Link>
                    <Link to={"/genres"}>Жанри</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;