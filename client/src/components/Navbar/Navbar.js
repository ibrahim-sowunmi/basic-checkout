import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar({ logoImage, companyName }) {
    const [itemsInCart, setItemsInCart] = useState(0);

    const updateCartCount = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        setItemsInCart(cartItems ? cartItems.length : 0);
    };

    const handleCustomerPortal = async () => {
        try {
            const res = await axios.post('http://localhost:4242/create-portal-session', {}); // Note: You might need to provide an appropriate url here

            if (res.data.url) {
                window.location.href = res.data.url;
            }
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        updateCartCount();
        // Listen to the "storage" event on the Window object
        window.addEventListener("storage", updateCartCount);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("storage", updateCartCount);
    }, []);

    return (
        <nav className="flex items-center justify-between bg-white-100 p-4 h-screen/6">
            <Link to="/">
                <img className="max-w-12 max-h-12" src={logoImage} alt="company logo" />
            </Link>
            <h1 className="text-center text-black text-gray-900 font-bold text-3xl">{companyName}</h1>


            <div className="flex items-center justify-between">
                <div className='px-4'>
                    <button onClick={handleCustomerPortal} className="relative p-2 bg-lime-700 rounded-lg shadow text-white inline-block">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </button>
                </div>
                <div>
                    {/* <Link to="/checkout" className="relative p-2 bg-white rounded-lg shadow text-black inline-block">
                        <button>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <div className="absolute top-0 right-0 bg-lime-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow">
                                {itemsInCart}
                            </div>
                        </button>
                    </Link> */}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;