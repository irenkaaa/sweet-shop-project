import React, { Component } from 'react';
import '../css/form.css';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
        };
    
        this.handleChange = props.handleChange.bind(this);
      }
    
      render() {
        const { title, description, image, price } = this.state;
    
        return (
          
                <div className="form-wrapper">
                    <h1>Create New Sweet Thing</h1>
                    <form onSubmit={ (e) => this.props.handleSubmitCreate(e, this.state)}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={this.handleChange} type="text" name="title" id="title" placeholder="Enter name of the Sweet" value={title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input onChange={this.handleChange} type="text" name="description" id="description" placeholder="Enter description" value={description}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL</label>
                            <input onChange={this.handleChange} type="text" name="image" id="image" placeholder="Enter image URL" value={image}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input onChange={this.handleChange} type="number" name="price" id="price" placeholder="Enter price" value={price}/>
                        </div>
                        <button type="submit">Create</button>
                    </form>
                </div>
           
        );
    }
}

export default Create;








