
import { useState } from 'react';
import CurrencySelector from '../CurrencySelector';
import styles from './Header.module.css';
import Cart from '../Cart/Cart';

const Header = ({ cartItems, removeFromCart }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <header className={styles.header}>
            <div className="top-bar">
                <CurrencySelector />
                <div className="auth-links">
                    <a href="#">Увійти</a>
                    <a href="#">Реєстрація</a>
                </div>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#">Літо_2☼24</a></li>
                    <li><a href="#">Дівчаткам</a></li>
                    <li><a href="#">Хлопчикам</a></li>
                    <li><a href="#">Family Look</a></li>
                    <li><a href="#">Для малюків</a></li>
                    <li><a href="#">Розпродаж</a></li>
                </ul>
                <div className={styles.cart} onClick={toggleCart}>
                    <span>Кошик ({cartItems.length})</span>
                    {isCartOpen && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
                </div>
            </nav>
        </header>
    );
};

export default Header;