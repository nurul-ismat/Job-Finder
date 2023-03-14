import React from 'react';

const CandidateCourses = ({user}) => {
    const courses = user?.courses
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Trainings / Courses</p>
            <div className='flex-[2]'>
                {
                    courses?.map((course, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{course?.name}</p>
                                <p>{course?.institute}</p>
                                <small className='block'>{course?.duration}</small>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CandidateCourses;