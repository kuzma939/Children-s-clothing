import { useState } from 'react'
import Header from './Header/Header'
import './App.css'
import Banner from './Banner/Banner'
import ProductList from './ProductList/ProductList'
import Footer from './Footer/Footer'
import Modal from './Modal/Modal'
import RegistrationForm from './RegistrationForm/RegistrationForm'

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);

  const addToCart = (item) => {
      setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
      setCartItems(cartItems.filter(cartItem => cartItem !== item));
  };
  const toggleRegistrationForm = () => {
    setIsRegistrationFormOpen(!isRegistrationFormOpen);
};
  return (
      <div>
<Header cartItems={cartItems} removeFromCart={removeFromCart} toggleRegistrationForm={toggleRegistrationForm} />
{isRegistrationFormOpen && <RegistrationForm />} {/* Показуємо RegistrationForm тільки якщо isRegistrationFormOpen == true */}
              
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