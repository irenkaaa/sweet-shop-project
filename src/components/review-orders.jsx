import React from 'react';
import '../css/myorders.css';
import ReviewThisOrder from './review-this-order';

class ReviewOrders extends React.Component {
    
    render() {
        const {pendingOrders, ordersForReviewLoading } = this.props;
        

        if(!pendingOrders.length && !ordersForReviewLoading) {
          return (<div className='cart-empty'>No orders for review!</div>);
        }
        return (
            <div className="orders" >
                <h2>Orders</h2>
                <div onClick={(e) => this.props.getPendingOrders(e)}>
                
                    {
                        pendingOrders.map(order =>(
                            <ReviewThisOrder key={order._id} {...order}/>
                        ))
                    }
                    <button>Pending</button>

                </div>
            </div>           
        )
    }
}

export default ReviewOrders;

