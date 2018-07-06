import React, { Component } from 'react';
import Header from './Header'
import CartFooter from './CartFooter'
import CartItems from './CartItems'

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <CartItems/>
      <CartFooter copyright = '2016'/>
      </div>
    )
  }
}

export default App;
