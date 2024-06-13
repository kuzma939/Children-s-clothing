import styles from './ProductList.module.css';
import ProductItem from '../ProductItem/ProductItem';
const ProductList = ({ addToCart }) => {

    const products = [
        { id: 1, category: 'Дівчаткам', name: 'Сукня для дівчаток', price: 500, image: 'https://via.placeholder.com/200x200/ff69b4/ffffff?text=Dress+for+Girls' },
        { id: 2, category: 'Дівчаткам', name: 'Спідниця для дівчаток', price: 400, image: 'https://via.placeholder.com/200x200/ff69b4/ffffff?text=Dress+for+Girls' },
        { id: 3, category: 'Хлопчикам', name: 'Футболка для хлопчиків', price: 300, image: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=T-Shirt+for+Boys' },
        { id: 4, category: 'Хлопчикам', name: 'Штани для хлопчиків', price: 600, image: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=T-Shirt+for+Boys' },
        { id: 5, category: 'Малюкам', name: 'Комплект для малюків', price: 700, image: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=T-Shirt+for+Boys' },
        { id: 6, category: 'Малюкам', name: 'Боді для малюків', price: 350, image: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=T-Shirt+for+Boys' },
        { id: 7, category: 'Family Look', name: 'Сімейні футболки', price: 800, image: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=T-Shirt+for+Boys' },
        { id: 8, category: 'Family Look', name: 'Сімейні костюми', price: 1200, image: 'https://via.placeholder.com/200x200/1e90ff/ffffff?text=T-Shirt+for+Boys' },
    ];
    const categories = [...new Set(products.map(product => product.category))];

    return (
        <div>
        {categories.map(category => (
            <section key={category} className={styles.productCategory}>
                <h2>{category}</h2>
                <div className={styles.productList}>
                    {products.filter(product => product.category === category).map(product => (
                        <ProductItem key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </section>
        ))}
    </div>
       
    );
}

export default ProductList;