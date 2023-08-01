import React, { useEffect, useState } from 'react';
import Product from './Product';
import fatchProduct from '../utills/FatchProduct';

const ProductList = () => {
    const[product,setproduct]=useState([]);
    const [err, setEorr]=useState('');

   

    useEffect(()=>{
        fatchProduct()
        .then(data=> setproduct(data) )
        .catch(err=> setEorr(err))
    },[]);

    let output;
    if(err){
        output=<div>There is an Error</div>
    }else if(product?.length >0){
        output=product.map(product=> <Product key={product.id} product={product}/>)
    }else{
        <div>product not found</div>
    }

    return (
        <div className="container z-10 mx-auto my-12 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    output
                }
            </div>
        </div>
    );
};

export default ProductList;