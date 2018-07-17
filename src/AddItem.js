import React, { Component } from 'react';
class AddItem extends Component{

  state = {}


  onChange = (e) => this.setState({[e.target.name]: e.target.value})
render() {
  return(
<form onSubmit= { this.props.onSubmit}>
<p>
  <lable>
  Quantity: <input type="text" onChange={ this.props.onChange} name="Quantity"/>
  </lable>
</p>
<p>
  <lable>
  Product: <select name="products"> {this.props.products.map(element => {
    return <option value = {element.name}> {element.name}  </option>
  })
}
  </select>
  </lable>
</p>
<p>
  <lable>
  Is Admin: <input type="checkbox" onChange={ (e) => this.setState({[e.target.name]: e.target.checked}) } name="isAdmin" />
  </lable>
</p>
<p>
<input type="submit" value= "Submit" class="btn btn-primary"/>
</p>
</form>

  )
  }
}
export default AddItem
