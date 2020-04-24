import React from 'react';
import '../css/myorders.css';
import ReviewThisOrder from './review-this-order';
import Loading from '../views/loading';

class ReviewOrders extends React.Component {
    
    render() {
        const {pendingOrders ,ordersForReviewLoading } = this.props;

        if(ordersForReviewLoading) {
            return <Loading />;
        }

        if(!pendingOrders.length && !ordersForReviewLoading) {
          return (<div className='cart-empty'>No orders for review!</div>);
        }
        return (
            <div className="myorders" >
                <h2>Orders</h2>
                    {
                        pendingOrders.map(order =>(
                            <ReviewThisOrder key={order._id} {...order}/>
                        ))
                    }
            </div>           
        )
    }
}

export default ReviewOrders;

