import React from 'react';

const CandidateExperience = ({ user }) => {
    const experiences = user?.experiences
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Experience</p>
            <div className='flex-[2]'>
                {
                    experiences && experiences.map((experience, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{experience.name}</p>
                                <p>{experience?.company}</p>
                                <small className='block'>{experience?.duration}</small>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default CandidateExperience;