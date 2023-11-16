import React from 'react';

function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white p-6 rounded shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2 font-bold" htmlFor="name">Name</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="text" id="name" />
                    </div>

                    <div>
                        <label className="block mb-2 font-bold" htmlFor="email">Email</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" />
                    </div>

                    <div>
                        <label className="block mb-2 font-bold" htmlFor="address">Address</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="text" id="address" />
                    </div>

                    <div>
                        <label className="block mb-2 font-bold" htmlFor="card">Card Number</label>
                        <input className="border border-gray-300 p-2 w-full rounded" type="text" id="card" />
                    </div>

                    <button className="bg-blue-500 text-white w-full py-2 rounded shadow">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutPage;