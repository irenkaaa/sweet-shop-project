import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/register';
import Login from './components/login';
import Create from './components/create';
import StoreDatabase from './components/storeDatabase';


import NotFound from './views/not-found';
import Home from './views/home';
import Contact from './views/contact';
import getAuthHeader from './data/crud';
import MyCart from './components/mycart';
import Order from './components/order-window';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      isAdmin: '',
      sweets:[],
      orders: [],
      isLoading: true,
      isLoadingCart: true
    };
  }

  componentDidMount() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if(localStorage.getItem('username')) {
      this.setState({
        username: localStorage.getItem('username'),
        isAdmin: isAdmin
      });
    }
    const authHeader = getAuthHeader;

    fetch('http://localhost:5000/sweets/all')
      .then(rawData => rawData.json())
      .then(body => {
        this.setState({
          sweets: body,
          isLoading:false,
        });
      })
      .then(
        fetch('http://localhost:5000/orders/user',{
        method: 'get',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          ...authHeader
        },
      })
        .then(rawData => rawData.json())
        .then(body => 
          this.setState({
            orders: body,
            isLoadingCart: false
          })
        ));
      
    }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit(e,data,isSign) {
    e.preventDefault();
     fetch('http://localhost:5000/auth/' + (isSign ? 'signup' : 'login'),{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: Object.keys(data).length ? JSON.stringify(data) : undefined,
      })
      .then(rawData => rawData.json())
      .then(responseBody => {
        
        if(responseBody.user) {
          
          this.setState({
            username: responseBody.user.username,
            isAdmin: responseBody.user.isAdmin,
          });

          localStorage.setItem('username', responseBody.user.username);
          localStorage.setItem('isAdmin', responseBody.user.isAdmin);
          localStorage.setItem('token', responseBody.token);
          
          toast.success(`Welcome, ${responseBody.user.username}`, {closeButton:false});
        }
        else {
          toast.error(`${responseBody.message}`, {closeButton:false});
        }
      });
    }      

   handleSubmitCreate(e,data) {

    e.preventDefault();
    const authHeader = getAuthHeader;
    fetch ('http://localhost:5000/sweets/create', {
        method: 'post',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          ...authHeader
        },
        body: Object.keys(data).length ? JSON.stringify(data) : undefined,
      }).then(rawData => rawData.json())
        .then(responseBody => {
          if(!responseBody.error) {
            toast.success(`${responseBody.message}`, {closeButton:false});
          }
          else {
            toast.error(`${responseBody.message}`, {closeButton:false});
          }
        });
  }


   logout(e) {
    try {
      e.preventDefault();
      localStorage.removeItem('username');
      localStorage.removeItem('isAdmin');      
      localStorage.removeItem('token');
       
      this.setState({
        username: '',
        isAdmin: '',
      });   
      toast.success(`Successful, logout`, {closeButton:false});   
    } catch (error) {
      toast.error(`Smth is wrong`, {closeButton:false});
    }    
  }

  handleMyCartSubmit(e,data) {
    e.preventDefault();
    const authHeader = getAuthHeader;
    fetch ('http://localhost:5000/orders/submit', {
        method: 'post',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          ...authHeader
        },
        body: Object.keys(data).length ? JSON.stringify(data) : undefined,
      }).then(rawData => rawData.json())
        .then(responseBody => {
         
          if(!responseBody.error) {
            toast.success(`${responseBody.message}`, {closeButton:false});
          }
          else {
            toast.error(`${responseBody.message}`, {closeButton:false});
          }
        });  
  }

  async handleAddToCartSubmit(e,data){
    e.preventDefault();
    const authHeader = getAuthHeader;
    fetch ('http://localhost:5000/orders/submit', {
        method: 'post',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json',
          ...authHeader
        },
        body: Object.keys(data).length ? JSON.stringify(data) : undefined,
      }).then(rawData => rawData.json())
        .then(responseBody => { 
          const cakeId = data._id;
          
          if(!responseBody.error) {
            toast.success(`${responseBody.message}`, {closeButton:false});
          }
          else {
            toast.error(`${responseBody.message}`, {closeButton:false});
          }
        })
        .then(
          fetch('http://localhost:5000/orders/user',{
          method: 'get',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json',
            ...authHeader
          },
        })
          .then(rawData => rawData.json())
          .then(body => 
            this.setState({
              orders: body,
            })
          ));
  }

  render () {
    return (
      <div className="App">
      
        <Router>
            <Fragment>
                <ToastContainer />
                  <Header 
                    username={this.state.username} 
                    isAdmin={this.state.isAdmin} 
                    logout={this.logout.bind(this)}
                  />  

                  <Switch>

                    <Route 
                      path='/'
                      exact
                      render= {
                      (props) =>
                      <Home
                        {...props}
                        username={this.state.username}
                        sweets={this.state.sweets}
                    />}/>

                    <Route
                      path='/register' 
                        render= {
                        (props) => 
                        <Register 
                          {...props}
                          handleSubmit={this.handleSubmit.bind(this)}
                          handleChange={this.handleChange} 
                    />}/>

                    <Route
                      path='/login' 
                        render= {
                        (props) => 
                        <Login 
                          {...props}
                          handleSubmit={this.handleSubmit.bind(this)}
                          handleChange={this.handleChange} 
                    />}/>

                    <Route
                      path='/order/:id' 
                        render= {
                        (props) => 
                        this.state.username ? 
                          <Order 
                            {...props}
                            sweets={this.state.sweets}
                            orders={this.state.orders}
                            isAdmin={this.state.isAdmin}
                            handleChange={this.handleChange.bind(this)}
                            handleAddToCartSubmit={this.handleAddToCartSubmit.bind(this)}
                          />
                          :
                          <Redirect
                        to= {{
                          pathname:'/login'
                        }}
                        />
                      }
                    />
                    
                    <Route 
                      render= {
                        (props) =>
                        this.state.isAdmin ? 
                      <Create 
                        {...props}
                        handleSubmitCreate={this.handleSubmitCreate.bind(this)} 
                        handleChange={this.handleChange} 
                      /> 
                      : 
                      <Redirect
                        to= {{
                          pathname:'/login'
                        }}
                        />
                      } 
                      path='/create' 
                    />

                    <Route
                      path='/store' 
                        render= {
                        (props) => 
                        <StoreDatabase 
                          {...props}
                          sweets={this.state.sweets} 
                          isLoading={this.state.isLoading}
                    />}/>


                    <Route 
                      path='/mycart'
                      render= {
                      (props) =>
                      this.state.username ?
                      <MyCart
                        {...props}
                        username={this.state.username}
                        orders={this.state.orders}
                        isLoadingCart={this.state.isLoadingCart}
                        />
                          :
                          <Redirect
                        to= {{
                          pathname:'/login'
                        }}
                        />
                      }
                    />

                    <Route 
                      path='/finishOrder'
                      render= {
                      (props) =>
                      this.state.username ?
                      <MyCart
                        {...props}
                        username={this.state.username}
                        orders={this.state.orders}
                        isLoadingCart={this.state.isLoadingCart}
                        handleMyCartSubmit={this.handleMyCartSubmit.bind(this)}
                        />
                          :
                          <Redirect
                        to= {{
                          pathname:'/login'
                        }}
                        />
                      }
                    />

                    <Route path='/contact' component={Contact} />
                    <Route component={NotFound} />
                  </Switch>
                  <Footer />
            </Fragment>
          </Router>
      
      </div>
    );
  }
}

export default App;
