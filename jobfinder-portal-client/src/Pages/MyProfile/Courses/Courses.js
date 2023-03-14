import axios from 'axios';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddCourses from './AddCourses';

const Courses = ({ userInfo , refetch}) => {
    const courses = userInfo?.courses;
    const deleteSwal = withReactContent(Swal);
    const deleteCourse = name => {
        deleteSwal.fire({
            icon: 'error',
            title: 'Do you sure want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.isConfirmed) {
                axios.put(`https://arcane-thicket-72200.herokuapp.com/users/courses/${userInfo?.email}`, {
                    course: name
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
            <p className="font-medium uppercase flex-1">Trainings / Courses</p>
            <div className='flex-[2]'>
                {
                    courses && courses.map((course,index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{course?.name}</p>
                                <p>{course?.institute}</p>
                                <small className='block'>{course?.duration}</small>
                            </div>
                            {userInfo?.role==='Candidate' && <RiDeleteBin6Line onClick={()=>deleteCourse(course?.name)} className='mx-2 text-xl cursor-pointer' />}
                        </div>
                    )
                }
               {userInfo?.role==='Candidate' &&  <label htmlFor="course-modal" className="modal-button btn btn-sm text-white">+ Add Courses/Trainings</label>}
            </div>
            <div className='hidden lg:flex invisible'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddCourses user={userInfo} refetch={refetch} />
        </div>
    );
};

export default Courses;