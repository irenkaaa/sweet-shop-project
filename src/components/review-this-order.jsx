import React from 'react';
import * as moment from 'moment';
import '../css/cake.css';
import { post, get, remove } from '../data/crud';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ReviewThisOrder extends React.Component {
    
    state = {
        pendingOrders:''
    }
    
    handleOrderStatus(data){
        post(`http://localhost:5000/orders/approve/${data}`)
          .then(result => {
            if(result) {
                toast.success(`${result.message}`, {closeButton:false});
                get('http://localhost:5000/orders/pending')
                .then(res => {
                    this.setState({
                        pendingOrders: res
                    })
                });
            }
            else {
                toast.error(`${result.message}`, {closeButton:false});
            }
        })       
    }

    handleCancelOrder(data){
        post(`http://localhost:5000/orders/cancel/${data}`)
          .then(result => {
            if(result) {
                toast.success( `${result.message}`, {closeButton:false});
                get('http://localhost:5000/orders/pending')
                .then(res => {
                    this.setState({
                        pendingOrders: res
                    })
                });
            }
            else {
                toast.error(`${result.message}`, {closeButton:false});
            }
        })       
    }
    
    render () {
        const {products,creator,date,_id} = this.props;
       
            return (
                <div className="cake-wrapper">
                   <div onClick={()=> this.handleOrderStatus(_id)} onClick={()=> this.handleCancelOrder(_id)}>
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
                        <button>Approve order</button>    
                        <button>Cancel order</button>   
                    </div> 
                </div>
            );
        }
}

export default ReviewThisOrder;
