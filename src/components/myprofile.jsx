import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cake.css';


class MyProfile extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        const {username,password,confirmPassword,email} = this.props;
        const firstName = 'ire';
        return (
            <div>
                <h2>My profile</h2>
                <div className="form-wrapper">
                    <form onSubmit={ (e) => this.props.handleSubmit(e, this.state,true)} >
                        <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input onChange={this.handleChange} type="text" name="email" id="email" placeholder="Enter e-mail" value={email} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={this.handleChange} type="text" name="username" id="username" placeholder="Enter username" value={username} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Enter password" value={password}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onChange={this.handleChange} type="password" name="confirmPassword" id="confirmPassword" placeholder="Enter your password again" value={confirmPassword}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.handleChange} type="text" name="firstName" id="firstName" placeholder="Enter firstName" value={firstName} />
                        </div>
                        <button type="submit">Register</button>

                        
                    </form>
                </div>
        
            </div>
            
        );
    }
}

export default MyProfile;
