import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import EditPersonalInfo from './EditPersonalInfo';

const PersonalInfo = ({userInfo, refetch}) => {
    return (
        <div>
            <h6 className='text-xl font-semibold flex'>{userInfo?.name} {userInfo?.role==='Candidate' &&  <label htmlFor="personal-inf-modal" className="modal-button"><BsFillPencilFill className='ml-3 text-xl cursor-pointer' /></label>} </h6>
            <p className='text-accent'>{userInfo?.email}</p>
            <p className='text-accent'>{userInfo?.phoneNumber}</p>
            <p className='text-accent'>{userInfo?.address}</p>
            <EditPersonalInfo user={userInfo} refetch={refetch}/>
        </div>
    );
};

export default PersonalInfo;