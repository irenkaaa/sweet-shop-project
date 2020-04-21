import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css';
import Logo from '../cake_logo.png';



class Header extends Component {
    render() {
        const {username,isAdmin} = this.props;
    return (
        <header>
            
                <nav className="navbar-menu">
                    <ul>
                        <li><NavLink to="/" className="active" aria-current="page">Home</NavLink></li>
                        <li><NavLink to="/store">Store</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        
                        {       
                            username ?

                                (
                                    <ul>
                                        {
                                            isAdmin ?
                                            (
                                                <ul>
                                                    <li><NavLink to="/create">Create</NavLink></li>
                                                    <li><NavLink to="/review-orders">Review orders</NavLink></li>
                                                </ul>
                                            )
                                            :
                                            (
                                                <li><NavLink to='/mycart'>My cart</NavLink></li>
                                            )
                                        }
                                        
                                        <li><NavLink to='/' onClick={(e) => this.props.logout(e, this.state)}>Logout</NavLink></li>
                                    </ul>
                                )
                                :
                                (
                                    <ul>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        <li><NavLink to="/register">Register</NavLink></li>
                                    </ul>
                                ) 
                	    }
                    
                    </ul>
                        
                    <span>
                        <img className='logo' src={Logo} alt='logo' />
                        <h1>Sweet Cakes by Irenka</h1>
                    </span>
                    
                
                </nav>
            
        </header>
    );
};
}

export default Header;