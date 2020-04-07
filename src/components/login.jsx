import React, { Component } from 'react';
import '../css/form.css';
import { Redirect } from 'react-router';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          password: '',
          email: ''
        };
        this.handleChange = props.handleChange.bind(this);
    
      }
    
      render() {
    
        const { email, password } = this.state;
    
        return (
            <div className="Login">
                <div className="form-wrapper">
                    <h1>Login</h1>
                    <form onSubmit={(e) => this.props.handleSubmit(e, this.state,false)}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input onChange={this.handleChange} type="text" name="email" id="email" placeholder="Enter e-mail" value={email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input  onChange={this.handleChange}  type="password" name="password" id="password" placeholder="Enter password" value={password}/>
                        </div>
                        <button type="submit">Login</button>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
