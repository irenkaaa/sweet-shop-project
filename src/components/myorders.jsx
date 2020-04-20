import React from 'react';
import '../css/mycart.css';
import Loading from '../views/loading';
import OrderOne from './order-one';

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
