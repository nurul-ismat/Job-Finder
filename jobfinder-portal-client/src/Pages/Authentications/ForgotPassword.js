import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import forgotpassword from '../../assets/images/forgotpassword.png'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
const ForgotPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const onSubmit = async data => {
        await sendPasswordResetEmail(data?.email)
        toast.success('Password reset mail sent. Please check your email');
    };
    if(sending){
        return <Loading/>
    }
    return (
        <section className='bg-blue-100'>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center my-10 p-0 md:p-10 w-full md:w-3/4 mx-auto bg-base-100 shadow-2xl rounded-lg">
                <div className='flex items-center flex-col'>
                    <h3 className='text-2xl font-bold mt-10'><span>Job</span><span className='text-accent'>Finder</span></h3>
                    <img src={forgotpassword} alt="Album" />
                </div>
                <div className="w-full">
                    <div className='p-5 text-center'>
                        <h2 className="text-2xl my-3">Forgot password ?</h2>
                        <p>Reset your password with <span className='font-semibold'>Job</span><span className='text-accent font-semibold'>Finder</span></p>
                    </div>
                    <div className='p-3 text-center bg-info w-3/5 mx-auto rounded-lg'>
                        <p>Enter your Email and instructions will be sent to you!</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-10'>
                        <label className="block mx-auto">
                            <span className="block text-sm font-medium my-2">Email</span>
                            <input type="email" name='email'  {...register("email", { required: true })} className='outline-none border-b-2 border-primary p-2 w-full' placeholder='Your Email' />
                            {errors.email?.type === 'required' && <small className='block text-red-600'>Email is required</small>}
                            {error && <small className='text-red-600 block'>{error.message.slice(10)}</small>}
                        </label>
                        <button className='text-primary px-6 py-3 mx-2 rounded-lg border-primary border-l border-t border-r-2 border-b-2 hover:bg-primary hover:text-white' style={{ boxShadow: '2px 2px  0px 0px' }}>Send mail</button>
                        <label className="block mx-auto">
                            <span className="block text-sm font-medium my-2">Remembered it? Go to <Link className='text-primary' to='/login'>Login</Link></span>
                        </label>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;