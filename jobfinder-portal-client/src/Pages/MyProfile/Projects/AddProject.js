import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProject = ({ user, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        console.log(data);
        axios.patch(`https://arcane-thicket-72200.herokuapp.com/users/projects/${user?.email}`, {
            project: data
        })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    refetch()
                    reset()
                    toast.success('Successfully Added')
                }
                else {
                    toast('Something went wrong, Please try again')
                }
            })
    };
    return (
        <section>
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl text-secondary text-center font-medium mt-3">Add Project</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Project Name</span>
                            <input type="text" className='input input-bordered w-full' {...register("name")} placeholder='Project Name' />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Live Link</span>
                            <input type="text" className='input input-bordered w-full' {...register("link")} placeholder='Project URL' />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Description</span>
                            <textarea className="textarea textarea-bordered w-full"  {...register("description")} placeholder="Please use full stop(.) after every line "></textarea>
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Duration</span>
                            <input type="text" className='input input-bordered w-full' {...register("duration")} placeholder="From - To" />
                        </label>

                        <button type='submit' className='btn mt-5 text-white'>Add Project</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="project-modal" className="btn btn-sm btn-circle absolute right-2 top-7">✕</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProject;