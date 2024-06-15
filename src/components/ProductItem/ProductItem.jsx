import styles from './ProductItem.module.css';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className={styles.productItem}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productDetails}>
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price} грн</p>
            <button className={styles.buttonItem} onClick={() => addToCart(product)}>Додати до кошика</button>
            </div>
        
        
        </div>
    );
};

export default ProductItem;