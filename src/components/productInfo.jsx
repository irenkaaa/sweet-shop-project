import React from 'react';
import '../css/mycart.css';

class ProductInfo extends React.Component {
    
    render () {
        const {title,price} = this.props;
       
            return (
                <div className="group">    
                    <input type="text" name="name" id="name" value={title} readOnly="readonly"/>
                    <input type="num" name="article" id="article" defaultValue="1"/>
                    <input type="num" name="price" id="price" value={price} readOnly="readonly"/>
                    <input type="num" name="mediary-price" id="mediary-price" defaultValue="mediary price" readOnly="readonly"/>
                </div> 
            );
        }
}

export default ProductInfo;
