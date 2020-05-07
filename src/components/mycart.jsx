import React from 'react';
import '../css/mycart.css';
import Loading from '../views/loading';
import ProductInfo from './productInfo';
import { Link } from 'react-router-dom';


class MyCart extends React.Component {  

  totalSum(cartProducts){
    let totalSum = 0;
    cartProducts.map(el => totalSum+=el.product[0].fSum)
    return totalSum;
  }

  render() {
    const {cartProducts,isLoadingCart } = this.props

    if(isLoadingCart) {
      return <Loading />;
    }

    if(!cartProducts.length && !isLoadingCart) {
      return (<div className='cart-empty'>Your cart is empty!</div>);
    }

    return (
      <div className="mycart">
        <h2>My Cart</h2>
        <form onSubmit={(e) => this.props.handleMyCartSubmit(e, cartProducts)}>
          <div className="group">
              <p>Name</p>
              <p>Quantity</p>
              <p>Price per 1 item</p>
              <p>Sum</p>
          </div>
            {
              cartProducts.map(item => 
                (
                  <ProductInfo key={item._id} {...item.product[0]} />
                ))                 
            }
          <div className='total-price'>
            <label htmlFor="total-price">Total:</label>
            <input type="num" name="total-price" id="total-price" value={this.totalSum(cartProducts)} readOnly="readonly"/>
          </div>
          <div className='buttons'>
            <Link className='after-order' to="/store">Go back for more</Link>  
            <button className='after-order' type='submit'>Finish the order</button>         
          </div>             
        </form>               
      </div>           
    )
  }
}

export default MyCart;
