import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/order.css';

class AddToCart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      quantity: 1
    }
  }
  handleChangeQuantity(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  getSum(q,p){
    return Number(q)*Number(p);
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
        <form onSubmit={ (e) => this.props.addToCartSubmit(e, newData)}>
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
                <input onChange={this.handleChangeQuantity.bind(this)} type="num" name="quantity" id="quantity" placeholder="Enter quantity" value={quantity} />
            </div>
            
            <div className="form-group">
              <label htmlFor="sum">Sum</label>
              <input type="text" name="sum" id="sum" value={fSum} readOnly="readonly"/>
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

