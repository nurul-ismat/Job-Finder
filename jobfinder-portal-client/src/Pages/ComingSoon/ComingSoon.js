import React from 'react';
import { Link } from 'react-router-dom';
import comingsoon from '../../assets/images/comingsoon.png'
import Typewriter from 'typewriter-effect';
const ComingSoon = () => {
    return (
        <div className='h-screen p-10 flex flex-col justify-center items-center'>
            <img className='w-1/2 rounded-xl shadow-lg mb-3' src={comingsoon} alt="" />
            <div data-aos="fade-left" data-aos-duration="3000" data-aos-delay="50" className="mb-5">
                <h1 className='text-center text-4xl font-bold text-secondary'>
                    <Typewriter
                        options={{
                            strings: [
                                'Developer  busy  to  searching  his  own  Job.  Stay  tuned'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                </h1>
            </div>

            <Link className='text-primary px-6 py-3 mx-2 rounded-lg border-primary border-l border-t border-r-2 border-b-2 hover:bg-primary hover:text-white' style={{ boxShadow: '2px 2px  0px 0px' }} to="/">Back to Home</Link>
        </div>
    );
};

export default ComingSoon;