
import styles from './Modal.module.css';

const Modal = ({ setIsModalOpen }) => {
    const closeModal = () => setIsModalOpen(false);

    return (
       // <div className={`modal ${isOpen ? 'open' : ''}`}></div>
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>Welcome to EVGAKIDS</h2>
                <p>Subscribe to our newsletter to get the latest updates and offers!</p>
                <form>
                    <label htmlFor="modal-email">Email:</label>
                    <input type="email" id="modal-email" name="modal-email" autoComplete="email"/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;