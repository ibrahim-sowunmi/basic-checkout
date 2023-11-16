import React, { useState } from 'react';
import heroImage from '../assets/tastecard-splash.png';
import itemImage from '../assets/test-food.jpg';
import ProductCard from '../components/ProductCard';

const item = {
    name: 'Sample Item',
    image: itemImage,
    price: 19.99,
};

function SplashPage() {
    const [cart, setCart] = useState([]);

    const product1 = {
        name: "Monthly Membership",
        price: 4.99,
        image: itemImage
    };

    const product2 = {
        name: "Annual Membership",
        price: 29.99,
        image: itemImage
    };


    return (
        <>
            <img src={heroImage} alt="Hero" className="w-full object-cover h-64" />
            <div className="hero-section bg-black text-center text-white py-20 px-80 text-lg">
                <p>A card gift is truly the best gift you can give to someone who enjoys experiencing various types of cuisines. Not only does it act as a gateway to discover and dine at hundreds of restaurants, but it also offers substantial savings with its massive discounts. It essentially enriches the dining experience, giving your loved ones the opportunity to try out new places without worrying too much about the costs. </p>
            </div>
            <div className="flex items-center justify-center space-x-12 pt-12 w-full">
                <ProductCard product={product1} />
                <ProductCard product={product2} />
            </div>
        </>
    );
}

export default SplashPage;