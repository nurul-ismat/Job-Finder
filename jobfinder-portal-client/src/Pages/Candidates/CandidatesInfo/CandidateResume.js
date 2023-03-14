import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CandidateContact from './CandidateContact';
import CandidateCourses from './CandidateCourses';
import CandidateEducation from './CandidateEducation';
import CandidateExperience from './CandidateExperience';
import CandidateLinks from './CandidateLinks';
import CandidateProjects from './CandidateProjects';
import CandidateSkill from './CandidateSkill';


const CandidateResume = () => {
    const { email } = useParams()
    const [user, setUser] = useState({})
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        fetch(`https://arcane-thicket-72200.herokuapp.com/users/${email}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(false)
            })
    }, [email])
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <section className='w-full md:w-4/5 mx-auto py-10'>
                <h4 className="text-3xl font-bold text-center text-secondary my-10">Resume</h4>
                <div className='my-10 p-3 md:p-20 border rounded-md'>
                    <CandidateContact user={user}/>
                    <div className="divider"></div>
                    <CandidateExperience user={user}/>
                    <div className="divider"></div>
                    <CandidateCourses user={user} />
                    <div className="divider"></div>
                    <CandidateEducation user={user}/>
                    <div className="divider"></div>
                    <CandidateProjects user={user}/>
                    <div className="divider"></div>
                    <CandidateSkill user={user}/>
                    <div className="divider"></div>
                    <CandidateLinks user={user}/>
                </div>
            </section>
        </div>
    );
};

export default CandidateResume;