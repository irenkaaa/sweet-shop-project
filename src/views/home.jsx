import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

class Home extends Component {
    
    render() {
        return (
            <main>
                {
                    this.props.username ?
                        (
                            <div className="welcome-user-message">
                                <h1>Welcome, {this.props.username}!</h1>
                                <p>
                                    <Link to="/store">Check the Store</Link>
                                    <Link to="/myorders">View your orders</Link>
                                </p>
                            </div>
                        )
                        :
                        (
                            <div className="welcome-user-message">
                                <h1>Welcome to the Sweet shop!</h1>
                                <h3>Log in/Sign up in your profile so you can make your order</h3>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </div>
                        )
                }


                <div className='promotions'>
                    <p>Free Delivery above 50 leva!</p>
                    <p>Get 10% discount for orders above 200 leva!</p>
                    <p>5% discount for New Members!</p>
                </div>

                
            </main>
        );
    }
}

export default Home;
