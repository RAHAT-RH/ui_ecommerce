import React from 'react';

const ReturnPolicy = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-extrabold text-gray-900">Return Policy :</h1>
            <p className="mt-4 text-lg text-gray-500">
                We collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside mt-4 text-lg pl-5 text-gray-500 text-justify">
                <li className='text-justify'>
                    To Return a product, the product must be unused and without any problems. Fashion products can be tried on to see if they fit and will still be considered unworn. Please return the product if anything is wrong with it at the time of delivery
                </li>
                <li className='text-justify'>The product must with the original packaging</li>
            </ul>
        </div>
    );
};

export default ReturnPolicy;