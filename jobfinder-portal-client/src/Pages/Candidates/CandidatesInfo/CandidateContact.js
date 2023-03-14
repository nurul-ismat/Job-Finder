import React from 'react';

const CandidateContact = ({user}) => {
    return (
        <div>
            <h6 className='text-xl font-semibold flex'>{user?.name}</h6>
            <p className='text-accent'>{user?.email}</p>
            <p className='text-accent'>{user?.phoneNumber}</p>
            <p className='text-accent'>{user?.address}</p>
        </div>
    );
};

export default CandidateContact;