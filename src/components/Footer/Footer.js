import React from 'react';
import "./_footer.scss"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer_container container">
                    <div className="footer_info">
                        <div className="footer_info_left">
                            <a href="/" className="footer_logo logo">MotoBlog</a>
                            <a className="email" href="mailto:EMAILADDRESS">kontakt: MotoBlog@gmail.com</a>
                        </div>
                        <span className="footer_copy"> © 2022 MotoBlog, All Rights Reserved</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;