import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/order.css';
import { get } from '../data/crud';

class Change extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
        };
    
        this.handleChange = props.handleChange.bind(this);
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        get(`http://localhost:5000/sweets/allsweets/${id}`).then(resBody => {
            this.setState({ 
                title : resBody.title,
                price : resBody.price,
                description: resBody.description,
                image : resBody.image
            })
        });
    }
    

  render() {
    const id = this.props.match.params.id;
    const data = this.props.sweets.find(el => el._id === id);
    console.log(this.state.info)
    
    if(!data) {
        return <Redirect to='/' />
    }
    const { title,description,image,price } = this.state;
    const { word } = this.state;

    
    
    return (
      <div className="order-wrapper">
        <h2>Change</h2>
        <form onSubmit={ (e) => this.props.handleChangeOfProduct(e, word, id)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input onChange={this.handleChange} type="text" name="title" id="title" value={title}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea onChange={this.handleChange} rows="5" cols="35" value={description}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input onChange={this.handleChange} type="text" name="image" id="image" value={image}/>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input onChange={this.handleChange} type="num" name="price" id="price" value={price}/>
            </div>
            <button  onClick={()=> this.setState({word:'edit'})}>Edit</button>
            <button  onClick={()=> this.setState({word: 'delete'})}>Delete</button>
        </form>
        
        <Link className='after-order' to="/store">Go back</Link>
      </div>
    );
  }
}

  
 export default Change;