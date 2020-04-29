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

import {get,post,remove, put} from './data/crud';

import NotFound from './views/not-found';
import Home from './views/home';
import Contact from './views/contact';
import MyCart from './components/mycart';
import Order from './components/order-window';
import MyOrders from './components/myorders';
import ReviewOrders from './components/review-orders';
import Change from './components/change-window';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      isAdmin: '',
      sweets:[],
      orders: [],
      cartProducts: [],
      isLoading: true,
      isLoadingCart: true,
      ordersLoading: true,
      ordersForReviewLoading: true,
      pendingOrders: [],
    };
  }

   componentDidMount() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if(localStorage.getItem('username')) {
      this.setState({
        username: localStorage.getItem('username'),
        isAdmin: isAdmin, 
      });
    }

    if(isAdmin){
      get('http://localhost:5000/orders/pending')
      .then(result => {
        if(result){
          this.setState({
            ordersForReviewLoading : false,
            pendingOrders: result
          })
        } else {
          this.setState({
            ordersForReviewLoading: true
          })
        }
      })
    } else {
      get('http://localhost:5000/carts/userCart').then(resBody => {
        this.setState({
          cartProducts: resBody,
          isLoadingCart: false
        })
        get('http://localhost:5000/orders/user').then(resBody => {
          this.setState({
            orders: resBody,
            ordersLoading: false
          })
        });
      });
    }

    get('http://localhost:5000/sweets/all').then(resBody => {
      this.setState({
        sweets: resBody,
        isLoading:false,
      });
    });
        
   }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit(e,data,isSign) {
    e.preventDefault();
     post('http://localhost:5000/auth/' + (isSign ? 'signup' : 'login'),data).then(responseBody => {
        if(responseBody.user) { 
          this.setState({
            username: responseBody.user.username,
            isAdmin: responseBody.user.isAdmin,
          });

          localStorage.setItem('username', responseBody.user.username);
          localStorage.setItem('isAdmin', responseBody.user.isAdmin);
          localStorage.setItem('token', responseBody.token);
          toast.success(`Welcome, ${responseBody.user.username}`, {closeButton:false});
          get('http://localhost:5000/orders/user').then(resBody => {
          this.setState({
            orders: resBody,
            ordersLoading: false
          })
        });
        }
        else {
          toast.error(`${responseBody.message}`, {closeButton:false});
        }
      })
    }   

  handleSubmitCreate(e,data) {
    e.preventDefault();
    post('http://localhost:5000/sweets/create', data).then(resBody => {
      if(!resBody.error) {
        toast.success(`${resBody.message}`, {closeButton:false});
        this.setState({isLoading:true})
        get('http://localhost:5000/sweets/all').then(resBody => {
        this.setState({
          sweets: resBody,
          isLoading:false,  
        });
    });
      }
      else {
        toast.error(`${resBody.message}`, {closeButton:false});
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
    post('http://localhost:5000/orders/submit',data)
    .then(responseBody => {
      if(!responseBody.error) {
        toast.success(`${responseBody.message}`, {closeButton:false});
        this.setState({
          orders: responseBody.data,
          cartProducts: [],
        });
        remove('http://localhost:5000/carts/userCart');
      }
      else {
        toast.error(`${responseBody.message}`, {closeButton:false});
      }
    }).then(()=>{
      get('http://localhost:5000/orders/user').then(resBody => {
        this.setState({
          orders: resBody,
          ordersLoading: false
        })
      });
    });  
  }


  addToCartSubmit(e,data) {
    e.preventDefault();
    post('http://localhost:5000/carts/add',data)
    .then(responseBody => { 
      if(!responseBody.error) {
        toast.success(`${responseBody.message}`, {closeButton:false});
        get('http://localhost:5000/carts/userCart').then(resBody => {
          this.setState({
            cartProducts: resBody,
            isLoadingCart: false
          })
        })
      }
      else {
        toast.error(`${responseBody.message}`, {closeButton:false});
      }
    });
  }

  handleChangeOfProduct(e,word,id) {
    e.preventDefault();
    if (word === 'edit') {
      post(`http://localhost:5000/sweets/${word}/${id}`)
      .then(responseBody => { 
        if(responseBody) {
          toast.success(`${responseBody.message}`, {closeButton:false});
        } else {
          toast.error(`${responseBody.message}`, {closeButton:false});
        }
      });
    } else if (word === 'delete') {
      remove(`http://localhost:5000/sweets/${word}/${id}`)
      .then(responseBody => { 
        this.setState({isLoading:true});
        if(responseBody) {
          toast.success(`${responseBody.message}`, {closeButton:false});
          get('http://localhost:5000/sweets/all').then(resBody => {
            this.setState({
              sweets: resBody,
              isLoading:false,  
            });
          });
      
        } else {
          toast.error(`${responseBody.message}`, {closeButton:false});
        }
      });
    }
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
                            isAdmin={this.state.isAdmin}
                            handleChange={this.handleChange.bind(this)}
                            addToCartSubmit={this.addToCartSubmit.bind(this)}
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
                          isAdmin={this.state.isAdmin}
                    />}/>


                    <Route 
                      path='/mycart'
                      render= {
                      (props) =>
                      this.state.username ?
                      <MyCart
                        {...props}
                        username={this.state.username}
                        cartProducts={this.state.cartProducts}
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

                    <Route 
                      path='/myorders'
                      render= {
                      (props) =>
                      this.state.username ?
                      <MyOrders
                        {...props}
                        username={this.state.username}
                        orders={this.state.orders}
                        ordersLoading={this.state.ordersLoading}
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
                      path='/review-orders'
                      render= {
                      (props) =>
                      this.state.isAdmin ?
                      <ReviewOrders
                        {...props}
                        username={this.state.username}
                        pendingOrders={this.state.pendingOrders}
                        ordersForReviewLoading={this.state.ordersForReviewLoading}
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
                      path='/change/:id' 
                        render= {
                        (props) => 
                        this.state.isAdmin ? 
                          <Change
                            {...props}
                            sweets={this.state.sweets}
                            isAdmin={this.state.isAdmin}
                            handleChange={this.handleChange.bind(this)}
                            handleChangeOfProduct={this.handleChangeOfProduct.bind(this)}
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
