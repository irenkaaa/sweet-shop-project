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
                                    {
                                        this.props.isAdmin ?
                                        (
                                            <Link to="/users">Check Users</Link>
                                        )
                                        :
                                        (
                                            <Link to="/myorders">View your orders</Link>
                                        )
                                    }
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
                    <a href='https://www.healthline.com/nutrition/7-health-benefits-dark-chocolate'>7 Proven Health Benefits of Dark Chocolate</a>
                    <a href='https://www.health.com/mind-body/the-reason-why-sweets-lift-your-spirits'>Why sweets lift your spirits</a>
                    <a href='https://www.mashed.com/102706/popular-cake-year-born/'>Most popular cake by the year of birth</a>
                </div>

                
            </main>
        );
    }
}

export default Home;
