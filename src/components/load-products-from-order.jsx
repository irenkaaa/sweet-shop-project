import React from 'react';
import * as moment from 'moment';
import '../css/myorders.css';
import { get } from '../data/crud';

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

    render() {
        const { buttonIsActive,aOrderProductsList } = this.state;
        const { date,status, _id } = this.props;
        const formatDate = moment(date).format('DD MMMM YYYY');
        const formatDateToOrderNum = moment(date).format('HHMMSS');

        return (

            <div class="orderdetails">
                    <div className="info">
                        <p className="date">Date: <span>{formatDate}</span></p>
                        <p className="number">Order number: <span>{formatDateToOrderNum}</span></p>
                        <p className="status">Status: <span>{status}</span></p>
                    </div>
                    <div className='list' onClick={() => this.onClickChange(_id)}>
                        {
                            buttonIsActive ? 
                            (
                                <ul>
                                    {
                                        aOrderProductsList.map( l => (
                                            <li key={l._id}>{l.product[0].title} - {l.product[0].price}</li>
                                        ))
                                    } 
                                    <p>Total: money</p>
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
