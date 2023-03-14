import axios from 'axios';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddSkill from './AddSkill';

const Skills = ({ userInfo, refetch }) => {
    const skills = userInfo?.skills
    const deleteSwal = withReactContent(Swal);
    const deleteSkill = name => {
        deleteSwal.fire({
            icon: 'error',
            title: 'Do you sure want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.isConfirmed) {
                axios.put(`https://arcane-thicket-72200.herokuapp.com/users/skills/${userInfo?.email}`, {
                    skill: name
                })
                    .then(res => {
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
            <p className="font-medium uppercase flex-1">skills</p>
            <div className='flex-[2]'>
                {
                    skills && skills.map((skill, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <p className="font-semibold text-secondary my-2">{skill?.name}</p>
                            <RiDeleteBin6Line onClick={() => deleteSkill(skill?.name)} className='mx-2 text-xl cursor-pointer' />
                        </div>
                    )
                }
                {userInfo?.role==='Candidate' &&  <label htmlFor="skill-modal" className="modal-button btn btn-sm text-white">+ Add skill</label>}
            </div>
            <div className='invisible lg:flex'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            {userInfo?.role==='Candidate' &&  <AddSkill user={userInfo} refetch={refetch} /> }
        </div>
    );
};

export default Skills;