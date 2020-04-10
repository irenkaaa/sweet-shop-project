import React from 'react';
import '../css/contact.css';


const Contact = () => {
    return (
        <div className='contact'>
            <h2>Contact us</h2>
            <div className='twodiv'>
                <div className='address'>
                    <p className='addbuilding'>Business Center Serdika</p>
                    <p>Boulevard "Akademik Ivan Evstratiev Geshov " 2Е, 1330 g.k. Serdika, Sofia</p>
                    
                    <h3>Working hours:</h3>
                    <ul>
                        <li>Monday to Friday -> 8am - 18pm </li>
                        <li>Saturday -> 9am - 15pm </li>
                    </ul>
                </div>
                <div className='address'>
                    <p className='phone'>
                        <span>Office phone number:</span>
                        <a href='#'>02 822 1115</a>
                    </p>
                    <p className='phone'>
                        <span>Main contact person - Ivana Ivanova:</span>
                        <a href='#'>00359 882 822 111</a>
                    </p>
                    <p className='phone'>
                        <span>Email:</span>
                        <a href='#'>sweetcakes@sweet.com</a>
                    </p>

                </div>
            </div>
        </div>
    );
};


export default Contact;