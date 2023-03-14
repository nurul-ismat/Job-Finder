import React from 'react';

const CandidateProjects = ({ user }) => {
    const projects = user?.projects;
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Projects</p>
            <div className='flex-[2]'>
                {
                    projects && projects.map((project, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{project?.name}</p>
                                <small className='block'>{project?.duration}</small>
                                <small className='text-primary'><a href={project?.link} rel="noreferrer" target="_blank">{project?.link}</a></small>
                                <ul className='list-disc px-5'>
                                    {
                                        project?.description?.split('. ').map(
                                            (d, index) => <li key={index}>{d && d}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CandidateProjects;