import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './component/Nav';
import LoginForm from './component/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cartpage from "./pages/cartPage"; 
import WishlistPage from "./pages/WishlistPage";
import { useState } from 'react';
import { CartContext } from './CartContext';
import WishlistContext from './WishlistContext (1)';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevState) => {
      const idx = prevState.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        const currentProduct = prevState[idx];
        currentProduct.qty += 1;
        return [...prevState];
      } else {
        const newProduct = { ...product, qty: 1 };
        return [...prevState, newProduct];
      }
    });
  };

  const removeFromCart = (productId) => {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      const newCart = [...cart];
      if (newCart[productIndex].qty > 1) {
        newCart[productIndex].qty -= 1;
      } else {
        newCart.splice(productIndex, 1);
      }
      setCart(newCart);
    }
  };

  const addWishlist = (product) => { 
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    const newWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(newWishlist);
  };

  return (
    <CartContext.Provider value={[cart, addToCart, removeFromCart]}>
      <WishlistContext.Provider value={[wishlist, addWishlist, removeFromWishlist]}>
        <BrowserRouter>
          <div>
            <CustomNavbar />
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cartpage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
