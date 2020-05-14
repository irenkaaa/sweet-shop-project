import React, {  Component } from 'react';
import '../css/mycart.css';


class Users extends Component {

    render () {

        const { loadUsers } = this.props;
        return (
            <div>
                <h2 style={{ textAlign:'center', margin:'2em 0'}}>User List:</h2>
                
                    <div>
                        <ul>
                                {
                                    loadUsers.map( user => (
                                        <li key={user._id} style={{ paddingBottom:'1em'}}>
                                            {user.username} with id: {user._id} 
                                            {
                                                (user.roles == 'Admin') ? ( null ) : 
                                                (
                                                    <span style={{ paddingLeft:'1em'}}>
                                                        <button onClick={(e) => this.props.promoteUser(e, user._id)}>Promote to Admin</button>
                                                        <button onClick={(e) => this.props.deleteUser(e, user._id)} style={{ marginLeft:'1em'}} >Delete User</button>
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

