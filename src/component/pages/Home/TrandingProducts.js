

import { Link, } from 'react-router-dom';
import { useProducts } from '../../Context/ProductProvider';
import Loading from '../Loading/Loading';


import SliderProduct from './SliderProduct';

// import SliderProduct from './SliderProduct';
const TrandingProducts = () => {

    const { state: { products }, loading, error } = useProducts();

    let content;

    if (loading) {
        content = <Loading></Loading>
    }
    if (error) {
        content = <h1>Something went wrong</h1>
    }

    if (!loading && !error && products.length === 0) {
        content = <Loading></Loading>
    }




    return (
        <div>
            {content}
            <div className="container pb-10 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">all products</h2>
                    <button className="btn btn-primary btn-xs">See More</button>
                </div>
                {/* gird system */}
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                    {
                        products.slice(0, 15).map((product) => (
                            <SliderProduct key={product.id} product={product}></SliderProduct>
                    ))}
                </div>
                <div className='text-center py-16'>
                    <Link to='/shop' className="btn btn-primary text-center rounded-none">Show More</Link>
                </div>
            </div>

        </div>
    );
};

export default TrandingProducts;