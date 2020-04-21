import React from 'react';
import * as moment from 'moment';
import '../css/cake.css';

class ReviewThisOrder extends React.Component {
    

    render () {
        const {products,creator,date,_id} = this.props;
       
            return (
                <div className="cake-wrapper" >
                   <div key={_id}>
                        <p>Order <span>{_id}</span> from <span>{moment(date).format('DD MMMM YYYY')}</span></p>
                        <p>Made by user - <span>{creator}</span></p>
                        <ul>
                        {products.map(pr =>(
                                <li>{pr.product[0].title}</li>
                            ))}
                        </ul>
                            
                    </div> 
                </div>
            );
        }
}

export default ReviewThisOrder;
