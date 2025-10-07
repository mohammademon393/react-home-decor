import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    
    return (
        <div>
            {
                products.map(product => <h1>{product.name}</h1>)
            }
        </div>
    );
};

export default Home;