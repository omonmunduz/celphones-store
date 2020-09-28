import React,{useState} from 'react';
import items from './api/api';
import Product from './components/Product/Product';

import './App.css';


const App = () => {
  const [ itemsInCart, setItemsInCart ] = useState([]);

  
  return (
    <div className = "App">
      <header className="App-header"><h1 className="App-header-text">Dreamcast Shop</h1></header>
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
              />
            })
          }
        </div>

      </main>
    </div>
  )
};
export default App;