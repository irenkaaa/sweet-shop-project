import React, { Fragment, Component } from 'react';
import SweetThing from './sweetThing';
import '../css/cake.css';
import Loading from '../views/loading';
import Details from './details-product-window';


class StoreDatabase extends Component {

  render() {
    const { sweets, isLoading, isAdmin } = this.props;

    if(isLoading) {
      return <Loading />;
    }
    if(!sweets.length && !isLoading) {
      return (<div>No Sweets at this moment!</div>);
    }

    return (
       
      <Fragment>
          <h2 className='sweets-page-h2'>All the sweets in one place</h2>
          
              <div className="cakes">
              {
                isAdmin ? 
                (
                  
                    sweets.map(sweet => (
                      <Details key={sweet._id} {...sweet} />
                    ))
                  
                )
                :
                (
                  
                    sweets.map(sweet => (
                      <SweetThing key={sweet._id} {...sweet} />
                    ))
                  
                )
              }

                  
              </div>
         
      </Fragment>
    )
  }
  }


export default StoreDatabase;
