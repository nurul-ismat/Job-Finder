import React from 'react';

const CandidateSkill = ({user}) => {
    const skills = user?.skills
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
        <p className="font-medium uppercase flex-1">skills</p>
        <div className='flex-[2]'>
            {
                skills && skills.map((skill, index) =>
                    <div key={index} className='flex justify-between items-baseline'>
                        <p className="font-semibold text-secondary my-2">{skill?.name}</p>
                    </div>
                )
            }
        </div>
    </div>
    );
};

export default CandidateSkill;