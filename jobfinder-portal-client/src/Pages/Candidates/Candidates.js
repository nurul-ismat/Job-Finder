import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useJobs from '../../hooks/useJobs';
import NotFound from '../NotFound/NotFound';
import Loading from '../Shared/Loading/Loading';


const Candidates = () => {
    const [user] = useAuthState(auth)
    const [jobs, isLoading] = useJobs()
    if (isLoading) {
        return <Loading />
    }
    const job = jobs.find(job => job.email === user.email);
    const candidates = job.users

    return (
        <section>
            {
                candidates.length > 0 ?
                    <section className='w-4/5 mx-auto py-10' >
                        <h2 className="text-3xl text-secondary text-center">Candidates List</h2>
                        {
                            candidates?.map(candidate =>
                                <div key={candidate?.email} className="card my-10 p-3 card-compact bg-base-100 hover:shadow-xl rounded-md  border hover:border-primary hover:-translate-y-2 ease-in-out duration-300">
                                    <div className="p-2 flex items-center">
                                        <img className='mask mask-squircle' src={"https://placeimg.com/80/80/people"} alt='' />
                                        <div className='ml-5'>
                                            <h1 className="card-title">{candidate?.name}</h1>
                                            <p>{candidate.email}</p>
                                        </div>
                                    </div>
                                    <Link to={candidate?.email} className='ml-auto btn'>View Resume</Link>
                                </div>
                            )
                        }
                    </section>
                    :
                    <>
                        <h1 className="text-4xl text-secondary text-center">No Candidates Applied, Please Visit again</h1>
                        <NotFound />
                    </>
            }
        </section>
    );
};

export default Candidates;