import React from 'react';

const Categories = () => {
    return (
        <div>
            <div class="container py-16">
                <div class="w-full grid lg:grid-cols-3 gap-6 mx-auto sm:grid-cols-1 sm:w-full">
                    <div class="border bg-secondary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 class='text-2xl font-medium text-white'>FOR GENTS</h4>
                        </div>
                    </div>
                    <div class="border bg-secondary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 class='text-2xl font-medium text-white'>FOR LADIES</h4>
                        </div>
                    </div>
                    <div class="border bg-secondary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 class='text-2xl font-medium text-white'>FOR KIDS</h4>
                        </div>
                    </div>
                    <div class="border bg-secondary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 class='text-2xl font-medium text-white'>BAGS</h4>
                        </div>
                    </div>
                    <div class="border bg-secondary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 class='text-2xl font-medium text-white'>ACCESSORIES</h4>
                        </div>
                    </div>
                    <div class="border bg-secondary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                        <div>
                            <h4 class='text-2xl font-medium text-white'>HOME APPLIANCE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;