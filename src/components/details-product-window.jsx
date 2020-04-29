import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cake.css';

class Details extends React.Component {
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
                        <p className="additional-info">Whole cake order info: 12 pieces - 70leva</p>
                    </div>
                    <Link type='submit' to={`/change/${_id}`}>Make a Change</Link>   
                </div>
            );
        }
}

export default Details;
