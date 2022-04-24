import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 m-6 order-2 md:order-1">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="bg-[#FFE0B3] text-center p-10 order-1 md:order-2">
                <Cart
                    cart={cart}
                >
                    <Link to='/order'>
                        <button className='text-white w-11/12 bg-yellow-500 border-solid border-2 border-[#95A0A7] rounded-md flex items-center justify-evenly my-3 mx-auto py-2'>
                            <p>Review Order</p>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>

    );
};

export default Shop;