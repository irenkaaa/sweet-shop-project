import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cake.css';

const SweetThing = ({title,description,price,image,_id}) => {
    
    return (

        <div className="cake-wrapper">
            <h2>{title}</h2>
            <div className='mini-wrapper'>
                <img className="cake-image"  src={image}  alt="What the Wind Knows " />
                
            </div>
            <p className='text-wrapper'>
                <p className="cake-description">{description}</p>
                <p className="cake-price">{price} leva/piece</p>
                <p className="additional-info">Whole cake order info: 12 pieces - 70leva</p>
            </p>
            <Link type="submit" to={`/order/${_id}`}>Order</Link>
            
        </div>
        
    );
}

export default SweetThing;
