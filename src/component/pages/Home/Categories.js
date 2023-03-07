import React from 'react';

const Categories = () => {
    return (
        <div>
            <div className="container py-16">
                <div className="w-full grid lg:grid-cols-3 gap-6 mx-auto sm:grid-cols-1 sm:w-full">
                    <div className="border bg-secondary rounded-sm px-3 py-4 lg:py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 className='text-2xl font-medium text-white'>FOR GENTS</h4>
                        </div>
                    </div>
                    <div className="border bg-secondary rounded-sm px-3 py-4 lg:py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 className='text-2xl font-medium text-white'>FOR LADIES</h4>
                        </div>
                    </div>
                    <div className="border bg-secondary rounded-sm px-3 py-4 lg:py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 className='text-2xl font-medium text-white'>FOR KIDS</h4>
                        </div>
                    </div>
                    <div className="border bg-secondary rounded-sm px-3 py-4 lg:py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 className='text-2xl font-medium text-white'>BAGS</h4>
                        </div>
                    </div>
                    <div className="border bg-secondary rounded-sm px-3 py-4 lg:py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 className='text-2xl font-medium text-white'>ACCESSORIES</h4>
                        </div>
                    </div>
                    <div className="border bg-secondary rounded-sm px-3 py-4 lg:py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 className='text-2xl font-medium text-white'>HOME APPLIANCE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;