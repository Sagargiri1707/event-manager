import React from 'react';
import '../App.css';
import HeaderCss from '../module.css/header.module.css'
function Header(props) {
    return (
        <div className={`${HeaderCss.header}`}>
            <h1 >
                Event manager App
            </h1>
        </div>
        
    );
}

export default Header;