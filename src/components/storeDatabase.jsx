import React, { Fragment, Component } from 'react';
import SweetThing from './sweetThing';
import '../css/cake.css';
import Loading from './loading';


class StoreDatabase extends Component {
  state={
    sweets: [],
    isLoading: true,
    };
  

  async componentDidMount () {
    try {
      await fetch('http://localhost:5000/sweets/all')
      .then(rawData => rawData.json())
      .then(body => {
        this.setState({
          sweets: body,
          isLoading:false,
        });
      });
    } catch (error) {
      console.log(error);
    }

  }


  render() {
    const {sweets,isLoading} = this.state;

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
                    sweets.map(sweet => (
                          <SweetThing key={sweet._id} {...sweet} />
                      ))
                  }
              </div>
         
      </Fragment>
    )}
}

export default StoreDatabase;
