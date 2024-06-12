import { useState } from 'react'
import Header from './Header/Header'
import './App.css'
import Banner from './Banner/Banner'
import ProductList from './ProductList/ProductList'
import Footer from './Footer/Footer'
import Modal from './Modal/Modal'

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item) => {
      setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
      setCartItems(cartItems.filter(cartItem => cartItem !== item));
  };

  return (
      <div>
          <Header cartItems={cartItems} removeFromCart={removeFromCart} />
          <main>
              <Banner />
              <ProductList addToCart={addToCart} />
          </main>
          <Footer />
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </div>
  );
};

export default App;