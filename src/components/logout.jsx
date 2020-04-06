import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('username');
        localStorage.removeItem('isAdmin');
    }
    render() {
        console.log(localStorage);
        return (    
            <Redirect to='/' />
        );
    }
}
            
export default Logout;