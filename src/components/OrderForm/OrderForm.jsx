import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './OrderForm.module.css';

const OrderForm = ({ cartItems, handleOrderSubmit, closeOrder }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderData = {
            name,
            address,
            paymentMethod,
            items: cartItems,
        };
        handleOrderSubmit(orderData);
    };

    return (
        <div className={styles.orderFormOverlay}>
           
            <div className={styles.orderForm}>
            <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={closeOrder} />
                <h2>Оформлення замовлення</h2>
              
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Імя</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="address">Адреса</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <label>Спосіб оплати</label>
                    <div className={styles.paymentMethods}>
                        <label>
                            <input
                                type="radio"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Карта
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Готівка
                        </label>
                    </div>
                    <button type="submit">Підтвердити замовлення</button>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;