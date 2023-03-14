import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/images/notfound.png'
const NotFound = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <img src={notfound} alt="" />
            <Link className='text-primary px-6 py-3 mx-2 rounded-lg border-primary border-l border-t border-r-2 border-b-2 hover:bg-primary hover:text-white' style={{ boxShadow: '2px 2px  0px 0px' }} to="/">Back to Home</Link>
        </div>
    );
};

export default NotFound;