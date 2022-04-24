import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
    const naviget = useNavigate();

    const { shop } = useParams();

    const getMoreShop = () => {
        naviget('/shop')
    }
    return (
        <div className='flex justify-evenly'>
            <div className='p-4 mt-52 text-center'>
                <h1 className='text-6xl'>Order Your <span className='text-rose-300'>Best Shoz</span></h1>
                <p className='text-justify p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi veniam quidem sapientevero voluptatibus ipsam, quos fugiat doloremque rem iure mollitia quisquam dicta aspernatur voluptatum consequuntur quidem natus labore sint! Quisquam eaque porro temporibus fugit ea!</p>
                <button onClick={() => getMoreShop(shop)} className='border-4 rounded-lg bg-blue-300 py-2 px-4'>Go Shop</button>
            </div>
            <img className='w-[600px] h-[700px] m-12' src="https://fns.modanisa.com/r/pro2/2019/06/25/z-spor-ayakkabi--siyah--pasomia-1127658-1127658-1.jpg" alt="" />
        </div>
    );
};

export default Home;