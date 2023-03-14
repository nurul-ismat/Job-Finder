import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { AiOutlineHome, AiOutlinePlayCircle } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillInfoCircleFill } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { GiSandsOfTime } from 'react-icons/gi'
import { Link, useParams } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import Loading from '../Shared/Loading/Loading';

const JobDetails = () => {
    const [userInfo] = useUser()
    const { id } = useParams()
    const { data, isLoading } = useQuery(['job'], () => axios(`https://arcane-thicket-72200.herokuapp.com/jobs/${id}`))
    if (isLoading ) {
        return <Loading />
    }
    const { title, company, about, link, jobLocation, requirements, description, date, deadline, salary, skills, vacancy } = data?.data

    return (
        <section className='w-4/5 mx-auto py-10'>
            <h4 className="text-3xl font-bold text-center">{title} at {company}</h4>
            <section className='my-10 p-5 border rounded-md'>
                <h6 className='text-xl font-semibold'>{title}</h6>
                <p className='font-semibold text-accent my-2'>{company}</p>
                <p className='flex items-center my-3'><AiOutlineHome /> <span className='mx-2'>{jobLocation}</span></p>
                <div className='flex flex-col md:flex-row justify-between w-1/2'>
                    <div>
                        <p className='flex items-center uppercase text-accent font-medium'><AiOutlinePlayCircle /><span className='mx-2'>Start Date</span></p>
                        <p>{date}</p>
                    </div>
                    <div>
                        <p className='flex items-center uppercase text-accent font-medium'><FaMoneyCheckAlt /><span className='mx-2'>Salary</span></p>
                        <p>$ {salary}</p>
                    </div>
                    <div>
                        <p className='flex items-center uppercase text-accent font-medium'><GiSandsOfTime /><span className='mx-2'>Apply By</span></p>
                        <p>{deadline}</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <p className="font-medium">About {company}</p>
                    <small className='text-primary flex items-center'> <a href={link} target="_blank" rel='noreferrer'>Website</a><BsBoxArrowUpRight className='ml-2' /></small>
                    <p className='my-2'>{about}</p>
                </div>
                <div className='mt-5'>
                    <p className="font-semibold my-2">About the Job</p>
                    <p className='text-accent'>Key Responsibilities</p>
                    <ol className='list-decimal p-4'>
                        {
                            description?.split('. ').map((d, index) => <li key={index}>{d}</li>)
                        }
                    </ol>
                </div>
                <div className='mt-5'>
                    <p className="font-semibold my-2">Required Skills</p>
                    {
                        skills.split(',').map(skill => <div key={skill} className="btn btn-sm mr-2 my-1">{skill}</div>)
                    }

                </div>
                <div className='mt-5'>
                    <p className="font-semibold">Who can apply</p>
                    <ol className='list-decimal px-4'>
                        {
                            requirements.split('. ').map((req, index) => <li key={index}>{req}</li>)
                        }
                    </ol>
                </div>
                <div className='mt-5'>
                    <p className="font-medium">Vacancy</p>
                    <p>{vacancy}</p>
                </div>
                {userInfo?.role !== 'Requiter' && <button className='text-primary px-6 py-3 mx-auto block rounded-lg border-primary border-l border-t border-r-2 border-b-2 hover:bg-primary hover:text-white' style={{ boxShadow: '2px 2px  0px 0px' }}><Link to={`/jobs/apply/${id}`}>Apply Now</Link></button>}
            </section>
            <section className='p-8 border rounded-md bg-yellow-100'>
                <p className="font-medium flex items-center mb-3"><BsFillInfoCircleFill className='mr-2' />Save yourself from fraud!</p>
                <p>If an employer asks you to pay any security deposit, registration fee, laptop fee, etc., do not pay and notify us immediately. Remember, JobFinder doesn't charge a fee from the students to apply to a job or an internship & we don't allow other companies to do so either.</p>
            </section>
        </section>
    );
};

export default JobDetails;