import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/order.css';

class AddToCart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      quantity: '1'
    }


  this.handleChange = this.handleChange.bind(this);
  }

handleChange(event) {
  this.setState({quantity: event.target.value});
}
 
  getSum(q,p){
    if(q >= 10){
      return  (Number(q)*Number(p))*0.9;
    } else {
      return Number(q)*Number(p);
    }
  }

  render() {
    const url = this.props.match.params.id;
    const data = this.props.sweets.find(el => el._id === url);
    const { quantity  } = this.state;
    const fSum = this.getSum(quantity,data.price)
    const newData = {data, quantity,fSum}
    
    return (
      <div className="order-wrapper">
        <h2>Let us take your order and add it to your cart</h2>
        <form onSubmit={ (e) => this.props.addToCartSubmit(e, newData, this.props)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={data.title} readOnly="readonly"/>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="text" name="title" id="title" value={data.price} readOnly="readonly"/>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Enter quantity</label>  
              <select value={this.state.quantity} onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            <p className="additional-info">Orders for whole cake <span>10 or 12 pieces</span> will be <span>10%</span> less of the price</p>
            
            <div className="form-group">
              <label htmlFor="sum">Sum</label>
              <input type="text" name="sum" id="sum" value={fSum} readOnly="readonly"/>
              {(quantity>=10) ? <span>10% discount included</span> : null}
            </div>
            <button type="submit">Add to Cart</button>
            <p>All shown prices are in BGN - bulgarian leva</p>
        </form>
        <NavLink className='after-order' to="/store">Go to the Store</NavLink>
        <NavLink className='after-order' to="/mycart">Go to My cart</NavLink>
      </div>
    );
  }
}


export default AddToCart;

