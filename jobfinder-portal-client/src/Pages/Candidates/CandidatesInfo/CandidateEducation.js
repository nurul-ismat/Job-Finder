import React from 'react';

const CandidateEducation = ({user}) => {
    const educations = user?.educations;
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Education</p>
            <div className='flex-[2]'>
                {
                    educations && educations.map((education, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary"><span>{education?.degree}</span>, {education?.subject}</p>
                                <p>{education?.institute}</p>
                                <small className='block'>{education?.year}</small>
                                {education?.result && <small className='block'>CGPA: {education?.result}</small>}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CandidateEducation;