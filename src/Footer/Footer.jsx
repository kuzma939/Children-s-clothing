

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <a href="#">Бонусна система</a>
                <a href="#">Фотоматеріали</a>
                <a href="#">Допомога</a>
                <a href="#">Про нас</a>
            </div>
            <div className={styles.newsletter}>
                <form>
                    <label htmlFor="email-newsletter">Підписатись на розсилку:</label>
                    <input type="email" id="email-newsletter" name="email-newsletter" autoComplete="email"/>
                    <button type="submit">Підписатись</button>
                </form>
            </div>
        </footer>
    );
};
export default Footer;