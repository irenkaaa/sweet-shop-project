import React from 'react';
import '../css/footer.css';

const Footer = () => (
    <footer id="footer" className="page-footer mt-4">
        © Irena's Sweet Shop {new Date().getFullYear()}
    </footer>
);

export default Footer;