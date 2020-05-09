import React from 'react';
import * as moment from 'moment';
import '../css/cake.css';

class ReviewThisOrder extends React.Component {  
    
    render () {
        const {products,creator,date,_id} = this.props;
       
            return (
                
                <div className="cake-wrapper">
                    <p>Order <span>{_id}</span> from <span>{moment(date).format('DD MMMM YYYY')}</span></p>
                    <p>Made by user - <span>{creator}</span></p>
                    <ul>
                        <h3>Order contains:</h3>
                            {
                                products.map(pr =>(
                                <li key={pr._id}>{pr.product[0].title}</li>
                                ))
                            }
                    </ul>
                    <div>
                        <button onClick={(e)=> this.props.handleApproveOrder(e,_id)} >Approve order</button>    
                        <button onClick={(e)=> this.props.handleCancelOrder(e,_id)} >Cancel order</button>
                    </div>   
                </div> 
    
                
            );
        }
}

export default ReviewThisOrder;
