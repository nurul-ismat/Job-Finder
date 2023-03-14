import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddImportantLinks = ({ user, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        axios.patch(`https://arcane-thicket-72200.herokuapp.com/users/links/${user?.email}`, {
            link: data
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
            <input type="checkbox" id="link-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl text-secondary text-center font-medium">Add Links</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Name</span>
                            <input type="text" className='input input-bordered w-full' {...register("name")} placeholder='E.g.: Github' required />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Link</span>
                            <input type="text" className='input input-bordered w-full' {...register("link")} placeholder="E.g.: https://www.github.com" required />
                        </label>
                        <button type='submit' className='btn mt-5 text-white'>Add Link</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="link-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AddImportantLinks;