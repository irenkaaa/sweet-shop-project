import React from 'react';
import { Link } from 'react-router-dom';
import '../css/order.css';

class Order extends React.Component {

  render() {
    const url = this.props.match.params.id;
    const data = this.props.sweets.find(el => el._id === url);
    const {isAdmin} = this.props;
    

    return (
      <div className="order-wrapper">
        <h2>Let us take your order and add it to your cart</h2>
        <form onSubmit={ (e) => this.props.handleSubmitOrder(e, data)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={data.title} readOnly="readonly"/>
            </div>
            <div className="form-group">
                <label htmlFor="price">price</label>
                <input type="text" name="title" id="title" value={data.price} readOnly="readonly"/>
            </div>
            <button type="submit">Add to Cart</button>
            
        </form>
        <Link className='after-order' to="/store">Go to the Store</Link>
        {
          isAdmin ?
          null
          :
          (<Link className='after-order' to="/mycart">Go to My cart</Link>)
        }
      </div>
    );
  }
}

  
 export default Order;