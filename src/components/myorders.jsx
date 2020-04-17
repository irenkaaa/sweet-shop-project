import React from 'react';
import '../css/mycart.css';
import Loading from '../views/loading';


class MyOrders extends React.Component {    
      render() {
        const {orders, ordersLoading } = this.props;

        if(ordersLoading) {
          return <Loading />;
        }
        if(!orders.length && !ordersLoading) {
          return (<div className='cart-empty'>Your cart is empty!</div>);
        }
        return (
          <div className="mycart">
            <h2>My Orders</h2>
            <ul>
                {
                    orders.map(order => (
                        <li key={order._id}>
                            <p>{order.status}</p>
                            <p>{order.creator}</p>
                            <ol>
                                {
                                    order.products.map(pr => (
                                        <li>{pr.name}</li>
                                    ))
                                }
                            </ol>
                        </li>
                    ))
                }
            </ul>         
          </div>           
        )
    }
}

export default MyOrders;
