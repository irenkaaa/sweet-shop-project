import React, {  Component } from 'react';
import '../css/mycart.css';


class Users extends Component {

    render () {

        const { loadUsers } = this.props;
        return (
            <div>
                <h2>User List:</h2>
                
                    <div>
                        <ul>
                                {
                                    loadUsers.map( user => (
                                        <li key={user._id}>
                                            {user.username} with id: {user._id} 
                                            {
                                                (user.roles === 'Admin') ? ( null ) : 
                                                (
                                                    <span>
                                                        <button onClick={(e) => this.props.promoteUser(e, user._id)}>Promote to Admin</button>
                                                        <button onClick={(e) => this.props.deleteUser(e, user._id)}>Delete User</button>
                                                    </span>
                                                )
                                            }
                                        </li>
                                    ))
                                } 

                        </ul>
                    </div>
            </div>
        );
    }
}

export default Users;

