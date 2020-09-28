import React,{useState} from 'react';
import items from './api/api';
import Product from './components/Product/Product';
import CartDrawer from './components/Cart/CartDrawer';
import Cart from './components/Cart/Cart';
import Backdrop from './components/utility/Backdrop';

import './App.css';
import cardImg from './assets/cart.png';


const App = () => {

  const [ itemsInCart, setItemsInCart ] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCartClick = (id) => {
    setItemsInCart(itemsInCart => {
      const itemInCart = itemsInCart.find(item => item.id === id);
      // if item is already in cart, update the quantity
      if(itemInCart){
        return itemsInCart.map(item=>{
          if(item.id===id) return item
          return {...itemInCart, quantity: item.quantity + 1}
        })
      }

      const item = items.find(item => item.id === id);
      return [...itemsInCart, {...item, quantity: 1}]
    })
  };

  
    const totalCost = itemsInCart.reduce(
      (acc, item) => acc + item.price * item.quantity, 0)
    

  const openCart = () => {
    setShowCart(true);
  };
  
  const closeCart = () => {
    setShowCart(false);
  };

  
  return (
    <div className = "App">

      {/* implemmentation for  cart side drawer  */}
      { showCart && <Backdrop onClick={closeCart}/> }
      <CartDrawer show = {showCart}>
          <Cart itemsInCart={itemsInCart} totalCost={Number(totalCost)}/>
      </CartDrawer>

      <header className="App-header">
        <h1 className="App-header-text">Inventory</h1>
        <img src = {cardImg} alt="View what is inside your cart" className="App-cartImg" onClick={openCart}/>
      </header>

      <main className = "App-shop">
        <div className="App-products">
          {
            items.map(item => {
              return <Product key={item.id}
              id={item.id}
              name={item.name}
              desc={item.desc}
              price={item.price}
              inStock={item.in_stock}
              image = {item.img_url}
              addToCartClick = {() => addToCartClick(item.id)}
              />
            })
          }
        </div>
      </main>
    </div>
  )
};
export default App;