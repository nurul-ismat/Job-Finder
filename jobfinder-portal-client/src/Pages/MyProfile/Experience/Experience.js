import axios from 'axios';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddExperience from './AddExperience';

const Experience = ({ userInfo, refetch }) => {
    const experiences = userInfo?.experiences;
    const deleteSwal = withReactContent(Swal);
    const deleteExperience = company => {
        deleteSwal.fire({
            icon: 'error',
            title: 'Do you sure want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.isConfirmed) {
                axios.put(`https://arcane-thicket-72200.herokuapp.com/users/experiences/${userInfo?.email}`, {
                    experience: company
                })
                    .then(res => {
                        console.log(res)
                        if (res.data.modifiedCount === 1) {
                            refetch()
                            toast.success('Successfully Deleted')
                        }
                        else {
                            toast('Something went wrong, Please try again')
                        }
                    })
            }
        })
    }
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
                            <RiDeleteBin6Line onClick={()=>deleteExperience(experience?.company)} className='mx-2 text-xl cursor-pointer' />
                        </div>)
                }
                {userInfo?.role==='Candidate' &&   <label htmlFor="experience-modal" className="modal-button btn btn-sm text-white">+ Add Experience</label>}
            </div>
            <div className='lg:flex invisible'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            {userInfo?.role==='Candidate' && <AddExperience user={userInfo} refetch={refetch}/> }
        </div>
    );
};

export default Experience;