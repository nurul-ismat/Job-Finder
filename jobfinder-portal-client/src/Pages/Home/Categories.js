import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const categories = [1, 2, 3, 4, 5, 6,7,8]
    return (
        <section>
            <h2 className='text-3xl text-center font-bold '>Jobs Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20 my-16'>
                {
                    categories.map((category, index) => <Category key={index}/>)
                }
            </div>
            <Link to='all-categories' className='text-primary px-6 py-3 mx-auto flex mb-5 w-3/4 md:w-1/3 xl:w-1/6 rounded-lg border-primary border-l border-t border-r-2 border-b-2' style={{ boxShadow: '2px 2px  0px 0px' }}>Browse All Categories</Link>
        </section>
    );
};

export default Categories;