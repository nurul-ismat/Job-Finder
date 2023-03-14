import React from 'react';
import useJobs from '../../hooks/useJobs';
import Loading from '../Shared/Loading/Loading';
import Job from './Job';

const Jobs = () => {
    const [jobs, isLoading] = useJobs()
    if(isLoading){
        return <Loading/>
    }
   
    return (
        <section className='p-5 md:p-10 lg:px-20'>
            {
                jobs?.map(job=><Job key={job._id} job={job}/>)
            }
        </section>
    );
};

export default Jobs;