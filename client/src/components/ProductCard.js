import React from 'react';
import axios from 'axios';

// let addToCart = (product) => {
//     let cart = localStorage.getItem('cart');
//     cart = cart === null ? [] : JSON.parse(cart);
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
// }



const ProductCard = ({ product }) => {

    const handleCheckout = () => {
        // Create checkout session
        axios.post('http://localhost:4242/create-checkout-session') // replace lookup_key with your product's lookup key
            .then(res => {
                if (res.data && res.data.url) {
                    // On success, redirect to Stripe Checkout
                    window.location.href = res.data.url;
                } else {
                    console.error('Error with creating checkout session', res);
                }
            })
            .catch(err => {
                console.error('Error with request to create checkout session', err);
            });
    }

    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-3">
            <div className="px-4 py-2">
                <h1 className="text-gray-900 font-bold text-3xl uppercase">{product.name}</h1>
                <p className="text-gray-600 text-sm mt-1">£{product.price}</p>
            </div>
            <img className="h-56 w-full object-cover mt-2" src={product.image} alt={product.name} />
            <div className="grid place-items-center px-4 py-2 bg-gray-900">
                <button onClick={handleCheckout} className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Checkout</button>
            </div>
        </div>
    );
};

export default ProductCard;