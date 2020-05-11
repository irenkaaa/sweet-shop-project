import React, { Component } from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';

class Payment extends Component {
    constructor(props){
        super(props);
        this.state={
          address: 'Sofia',
          selectedOptionGift: '',
          selectedOptionPayment: 'Card',
          emailPayPal : '',
          passwordPayPal: ''
        }
    
    
        this.handleChange = props.handleChange.bind(this);
        this.radioChangeGift = this.radioChangeGift.bind(this);
        this.radioChangePayment = this.radioChangePayment.bind(this);
    }

    radioChangeGift(e){
        this.setState({
            selectedOptionGift : e.currentTarget.value
        });
    }

    radioChangePayment(e){
        this.setState({
            selectedOptionPayment : e.currentTarget.value
        });
    }
    
        
    render() {
        const { emailPayPal, passwordPayPal, selectedOptionPayment } = this.state;
    
        return(
            <div className="form-wrapper">
                <h1>Payment Page</h1>
                <form>
                    <div className='form-group'>
                        <h3>Is this order a gift?</h3>
                        <input type="radio" value="Yes" checked={this.state.selectedOptionGift === "Yes"} onChange={this.radioChangeGift} />Yes
                        <input type="radio" value="No" checked={this.state.selectedOptionGift === "No"} onChange={this.radioChangeGift} />No
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Billing address</label>  
                        <select value={this.state.address} onChange={this.handleChange}>
                            <option value="Sofia">Sofia</option>
                            <option value="Plovdiv">Plovdiv</option>
                            <option value="Varna">Varna</option>
                            <option value="Burgas">Burgas</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <h3>Payment methods options:</h3>
                        <input type="radio" value="Card" checked={this.state.selectedOptionPayment === "Card"} onChange={this.radioChangePayment} />Card
                        <input type="radio" value="PayPal" checked={this.state.selectedOptionPayment === "PayPal"} onChange={this.radioChangePayment} />PayPal
                    </div>
                    {
                        selectedOptionPayment === 'Card' ?
                                (
                                    
                                    <div className="form-group">
                                        <input type="number" name="card-number" id="card-number" placeholder='Card Number' />
                                        <input type="text" name="card-date" id="card-date" placeholder='MM/YY' />
                                        <input type="number" name="cvc" id="cvc" placeholder='CVC' />
                                       
                                    </div>
                                )
                            :
                                (
                                    <div>
                                        <h3>Log in to your PayPal account:</h3>
                                    
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <input type="text" name="email" id="email" value={emailPayPal} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" name="password" id="password" value={passwordPayPal} />
                                        </div>
                                    </div>
                                )
                    }
                    <Link to='/not-working'>Complete Order</Link>            
                </form>
            </div>
        )
    }
}

export default Payment;
