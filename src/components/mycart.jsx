import React from 'react';
import '../css/form.css';
import Loading from '../views/loading';


class MyCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isLoading: true,
        };
    }
      
    
      async componentDidMount () {
        
        try {
          await fetch('http://localhost:5000/order/user')
          .then(rawData => rawData.json())
          .then(body => {
            this.setState({
              products: body,
              isLoading:false,
            });
          });
        } catch (error) {
          console.log(error);
        }
    
      }
    
    
      render() {
        const {products,isLoading} = this.props;
    
        if(isLoading) {
          return <Loading />;
        }
        if(!products.length && !isLoading) {
          return (<div>No products at this moment!</div>);
        }
    
        return (
           
          <div className="cakes">
          {
            
            products.map(product => (
                  <div>
                    <p>product.title</p>
                    <button type='select'></button>
                    <p>product.price</p>
                  </div>
            ))
          }
      </div>
            
        )
    }
}

export default MyCart;
