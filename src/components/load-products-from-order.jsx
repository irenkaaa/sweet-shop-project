import React from 'react';
import * as moment from 'moment';
import '../css/myorders.css';
import { get } from '../data/crud';
import { Link } from 'react-router-dom';

class OrderOne extends React.Component {
    state = {
        buttonIsActive: false,
        aOrderProductsList: '',
     }

     onClickChange(orderId){
        if (this.state.buttonIsActive) {
            this.setState({
                buttonIsActive:false,
                aOrderProductsList: '',
            });
        } else {
            get(`http://localhost:5000/orders/user/${orderId}`).then(result => {
                this.setState({
                    aOrderProductsList: result,
                    buttonIsActive: true
                })
            })
        }
        
     }

     totalSumForOrder(aOrderProductsList){
        let totalSumToBePaid=0;
         aOrderProductsList.forEach(el=>{
             totalSumToBePaid += el.product[0].fSum;
         })
         return totalSumToBePaid;
         
      }

    render() {
        const { buttonIsActive,aOrderProductsList } = this.state;
        const { date,status, _id } = this.props;
        const formatDate = moment(date).format('DD MMMM YYYY');
        const formatDateToOrderNum = moment(date).format('HHMMSS');

        return (

            <div className="orderdetails">
                <div className="info">
                    <p className="date">Date: <span>{formatDate}</span></p>
                    <p className="number">Order number: <span>{formatDateToOrderNum}</span></p>
                    <p className="status">Status: <span>{status}</span></p>
                    {
                        status === 'Approved' ? 
                            (<Link to={`/payment/${_id}`} className='payment-link'>Pay Order</Link>) 
                            :
                            (null)
                    }  
                    {
                        status === 'Cancelled' ? 
                            (<button onClick={(e)=> this.props.deleteCancelledOrder(e,_id)}>Delete</button>) 
                            :
                            (null)
                    }  
                </div>
                <div className='list' onClick={() => this.onClickChange(_id)}>
                    {
                        buttonIsActive ? 
                        (
                            <ul>
                                {
                                    aOrderProductsList.map( l => (
                                        <li key={l._id}>{l.product[0].data.title} - {l.product[0].quantity} { (l.product[0].quantity >=2) ? 'pieces':'piece'} with {l.product[0].data.price} for piece => sum: {l.product[0].fSum}</li>
                                    ))
                                } 
                                <p>Total: {this.totalSumForOrder(aOrderProductsList)}</p>
                                <button>Hide</button> 
                            </ul>
                        )
                        : 
                    
                        <button>Load more information</button>
                    }  
                </div>
            </div>
        )
    }
}

export default OrderOne;
