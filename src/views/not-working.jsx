import React from 'react';
import Loading from './loading';

function NotWorking () {
    return (
        <div>
            <h2 style={{ textAlign:'center', marginTop:'3em'}}>Paying for Orders is still not Available!!!</h2>

            <Loading />
        </div>
    );
}


export default NotWorking;