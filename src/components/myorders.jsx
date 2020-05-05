import React from 'react';
import '../css/myorders.css';
import Loading from '../views/loading';
import OrderOne from './load-products-from-order';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

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
            <div className="myorders">
                <h2>My Orders</h2>
                <div className='important-info'>
                    <h4><FontAwesomeIcon icon={faExclamation} color="red" /> Legend of an order Status! <FontAwesomeIcon icon={faExclamation} color="red" /></h4>
                    <p><span>Pending</span> - order awaits approval - admin needs to check the availability of the items in your order</p>
                    <p><span>Cancelled</span> - order is cancelled - no availability of the items or problem with the order (contact us for details)</p>
                    <p><span>Approved</span> - order is approved - the approval means that we have all the products in your order and you can make 
                    the payment for your order and after it will be dispatched towards you</p>
                </div>
                    {
                        orders.map(order => (
                            <OrderOne key={order._id} {...order} />
                        ))
                    }      
            </div>           
        )
    }
}

export default MyOrders;
