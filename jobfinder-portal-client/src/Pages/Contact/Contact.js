import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import contact from '../../assets/images/contact.png'
import { GoLocation, GoMail } from 'react-icons/go'
import { BiSend, BiPhone } from 'react-icons/bi'
import Footer from '../Shared/Footer/Footer';


const Contact = () => {
    return (
        <section className='flex flex-col mt-10'>
            <div className='flex flex-col md:flex-row justify-around items-center px-10'>
                <div className='md:w-1/3'>
                    <h3 className='text-3xl font-semibold'>Get in touch</h3>
                    <p className='text-slate-600'>Start working with <span>Job</span><span className='text-primary'>Finder</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <form onSubmit={e => e.preventDefault()}>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Name</span>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full rounded-sm" />
                        </label>
                        <div className='flex'>
                            <label className='mr-2 my-2'>
                                <span className="block text-sm font-medium my-2">Email</span>
                                <input type="email" placeholder="Email" className="input input-bordered w-full rounded-sm" />
                            </label>
                            <label className='ml-2 my-2'>
                                <span className="block text-sm font-medium my-2">Subject</span>
                                <input type="text" placeholder="Subject" className="input input-bordered w-full rounded-sm" />
                            </label>
                        </div>
                        <label className="block my-2">
                            <span className="block text-sm font-medium my-2">Your Message</span>
                            <textarea className="textarea textarea-bordered rounded-sm w-full" placeholder="Enter Your Message"></textarea>
                        </label>
                        <button className='text-primary px-6 py-3 mx-2 rounded-lg border-primary border-l border-t border-r-2 border-b-2 hover:bg-primary flex items-center hover:text-white' style={{ boxShadow: '2px 2px  0px 0px' }}><span className='mr-2'>Send Message </span><BiSend /></button>
                    </form>
                </div>
                <div className='flex flex-col items-start mb-10'>
                    <img src={contact} alt="" />
                    <div className='px-10'>
                        <p className='flex items-center text-slate-600'><GoLocation className='mx-2 text-primary' /> <span>Dhaka, Bangladesh</span></p>
                        <p className='flex items-center text-slate-600'><GoMail className='mx-2 text-primary' /> <span>jobfinder@gmail.com</span></p>
                        <p className='flex items-center text-slate-600'><BiPhone className='mx-2 text-primary' /><span>  +880101020123</span></p>
                    </div>
                </div>
            </div>
            <MapContainer className='w-full' center={[23.8103, 90.4125]} zoom={13} style={{ height: '300px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[23.8103, 90.4125]} />
            </MapContainer>
            <div className='bg-base-200'>
                <Footer />
            </div>
        </section>
    );
};

export default Contact;