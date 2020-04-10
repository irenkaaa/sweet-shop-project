import React from 'react';

class Order extends React.Component {

  render() {
    const url = this.props.match.params.id;
    const data = this.props.sweets.find(el => el._id === url);
    

    return (
      <div className="form-wrapper">
        <h1>Let us take your order and add it to your cart</h1>
        <form onSubmit={ (e) => this.props.handleSubmitOrder(e, data)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={data.title} readOnly="readonly"/>
            </div>
            <div className="form-group">
                <label htmlFor="price">price</label>
                <input type="text" name="title" id="title" value={data.price} readOnly="readonly"/>
            </div>
            <button type="submit">Add to Cart</button>
        </form>
      </div>
    );
  }
}

  
 export default Order;