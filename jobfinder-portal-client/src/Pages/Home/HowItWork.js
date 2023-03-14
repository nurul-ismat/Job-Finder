import React, { useState } from 'react';
import register from '../../assets/images/register.png'
import find from '../../assets/images/find.png'
import resume from '../../assets/images/resume.jpg'
const HowItWork = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const handleOpen = e => {
        if (e === open) {
            setOpen(true)
            setOpen2(false)
            setOpen3(false)
        }
        else if (e === open2) {
            setOpen2(true)
            setOpen3(false)
        }
        else if (e === open3) {
            setOpen3(true)
        }
    }
    let handleImage = register
    if (open2) {
        handleImage = find
    }
    if (open3) {
        handleImage = resume
    }


    return (
        <section className='my-10 p-20 '>
            <h2 className='text-3xl'>How it work</h2>
            <p className='w-1/2'>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
            <div className='flex flex-col md:flex-row justify-evenly items-center'>
                <ul className="steps steps-vertical">
                    <li onClick={() => handleOpen(open)} className={`step ${open && 'step-primary'} step-primary`}>Register your account</li>
                    <li onClick={() => handleOpen(open2)} className={`step ${open2 && 'step-primary'}`}>Find your Job</li>
                    <li onClick={() => handleOpen(open3)} className={`step ${open3 && 'step-primary'}`}>Apply for Job</li>
                </ul>
                <img className='w-96 h-96' src={handleImage} alt="" />
            </div>

        </section>
    );
};

export default HowItWork;