import axios from 'axios';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddProject from './AddProject';

const Projects = ({ userInfo , refetch}) => {
    const projects = userInfo?.projects;
    const deleteSwal = withReactContent(Swal);
    const deleteProject = name => {
        deleteSwal.fire({
            icon: 'error',
            title: 'Do you sure want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.isConfirmed) {
                axios.put(`https://arcane-thicket-72200.herokuapp.com/users/projects/${userInfo?.email}`, {
                    project: name
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
            <p className="font-medium uppercase flex-1">Projects</p>
            <div className='flex-[2]'>
                {
                    projects && projects.map((project, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{project?.name}</p>
                                <small className='block'>{project?.duration}</small>
                                <small className='text-primary'><a href={project?.link} rel="noreferrer" target="_blank">{project?.link}</a></small>
                                <ul className='list-disc px-5'>
                                    {
                                        project?.description?.split('. ').map(
                                            (d,index)=><li key={index}>{d && d}</li>
                                            )
                                    }
                                </ul>
                            </div>
                            {userInfo?.role==='Candidate' &&  <RiDeleteBin6Line onClick={()=>deleteProject(project?.name)} className='mx-2 text-4xl cursor-pointer' /> }
                        </div>
                    )
                }
                {userInfo?.role==='Candidate' && <label htmlFor="project-modal" className="modal-button btn btn-sm text-white">+ Add Project</label> } 
            </div>
            <div className='invisible lg:flex'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            <AddProject user={userInfo} refetch={refetch}/>
        </div>
    );
};

export default Projects;