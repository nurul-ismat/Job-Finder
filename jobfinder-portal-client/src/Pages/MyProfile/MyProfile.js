import React from 'react';
import useUser from '../../hooks/useUser';
import Loading from '../Shared/Loading/Loading';
import Courses from './Courses/Courses';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ImportantLinks from './ImportantLinks/ImportantLinks';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const MyProfile = () => {
    const [userInfo,isLoading,refetch] = useUser()
    if(isLoading){
        return <Loading/>
    }
    
    return (
        <section className='w-full md:w-4/5 mx-auto py-10'>
            <h4 className="text-3xl font-bold text-center text-secondary my-10">Resume</h4>
            <div className='my-10 p-3 md:p-20 border rounded-md'>
                <PersonalInfo userInfo={userInfo} refetch={refetch} />
                <div className="divider"></div>
                <Education userInfo={userInfo} refetch={refetch}/>
                <div className="divider"></div>
                <Experience userInfo={userInfo} refetch={refetch}/>
                <div className="divider"></div>
                <Skills userInfo={userInfo} refetch={refetch}/>
                <div className="divider"></div>
                <Courses userInfo={userInfo} refetch={refetch}/>
                <div className="divider"></div>
                <Projects userInfo={userInfo} refetch={refetch}/>
                <div className="divider"></div>
                <ImportantLinks userInfo={userInfo} refetch={refetch}/>
            </div>
        </section>
    );
};

export default MyProfile;