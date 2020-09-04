import React from 'react';
import footerCss from '../module.css/footer.module.css'
function Footer(props) {
    return (
        <div className={`${footerCss.footer}`}>
            <p className={`${footerCss.paragraph}`}>Made with love by Sagar Giri</p>
            <p className={`${footerCss.paragraph}`}>Copyright 2020</p>
        </div>
    );
}

export default Footer;