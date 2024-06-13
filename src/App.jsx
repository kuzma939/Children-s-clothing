import { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Banner from './components/Banner/Banner';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import OrderForm from './components/OrderForm/OrderForm';
import Cart from './components/Cart/Cart'; // Імпорт компонента Cart

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Стан для відкриття кошика
  //const [isOrderOpen, setIsOrderOpen] = useState(false);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem !== item));
  };

  const handleOrderSubmit = (orderData) => {
    alert('Замовлення оформлено!\n' + JSON.stringify(orderData, null, 2));
    setCartItems([]);
    setShowOrderForm(false);
  };
  const toggleOrder = () => {
    setShowOrderForm(!showOrderForm);
  };

  const toggleRegistrationForm = () => {
    setIsRegistrationFormOpen(!isRegistrationFormOpen);
  };

  const checkout = () => {
    setShowOrderForm(true);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
 
  return (
    <div>
      <Header 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        toggleRegistrationForm={toggleRegistrationForm} 
        toggleCart={toggleCart} // Передаємо функцію для відкриття кошика
      />
      {isRegistrationFormOpen && <RegistrationForm closeForm={toggleRegistrationForm}/>}
      {isCartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} checkout={checkout} closeCart={toggleCart} />} {/* Відображення кошика */}
      <main>
        <Banner />
        <ProductList addToCart={addToCart} />
      </main>
      {showOrderForm && <OrderForm cartItems={cartItems} handleOrderSubmit={handleOrderSubmit}  closeOrder={toggleOrder}/>}
      <Footer />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default App;