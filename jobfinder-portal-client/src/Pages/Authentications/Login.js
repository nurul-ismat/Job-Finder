import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.png'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signInWithEmailAndPassword(data?.email, data?.password)
    };
    if(loading){
        return <Loading/>
    }
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <section className='bg-blue-100'>
            <div className="flex flex-col-reverse xl:flex-row items-center justify-center my-10 p-0 md:p-10 w-full md:w-3/4 mx-auto bg-base-100 shadow-2xl rounded-lg">
                <div className='flex items-center flex-col'>
                    <h3 className='text-2xl font-bold mt-10'><span>Job</span><span className='text-accent'>Finder</span></h3>
                    <img src={login} alt="Album" />
                </div>
                <div className="w-full">
                    <div className='p-5 text-center'>
                        <h2 className="text-2xl my-3">Welcome back !</h2>
                        <p>Sign in to continue  <span className='font-semibold'>Job</span><span className='text-accent font-semibold'>Finder</span></p>
                    </div>
                    <form className='flex flex-col px-10' onSubmit={handleSubmit(onSubmit)}>
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-600 block text-sm font-medium my-2">Email</span>
                            <input type="email" name='email' {...register("email", { required: true })} className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Your Email' />
                            {errors.email?.type === 'required' && <small className='block text-red-600'>Email is required</small>}
                        </label>
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-600 block text-sm font-medium my-2">Password</span>
                            <input type="password" name='password' {...register("password", { required: true })} className='outline-none border-b-2 border-primary p-2 w-full lg:w-4/5' placeholder='Password' autoComplete='disabled'/>
                            {errors.password?.type === 'required' && <small className='block text-red-600'>Password is required</small>}
                        </label>
                        <label className="block my-2">
                            <Link to='/reset-password' className='text-primary'><small>Forgot password?</small></Link>
                        </label>
                        {error && <small className='text-red-600 block'>{error?.message?.slice(10)}</small>}
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Don't have an account? <Link to='/signup' className='text-primary'>Signup</Link></span>
                        </label>
                        <input type="submit" value="Sign In" className='btn btn-primary mt-2 mx-auto hover:-translate-y-2 duration-200' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;