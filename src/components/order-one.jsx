import React from 'react';
import * as moment from 'moment';
import '../css/mycart.css';
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

        return (
            <div>
                <p>Date of the order -  {formatDate}</p>
                <p>Status - {status}</p>
                <div  onClick={() => this.onClickChange(_id)}>
                    {
                        buttonIsActive ? 
                        (
                            <ul>
                                {
                                    aOrderProductsList.map( l => (
                                        <li key={l._id}>{l.product[0].title} - {l.product[0].price}</li>
                                    ))
                                } 
                                <p>Total sum:</p>
                                <button>Hide the info</button> 
                            </ul>
                        )
                        : 
                    
                        <button>Load this order</button>
                    }  
                </div>                   
            </div>
        )
    }
}

export default OrderOne;
