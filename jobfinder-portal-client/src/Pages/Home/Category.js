import React from 'react';
import { RiComputerLine } from 'react-icons/ri';

const Category = () => {
    return (
        <div className="card card-compact hover:text-info hover:-translate-y-3 duration-300 ease-in-out cursor-pointer">
            <div className='bg-indigo-100 w-1/3 mx-auto p-4 rounded-md'>
                <RiComputerLine className='text-5xl mx-auto'/>
            </div>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">IT/Software</h2>
                <p>100+ Jobs</p>
            </div>
        </div>
    );
};

export default Category;