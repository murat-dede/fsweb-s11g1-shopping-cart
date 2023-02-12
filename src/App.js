import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart,item]);
    console.log(item);
    // verilen itemi sepete ekleyin
  };
  const removeItem=(id)=>{
    setCart([...cart.filter((c)=>c.id===id)]);
  };

  return (
    
    <div className="App">
      <ProductContext.Provider value={{products,addItem}}  >
        <CartContext.Provider value={{cart,removeItem}}>
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products /*products={products} addItem={addItem} *//>
        </Route>

        <Route path="/cart">
          <ShoppingCart /*cart={cart} *//>
        </Route>
      </main>
      </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
