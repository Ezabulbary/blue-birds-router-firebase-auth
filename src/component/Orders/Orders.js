import React from 'react';
import { useProducts } from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <p>order items-{products.length}</p>
        </div>
    );
};

export default Orders;