import React from 'react';
import * as moment from 'moment';
import '../css/cake.css';
import { post } from '../data/crud';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ReviewThisOrder extends React.Component {
   
    state = {
        isPending: true,
    }
        
    
    handleOrderStatus(data){
        post(`http://localhost:5000/orders/approve/${data}`)
          .then(result => {
            if(result.success) {
                this.setState({isPending:false})
                toast.success(`${result.message}`, {closeButton:false});
            }
            else {
                toast.error(`${result.message}`, {closeButton:false});
            }
        })       
    }

    handleCancelOrder(data){
        post(`http://localhost:5000/orders/cancel/${data}`)
          .then(result => {
            if(result.success) {
                this.setState({isPending:false})
                toast.success( `${result.message}`, {closeButton:false});
            }
            else {
                toast.error(`${result.message}`, {closeButton:false});
            }
        })       
    }
    
    render () {
        const {products,creator,date,_id} = this.props;
        const { isPending } = this.state;
       
            return (
                
                <div>
                {
                    isPending ?
                    (
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
                                <button onClick={()=> this.handleOrderStatus(_id)} >Approve order</button>    
                                <button onClick={()=> this.handleCancelOrder(_id)}>Cancel order</button>
                            </div>   
                        </div> 
                    )
                    :
                    (
                       null
                    )

                }
                   
                </div>
            );
        }
}

export default ReviewThisOrder;
