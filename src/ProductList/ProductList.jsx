import styles from './ProductList.module.css';

const ProductList = ({ addToCart }) => {
    const products = [
        {
            id: 1,
            name: 'Сукня для дівчаток',
            price: '500 грн',
            image: 'https://via.placeholder.com/200x200/ff69b4/ffffff?text=Dress+for+Girls'
        },
        {
            id: 2,
            name: 'Футболка',
            price: '300 грн',
            image: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=T-Shirt+for+Boys'
        },
        {
            id: 3,
            name: 'Комплект',
            price: '700 грн',
            image: 'https://via.placeholder.com/200x200/ff69b4/ffffff?text=Baby+Outfit+Set'
        },
        {
            id: 4,
            name: 'Дитяче взуття',
            price: '250 грн',
            image: 'https://via.placeholder.com/200x200/ff69b4/ffffff?text=Baby+Outfit+Set'
        }
      
    ];

    return (
        <section className={styles.products}>
        <h2>Новинки</h2>
        <div className={styles.productList}>
            {products.map(product => (
                <div key={product.id} className={styles.productItem}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Ціна: {product.price}</p>
                    <button className={styles.buttonList} onClick={() => addToCart(product)}>Додати до корзини</button>
                </div>
            ))}
        </div>
    </section>
    );
}

export default ProductList;