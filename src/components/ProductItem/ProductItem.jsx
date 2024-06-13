import styles from './ProductItem.module.css';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className={styles.productItem}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} грн</p>
            <button className={styles.buttonItem} onClick={() => addToCart(product)}>Додати до кошика</button>
        </div>
    );
};

export default ProductItem;