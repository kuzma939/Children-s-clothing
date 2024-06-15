import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = ({ closeForm }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Паролі не співпадають");
            return;
        }
        // Логіка для обробки реєстрації
        alert("Реєстрація успішна!");
    };

    return (
        <div className={styles.registrationForm}>
            <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={closeForm} />
            <h2>Реєстрація</h2>
            
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Імя користувача</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Електронна пошта</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Підтвердіть пароль</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.buttonForm} type="submit">Зареєструватися</button>
            </form>
        </div>
    );
};

export default RegistrationForm;