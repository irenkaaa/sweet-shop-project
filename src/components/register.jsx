import React, { Component } from 'react';
import '../css/form.css';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.handleChange = props.handleChange.bind(this);
  }

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      
        <div className="form-wrapper">
          <h1>Register</h1>
          <form onSubmit={ (e) => this.props.handleSubmit(e, this.state,true,this.props)} >
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
            <button type="submit">Register</button>

            
          </form>
        </div>
      


    );
  }
}

export default Register;
