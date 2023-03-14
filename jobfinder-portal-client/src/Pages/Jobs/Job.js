import React from 'react';
import { AiFillStar, AiOutlineDoubleRight } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';

const Job = ({ job }) => {
  const { title, company, location, logo, experience, salary, type, _id } = job
  const locations = useLocation()

  return (
    <div className="card my-10 card-compact bg-base-100 hover:shadow-xl rounded-md after:content-['Hello'] after:h-20 after:w-20 after:bg-primary after:absolute after:-m-10 after:-rotate-45 border hover:border-primary hover:-translate-y-2 ease-in-out duration-300">
      <h1 className='absolute text-xl top-2 left-2 text-white z-10'><AiFillStar /></h1>
      <div className="card-body">
        <div className='flex flex-col md:flex-row items-center justify-around'>
          <figure className='mt-8'>
            <img className='w-20 rounded-lg' src={logo} alt={company} />
          </figure>
          <div>
            <h2 className="card-title">{title}</h2>
            <p className='text-xl'>{company}</p>
          </div>
          <div className='flex items-center'>
            <MdLocationPin className='text-primary' />
            <p className='flex items-center'>{location}</p>
          </div>
          <div>
            <p>{salary}/m USD</p>
          </div>
          <div>
            <p className='p-2 rounded-sm bg-primary my-1 text-white text-center'>{type || 'Fulltime'}</p>
            <p className='p-2 rounded-sm bg-info my-1 text-primary text-center'>Urgent</p>
          </div>
        </div>
        <div className="card-actions px-10">
          <p>Experience: <small className='text-slate-700'>{experience || '0'} years</small></p>
          <Link to={`${locations.pathname === '/' || locations.pathname.includes('/job/search/') ? `/jobs/${_id}` : `${_id}`}`} className='hover:text-primary flex items-center'><span className='mr-2'>View Details </span><AiOutlineDoubleRight /></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;