import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PostJobs = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const onSubmit = data => {
        axios.post('https://arcane-thicket-72200.herokuapp.com/jobs', {
            job: data
        })
            .then(res => {
                if (res.data.acknowledged === true) {
                    toast.success('Successfully Posted Job')
                    reset()
                }
                else{
                    toast.error('Something went wrong, Please try again')
                }
            })
    }
    return (
        <section className='w-4/5 mx-auto py-10'>
            <h2 className="text-secondary text-xl lg:text-4xl text-center font-semibold">Post a new Job</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className='hidden' {...register("email")} defaultValue={user?.email} />
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Job Title</span>
                        <input type="text" className='input input-bordered w-full' {...register("title", { required: true })} placeholder='E.g.: Frontend Developer' />
                        {errors.title?.type === 'required' && <small className='block text-red-600'>Job title is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Company Name</span>
                        <input type="text" className='input input-bordered w-full' {...register("company")} placeholder='Company Name' />
                        {errors.company?.type === 'required' && <small className='block text-red-600'>Company Name is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Company Location</span>
                        <input type="text" className='input input-bordered w-full' {...register("location")} placeholder='Company Location' />
                        {errors.location?.type === 'required' && <small className='block text-red-600'>Company Location is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Company Website</span>
                        <input type="text" className='input input-bordered w-full' {...register("link")} placeholder='Company Website' />
                        {errors.link?.type === 'required' && <small className='block text-red-600'>Company Website is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Company Logo</span>
                        <input type="text" className='input input-bordered w-full' {...register("logo")} placeholder='Company Logo Link' />
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">About Company</span>
                        <textarea className="textarea textarea-bordered w-full"  {...register("about")} placeholder="Please use full stop(.) after every line "></textarea>
                        {errors.about?.type === 'required' && <small className='block text-red-600'>About is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Job Responsibility</span>
                        <textarea className="textarea textarea-bordered w-full"  {...register("description")} placeholder="Please use full stop(.) after every line "></textarea>
                        {errors.description?.type === 'required' && <small className='block text-red-600'>Jon Description is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Requirements</span>
                        <textarea className="textarea textarea-bordered w-full"  {...register("requirements")} placeholder="Please use full stop(.) after every line "></textarea>
                        {errors.requirements?.type === 'required' && <small className='block text-red-600'>Requirements is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Required Skills</span>
                        <input type="text" className='input input-bordered w-full' {...register("skills")} placeholder="E.g.: React, Node, Express..." />
                        {errors.skills?.type === 'required' && <small className='block text-red-600'>Skills is required</small>}
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium my-2">Job Location</span>
                        <input type="text" className='input input-bordered w-full' {...register("jobLocation")} placeholder="E.g.: Work From Home" />
                        {errors.jobLocation?.type === 'required' && <small className='block text-red-600'>Skills is required</small>}
                    </label>
                    <div className='md:grid grid-cols-3 gap-3 mt-3'>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Salary</span>
                            <input type="number" className='input input-bordered md:w-4/5' {...register("salary")} placeholder="Mention Per Month Salary in USD" />
                            {errors.salary?.type === 'required' && <small className='block text-red-600'>Salary is required</small>}
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Experience</span>
                            <input type="text" className='input input-bordered md:w-4/5' {...register("experience")} placeholder="Experience" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Job Type</span>
                            <input type="text" className='input input-bordered md:w-4/5' {...register("type")} placeholder="E.g.: Fulltime" />
                            {errors.type?.type === 'required' && <small className='block text-red-600'>Job type is required</small>}
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Vacancy</span>
                            <input type="number" className='input input-bordered md:w-4/5' {...register("vacancy")} placeholder="Vacancy" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Start Date</span>
                            <input type="date" className='input input-bordered md:w-4/5' {...register("date")} placeholder="E.g.:Starting Date" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Deadline</span>
                            <input type="date" className='input input-bordered md:w-4/5' {...register("deadline")} placeholder="Application Deadline" />
                            {errors.type?.type === 'deadline' && <small className='block text-red-600'>Application deadline is required</small>}
                        </label>
                    </div>
                    <button type='submit' className='btn mt-5 text-white'>Post Job</button>
                </form>
            </div>
        </section>
    );
};

export default PostJobs;