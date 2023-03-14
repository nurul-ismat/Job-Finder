import React from 'react';

const CandidateLinks = ({ user }) => {
    const links = user?.links
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Links</p>
            <div className='flex-[2]'>
                {
                    links && links.map((link, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{link?.name}</p>
                                <small className='text-primary'><a href={link?.link} target="_blank" rel='noreferrer'>{link?.link && link?.link}</a></small>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CandidateLinks;