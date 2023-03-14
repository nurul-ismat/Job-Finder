import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate, } from 'react-router-dom';
import signup from '../../assets/images/signup.png'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [role, setRole] = useState('')


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data?.email, data?.password)
        await updateProfile({ displayName: data?.name });
        setRole(data.role)
    };
    useEffect(() => {
        if (user) {
            axios.post('https://arcane-thicket-72200.herokuapp.com/users', {
                email: user?.user.email,
                role: role,
                name: user?.user.displayName
            })
        }
    }, [role])
    if (updating || loading) {
        return <Loading />
    }

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <section className='bg-blue-100'>
            <div className="flex flex-col-reverse xl:flex-row items-center justify-center my-10 p-0 md:p-10 w-full md:w-3/4 mx-auto bg-base-100 shadow-2xl rounded-lg">
                <div className='flex items-center flex-col'>
                    <h3 className='text-2xl font-bold mt-10'><span>Job</span><span className='text-primary'>Finder</span></h3>
                    <img src={signup} alt="Album" />
                </div>
                <div className="w-full">
                    <div className='p-5 text-center'>
                        <h2 className="text-2xl my-3">Let's Get Started</h2>
                        <p>Sign Up and get access to all the features of <span className='font-semibold'>Job</span><span className='text-primary font-semibold'>Finder</span></p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-10'>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Username</span>
                            <input type="text" name='name' {...register("name", { required: true })} className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Your Name' />
                            {errors.name?.type === 'required' && <small className='block text-red-600'>Name is required</small>}
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Email</span>
                            <input type="email" name='email'  {...register("email", { required: true })} className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Your Email' />
                            {errors.email?.type === 'required' && <small className='block text-red-600'>Email is required</small>}
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Register as a</span>
                            <select className='outline-none border-b-2 border-primary w-full lg:w-4/5 bg-white' name="role" {...register("role", { required: true })}>
                                <option defaultValue="Candidate">Candidate</option>
                                <option value="Requiter">Requiter</option>
                            </select>
                            {errors.role?.type === 'required' && <small className='block text-red-600'>Role is required</small>}
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Password</span>
                            <input type="password" name='password' {...register("password", { required: true })} className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Password' autoComplete='disabled' />
                            {errors.password?.type === 'required' && <small className='block text-red-600'>Password is required</small>}
                        </label>
                        <label className="my-2 flex items-center">
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className='my-2 checkbox checkbox-primary checkbox-xs' />
                            <small className='ml-2 block text-red-600'>I agree to the Terms and conditions</small>
                        </label>
                        {error && <small className='text-red-600 block'>{error?.message?.slice(10)}</small>}
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Already have an account? <Link to='/login' className='text-primary'>Login</Link></span>
                        </label>
                        <input disabled={!agree} type="submit" value="Sign Up" className='btn btn-primary mt-2  mx-auto hover:-translate-y-2 duration-200' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Signup;