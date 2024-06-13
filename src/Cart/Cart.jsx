
import styles from './Cart.module.css';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className={styles.cartDropdown}>
            <h2>Ваш кошик</h2>
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
            <button className={styles.checkoutButton}>Оформити замовлення</button>
        </div>
    );
};

export default Cart;