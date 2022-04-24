import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const orderRemoveBtn = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=" m-6 order-2 md:order-1">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        orderRemoveBtn={orderRemoveBtn}
                    ></ReviewItem>)
                }
            </div>
            <div className="bg-[#FFE0B3] lg:w-4/5 text-center  p-10 order-1 md:order-2">
                <Cart
                    cart={cart}
                >
                    <Link to='/login'>
                        <button className='text-white w-11/12 bg-yellow-500 border-solid border-2 border-[#95A0A7] rounded-md flex items-center justify-evenly my-3 mx-auto py-2'>
                            <p>Order Conform</p>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;