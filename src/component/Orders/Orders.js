import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=" m-6 order-2 md:order-1">
                {
                    cart.map(product => <ReviewItem 
                        product={product}
                        ></ReviewItem>)
                }
            </div>
            <div className="bg-[#FFE0B3] lg:w-4/5 text-center  p-10 order-1 md:order-2">
                <Cart 
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;