import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Blog from './Blog';

const Blogs = () => {
    const blogs =[1,2,3,4,5,6]
    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 my-10 mx-auto'>
                {
                    blogs?.map((blog, index) => <Blog key={index}></Blog>)
                }
            </section>
            <Footer />
        </>
    );
};

export default Blogs;