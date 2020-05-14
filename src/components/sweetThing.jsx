import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cake.css';

class SweetThing extends React.Component {
    render () {
        const {title,description,price,image,_id} = this.props;
       
            return (
                <div className="cake-wrapper" >
                    <h2>{title}</h2>
                    <div className='mini-wrapper'>
                        <img className="cake-image"  src={image}  alt="What the Wind Knows " />

                    </div>
                    <div className='text-wrapper'>
                        <p className="cake-description">{description}</p>
                        <p className="cake-price">{price} leva/piece</p>
                    </div>
                    <Link type='submit' to={`/order/${_id}`}>Order</Link>    
                </div>
            );
        }
}

export default SweetThing;
