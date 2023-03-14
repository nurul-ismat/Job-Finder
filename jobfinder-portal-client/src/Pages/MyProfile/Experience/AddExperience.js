import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddExperience = ({user, refetch}) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        axios.patch(`https://arcane-thicket-72200.herokuapp.com/users/experiences/${user?.email}`, {
            experience: data
        })
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount === 1) {
                    toast.success('Successfully Added')
                    refetch()
                    reset()
                }
                else {
                    toast('Something went wrong, Please try again')
                }
            })
    };
    return (
        <section>
            <input type="checkbox" id="experience-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl text-secondary text-center font-medium">Add Experience</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Designation</span>
                            <input type="text" className='input input-bordered w-full' {...register("name")} placeholder='Your Designation' required />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Company Name</span>
                            <input type="text" className='input input-bordered w-full' {...register("company")} placeholder="Company Name" required />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Duration</span>
                            <input type="text" className='input input-bordered w-full' {...register("duration")} placeholder="From - To" />
                        </label>
                        <button type='submit' className='btn mt-5 text-white'>Add Experience</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="experience-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddExperience;