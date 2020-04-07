import React from 'react';
import '../css/form.css';


class MyProfile extends React.Component {
    
    componentDidMount(){
       
    }
    render() {
        const {username,password,confirmPassword,email} = this.props;
        const firstName = 'ire';
        return (
            <div>
                
                <div className="form-wrapper">
                    <h2>My profile</h2>
                    <form onSubmit={ (e) => this.props.handleSubmit(e, this.state,true)} >
                        <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input onChange={this.handleChange} type="text" name="email" id="email"  value={email} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={this.handleChange} type="text" name="username" id="username" value={username} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password" value={password}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onChange={this.handleChange} type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.handleChange} type="text" name="firstName" id="firstName" value={firstName} />
                        </div>
                        <button type="submit">Update profile</button>

                        
                    </form>
                </div>
        
            </div>
            
        );
    }
}

export default MyProfile;
