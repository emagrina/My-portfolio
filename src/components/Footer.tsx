import React from 'react';

const Footer = () => {
    return (
        <footer
            className="footer footer-center p-4 bg-base-300 text-base-content"
            style={{position: 'absolute', bottom: 0, width: '100%', height: '40px'}}
        >
            <div>
                <p>The website is under development ⚙️</p>
            </div>
        </footer>
    );
};

export default Footer;
