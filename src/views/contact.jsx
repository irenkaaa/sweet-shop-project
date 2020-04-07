import React from 'react';
import '../css/contact.css';


const Contact = () => {
    return (
        <div className='contact'>
            <h2>Contact us</h2>
            <div className='address'>
                <p>Business Center Serdika</p>
                <p>Boulevard "Akademik Ivan Evstratiev Geshov " 2Е, 1330 g.k. Serdika, Sofia</p>
                <p className='phone'>
                    <p>Office phone number:</p>
                    <a href='#'>02 822 1115</a>
                </p>
                <h3>Working hours:</h3>
                <ul>
                    <li>Monday to Friday -> 8am - 18pm </li>
                    <li>Saturday -> 9am - 15pm </li>
                </ul>
            </div>
            
        </div>
    );
};


export default Contact;