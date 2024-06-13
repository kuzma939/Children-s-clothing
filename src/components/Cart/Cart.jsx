import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.module.css';

const Cart = ({ cartItems, removeFromCart, checkout, closeCart }) => {
    return (
        <div className={styles.cartDropdown}>
            <h2>Ваш кошик</h2>
            <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={closeCart} />
            <div className={styles.CartContainer}>
            {cartItems.length === 0 ? (
                <p>Кошик порожній</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                       
                      <li key={index}>
                      <img src={item.image} alt={item.name} />
                      <div>
                          <h3>{item.name}</h3>
                          <p>{item.price} грн</p>
                          <button onClick={() => removeFromCart(item)}>Видалити</button>
                      </div>
                  </li>
                    ))}
                </ul>
            )}
            </div>
            <button className={styles.checkoutButton} onClick={checkout}>Оформити замовлення</button>
        </div>
    );
};

export default Cart;