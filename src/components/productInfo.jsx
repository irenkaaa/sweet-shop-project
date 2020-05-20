import React from 'react';
import '../css/mycart.css';

class ProductInfo extends React.Component {
    
    render () {
        const {title,price} = this.props.product[0].data;
        const {quantity, fSum} = this.props.product[0];
       
            return (
                <div className="group">    
                    <input type="text" name="name" id="name" value={title} readOnly="readonly"/>
                    <input type="num" name="quantity" id="quantity" value={quantity} readOnly='readonly'/>
                    <input type="num" name="price" id="price" value={price} readOnly="readonly"/>
                    <input type="num" name="mediary-price" id="mediary-price" value={fSum} readOnly="readonly"/>
                    <button onClick={(e)=> this.props.deleteCartProduct(e,this.props._id)}>Remove product</button>
                </div> 
            );
        }
}

export default ProductInfo;
