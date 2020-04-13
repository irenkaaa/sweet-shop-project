import React from 'react';
import '../css/mycart.css';
import Loading from '../views/loading';
import ProductInfo from './productInfo';


class MyCart extends React.Component {    
      render() {
        const {productsUserCart,isLoadingCart } = this.props;
    
        if(isLoadingCart) {
          return <Loading />;
        }
        if(!productsUserCart.length && !isLoadingCart) {
          return (<div>No products at this moment!</div>);
        }
    
        return (
          <div className="mycart">
            <h2>My Cart</h2>
            <form>
              <div className="group">    
                <label htmlFor="name">Name</label>
                <label htmlFor="article">Article</label>
                <label htmlFor="price">price</label>
                <label htmlFor="mediary-price">mediary price</label>
              </div> 
              
                {
                  productsUserCart.map(p => 
                    (
                      <ProductInfo key={p._id} {...p.products[0]} />
                    ))                 
                }

                <div className='total-price'>
                  <label htmlFor="total-price">Total:</label>
                  <input type="num" name="total-price" id="total-price" defaultValue="0" readOnly="readonly"/>
                </div>
                <button type="submit" name="finish-the-order" id="finish-the-order" >Finish the Order</button>

              
            </form>
          </div>           
        )
    }
}

export default MyCart;
